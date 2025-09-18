export default function LeadershipSection() {
    return (
        <section id="leadership" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 text-center">الهيكل التنظيمي للجنة</h2>
             <p className="text-lg text-center max-w-3xl mx-auto mb-8">
                يقود اللجنة فريق من الشباب الطموح والمبدع الذي يجمع بين الخبرة الأكاديمية والعملية. يعملون بروح الفريق الواحد لتحقيق أهداف الاتحاد وتقديم فعاليات تليق باسم "تحيا مصر". تعرف على قادة لجنتنا.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div className="card-custom p-6 rounded-lg text-center col-span-full">
                     <h3 className="text-2xl font-bold">أ. مصطفي قطامش</h3>
                     <p className="text-lg text-gray-600">رئيس اتحاد طلاب تحيا مصر</p>
                </div>
                 <div className="card-custom p-6 rounded-lg text-center col-span-full">
                     <h3 className="text-2xl font-bold">مهندس. اسلام فارس عبد الجليل</h3>
                     <p className="text-lg text-gray-600 mb-4">رئيس اللجنة المركزية للتنظيم</p>
                     <div className="text-right space-y-2">
                         <p><strong>العمر:</strong> 25 سنه</p>
                         <p><strong>المؤهل:</strong> بكالوريوس هندسه مدني</p>
                         <p>المهندس إسلام فارس عبد الجليل، قائد شاب أثبت أن القيادة مسؤولية وروح. يقود فريقه بدقة وحكمة، ويتميز بقدرته على اتخاذ القرارات السريعة والثابتة في المواقف الحرجة، مع التفكير الإبداعي في إيجاد الحلول. هو محفز بطبعه، يزرع الحماس في فريقه، ويؤمن بأن التنظيم فن والعمل الجماعي هو أقصر طريق للنجاح.</p>
                     </div>
                </div>
                <div className="card-custom p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">ريـــم مـنصــــور الــفقــي</h3>
                    <p className="text-md text-gray-600 mb-4">نائب رئيس اللجنة المركزية للتنظيم</p>
                    <p>شابة طموحة من مواليد 2004، خريجة لغات وترجمة. تتميز بشخصيتها القيادية وقدرتها على تحويل التحديات إلى فرص نجاح. شغلت منصب رئيس اتحاد المعهد العالي للغات، وتعمل حاليًا في مجال خدمة العملاء مما زاد من خبرتها العملية.</p>
                </div>
                 <div className="card-custom p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">احمد حسن عبدالرحيم</h3>
                    <p className="text-md text-gray-600 mb-4">نائب رئيس اللجنة المركزية للتنظيم</p>
                    <p>العقل التقني للجنة، أضاف لمسة حديثة من خلال الاعتماد على التكنولوجيا في تنظيم الفعاليات، من الدعوات الإلكترونية إلى استخراج الشهادات. خريج كلية التجارة، وله دور أساسي في إدارة وتنظيم الفعاليات على مستوى الجمهورية.</p>
                </div>
                 <div className="card-custom p-6 rounded-lg col-span-full text-center">
                    <h3 className="text-xl font-bold mb-2">حـنيـن اســلام مـبـــروك</h3>
                    <p className="text-md text-gray-600">نائب رئيس اللجنة المركزية للتنظيم للمتابعة</p>
                </div>
            </div>
        </section>
    );
}
