import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create mailto link
        const mailtoLink = `mailto:sourav.toshniwal45@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=Name: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0A%0AMessage:%0A${encodeURIComponent(formData.message)}`;

        // Redirect to default mail app
        window.location.href = mailtoLink;
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 md:px-12 lg:px-20 xl:px-28 mt-12">
            <div className="max-w-4xl w-full bg-gray-800 shadow-lg rounded-xl p-6 sm:p-8 xl:p-10 text-white">
                {/* Heading */}
                <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-[#facc15] text-center">
                    Get in Touch
                </h2>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                    <label className="text-sm font-semibold">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="p-3 rounded bg-gray-700 text-white w-full focus:outline-none focus:ring-2 focus:ring-[#facc15]"
                        required
                    />

                    <label className="text-sm font-semibold">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="p-3 rounded bg-gray-700 text-white w-full focus:outline-none focus:ring-2 focus:ring-[#facc15]"
                        required
                    />

                    <label className="text-sm font-semibold">Subject:</label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className="p-3 rounded bg-gray-700 text-white w-full focus:outline-none focus:ring-2 focus:ring-[#facc15]"
                        required
                    />

                    <label className="text-sm font-semibold">Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows="5"
                        className="p-3 rounded bg-gray-700 text-white w-full focus:outline-none focus:ring-2 focus:ring-[#facc15]"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-[#facc15] text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition"
                    >
                        Send Message
                    </button>
                </form>

                {/* Social Links */}
                <div className="mt-8 flex justify-center gap-6">
                    <a href="mailto:sourav.toshniwal45@gmail.com" className="text-gray-300 hover:text-white transition">
                        <FaEnvelope size={24} />
                    </a>
                    <a href="tel:+919225125192" className="text-gray-300 hover:text-white transition transform scale-x-[-1]">
                        <FaPhone size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/sourav-toshniwal-b21513223/" target="_blank" className="text-gray-300 hover:text-white transition">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com/Sourav459000" target="_blank" className="text-gray-300 hover:text-white transition">
                        <FaGithub size={24} />
                    </a>
                </div>
            </div>
        </div>
    );
}
