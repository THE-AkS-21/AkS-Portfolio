// scripts/embed.ts
import { sql } from '@vercel/postgres';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { portfolioData } from '../src/data/portfolioData';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

async function main() {
    const model = genAI.getGenerativeModel({ model: 'embedding-001' });

    // Create the table with pgvector extension
    await sql`CREATE EXTENSION IF NOT EXISTS vector`;
    await sql`
    CREATE TABLE IF NOT EXISTS portfolio_embeddings (
      id SERIAL PRIMARY KEY,
      content TEXT,
      embedding VECTOR(768)
    );
  `;

    // Process and embed portfolio data
    const contentToEmbed = [
        portfolioData.aboutHome,
        portfolioData.aboutPage,
        ...portfolioData.projects.map(p => `Project: ${p.title}. ${p.description}. Technologies: ${p.technologies.join(', ')}.`),
        ...portfolioData.skills.flatMap(s => s.technologies.map(t => `Skill: ${s.category} - ${t}`)),
        ...portfolioData.workExperience.map(w => `Work Experience: ${w.role} at ${w.company}. ${w.description}`),
        ...portfolioData.education.map(e => `Education: ${e.degree} from ${e.institution}.`),
    ];

    for (const content of contentToEmbed) {
        const { embedding } = await model.embedContent(content);
        await sql`
      INSERT INTO portfolio_embeddings (content, embedding)
      VALUES (${content}, ${JSON.stringify(embedding.values)});
    `;
    }

    console.log('Data embedded and stored in the database.');
}

main();