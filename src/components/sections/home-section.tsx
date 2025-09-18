import Image from 'next/image';

export default function HomeSection() {
    return (
        <section id="home" className="mb-16 scroll-mt-24 text-center">
            <div className="flex justify-center mb-4">
                <Image 
                    src="https://www.dropbox.com/scl/fi/cdpfbk7nlzbn5mb13nmbt/.jpg?rlkey=5gaov2yymvxp4isbw9crxiuza&raw=1" 
                    alt="شعار لجنة التنظيم والمراسم" 
                    width={150} 
                    height={150}
                    className="rounded-full"
                />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-black">لجنة التنظيم والمراسم</h2>
            <p className="text-base md:text-lg text-center max-w-3xl mx-auto mb-8">
                لجنة التنظيم هي العمود الفقري لنجاح أي إيفينت، هي اللي بتخطط وتنفذ وتدير عشان تتأكد إن كل حاجة ماشية تمام وبنظام.
            </p>
        </section>
    )
}
