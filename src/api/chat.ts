// pages/api/chat.ts
import { HfInference } from '@huggingface/inference';
import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { message, history } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    const embedding = await hf.featureExtraction({
        model: 'sentence-transformers/all-MiniLM-L6-v2',
        inputs: message,
    });

    const { rows } = await sql`
    SELECT content
    FROM portfolio_embeddings
    ORDER BY embedding <-> ${JSON.stringify(embedding)}
    LIMIT 5;
  `;

    const context = rows.map(row => row.content).join('\n\n');
    const historyText = history.map((msg: { role: string; content: string }) => `${msg.role}: ${msg.content}`).join('\n');

    const prompt = `You are a helpful assistant for Ankit Kumar Singh's portfolio. Based on the following context and conversation history, answer the user's question. If the context doesn't provide the answer, say that you don't have enough information.\n\nConversation History:\n${historyText}\n\nContext:\n${context}\n\nUser: ${message}\nAssistant:`;

    try {
        const result = await hf.textGeneration({
            model: 'mistralai/Mistral-7B-Instruct-v0.2',
            inputs: prompt,
            parameters: {
                max_new_tokens: 250,
            },
        });

        res.status(200).json({ reply: result.generated_text });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to generate response' });
    }
}