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
      className="relative py-24 dark:bg-slate-950 bg-white border-t border-slate-200 dark:border-slate-800"
    >
      <div className="container mx-auto px-6 relative z-10 ">
        <div className="mb-16 animate-fade-in-down text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-slate-900 dark:bg-white mb-6 mx-auto" />
          <p className="dark:text-slate-400 text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className={`dark:bg-slate-900 bg-slate-50 rounded-lg p-6 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-lg dark:hover:shadow-slate-950/50 transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-200 dark:bg-slate-800 rounded-lg text-slate-900 dark:text-white flex-shrink-0 transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold dark:text-white text-slate-900 mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:adel.rjili@isimg.tn"
                    className="dark:text-slate-300 text-slate-700 hover:underline font-medium"
                  >
                    adel.rjili@isimg.tn
                  </a>
                </div>
              </div>
            </div>

            <div className={`dark:bg-slate-900 bg-slate-50 rounded-lg p-6 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-lg dark:hover:shadow-slate-950/50 transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-200 dark:bg-slate-800 rounded-lg text-slate-900 dark:text-white flex-shrink-0 transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold dark:text-white text-slate-900 mb-2">
                    Location
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600">
                    Gabès, Tunisia
                  </p>
                </div>
              </div>
            </div>

            <div className={`dark:bg-slate-900 bg-slate-50 rounded-lg p-6 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-lg dark:hover:shadow-slate-950/50 transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <h3 className="text-lg font-semibold dark:text-white text-slate-900 mb-4">
                Connect
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/adel-rjili-342191227/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 dark:bg-slate-800 bg-slate-200 dark:text-white text-slate-900 rounded-lg font-medium hover:dark:bg-slate-700 hover:bg-slate-300 hover:shadow-lg dark:hover:shadow-slate-800/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Useradel07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 dark:bg-slate-800 bg-slate-200 dark:text-white text-slate-900 rounded-lg font-medium hover:dark:bg-slate-700 hover:bg-slate-300 hover:shadow-lg dark:hover:shadow-slate-800/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`dark:bg-slate-900 bg-slate-50 rounded-lg p-8 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="p-3 bg-slate-200 dark:bg-slate-800 rounded-full mb-4">
                  <CheckCircle2 size={40} className="text-slate-900 dark:text-white" />
                </div>
                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">
                  Message Sent!
                </h3>
                <p className="dark:text-slate-400 text-slate-600 text-sm">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <label className="block dark:text-slate-300 text-slate-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 dark:bg-slate-800 bg-white rounded-lg border border-slate-300 dark:border-slate-700 dark:text-white text-slate-900 focus:border-slate-500 dark:focus:border-slate-600 focus:ring-1 focus:ring-slate-500/20 focus:outline-none transition-all duration-300 hover:border-slate-400"
                    placeholder="Your name"
                  />
                </div>

                <div className="mb-6">
                  <label className="block dark:text-slate-300 text-slate-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 dark:bg-slate-800 bg-white rounded-lg border border-slate-300 dark:border-slate-700 dark:text-white text-slate-900 focus:border-slate-500 dark:focus:border-slate-600 focus:ring-1 focus:ring-slate-500/20 focus:outline-none transition-all duration-300 hover:border-slate-400"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="mb-6">
                  <label className="block dark:text-slate-300 text-slate-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 dark:bg-slate-800 bg-white rounded-lg border border-slate-300 dark:border-slate-700 dark:text-white text-slate-900 focus:border-slate-500 dark:focus:border-slate-600 focus:ring-1 focus:ring-slate-500/20 focus:outline-none transition-all duration-300 resize-none hover:border-slate-400"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 hover:shadow-lg dark:hover:shadow-white/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
