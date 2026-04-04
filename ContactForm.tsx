import { useState } from 'react';
import { Send, User, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = '9647870080072';
    const text = `مرحباً، أنا ${name}\n\n${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              تواصل مع الطبيب الآن
            </h2>
            <p className="text-xl text-slate-600">
              راسلنا مباشرة عبر واتساب وسنرد عليك في أقرب وقت
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-mint-50 to-white p-8 rounded-2xl shadow-xl">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="flex items-center gap-2 text-slate-700 font-semibold mb-2">
                  <User className="w-5 h-5 text-mint-600" />
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="أدخل اسمك الكامل"
                  className="w-full px-4 py-3 border-2 border-mint-200 rounded-xl focus:outline-none focus:border-mint-600 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="flex items-center gap-2 text-slate-700 font-semibold mb-2">
                  <MessageSquare className="w-5 h-5 text-mint-600" />
                  اكتب رسالتك للطبيب
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  placeholder="اكتب استفسارك أو وصف الحالة هنا..."
                  className="w-full px-4 py-3 border-2 border-mint-200 rounded-xl focus:outline-none focus:border-mint-600 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-mint-600 hover:bg-mint-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                إرسال الموعد عبر واتساب
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
