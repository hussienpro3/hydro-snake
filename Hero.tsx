import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-mint-50 via-white to-mint-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-mint-100 text-mint-700 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">عيادة متخصصة في طب وجراحة الأسنان</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            ابتسامتك الجميلة
            <span className="text-mint-600"> تبدأ من هنا</span>
          </h2>

          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            نقدم أحدث التقنيات في علاج وتجميل الأسنان بأيدي خبيرة ورعاية شاملة
          </p>

          <a
            href="#contact"
            className="inline-block bg-mint-600 hover:bg-mint-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            احجز موعدك الآن
          </a>
        </div>
      </div>
    </section>
  );
}
