'use client';
import { useState } from 'react';
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
import CustomAccordion, { AccordionItemData } from '@/components/ui/accordion-custom';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const offlineAccordionItems: AccordionItemData[] = [
    { title: '1. التخطيط (Planning)', content: `<p>القسم المتخصص في تخطيط وهيكلة الحدث وتقسيم أعضاء التنظيم ووضع اكثر من خطة لإدارة أي حدث.</p><h5 class="font-bold mt-2">أدوات مساعدة:</h5><ul class="list-disc list-inside"><li>خطة 5Ws</li><li>الخريطة الذهنية</li><li>تحليل SWOT</li></ul>` },
    { title: '2. القسم اللوجيستي (Logistics)', content: '<p>هو القسم المتخصص في امـــداد المعدات اللازمة للحدث من حيث: الصوت – الإضاءة – السماعات – الدروع والشهادات – المقاعد – الديكور.</p>' },
    { title: '3. الــتنســيـق (Co-ordination)', content: '<p>هو القسم المتخصص في التنسيق بين اللجان وإدارة الأنشطة وتنسيق الفاعليات وعمل حركة وصل بين اللجان ومتابعة سير العمل حتي انتهاء الحدث.</p>' },
    { title: '4. الــتســجيل (Registration)', content: 'هو القسم المسؤول عن تجميع بيانات الحضور وتسجيلها قبل دخول الحدث. ينقسم إلى تسجيل الحضور العادي وتسجيل كبار الزوار (VIP). يتطلب مهارات مثل التكيف والعمل تحت ضغط.' },
    { title: '5. المراسم واستقبال كبار الشخصيات', content: 'هو القسم المسؤول عن تنظيم المراسم الرسمية مع مراعاة التقاليد الاحترافية من حيث تحديد أماكن جلوسهم ثم استقبال الشخصيات المرموقة ومرافقتهم الى مكان الضيافة ثم مكان الحدث. يتضمن مهام مثل إعداد القوائم وتنظيم الصعود للمسرح والالتزام بإتيكيت التواصل.' },
    { title: '6. تنظيم موقع الحدث (Floor Team)', content: 'يشمل مهام الفريق قبل، أثناء، وبعد الحدث لضمان ترتيب القاعة، استقبال الحضور، الحفاظ على النظام، وتنظيم عملية الخروج.' },
    { title: '7. فريق الكواليس (Backstage Team)', content: 'الفريق المخصص لتحضير الترتيبات قبل واثناء الحدث مثل تجهيز الشهادات والدروع، مساعدة المتحدث، والتأكد من تجهيزات الصوت والضوء.' },
    { title: '8. فـريق الطوارئ والأزمــــــات (Emergency Team)', content: 'هو الفريق المسؤول عن حل المشكلات والأزمات الطارئة خلال الحدث مثل النزاعات والمشاكل وتقديم الإسعافات الأولية.' }
];

const onlineAccordionItems: AccordionItemData[] = [
    { title: 'معلومات عنا ودور المنظمين', content: 'فريق متخصص في تنظيم الفعاليات عبر الإنترنت. يشمل دوره الإشراف على التنفيذ، إدارة الحضور، والتواصل مع المشاركين لضمان سير الأنشطة بسلاسة. يتولى الفريق وضع الخطة، اختيار المنصة، التنسيق مع المدربين، وتقديم الدعم التقني.' },
    { title: 'مراحل تنظيم المحاضرات عبر الإنترنت', content: '<ul class="list-decimal list-inside space-y-2"><li><b>البداية الأساسية:</b> التسويق للمحاضرة.</li><li><b>المرحلة الأولى (الأعداد والتنفيذ):</b> التنسيق مع اللجان، إعداد المجموعة، والتواصل مع المدرب.</li><li><b>المرحلة الثانية (تنظيم المجموعة):</b> التواصل مع الجمهور، إرسال رسائل تحفيزية وتعليمات.</li><li><b>المرحلة الثالثة (تنظيم المحاضرة):</b> إجراء اختبار تقني، تسجيل الحضور، ومتابعة الأسئلة.</li></ul>' },
    { title: 'التنسيق بين اللجان', content: 'يتم التنسيق المستمر مع لجان الاتحاد المختلفة مثل التدريب والتطوير، الموارد البشرية، والميديا لضمان تكامل الأدوار ونجاح الفعالية الرقمية.' }
];

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

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                callback: function(value: string | number) {
                    if (Number(value) === 0) {
                        const label = this.getLabelForValue(Number(value));
                        // A bit of a hack to find which label it is, since we only have the value
                        if (chartData.labels[chartData.datasets[1].data.indexOf(0)] === 'Microsoft Teams') {
                            return 'غير محدود';
                        }
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

export default function OrganizationTypesSection() {
    const [activeTab, setActiveTab] = useState('offline');

    return (
        <section id="organization-types" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 text-center">أنواع التنظيم</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-8">
                ينقسم عمل لجنة التنظيم إلى مسارين رئيسيين لكل منهما طبيعته الخاصة ومتطلباته: التنظيم الميداني للفعاليات على أرض الواقع، والتنظيم الرقمي للفعاليات عبر الإنترنت. استكشف تفاصيل كل نوع وكيفية عمل فرقه المتخصصة.
            </p>
            <div className="flex justify-center mb-8">
                <div className="flex space-x-2 space-x-reverse rounded-lg p-1 bg-gray-200">
                    <button className={`tab-btn px-4 py-2 rounded-md font-semibold transition ${activeTab === 'offline' ? 'active' : ''}`} onClick={() => setActiveTab('offline')}>التنظيم الأوفلاين (الميداني)</button>
                    <button className={`tab-btn px-4 py-2 rounded-md font-semibold transition ${activeTab === 'online' ? 'active' : ''}`} onClick={() => setActiveTab('online')}>التنظيم الأونلاين (الرقمي)</button>
                </div>
            </div>

            <div id="offline" className={`tab-content ${activeTab === 'offline' ? '' : 'hidden'}`}>
                <h3 className="text-2xl font-bold mb-4 text-center">أقسام التنظيم الميداني</h3>
                <CustomAccordion items={offlineAccordionItems} />
            </div>

            <div id="online" className={`tab-content ${activeTab === 'online' ? '' : 'hidden'}`}>
                 <h3 className="text-2xl font-bold mb-4 text-center">فريق التنظيم الرقمي</h3>
                 <CustomAccordion items={onlineAccordionItems} />
                 <div className="mt-8">
                    <h4 className="text-xl font-bold mb-4 text-center">مقارنة بين أشهر برامج الاجتماعات (النسخ المجانية)</h4>
                    <div className="relative h-[50vh] max-h-96 w-full max-w-2xl mx-auto">
                        <Bar options={chartOptions} data={chartData} />
                    </div>
                 </div>
            </div>
        </section>
    );
}
