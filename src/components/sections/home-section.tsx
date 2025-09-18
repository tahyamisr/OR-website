export default function HomeSection() {
    return (
        <section id="home" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-4 text-center">لـــجــنـــــة الـــتـــنــــظــيــم والــمــــراســـم</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-8">
                لجنة التنظيم من أهم وأقيم اللجان التي تساعد في نجاح أي حدث هي اللجنة المختصة والمسؤولة عن إعداد وتخطيط وتنفيذ وإدارة فعاليات معينة أو مشروعات محددة، وتهدف الى تحقيق أهداف محددة من خلال التنسيق بين الأعضاء، وتوزيع المهام، ووضع الخطط اللازمة لضمان سير العمل بشكل فعّال ومنظم.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="card-custom p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">الغاية من إقامة الأحداث</h3>
                    <ul className="space-y-3 text-base">
                        <li><b className="font-semibold text-primary">نقل المعلومات:</b> وسيلة لنقل المعرفة إلى الجمهور المستهدف.</li>
                        <li><b className="font-semibold text-primary">تبادل الخبرات:</b> فرصة للمشاركين للتفاعل وتبادل الأفكار.</li>
                        <li><b className="font-semibold text-primary">تعزيز التواصل:</b> بناء علاقات وشبكات جديدة وتوسيع دائرة المعارف.</li>
                        <li><b className="font-semibold text-primary">تعزيز العلامة التجارية:</b> الترويج للشركات وزيادة الوعي بالعلامة التجارية.</li>
                        <li><b className="font-semibold text-primary">التوعية:</b> زيادة الوعي بقضايا معينة أو الدعوة إلى العمل.</li>
                        <li><b className="font-semibold text-primary">التكريم والاحتفال:</b> الاحتفاء بمناسبات خاصة أو تكريم أفراد على إنجازاتهم.</li>
                    </ul>
                </div>
                <div className="card-custom p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">عوامل نجاح الفعاليات</h3>
                     <ul className="space-y-3 text-base">
                        <li><b className="font-semibold text-primary">التخطيط الجيد:</b> تحديد الأهداف، واختيار الجمهور، ووضع برنامج زمني.</li>
                        <li><b className="font-semibold text-primary">المكان المناسب:</b> اختيار مكان مناسب من حيث المساحة والتجهيزات.</li>
                        <li><b className="font-semibold text-primary">البرنامج الفعال:</b> تقديم برنامج مثير للاهتمام يلبي احتياجات الجمهور.</li>
                        <li><b className="font-semibold text-primary">المتحدثون والخبراء:</b> اختيار متحدثين أكفاء لتقديم محتوى ذي قيمة.</li>
                        <li><b className="font-semibold text-primary">التسويق والترويج:</b> جذب أكبر عدد من المشاركين.</li>
                        <li><b className="font-semibold text-primary">التواصل مع المشاركين:</b> التواصل المستمر مع الجمهور قبل وبعد الحدث.</li>
                    </ul>
                </div>
                 <div className="card-custom p-6 rounded-lg lg:col-span-1 md:col-span-2 flex flex-col">
                    <h3 className="text-xl font-bold mb-4">رؤيتنا</h3>
                    <p className="text-base leading-relaxed">نسعى لتنظيم فعاليات استثنائية تترك بصمة إيجابية، وتساهم في تطوير مهارات الشباب وخلق فرص جديدة لهم، مع الالتزام بأعلى معايير الاحترافية والإبداع في كل خطوة.</p>
                </div>
            </div>
        </section>
    )
}
