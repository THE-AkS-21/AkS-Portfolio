import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Section } from '../common/Section';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.currentTarget,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(() => {
                alert('Message Sent!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch(() => alert('Oops! Something went wrong. Please try again.'));
    };

    const inputStyles = "w-full bg-transparent border rounded px-4 py-3 transition focus:outline-none placeholder:text-gray-400";

    return (
        <Section id="contact" title="Get In Touch">
            <div className="max-w-3xl mx-auto w-full">
                <form className="space-y-6 card p-8" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--muted)' }}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            className={inputStyles}
                            style={{ borderColor: 'var(--border)', color: 'var(--text)', '--tw-ring-color': 'var(--primary)' } as React.CSSProperties}
                            placeholder="Your Name"
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--muted)' }}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            className={inputStyles}
                            style={{ borderColor: 'var(--border)', color: 'var(--text)', '--tw-ring-color': 'var(--primary)' } as React.CSSProperties}
                            placeholder="you@example.com"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--muted)' }}>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            value={formData.message}
                            className={inputStyles}
                            style={{ borderColor: 'var(--border)', color: 'var(--text)', '--tw-ring-color': 'var(--primary)' } as React.CSSProperties}
                            placeholder="Your Message..."
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>

                    <button type="submit" className="w-full btn btn-primary">Send Message</button>
                </form>
            </div>
        </Section>
    );
};