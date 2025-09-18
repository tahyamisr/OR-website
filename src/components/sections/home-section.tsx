export default function HomeSection() {
    return (
        <section id="home" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-4 text-center">لجنة التنظيم والمراسم</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-8">
                تعتبر لجنة التنظيم من أهم وأقيم اللجان التي تساعد في نجاح أي حدث. هي اللجنة المختصة والمسؤولة عن إعداد وتخطيط وتنفيذ وإدارة الفعاليات والمشروعات المحددة، بهدف تحقيق أهداف معينة من خلال التنسيق بين الأعضاء، توزيع المهام، ووضع الخطط اللازمة لضمان سير العمل بشكل فعّال ومنظم.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="card-custom p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">الغاية من إقامة الأحداث</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>نقل المعلومات والمعرفة</li>
                        <li>تبادل الخبرات والأفكار</li>
                        <li>تعزيز التواصل وبناء العلاقات</li>
                        <li>تعزيز العلامة التجارية</li>
                        <li>زيادة الوعي بقضايا معينة</li>
                        <li>التكريم والاحتفال بالإنجازات</li>
                    </ul>
                </div>
                <div className="card-custom p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">عوامل نجاح الفعاليات</h3>
                     <ul className="list-disc list-inside space-y-2">
                        <li>التخطيط الجيد وتحديد الأهداف</li>
                        <li>اختيار المكان المناسب</li>
                        <li>تقديم برنامج فعال ومثير للاهتمام</li>
                        <li>اختيار متحدثين وخبراء أكفاء</li>
                        <li>التسويق والترويج الجيد</li>
                        <li>التواصل المستمر مع المشاركين</li>
                    </ul>
                </div>
                 <div className="card-custom p-6 rounded-lg lg:col-span-1 md:col-span-2">
                    <h3 className="text-xl font-bold mb-2">رؤيتنا</h3>
                    <p>نسعى لتنظيم فعاليات استثنائية تترك بصمة إيجابية، وتساهم في تطوير مهارات الشباب وخلق فرص جديدة لهم، مع الالتزام بأعلى معايير الاحترافية والإبداع في كل خطوة.</p>
                </div>
            </div>
        </section>
    )
}
