import React, { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import emailjs from '@emailjs/browser';

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

    return (
        <section id="contact" className="section bg-noise">
            <RevealOnScroll>
                <div className="container-wide max-w-2xl">
                    <h2 className="gradient-title text-3xl md:text-4xl mb-8">Get In Touch</h2>
                    <form className="space-y-6 card p-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-transparent border rounded px-4 py-3 text-gray-200 transition focus:outline-none focus:border-green-400/60"
                                placeholder="Name..."
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-transparent border rounded px-4 py-3 text-gray-200 transition focus:outline-none focus:border-green-400/60"
                                placeholder="example@gmail.com"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="relative">
              <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  className="w-full bg-transparent border rounded px-4 py-3 text-gray-200 transition focus:outline-none focus:border-green-400/60"
                  placeholder="Your Message..."
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
                        </div>

                        <button type="submit" className="w-full btn btn-primary">Send Message</button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};
