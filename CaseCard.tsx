import { ArrowLeft } from 'lucide-react';

interface CaseCardProps {
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  icon: React.ReactNode;
}

export default function CaseCard({ title, description, beforeImage, afterImage, icon }: CaseCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-mint-100 p-3 rounded-xl text-mint-600">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative overflow-hidden rounded-xl">
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
              قبل
            </div>
            <img
              src={beforeImage}
              alt="قبل العلاج"
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div className="relative overflow-hidden rounded-xl">
            <div className="absolute top-2 right-2 bg-mint-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
              بعد
            </div>
            <img
              src={afterImage}
              alt="بعد العلاج"
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <div className="bg-mint-50 px-6 py-4 flex items-center justify-between group-hover:bg-mint-100 transition-colors">
        <span className="text-mint-700 font-semibold">شاهد التفاصيل</span>
        <ArrowLeft className="w-5 h-5 text-mint-600 group-hover:translate-x-[-4px] transition-transform" />
      </div>
    </div>
  );
}
