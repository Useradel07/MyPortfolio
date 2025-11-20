import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 dark:bg-slate-900 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-blue-500/5" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
          <p className="mt-6 dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="space-y-8">
              <div className="group dark:bg-slate-800/50 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border dark:border-violet-500/20 border-violet-200 hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:adel@example.com"
                      className="dark:text-violet-300 text-violet-600 hover:underline"
                    >
                      adel@example.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="group dark:bg-slate-800/50 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border dark:border-violet-500/20 border-violet-200 hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-2">
                      Location
                    </h3>
                    <p className="dark:text-gray-400 text-gray-600">
                      Gabès, Tunisia
                    </p>
                  </div>
                </div>
              </div>

              <div className="dark:bg-slate-800/50 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border dark:border-violet-500/20 border-violet-200">
                <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-4">
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/adel-rjili-342191227/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 dark:bg-slate-700 bg-gray-800 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="dark:bg-slate-800/50 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border dark:border-violet-500/20 border-violet-200 shadow-xl"
            >
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-4 shadow-lg shadow-green-500/50 animate-bounce">
                    <CheckCircle2 size={48} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="dark:text-gray-400 text-gray-600">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <label className="block dark:text-gray-300 text-gray-700 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 dark:bg-slate-900/50 bg-white rounded-lg border-2 dark:border-violet-500/30 border-violet-200 dark:text-white text-gray-900 focus:border-violet-500 focus:outline-none transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block dark:text-gray-300 text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 dark:bg-slate-900/50 bg-white rounded-lg border-2 dark:border-violet-500/30 border-violet-200 dark:text-white text-gray-900 focus:border-violet-500 focus:outline-none transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block dark:text-gray-300 text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 dark:bg-slate-900/50 bg-white rounded-lg border-2 dark:border-violet-500/30 border-violet-200 dark:text-white text-gray-900 focus:border-violet-500 focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-lg font-semibold shadow-lg shadow-violet-500/50 hover:shadow-xl hover:shadow-violet-500/70 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
