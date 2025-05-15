
import React from "react";
import {
    FaHeadset,
    FaEnvelope,
    FaPhoneAlt,
    FaQuestionCircle,
} from "react-icons/fa";

const SupportPage = () => {
    return (
        <div className="bg-gradient-to-b from-indigo-900 via-purple-700 to-pink-500 min-h-screen text-gray-200">
            {/* Hero Section */}
            <div className="relative text-center py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-6xl font-extrabold tracking-tight mb-6 text-white drop-shadow-lg">
                        <span className="text-yellow-400">24/7</span> Support At
                        Your Fingertips
                    </h1>
                    <p className="text-lg sm:text-xl font-light text-gray-300 mb-8">
                        Our dedicated support team is ready to assist you,
                        anytime and anywhere. Let us help you thrive!
                    </p>
                    <button className="px-10 py-4 bg-yellow-500 text-black font-bold text-lg rounded-full shadow-lg hover:bg-yellow-400 hover:scale-105 transform transition-transform duration-300">
                        Get in Touch
                    </button>
                </div>
            </div>

            {/* Contact Methods */}
            <section className="py-16 px-6 bg-gray-100 text-gray-900 rounded-tl-3xl rounded-tr-3xl">
                <h2 className="text-4xl font-bold text-center mb-12 text-pink-600">
                    How Can We Help You?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <FaHeadset className="text-indigo-600" />,
                            title: "Live Chat",
                            description: "Chat with us instantly for real-time help.",
                        },
                        {
                            icon: <FaPhoneAlt className="text-green-500" />,
                            title: "Phone Support",
                            description: "Call our team anytime for assistance.",
                        },
                        {
                            icon: <FaEnvelope className="text-yellow-500" />,
                            title: "Email Support",
                            description:
                                "Drop us an email for a detailed response.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-xl rounded-xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300"
                        >
                            <div className="text-6xl mb-6">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-6 bg-gradient-to-br from-purple-900 to-indigo-700 text-gray-200">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-extrabold mb-10">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        {[
                            {
                                question: "How can I apply for scholarships?",
                                answer:
                                    "Visit our portal and follow the easy application process step-by-step.",
                            },
                            {
                                question: "Is the application process free?",
                                answer:
                                    "Yes, applying for scholarships through SAKSHAM is completely free.",
                            },
                            {
                                question: "How can I track my application?",
                                answer:
                                    "Track your application status on your personal dashboard.",
                            },
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white text-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            >
                                <FaQuestionCircle className="text-4xl text-indigo-600 mb-4" />
                                <h3 className="text-2xl font-bold mb-2">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-800 text-white rounded-bl-3xl rounded-br-3xl">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Still Have Questions?
                    </h2>
                    <p className="text-lg mb-8">
                        Connect with our support team to get personalized
                        solutions.
                    </p>
                    <button className="px-10 py-4 bg-pink-500 rounded-full text-lg font-bold shadow-lg hover:scale-105 transform transition-transform duration-300">
                        Contact Us Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default SupportPage;

