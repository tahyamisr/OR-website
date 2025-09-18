'use client';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartData = {
    labels: ['Google Meet', 'Zoom', 'Microsoft Teams'],
    datasets: [{
        label: 'عدد المشاركين',
        data: [100, 100, 100],
        backgroundColor: 'rgba(47, 79, 79, 0.7)',
        borderColor: 'rgba(47, 79, 79, 1)',
        borderWidth: 1
    }, {
        label: 'الوقت المسموح (دقائق)',
        data: [60, 40, 0], 
        backgroundColor: 'rgba(192, 160, 98, 0.7)',
        borderColor: 'rgba(192, 160, 98, 1)',
        borderWidth: 1
    }]
};

const chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                callback: function(value: string | number) {
                    if (Number(value) === 0 && this.getLabelForValue(Number(value)) === 'Microsoft Teams') {
                        return 'غير محدود';
                    }
                    return value;
                }
            }
        }
    },
    plugins: {
        tooltip: {
            callbacks: {
                label: function(context: any) {
                    let label = context.dataset.label || '';
                    if (label) {
                        label += ': ';
                    }
                    if (context.datasetIndex === 1 && context.raw === 0) {
                         label += 'غير محدود';
                    } else {
                        label += context.formattedValue;
                    }
                    return label;
                }
            }
        },
        title: {
          display: true,
          text: 'ملاحظة: "غير محدود" لـ Teams يشير إلى عدم وجود حد زمني'
        },
        legend: {
          position: 'top' as const,
        },
    }
};

export default function PlatformComparisonSection() {
    const platformDetails = [
        { name: 'Google Meet', uses: 'مناسب لعقد المحاضرات والاجتماعات عبر الإنترنت خاصة في التعليم والمؤسسات.', features: ['تشغيل مباشر من المتصفح بدون تحميل', 'تكامل مع Gmail وGoogle Calendar', 'يدعم مشاركة الشاشة، عرض الشرائح، والرسائل النصية'], cons: ['التسجيل متاح فقط لحسابات Google Workspace المدفوعة', 'لا يحتوي على غرف جانبية (Breakout Rooms)'], participants: 'حتى 100 مشارك في النسخة المجانية.', time: 'حتى 60 دقيقة للاجتماع المجاني.'},
        { name: 'Zoom', uses: 'مثالي للمحاضرات الأونلاين، الدورات التدريبية، والاجتماعات الكبيرة.', features: ['جودة صوت وفيديو عالية', 'يدعم الغرف الجانبية (Breakout Rooms)', 'إمكانية تسجيل الاجتماع', 'السبورة التفاعلية، والاستطلاعات'], cons: ['محدودية الوقت في النسخة المجانية', 'يتطلب تحميل البرنامج على الجهاز'], participants: 'حتى 100 مشارك مجانًا (يمكن زيادته إلى 1000 باشتراك).', time: '40 دقيقة فقط للاجتماعات الجماعية في النسخة المجانية.' },
        { name: 'Microsoft Teams', uses: 'مثالي للمؤسسات التعليمية والشركات لتنظيم الفرق والملفات والاجتماعات.', features: ['متكامل مع Microsoft Office 365', 'تنظيم الفرق والقنوات', 'إدارة ومتابعة المهام', 'تسجيل الاجتماعات وتخزينها على OneDrive'], cons: ['واجهته معقدة نسبيًا للمبتدئين', 'يحتاج حساب Microsoft'], participants: 'حتى 100 مشارك في الاجتماع المجاني، ويمكن أن يصل إلى 300 وأكثر في الخطط التعليمية أو المؤسساتية.', time: 'غير محدود في النسخة المجانية حاليًا (للاجتماعات الفردية والجماعية).'},
        { name: 'Telegram', uses: 'يُستخدم للمراسلة والمتابعة وليس لعقد الاجتماعات التعليمية التقليدية.', features: ['يدعم القنوات والمجموعات العملاقة', 'إرسال ملفات وميديا بدون قيود حجم كبيرة', 'وجود بوتات ذكية للتنظيم والرد التلقائي', 'يدعم مكالمات صوت وفيديو'], cons: ['لا يُستخدم لعقد محاضرات منظمة أو فصول دراسية', 'محدود في دعم المحاضرات متعددة المشاركين بالفيديو'], participants: 'حتى 200,000 عضو في المجموعات.', time: 'غير محدد في المكالمات الفردية، ولكن لا يوجد نظام "اجتماعات" رسمي.' }
    ];

    return (
        <section id="platforms" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">مقارنة بين أشهر المنصات الرقمية (النسخ المجانية)</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
                {platformDetails.map(platform => (
                <div key={platform.name} className="card-custom p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">{platform.name === 'Google Meet' ? '🔵 Google Meet' : platform.name === 'Zoom' ? '🟦 Zoom' : platform.name === 'Microsoft Teams' ? '🏢 Microsoft Teams' : '✈️ Telegram'}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{platform.uses}</p>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-semibold text-primary mb-1">المميزات:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                {platform.features.map((feature: string) => <li key={feature}>✔️ {feature}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-primary mb-1">العيوب:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                {platform.cons.map((con: string) => <li key={con}>❌ {con}</li>)}
                            </ul>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm pt-2 border-t mt-4">
                            <p><b className="font-semibold">👥 المشاركين:</b> {platform.participants}</p>
                            <p><b className="font-semibold">⏰ الوقت:</b> {platform.time}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <div className="card-custom p-4 rounded-lg">
                <h3 className="text-lg md:text-xl font-bold mb-4 text-center">📊 مقارنة سريعة</h3>
                <div className="relative h-[40vh] md:h-[50vh] max-h-96 w-full max-w-2xl mx-auto">
                    <Bar options={chartOptions} data={chartData} />
                </div>
            </div>
        </section>
    );
}
