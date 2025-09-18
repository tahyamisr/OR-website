export default function DigitalServicesSection() {
    return (
        <section id="services" className="scroll-mt-24">
             <h2 className="text-3xl font-bold mb-8 text-center">الخدمات الرقمية المقدمة من اللجنة 🤖</h2>
             <p className="text-lg text-center max-w-3xl mx-auto mb-8">
                إيمانًا بأهمية التكنولوجيا، طورت لجنة التنظيم مجموعة من الحلول الرقمية الذكية لتبسيط الإجراءات وتعزيز تجربة المشاركين، مما يعكس رؤيتنا في دمج الابتكار مع العمل التنظيمي الاحترافي.
            </p>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="card-custom p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">📨 خدمة ارسال دعوات تحيا مصر</h3>
                    <p>نظام ذكي يرسل دعوات مخصصة باسم كل مستخدم على بريده الإلكتروني مباشرة.</p>
                </div>
                <div className="card-custom p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">📱 نظام تسجيل حضور تحيا مصر</h3>
                    <p>آلية رقمية تعتمد على QR لتسجيل حضور المشاركين بسرعة ودقة عند الوصول.</p>
                </div>
                <div className="card-custom p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">🤖 نموذج ذكاء اصطناعى (Al)</h3>
                    <p>وكيل ذكي يرد على الاستفسارات، ينظم البيانات، ويتعامل باللهجة المصرية.</p>
                    <a href="https://ai.tahyamisrsu.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">الموقع الرسمي</a> |
                    <a href="https://t.me/tahyamisrbot" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">بوت تيليجرام</a>
                </div>
                 <div className="card-custom p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">📜 انظمة اصدار شهادات رقمية</h3>
                    <p>أدوات آلية تنشئ وتُرسل الشهادات بصيغة PDF وPNG بمجرد انتهاء الفعاليات.</p>
                     <a href="https://t.me/certificate_tahyamisr1bot" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">بوت الشهادات</a>
                </div>
                 <div className="card-custom p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">🤖 بوت دعوات تحيا مصر</h3>
                    <p>وكيل ذكاء اصطناعي على تليجرام يسهل إرسال الدعوات للمشاركين بسرعة.</p>
                     <a href="https://t.me/invite_tahyamisrbot" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">بوت الدعوات</a>
                </div>
                 <div className="card-custom p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">🎂 نظام تهنئة بأعياد الميلاد</h3>
                    <p>نظام ذكي يُرسل تهنئات تلقائية بعيد الميلاد للمستخدمين بأسلوب شخصي وإنساني عبر البريد الإلكتروني ورقم الهاتف.</p>
                </div>
             </div>
        </section>
    );
}
