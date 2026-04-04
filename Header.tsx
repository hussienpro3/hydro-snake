import { Phone, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-right">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              د. أحمد عبد الكريم
            </h1>
            <p className="text-mint-600 font-semibold text-lg">
              اختصاص طب وجراحة الأسنان
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 text-sm">
            <div className="flex items-center gap-2 text-slate-700">
              <MapPin className="w-5 h-5 text-mint-600" />
              <span>الناصرية - فلكة السماوة</span>
            </div>
            <a
              href="tel:07870080072"
              className="flex items-center gap-2 text-slate-700 hover:text-mint-600 transition-colors"
            >
              <Phone className="w-5 h-5 text-mint-600" />
              <span dir="ltr">07870080072</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
