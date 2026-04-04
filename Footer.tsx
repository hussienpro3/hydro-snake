import { Phone, MapPin, Instagram, Calendar } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-mint-400">
              د. أحمد عبد الكريم
            </h3>
            <p className="text-gray-300 leading-relaxed">
              اختصاص طب وجراحة الأسنان
            </p>
            <p className="text-gray-300 mt-2 leading-relaxed">
              نقدم أفضل الخدمات الطبية والتجميلية للأسنان بأحدث التقنيات
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-mint-400">معلومات التواصل</h4>
            <div className="space-y-3">
              <a
                href="tel:07870080072"
                className="flex items-center gap-3 text-gray-300 hover:text-mint-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span dir="ltr">07870080072</span>
              </a>

              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>الناصرية - فلكة السماوة</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <Calendar className="w-5 h-5" />
                <span>السبت - الخميس: 9 صباحاً - 9 مساءً</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-mint-400">تابعنا على السوشال ميديا</h4>
            <a
              href="https://www.instagram.com/dr.ahmedclinic1?igsh=aWJ5NzBnaTIwNHhy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Instagram className="w-6 h-6" />
              <div className="text-right">
                <div className="font-bold">تابعنا على الانستغرام</div>
                <div className="text-sm opacity-90">لمشاهدة أحدث حالاتنا ونتائجنا</div>
              </div>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 عيادة الدكتور أحمد عبد الكريم - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
