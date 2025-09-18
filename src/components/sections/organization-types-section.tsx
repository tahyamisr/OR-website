'use client';
import React, { useState } from 'react';
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
    { title: '1. التخطيط (Planning)', content: `<p>القسم المتخصص في تخطيط وهيكلة الحدث وتقسيم أعضاء التنظيم ووضع اكثر من خطة لإدارة أي حدث.</p><h5 class="font-bold mt-4 mb-2 text-primary">أدوات مساعدة:</h5><ul class="list-disc list-inside space-y-2"><li>خطة 5Ws (What/Why/Where/Who/When) لتحديد أساسيات الخطة.</li><li>الخريطة الذهنية: أداة لتنظيم الأفكار بطريقة مرنة وسهلة.</li><li>تحليل SWOT: لتقييم نقاط القوة، والضعف، والفرص، والتهديدات.</li></ul>` },
    { title: '2. القسم اللوجيستي (Logistics)', content: '<p>هو القسم المتخصص في امـــداد المعدات اللازمة للحدث من حيث: الصوت – الإضاءة – السماعات – الدروع والشهادات – المقاعد – الديكور.</p>' },
    { title: '3. الــتنســيـق (Co-ordination)', content: '<p>هو القسم المتخصص في التنسيق بين اللجان وإدارة الأنشطة وتنسيق الفاعليات وعمل حركة وصل بين اللجان ومتابعة سير العمل حتي انتهاء الحدث.</p>' },
    { title: '4. الــتســجيل (Registration)', content: `<p>هو القسم المسؤول عن تجميع بيانات الحضور وتسجيلها قبل دخول الحدث.</p>
    <h5 class="font-bold mt-4 mb-2 text-primary">تسجيل الحضور العادي (Regular Registration):</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>تخصيص بوابات خاصة بالزوار بعد دراسة المداخل والمخارج.</li>
      <li>يتم التسجيل بطريقتين: إلكتروني أو يدوي.</li>
      <li>تنظيم صفوف الدخول والخروج لمنع التكدس.</li>
    </ul>
    <h5 class="font-bold mt-4 mb-2 text-primary">تسجيل كبار الزوار (VIP Registration):</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>تخصيص فريق تسجيل على أعلى مستوى.</li>
      <li>تحية الضيوف المهمين والترحيب بهم وتوجيههم ومرافقتهم إلى مقاعدهم.</li>
      <li>إعداد قائمة بالشخصيات المهمة وتأكيد حضورهم.</li>
      <li>توفير مداخل خاصة بهم.</li>
    </ul>
    <p class="mt-4"><b class="text-primary">المهارات المطلوبة:</b> القدرة على رؤية الصورة الكبيرة، التكيف مع المواقف، العمل تحت ضغط، مهارات حل المشكلات، إدارة التوتر.</p>` },
    { title: '5. المراسم واستقبال كبار الشخصيات', content: `<p>هو القسم المسؤول عن تنظيم المراسم الرسمية مع مراعاة التقاليد الاحترافية من حيث تحديد أماكن جلوسهم ثم استقبال الشخصيات المرموقة ومرافقتهم الى مكان الضيافة ثم مكان الحدث.</p>
    <div class="grid md:grid-cols-2 gap-x-8 gap-y-4 mt-4">
      <div>
        <h5 class="font-bold mb-2 text-primary">المهام:</h5>
        <ul class="list-disc list-inside space-y-2">
          <li>عمل قائمة لكبار الزوار تحتوي على الاسم والمنصب ورقم الكرسي.</li>
          <li>تنظيم صعود ونزول الشخصية المهمة من وإلى المسرح.</li>
        </ul>
      </div>
      <div>
        <h5 class="font-bold mb-2 text-primary">كيفية الاستقبال:</h5>
        <ul class="list-disc list-inside space-y-2">
          <li>ابتسامة لطيفة وسؤال الضيف عن اسمه بكل احترام.</li>
          <li>مرافقته إلى مكانه مع الحفاظ على مسافة مناسبة.</li>
          <li>تسهيل أي إجراءات أو تحركات له.</li>
        </ul>
      </div>
      <div>
        <h5 class="font-bold mb-2 text-primary">أثناء الحدث:</h5>
        <ul class="list-disc list-inside space-y-2">
          <li>الوقوف بهدوء وتركيز.</li>
          <li>عدم الانشغال بالهاتف أو أي شيء آخر.</li>
          <li>تنفيذ طلبات كبار الزوار.</li>
        </ul>
      </div>
      <div>
        <h5 class="font-bold mb-2 text-primary">نقاط مهمة في التواصل (الإتيكيت):</h5>
        <ul class="list-disc list-inside space-y-2">
          <li>لا تقاطع حديث من يتكلم.</li>
          <li>احتفظ بابتسامة دائمة ووجه بشوش.</li>
          <li>حافظ على مسافة الأمان (متر واحد).</li>
          <li>لا تخرج عن الدائرة الرسمية في المناداة.</li>
          <li>تجنب الحوارات الطويلة والنقد وكن مستمعًا جيدًا.</li>
          <li>الدقة في المواعيد والطلبات.</li>
        </ul>
      </div>
    </div>` },
    { title: '6. تنظيم موقع الحدث (Floor Team)', content: `<h5 class="font-bold mb-2 text-primary">قبل الايفنت (التنسيق قبل الحدث):</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>التأكد من القاعة والموقع.</li>
      <li>ترتيب المكان والمقاعد ووضع الملصقات الدعائية.</li>
      <li>توفير الإجراءات الاحترازية.</li>
      <li>التأكد من كشف أسماء الحضور وعددهم.</li>
      <li>تجهيز وسائل العرض والاستعداد التام للحفل.</li>
      <li>التأكد من وصول المشروبات والمأكولات.</li>
    </ul>
    <h5 class="font-bold mt-4 mb-2 text-primary">أثناء الايفنت (التنسيق أثناء الحدث):</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>استقبال وتوصيل الحضور لمقاعدهم وتنظيم عملية الدخول.</li>
      <li>متابعة الحضور لتلبية احتياجاتهم.</li>
      <li>الحفاظ على نظافة المكان والهدوء.</li>
      <li>توزيع المشروبات والهدايا إن وجدت.</li>
    </ul>
    <h5 class="font-bold mt-4 mb-2 text-primary">بعد الايفنت (التنسيق بعد الحدث):</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>تنظيم عملية الخروج.</li>
      <li>الحرص على عدم وجود أي تكدس أثناء الخروج.</li>
      <li>الحفاظ على نظافة المكان وسلامته.</li>
    </ul>` },
    { title: '7. فريق الكواليس (Backstage Team)', content: `<p>الفريق المخصص لتحضير الترتيبات قبل واثناء الحدث مثل ( تجهيز الشهادات والدروع – مساعدة المتحدث – العروض التقديمية – التأكد من تجهيزات الصوت والضوء ).</p>
    <h5 class="font-bold mt-4 mb-2 text-primary">في الأماكن المفتوحة (Open Area):</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>ضرورة توفير الهدوء التام لمنع تشتيت انتباه المتحدث والضيوف.</li>
      <li>منع أي ضيف من التواجد في المنطقة، وتخصيصها للفريق المسؤول فقط.</li>
    </ul>
    <h5 class="font-bold mt-4 mb-2 text-primary">في الأماكن المغلقة (Close Area):</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>سهولة السيطرة على المكان ويوفر خصوصية أعلى.</li>
      <li>إمكانية استخدامه في الاجتماعات التنظيمية الطارئة.</li>
    </ul>
     <h5 class="font-bold mt-4 mb-2 text-primary">اعتبارات عامة:</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>تنظيم الدخول والخروج بنظام صارم.</li>
      <li>توفير جميع المستلزمات للمتحدثين والفنيين.</li>
      <li>وجود وسائل اتصال فعالة مع الفريق في الصالة الرئيسية.</li>
      <li>الاحتفاظ بجدول زمني واضح للمتحدثين والأنشطة.</li>
    </ul>` },
    { title: '8. فـريق الطوارئ والأزمــــــات (Emergency Team)', content: '<p>هو الفريق المسؤول عن حل المشكلات والأزمات الطارئة خلال الحدث مثل النزاعات والمشاكل وتقديم الإسعافات الأولية.</p>' }
];

