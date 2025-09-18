'use client';
import React from 'react';
import CustomAccordion, { AccordionItemData } from '@/components/ui/accordion-custom';

const platformDetails: AccordionItemData[] = [
    { 
        title: '🔵 Google Meet', 
        content: `
            <p class="mb-4 text-sm text-muted-foreground">مناسب لعقد المحاضرات والاجتماعات عبر الإنترنت خاصة في التعليم والمؤسسات.</p>
            <div class="space-y-4">
                <div>
                    <h4 class="font-semibold text-primary mb-1">المميزات:</h4>
                    <ul class="list-disc list-inside space-y-1 text-sm">
                        <li>✔️ تشغيل مباشر من المتصفح بدون تحميل</li>
                        <li>✔️ تكامل مع Gmail وGoogle Calendar</li>
                        <li>✔️ يدعم مشاركة الشاشة، عرض الشرائح، والرسائل النصية</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold text-primary mb-1">العيوب:</h4>
                    <ul class="list-disc list-inside space-y-1 text-sm">
                        <li>❌ التسجيل متاح فقط لحسابات Google Workspace المدفوعة</li>
                        <li>❌ لا يحتوي على غرف جانبية (Breakout Rooms)</li>
                    </ul>
                </div>
                <div class="flex flex-wrap gap-4 text-sm pt-2 border-t mt-4">
                    <p><b class="font-semibold">👥 المشاركين:</b> حتى 100 مشارك في النسخة المجانية.</p>
                    <p><b class="font-semibold">⏰ الوقت:</b> حتى 60 دقيقة للاجتماع المجاني.</p>
                </div>
            </div>`
    },
    { 
        title: '🟦 Zoom', 
        content: `
            <p class="mb-4 text-sm text-muted-foreground">مثالي للمحاضرات الأونلاين، الدورات التدريبية، والاجتماعات الكبيرة.</p>
            <div class="space-y-4">
                <div>
                    <h4 class="font-semibold text-primary mb-1">المميزات:</h4>
                    <ul class="list-disc list-inside space-y-1 text-sm">
                        <li>✔️ جودة صوت وفيديو عالية</li>
                        <li>✔️ يدعم الغرف الجانبية (Breakout Rooms)</li>
                        <li>✔️ إمكانية تسجيل الاجتماع</li>
                        <li>✔️ السبورة التفاعلية، والاستطلاعات</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold text-primary mb-1">العيوب:</h4>
                    <ul class="list-disc list-inside space-y-1 text-sm">
                        <li>❌ محدودية الوقت في النسخة المجانية</li>
                        <li>❌ يتطلب تحميل البرنامج على الجهاز</li>
                    </ul>
                </div>
                <div class="flex flex-wrap gap-4 text-sm pt-2 border-t mt-4">
                    <p><b class="font-semibold">👥 المشاركين:</b> حتى 100 مشارك مجانًا (يمكن زيادته إلى 1000 باشتراك).</p>
                    <p><b class="font-semibold">⏰ الوقت:</b> 40 دقيقة فقط للاجتماعات الجماعية في النسخة المجانية.</p>
                </div>
            </div>`
    },
    { 
        title: '🏢 Microsoft Teams', 
        content: `
            <p class="mb-4 text-sm text-muted-foreground">مثالي للمؤسسات التعليمية والشركات لتنظيم الفرق والملفات والاجتماعات.</p>
            <div class="space-y-4">
                <div>
                    <h4 class="font-semibold text-primary mb-1">المميزات:</h4>
                    <ul class="list-disc list-inside space-y-1 text-sm">
                        <li>✔️ متكامل مع Microsoft Office 365</li>
                        <li>✔️ تنظيم الفرق والقنوات</li>
                        <li>✔️ إدارة ومتابعة المهام</li>
                        <li>✔️ تسجيل الاجتماعات وتخزينها على OneDrive</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold text-primary mb-1">العيوب:</h4>
                    <ul class="list-disc list-inside space-y-1 text-sm">
                        <li>❌ واجهته معقدة نسبيًا للمبتدئين</li>
                        <li>❌ يحتاج حساب Microsoft</li>
                    </ul>
                </div>
                <div class="flex flex-wrap gap-4 text-sm pt-2 border-t mt-4">
                    <p><b class="font-semibold">👥 المشاركين:</b> حتى 100 مشارك في الاجتماع المجاني، ويمكن أن يصل إلى 300 وأكثر في الخطط التعليمية أو المؤسساتية.</p>
                    <p><b class="font-semibold">⏰ الوقت:</b> غير محدود في النسخة المجانية حاليًا (للاجتماعات الفردية والجماعية).</p>
                </div>
            </div>`
    },
    { 
        title: '✈️ Telegram', 
        content: `
            <p class="mb-4 text-sm text-muted-foreground">يُستخدم للمراسلة والمتابعة وليس لعقد الاجتماعات التعليمية التقليدية.</p>
            <div class="space-y-4">
                <div>
                    <h4 class="font-semibold text-primary mb-1">المميزات:</h4>
                    <ul class="list-disc list-inside space-y-1 text-sm">
                        <li>✔️ يدعم القنوات والمجموعات العملاقة</li>
                        <li>✔️ إرسال ملفات وميديا بدون قيود حجم كبيرة</li>
                        <li>✔️ وجود بوتات ذكية للتنظيم والرد التلقائي</li>
                        <li>✔️ يدعم مكالمات صوت وفيديو</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold text-primary mb-1">العيوب:</h4>
                    <ul class="list-disc list-inside space-y-1 text-sm">
                        <li>❌ لا يُستخدم لعقد محاضرات منظمة أو فصول دراسية</li>
                        <li>❌ محدود في دعم المحاضرات متعددة المشاركين بالفيديو</li>
                    </ul>
                </div>
                <div class="flex flex-wrap gap-4 text-sm pt-2 border-t mt-4">
                    <p><b class="font-semibold">👥 المشاركين:</b> حتى 200,000 عضو في المجموعات.</p>
                    <p><b class="font-semibold">⏰ الوقت:</b> غير محدد في المكالمات الفردية، ولكن لا يوجد نظام "اجتماعات" رسمي.</p>
                </div>
            </div>`
    }
];


export default function PlatformComparisonSection() {
    return (
        <section id="platforms" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">مقارنة بين أشهر المنصات الرقمية (النسخ المجانية)</h2>
            <div className="mb-12">
                 <CustomAccordion items={platformDetails} type="multiple" />
            </div>
        </section>
    );
}
