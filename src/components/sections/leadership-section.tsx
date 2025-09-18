'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, ZoomIn } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function LeadershipSection() {
    const [isIslamExpanded, setIsIslamExpanded] = useState(false);
    const [isReemExpanded, setIsReemExpanded] = useState(false);
    const [isAhmedExpanded, setIsAhmedExpanded] = useState(false);
    const [isHaninExpanded, setIsHaninExpanded] = useState(false);

    const leadershipImages = {
        islam: PlaceHolderImages.find(p => p.id === 'islam-fares'),
        reem: PlaceHolderImages.find(p => p.id === 'reem-mansour'),
        ahmed: PlaceHolderImages.find(p => p.id === 'ahmed-hassan'),
        hanin: PlaceHolderImages.find(p => p.id === 'hanin-islam'),
    }

    return (
        <section id="leadership" className="scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold mb-8 text-center">الهيكل التنظيمي للجنة المركزية 🏛️</h2>
            <div className="grid grid-cols-1 gap-8">
                <div className="card-custom p-6 rounded-lg text-center">
                     <h3 className="text-xl md:text-2xl font-bold">أ. مصطفي قطامش</h3>
                     <p className="text-base md:text-lg text-muted-foreground">رئيس اتحاد طلاب تحيا مصر</p>
                </div>
                
                 <div className="card-custom p-6 rounded-lg col-span-full">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        {leadershipImages.islam && (
                             <Dialog>
                                <DialogTrigger asChild>
                                    <div className="relative group cursor-pointer">
                                        <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-accent">
                                            <AvatarImage src={leadershipImages.islam.imageUrl} alt={leadershipImages.islam.description} data-ai-hint={leadershipImages.islam.imageHint}/>
                                            <AvatarFallback>IF</AvatarFallback>
                                        </Avatar>
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-full flex items-center justify-center">
                                            <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="p-0 border-0 max-w-fit">
                                    <Image src={leadershipImages.islam.imageUrl} alt={leadershipImages.islam.description} width={600} height={600} className="rounded-lg" />
                                </DialogContent>
                            </Dialog>
                        )}
                        <div className="text-center md:text-right flex-1">
                             <h3 className="text-xl md:text-2xl font-bold">مهندس. اسلام فارس عبد الجليل</h3>
                             <p className="text-base md:text-lg text-muted-foreground mb-4">رئيس اللجنة المركزية للتنظيم</p>
                             <div className="flex justify-center md:justify-start gap-x-6 gap-y-2 flex-wrap text-sm md:text-base">
                                 <p>🎂 <b className="font-semibold text-primary">العمر:</b> 25 سنه</p>
                                 <p>🎓 <b className="font-semibold text-primary">المؤهل:</b> بكالوريوس هندسه مدني</p>
                                 <p>📍 <b className="font-semibold text-primary">محل الميلاد:</b> محافظة الجيزة</p>
                             </div>
                        </div>
                    </div>
                     <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isIslamExpanded ? 'max-h-screen' : 'max-h-0'}`}>
                         <div className="mt-4 pt-4 border-t text-sm md:text-base leading-relaxed space-y-3">
                             <p>المهندس إسلام فارس عبد الجليل، ابن محافظة الجيزة، قائد شاب في عمر الخامسة والعشرين، ورئيس اللجنة المركزية للتنظيم باتحاد طلاب تحيا مصر. بخطوات واثقة، وبفكر هندسي مدني راقي، أثبت إن القيادة مش منصب، دي مسؤولية وروح.</p>
                             <p>إسلام بيقود فريق كبير بروح واحدة، بيعرف يوزّع المهام بدقة، ويحط الجداول الزمنية بحكمة، ويدير الوقت كأنه كنز. في المواقف الحرجة بياخد القرار بسرعة وبثبات، وفي لحظات التحدي بيفكر بطريقة مختلفة ويبدع في الحلول.</p>
                             <p>هو بطبعه محفّز، بيزرع في فريقه الحماس، ويدفعهم يشتغلوا كإنهم قلب واحد. عنده مهارات تفاوض وإقناع، وبيعرف يبني علاقات قوية مع كل اللجان، بيجمع بين قوة الشخصية ولباقة الأسلوب ومرونة التعامل.</p>
                             <p>التزامه وانضباطه سر نجاحه، وتحليله العميق وإبداعه طريقته عشان يقدّم فعاليات مختلفة ومميزة. قائد مؤمن إن التنظيم فن، وإن الشغل الجماعي هو أقصر طريق للنجاح.</p>
                         </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <Button onClick={() => setIsIslamExpanded(!isIslamExpanded)} variant="outline" className="w-full md:w-auto">
                            {isIslamExpanded ? 'عرض أقل' : 'اقرأ المزيد'}
                            {isIslamExpanded ? <ChevronUp className="mr-2 h-4 w-4" /> : <ChevronDown className="mr-2 h-4 w-4" />}
                        </Button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="card-custom p-6 rounded-lg flex flex-col">
                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                             {leadershipImages.reem && (
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <div className="relative group cursor-pointer">
                                            <Avatar className="w-20 h-20 border-2 border-accent">
                                                <AvatarImage src={leadershipImages.reem.imageUrl} alt={leadershipImages.reem.description} data-ai-hint={leadershipImages.reem.imageHint}/>
                                                <AvatarFallback>RM</AvatarFallback>
                                            </Avatar>
                                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-full flex items-center justify-center">
                                                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
                                            </div>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="p-0 border-0 max-w-fit">
                                        <Image src={leadershipImages.reem.imageUrl} alt={leadershipImages.reem.description} width={600} height={600} className="rounded-lg" />
                                    </DialogContent>
                                </Dialog>
                            )}
                            <div className="text-center sm:text-right flex-1">
                                <h3 className="text-lg md:text-xl font-bold">ريـــم مـنصــــور الــفقــي</h3>
                                <p className="text-sm md:text-md text-muted-foreground mb-4">نائب رئيس اللجنة المركزية للتنظيم</p>
                                <div className="flex justify-center sm:justify-start gap-x-6 gap-y-2 flex-wrap text-xs md:text-sm">
                                    <p>🎂 <b className="font-semibold text-primary">العمر:</b> 20 سنة</p>
                                    <p>🎓 <b className="font-semibold text-primary">المؤهل:</b> ليسانس لغات وترجمة</p>
                                    <p>📍 <b className="font-semibold text-primary">محل الميلاد:</b> محافظة الغربية</p>
                                </div>
                            </div>
                        </div>
                        <div className={`flex-grow transition-all duration-500 ease-in-out overflow-hidden ${isReemExpanded ? 'max-h-screen' : 'max-h-0'}`}>
                             <div className="text-sm md:text-base leading-relaxed pt-4 border-t mt-4">
                                <p>ريم مثال حي للشباب الطموح اللي بيقدر يحول أي تحدي لفرصة نجاح. من أبرز إنجازاتها ومسؤولياتها:</p>
                                <ul className="list-disc list-inside space-y-2 mt-2">
                                    <li>بدأت رحلتها في الاتحاد من 6/10/2022، وأثبتت نفسها كقائدة شابة بإصرار وحب للتجربة.</li>
                                    <li>تشغل منصب نائب رئيس اللجنة المركزية للتنظيم.</li>
                                    <li>شغلت منصب رئيس اتحاد المعهد العالي للغات 6 أكتوبر للعام الدراسي 2024/2025.</li>
                                    <li>تُعرف بشخصيتها القيادية، احترامها، وتنظيمها لوقتها، مع مهارات تواصل عالية.</li>
                                    <li>تعمل حاليًا في وكالة مركز اتصال (Call Center Agency)، مما زاد من خبرتها العملية في التعامل مع الجمهور، إدارة المواقف، والمرونة تحت الضغط.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-center mt-4">
                            <Button onClick={() => setIsReemExpanded(!isReemExpanded)} variant="outline" className="w-full md:w-auto">
                                {isReemExpanded ? 'عرض أقل' : 'اقرأ المزيد'}
                                {isReemExpanded ? <ChevronUp className="mr-2 h-4 w-4" /> : <ChevronDown className="mr-2 h-4 w-4" />}
                            </Button>
                        </div>
                    </div>
                     <div className="card-custom p-6 rounded-lg flex flex-col">
                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                            {leadershipImages.ahmed && (
                                <Dialog>
                                    <DialogTrigger asChild>
                                         <div className="relative group cursor-pointer">
                                            <Avatar className="w-20 h-20 border-2 border-accent">
                                                <AvatarImage src={leadershipImages.ahmed.imageUrl} alt={leadershipImages.ahmed.description} data-ai-hint={leadershipImages.ahmed.imageHint}/>
                                                <AvatarFallback>AH</AvatarFallback>
                                            </Avatar>
                                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-full flex items-center justify-center">
                                                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
                                            </div>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="p-0 border-0 max-w-fit">
                                        <Image src={leadershipImages.ahmed.imageUrl} alt={leadershipImages.ahmed.description} width={600} height={600} className="rounded-lg" />
                                    </DialogContent>
                                </Dialog>
                            )}
                            <div className="text-center sm:text-right flex-1">
                                <h3 className="text-lg md:text-xl font-bold">احمد حسن عبدالرحيم</h3>
                                <p className="text-sm md:text-md text-muted-foreground mb-4">نائب رئيس اللجنة المركزية للتنظيم</p>
                                <div className="flex justify-center sm:justify-start gap-x-6 gap-y-2 flex-wrap text-xs md:text-sm">
                                    <p>🎂 <b className="font-semibold text-primary">العمر:</b> 22 سنة</p>
                                    <p>🎓 <b className="font-semibold text-primary">المؤهل:</b> بكالوريوس تجارة</p>
                                    <p>📍 <b className="font-semibold text-primary">محل الميلاد:</b> السعودية</p>
                                </div>
                            </div>
                        </div>
                        <div className={`flex-grow transition-all duration-500 ease-in-out overflow-hidden ${isAhmedExpanded ? 'max-h-screen' : 'max-h-0'}`}>
                            <div className="text-sm md:text-base leading-relaxed pt-4 border-t mt-4">
                                <p>أحمد ليس فقط قائدًا، بل هو العقل التقني 💻 الذي يدفع عجلة التطور في الاتحاد. من أبرز مساهماته:</p>
                                <ul className="list-disc list-inside space-y-2 mt-2">
                                    <li>أضاف لمسة تكنولوجية حديثة للتنظيم، من الدعوات الإلكترونية وتسجيل الحضور، إلى استخراج الشهادات عبر الإنترنت.</li>
                                    <li>يجمع بين الإنجاز الرسمي واللمسة الإنسانية، فهو صاحب مبادرة التهنئة بأعياد الميلاد 🎂.</li>
                                    <li>له دور أساسي في إدارة وتنظيم فعاليات الاتحاد على مستوى الجمهورية لضمان ظهورها بأفضل صورة.</li>
                                    <li>صمم المساعد الذكي الذي تتفاعل معه الآن، تاركًا بصمة مبتكرة تتجاوز مجرد الإنجازات التنظيمية ✨🚀.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-center mt-4">
                            <Button onClick={() => setIsAhmedExpanded(!isAhmedExpanded)} variant="outline" className="w-full md:w-auto">
                                {isAhmedExpanded ? 'عرض أقل' : 'اقرأ المزيد'}
                                {isAhmedExpanded ? <ChevronUp className="mr-2 h-4 w-4" /> : <ChevronDown className="mr-2 h-4 w-4" />}
                            </Button>
                        </div>
                    </div>
                </div>

                 <div className="card-custom p-6 rounded-lg col-span-full">
                    <div className="flex flex-col items-center gap-4">
                        {leadershipImages.hanin && (
                             <Dialog>
                                <DialogTrigger asChild>
                                    <div className="relative group cursor-pointer">
                                        <Avatar className="w-24 h-24 border-4 border-accent">
                                            <AvatarImage src={leadershipImages.hanin.imageUrl} alt={leadershipImages.hanin.description} data-ai-hint={leadershipImages.hanin.imageHint}/>
                                            <AvatarFallback>HI</AvatarFallback>
                                        </Avatar>
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-full flex items-center justify-center">
                                            <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="p-0 border-0 max-w-fit">
                                    <Image src={leadershipImages.hanin.imageUrl} alt={leadershipImages.hanin.description} width={600} height={600} className="rounded-lg" />
                                </DialogContent>
                            </Dialog>
                        )}
                        <div className="text-center">
                            <h3 className="text-lg md:text-xl font-bold">حـنيـن اســلام مـبـــروك</h3>
                            <p className="text-sm md:text-md text-muted-foreground">نائب رئيس اللجنة المركزية للتنظيم للمتابعة</p>
                        </div>
                    </div>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isHaninExpanded ? 'max-h-screen' : 'max-h-20 sm:max-h-24'}`}>
                        <p className="mt-4 pt-4 border-t text-center max-w-2xl mx-auto text-sm md:text-base leading-relaxed">حنين نموذج للبنت القيادية اللي عارفة قيمة الالتزام والمتابعة الدقيقة. معروفة بشخصيتها الهادية، وحرصها الدائم إنها تتابع كل تفصيلة صغيرة قبل الكبيرة، علشان تضمن إن الشغل يطلع بأفضل صورة. بتتميز إنها منظمة، عندها مرونة في التعامل، وبتعرف توازن بين الحزم والروح الطيبة. حنين مؤمنة إن النجاح مش بس فكرة أو خطة… النجاح هو متابعة مستمرة علشان كل خطوة تتنفذ صح.</p>
                    </div>
                     <div className="flex justify-center mt-4">
                        <Button onClick={() => setIsHaninExpanded(!isHaninExpanded)} variant="outline" className="w-full md:w-auto">
                            {isHaninExpanded ? 'عرض أقل' : 'اقرأ المزيد'}
                            {isHaninExpanded ? <ChevronUp className="mr-2 h-4 w-4" /> : <ChevronDown className="mr-2 h-4 w-4" />}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
