import CaseCard from './CaseCard';
import { Smile, Wrench, Sparkles, Award } from 'lucide-react';

export default function CasesShowcase() {
  const cases = [
    {
      title: 'الحشوات التجميلية الأمامية',
      description: 'بناء وتجميل الأسنان الأمامية المكسورة والمتهالكة باستخدام أحدث تقنيات الحشوات التجميلية',
      beforeImage: 'https://images.pexels.com/photos/6528864/pexels-photo-6528864.jpeg?auto=compress&cs=tinysrgb&w=800',
      afterImage: 'https://images.pexels.com/photos/6528861/pexels-photo-6528861.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <Smile className="w-6 h-6" />
    },
    {
      title: 'علاج الجذور والحشوات الخلفية',
      description: 'تنظيف التسوس العميق وبناء السن وحمايته من خلال علاج الجذور المتقدم والحشوات الدائمة',
      beforeImage: 'https://images.pexels.com/photos/6528840/pexels-photo-6528840.jpeg?auto=compress&cs=tinysrgb&w=800',
      afterImage: 'https://images.pexels.com/photos/6528858/pexels-photo-6528858.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: 'تقويم الأسنان',
      description: 'تعديل اعوجاج الأسنان واصطفافها بشكل مثالي للحصول على ابتسامة متناسقة وصحية',
      beforeImage: 'https://images.pexels.com/photos/6528843/pexels-photo-6528843.jpeg?auto=compress&cs=tinysrgb&w=800',
      afterImage: 'https://images.pexels.com/photos/6529005/pexels-photo-6529005.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: 'ابتسامة هوليود والتركيبات',
      description: 'تركيب الفينير، الجسور، وتبييض الأسنان الاحترافي للحصول على ابتسامة ساحرة ومشرقة',
      beforeImage: 'https://images.pexels.com/photos/6502307/pexels-photo-6502307.jpeg?auto=compress&cs=tinysrgb&w=800',
      afterImage: 'https://images.pexels.com/photos/6528837/pexels-photo-6528837.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            معرض الحالات التي عالجناها
          </h2>
          <p className="text-xl text-slate-600">
            شاهد التحولات الرائعة لمرضانا وابتساماتهم الجديدة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => (
            <CaseCard key={index} {...caseItem} />
          ))}
        </div>
      </div>
    </section>
  );
}
