"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderimi simüle ediliyor
    setSubmitStatus({
      submitted: true,
      success: true,
      message: "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağım."
    });
    
    // Gerçek projede burada bir API çağrısı yapılabilir
    // Form verilerini temizle
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    
    // 5 saniye sonra mesajı temizle
    setTimeout(() => {
      setSubmitStatus({
        submitted: false,
        success: false,
        message: ""
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              İletişim
            </span>
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Projeleriniz veya işbirliği fırsatları için benimle iletişime geçebilirsiniz. 
            En kısa sürede size dönüş yapacağım.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* İletişim Bilgileri */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md h-full">
              <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white pb-3 border-b border-gray-200 dark:border-gray-700">
                İletişim Bilgileri
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-full">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">cemtaskin36@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Konum</h3>
                    <p className="text-gray-600 dark:text-gray-300">Kocaeli, Türkiye</p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-medium mt-10 mb-4 text-gray-900 dark:text-white">
                Sosyal Medya
              </h3>
              <div className="flex gap-3">
                {[
                  { href: "https://github.com/mctNN", icon: <FaGithub />, label: "GitHub", class: "hover:bg-gray-800 hover:text-white" },
                  { href: "https://www.linkedin.com/in/mustafacemm/", icon: <FaLinkedin />, label: "LinkedIn", class: "hover:bg-blue-600 hover:text-white" },
                  { href: "https://x.com/mct_NN", icon: <FaTwitter />, label: "Twitter", class: "hover:bg-sky-500 hover:text-white" },
                  { href: "https://www.instagram.com/mustafacemtaskinn/", icon: <FaInstagram />, label: "Instagram", class: "hover:bg-pink-600 hover:text-white" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors ${social.class}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* İletişim Formu */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white pb-3 border-b border-gray-200 dark:border-gray-700">
                Mesaj Gönder
              </h2>

              {submitStatus.submitted && (
                <div className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'}`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      İsim
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Konu
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors inline-flex items-center gap-2"
                >
                  Mesaj Gönder
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 