'use client';
import React from 'react';
import CustomAccordion, { AccordionItemData } from '@/components/ui/accordion-custom';

const platformDetails: AccordionItemData[] = [
    { 
        title: '🔵 Google Meet', 
        content: `
            <p class="mb-4 text-sm text-muted-foreground">مناسب للمحاضرات والاجتماعات الأونلاين، خصوصًا في التعليم والشركات.</p>
            <div class="space-y-4">
                <div>
                    <h4 class="font-semibold text-black mb-1">المميزات:</h4>
                    <ul class="list-disc list-inside space-y-1 text-sm">
                        <li>✔️ بيشتغل من المتصفح علطول من غير تحميل</li>
                        <li>✔️ متكامل مع Gmail وGoogle Calendar</li>
                        <li>✔️ بيدعم مشاركة الشاشة، عرض الشرائح، والرسائل النصية</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold text-black mb-1">العيوب:</h4>
                    <ul class="list-disc list-inside space-y-1 text-sm">
                        <li>❌ التسجيل متاح بس لحسابات Google Workspace المدفوعة</li>
                        <li>❌ مفيهوش غرف جانبية (Breakout Rooms)</li>
                    </ul>
                </div>
                <div class="flex flex-wrap gap-4 text-sm pt-2 border-t mt-4">
                    <p><b class="font-semibold">👥 المشاركين:</b> لحد 100 واحد في النسخة المجانية.</p>
                    <p><b class="font-semibold">⏰ الوقت:</b> لحد 60 دقيقة للاجتماع المجاني.</p>
                </div>
            </div>`
    },
    { 
        title: '🟦 Zoom', 
        content: `
            <p class="mb-4 text-sm text-muted-foreground">مثالي للمحاضرات الأونلاين، الكورسات، والاجتماعات الكبيرة.</p>
            <div class="space-y-4">
                <div>
                    <h4 class="font-semibold text-black mb-1">المميزات:</h4>
                    <ul class="list-disc list-inside space-y-1 text-sm">
                        <li>✔️ جودة صوت وصورة عالية</li>
                        <li>✔️ بيدعم الغرف الجانبية (Breakout Rooms)</li>
                        <li>✔️ تقدر تسجل الاجتماع</li>
                        <li>✔️ فيه سبورة تفاعلية واستطلاعات رأي</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold text-black mb-1">العيوب:</h4>
                    <ul class="list-disc list-inside space-y-1 text-sm">
                        <li>❌ الوقت محدود في النسخة المجانية</li>
                        <li>❌ لازم تحمل البرنامج على جهازك</li>
                    </ul>
                </div>
                <div class="flex flex-wrap gap-4 text-sm pt-2 border-t mt-4">
                    <p><b class="font-semibold">👥 المشاركين:</b> لحد 100 واحد مجانًا (وممكن يزيد لـ1000 باشتراك).</p>
                    <p><b class="font-semibold">⏰ الوقت:</b> 40 دقيقة بس للاجتماعات الجماعية في النسخة المجانية.</p>
                </div>
            </div>`
    },
    { 
        title: '🏢 Microsoft Teams', 
        content: `
            <p class="mb-4 text-sm text-muted-foreground">مثالي للمؤسسات التعليمية والشركات عشان تنظم الفرق والملفات والاجتماعات.</p>
            <div class="space-y-4">
                <div>
                    <h4 class="font-semibold text-black mb-1">المميزات:</h4>
                    <ul class="list-disc list-inside space-y-1 text-sm">
                        <li>✔️ متكامل مع Microsoft Office 365</li>
                        <li>✔️ تنظيم الفرق والقنوات</li>
                        <li>✔️ إدارة ومتابعة المهام</li>
                        <li>✔️ تسجيل الاجتماعات وتخزينها على OneDrive</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold text-black mb-1">العيوب:</h4>
                    <ul class="list-disc list-inside space-y-1 text-sm">
                        <li>❌ واجهته معقدة شوية للمبتدئين</li>
                        <li>❌ بيحتاج حساب مايكروسوفت</li>
                    </ul>
                </div>
                <div class="flex flex-wrap gap-4 text-sm pt-2 border-t mt-4">
                    <p><b class="font-semibold">👥 المشاركين:</b> لحد 100 واحد في الاجتماع المجاني، وممكن يوصل لـ300 وأكتر في الخطط التعليمية أو الشركات.</p>
                    <p><b class="font-semibold">⏰ الوقت:</b> غير محدود في النسخة المجانية حاليًا (للاجتماعات الفردية والجماعية).</p>
                </div>
            </div>`
    },
    { 
        title: '✈️ Telegram', 
        content: `
            <p class="mb-4 text-sm text-muted-foreground">بيُستخدم للمراسلة والمتابعة أكتر من عقد الاجتماعات التعليمية التقليدية.</p>
            <div class="space-y-4">
                <div>
                    <h4 class="font-semibold text-black mb-1">المميزات:</h4>
                    <ul class="list-disc list-inside space-y-1 text-sm">
                        <li>✔️ بيدعم القنوات والجروبات الكبيرة جدًا</li>
                        <li>✔️ تقدر تبعت ملفات وميديا بأحجام كبيرة</li>
                        <li>✔️ فيه بوتات ذكية للتنظيم والرد التلقائي</li>
                        <li>✔️ بيدعم مكالمات صوت وفيديو</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold text-black mb-1">العيوب:</h4>
                    <ul class="list-disc list-inside space-y-1 text-sm">
                        <li>❌ مش بيُستخدم لعقد محاضرات منظمة أو فصول دراسية</li>
                        <li>❌ محدود في دعم محاضرات الفيديو اللي فيها ناس كتير</li>
                    </ul>
                </div>
                <div class="flex flex-wrap gap-4 text-sm pt-2 border-t mt-4">
                    <p><b class="font-semibold">👥 المشاركين:</b> لحد 200,000 عضو في الجروبات.</p>
                    <p><b class="font-semibold">⏰ الوقت:</b> غير محدد في المكالمات الفردية، بس مفيش نظام "اجتماعات" رسمي.</p>
                </div>
            </div>`
    }
];


export default function PlatformComparisonSection() {
    return (
        <section id="platforms" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-black">مقارنة بين أشهر المنصات الرقمية (النسخ المجانية)</h2>
            <div className="mb-12">
                 <CustomAccordion items={platformDetails} type="multiple" collapsible="true" />
            </div>
        </section>
    );
}