const onlineAccordionItems: AccordionItemData[] = [
    { title: 'معلومات عنا ودور المنظمين', content: `<p>هو نوع من أنواع التنظيم ولكن يتم علي نطاق الاونلاين فقط في خلال محاضرة أو فعالية اونلاين. يشمل دورهم الإشراف على تنفيذها، إدارة الحضور والتواصل مع المشاركين، وضمان أن تجري الأنشطة بسلاسة وفقًا للأهداف المحددة.</p>
    <h5 class="font-bold mt-4 mb-2 text-primary">دور المنظمين اونلاين:</h5>
    <ul class="list-disc list-inside space-y-2">
      <li>وضع خطة شاملة للسيشن او المحاضرة واختيار المنصة المناسبة وتجهيز الأدوات التقنية.</li>
      <li>التواصل مع المدربين والتأكد من جاهزيتهم.</li>
      <li>تجهيز المنصة وتنسيق جميع الجوانب التقنية.</li>
      <li>تسجيل الحضور ومتابعتهم وإجابة أسئلتهم.</li>
      <li>تقديم دعم تقني في حال واجهوا مشكلات أثناء المحاضرة.</li>
      <li>متابعة المشاركين عبر الدردشة أو التعليقات والإجابة على أسئلتهم لضمان التفاعل الإيجابي.</li>
    </ul>` },
    { title: 'مراحل تنظيم المحاضرات عبر الإنترنت', content: `<ul class="list-decimal list-inside space-y-4">
      <li><b class="font-semibold text-primary">البداية الأساسية:</b> يتم عمل جروب للتسويق للمحاضرة من حيث شير في كل مكان وشير بوست الفيسبوك من كافة اللجان لوجود عدد كبير في المحاضرة.</li>
      <li><b class="font-semibold text-primary">المرحلة الأولى (الأعداد والتنفيذ):</b>
        <ul class="list-disc list-inside space-y-2 mt-2 ml-4">
            <li>التنسيق مع لجنة التدريب الموفرة لهذه المحاضرة.</li>
            <li>اعداد الجروب الخاص بالمحاضرة.</li>
            <li>التواصل مع المدرب والتأكد من جاهزيته.</li>
            <li>جمع معلومات شاملة عن المحاضرة واعداد المعلومات الجديرة بالذكر للمحاضرة.</li>
            <li>اعداد الأسئلة التحفيزية لجمهور تتعلق بمحتوي المحاضرة قبل ابلاغ الحاضرين بمعاد المحاضرة مع السيشن.</li>
            <li>اعداد التعليمات الخاصة بالمحاضرة للمجهور المستفيد مثل وقت المحاضرة واوقات الأستراحة وتسجيل الحضور.</li>
        </ul>
      </li>
      <li><b class="font-semibold text-primary">المرحلة الثانية (تنظيم المجموعة):</b> بعد اعداد الجروب تبدأ مهمة التواصل مع الجمهور:
         <ul class="list-disc list-inside space-y-2 mt-2 ml-4">
            <li>التعريف بنفسك كمنظم للمحاضرة.</li>
            <li>التحدث برسالة تحفيزية عن موضوع المحاضرة.</li>
            <li>ارسال اسئلة تحفيزية تساعد على جذب اهتمام الجمهور.</li>
            <li>ارسال تنبيهات على مدار ساعتين فى اليوم الموعود.</li>
            <li>ارسال تعليمات مهمة و معدة مسبقا للحضور.</li>
            <li>شكر الجمهور على اهتمامهم للحضور.</li>
        </ul>
      </li>
      <li><b class="font-semibold text-primary">المرحلة الثالثة (تنظيم المحاضرة):</b>
        <ul class="list-disc list-inside space-y-2 mt-2 ml-4">
            <li>اجراء اختبار تقني مع المدرب للتأكد من الشبكة او اي اجراءات اخرى.</li>
            <li>الحرص على الهدوء ومنع الضوضاء.</li>
            <li>تسجيل الحضور للأعضاء المستفيدة بالتنسيق مع الموارد البشرية.</li>
            <li>تنبيه المدرب بخصوص اسئلة الأعضاء فى حالة عدم ملاحظتة.</li>
            <li>او تخصيص فقرة اسئلة مع المدرب والأعضاء.</li>
            <li>عرض العروض التقديمية الخاصة بالمدرب اذا تطلب الأمر.</li>
        </ul>
      </li>
    </ul>` },
    { title: 'التنسيق بين اللجان', content: `<p>يتم التنسيق المستمر مع لجان الاتحاد المختلفة لضمان نجاح الفعالية الرقمية:</p>
    <ul class="list-disc list-inside space-y-2 mt-2">
      <li><b>التنسيق مع لجنة التدريب والتطوير:</b> من حيث معرفة يوم المحاضرة ومعاد المحاضرة.</li>
      <li><b>التنسيق مع المحاضر:</b> يتم التنسيق مع المحاضر في يوم المحاضرة لمعرفة اذا كان المحاضر جاهز او لا تجنبا لحدوث أي مشكلة في المحاضرة.</li>
      <li><b>التنسيق مع الموارد البشرية:</b> يتم التنسيق مع الموارد البشرية قبل المحاضرة والعمل علي لينك الحضور ولينك التقييم.</li>
      <li><b>التنسيق مع لجنة الميديا:</b> يتم التنسيق مع الميديا لشهادة الحضور.</li>
      <li><b>التنظيم يوم المحاضرة:</b> ما تم التنسيق به قبل المحاضرة يتم تنسيقه خلال المحاضرة من خلال شغل كل لجنة.</li>
    </ul>` }
];

const mainOrganizationTypes: AccordionItemData[] = [
    {
        title: "التنظيم الأوفلاين (الميداني)",
        content: `
            <h3 class="text-2xl font-bold mb-4 text-center">أقسام التنظيم الميداني</h3>
            <div id="offline-accordion-content"></div>
        `
    },
    {
        title: "التنظيم الأونلاين (الرقمي)",
        content: `
            <h3 class="text-2xl font-bold mb-4 text-center">فريق التنظيم الرقمي</h3>
            <div id="online-accordion-content"></div>
            <div class="mt-12">
                <h3 class="text-2xl font-bold mb-8 text-center">مقارنة بين أشهر برامج الاجتماعات (النسخ المجانية)</h3>
                <div class="grid md:grid-cols-2 gap-8 mb-8" id="platform-details-container">
                </div>
                <div class="card-custom p-4 rounded-lg">
                    <h4 class="text-xl font-bold mb-4 text-center">مقارنة سريعة</h4>
                    <div class="relative h-[50vh] max-h-96 w-full max-w-2xl mx-auto">
                        <canvas id="platformsChart"></canvas>
                    </div>
                </div>
            </div>
        `
    }
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

export default function OrganizationTypesSection() {

    const platformDetails = [
        { name: 'Google Meet', uses: 'مناسب لعقد المحاضرات والاجتماعات عبر الإنترنت خاصة في التعليم والمؤسسات.', features: ['تشغيل مباشر من المتصفح بدون تحميل', 'تكامل مع Gmail وGoogle Calendar', 'يدعم مشاركة الشاشة، عرض الشرائح، والرسائل النصية'], cons: ['التسجيل متاح فقط لحسابات Google Workspace المدفوعة', 'لا يحتوي على غرف جانبية (Breakout Rooms)'], participants: 'حتى 100 مشارك في النسخة المجانية.', time: 'حتى 60 دقيقة للاجتماع المجاني.'},
        { name: 'Zoom', uses: 'مثالي للمحاضرات الأونلاين، الدورات التدريبية، والاجتماعات الكبيرة.', features: ['جودة صوت وفيديو عالية', 'يدعم الغرف الجانبية (Breakout Rooms)', 'إمكانية تسجيل الاجتماع', 'السبورة التفاعلية، والاستطلاعات'], cons: ['محدودية الوقت في النسخة المجانية', 'يتطلب تحميل البرنامج على الجهاز'], participants: 'حتى 100 مشارك مجانًا (يمكن زيادته إلى 1000 باشتراك).', time: '40 دقيقة فقط للاجتماعات الجماعية في النسخة المجانية.' },
        { name: 'Microsoft Teams', uses: 'مثالي للمؤسسات التعليمية والشركات لتنظيم الفرق والملفات والاجتماعات.', features: ['متكامل مع Microsoft Office 365', 'تنظيم الفرق والقنوات', 'إدارة ومتابعة المهام', 'تسجيل الاجتماعات وتخزينها على OneDrive'], cons: ['واجهته معقدة نسبيًا للمبتدئين', 'يحتاج حساب Microsoft'], participants: 'حتى 100 مشارك في الاجتماع المجاني، ويمكن أن يصل إلى 300 وأكثر في الخطط التعليمية أو المؤسساتية.', time: 'غير محدود في النسخة المجانية حاليًا (للاجتماعات الفردية والجماعية).'},
        { name: 'Telegram', uses: 'يُستخدم للمراسلة والمتابعة وليس لعقد الاجتماعات التعليمية التقليدية.', features: ['يدعم القنوات والمجموعات العملاقة', 'إرسال ملفات وميديا بدون قيود حجم كبيرة', 'وجود بوتات ذكية للتنظيم والرد التلقائي', 'يدعم مكالمات صوت وفيديو'], cons: ['لا يُستخدم لعقد محاضرات منظمة أو فصول دراسية', 'محدود في دعم المحاضرات متعددة المشاركين بالفيديو'], participants: 'حتى 200,000 عضو في المجموعات.', time: 'غير محدد في المكالمات الفردية، ولكن لا يوجد نظام "اجتماعات" رسمي.' }
    ];

    React.useEffect(() => {
        const offlineAccordionContainer = document.getElementById('offline-accordion-content');
        if (offlineAccordionContainer) {
            const root = (window as any).ReactDOM.createRoot(offlineAccordionContainer);
            root.render(<CustomAccordion items={offlineAccordionItems} />);
        }

        const onlineAccordionContainer = document.getElementById('online-accordion-content');
        if (onlineAccordionContainer) {
             const root = (window as any).ReactDOM.createRoot(onlineAccordionContainer);
            root.render(<CustomAccordion items={onlineAccordionItems} />);
        }
        
        const platformContainer = document.getElementById('platform-details-container');
        if(platformContainer){
            platformContainer.innerHTML = platformDetails.map(platform => `
                <div key=${platform.name} class="card-custom p-6 rounded-lg">
                    <h4 class="text-xl font-bold mb-3">${platform.name}</h4>
                    <p class="mb-4 text-sm text-muted-foreground">${platform.uses}</p>
                    <div class="space-y-4">
                        <div>
                            <h5 class="font-semibold text-primary mb-1">المميزات:</h5>
                            <ul class="list-disc list-inside space-y-1 text-sm">
                                ${platform.features.map((feature: string) => `<li>${feature}</li>`).join('')}
                            </ul>
                        </div>
                        <div>
                            <h5 class="font-semibold text-primary mb-1">العيوب:</h5>
                            <ul class="list-disc list-inside space-y-1 text-sm">
                                ${platform.cons.map((con: string) => `<li>${con}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="flex flex-wrap gap-4 text-sm pt-2 border-t mt-4">
                            <p><b class="font-semibold">المشاركين:</b> ${platform.participants}</p>
                            <p><b class="font-semibold">الوقت:</b> ${platform.time}</p>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        const chartCanvas = document.getElementById('platformsChart') as HTMLCanvasElement;
        if(chartCanvas){
             let chart = ChartJS.getChart(chartCanvas);
             if (chart) {
                chart.destroy();
            }
            new ChartJS(chartCanvas.getContext('2d')!, {
                type: 'bar',
                data: chartData,
                options: chartOptions,
            });
        }
    }, []);


    return (
        <section id="organization-types" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 text-center">أنواع التنظيم</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-8">
                ينقسم عمل لجنة التنظيم إلى مسارين رئيسيين لكل منهما طبيعته الخاصة ومتطلباته: التنظيم الميداني للفعاليات على أرض الواقع، والتنظيم الرقمي للفعاليات عبر الإنترنت. استكشف تفاصيل كل نوع وكيفية عمل فرقه المتخصصة.
            </p>
             <CustomAccordion items={mainOrganizationTypes} type="multiple" />
        </section>
    );
}
