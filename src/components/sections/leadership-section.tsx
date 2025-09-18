'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, MessageCircle, ZoomIn, Mail, Phone } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function LeadershipSection() {
    const [isIslamExpanded, setIsIslamExpanded] = useState(false);
    const [isReemExpanded, setIsReemExpanded] = useState(false);
    const [isAhmedExpanded, setIsAhmedExpanded] = useState(false);
    const [isHaninExpanded, setHaninExpanded] = useState(false);

    const leadershipImages = {
        mostafa: PlaceHolderImages.find(p => p.id === 'mostafa-katamesh'),
        islam: PlaceHolderImages.find(p => p.id === 'islam-fares'),
        reem: PlaceHolderImages.find(p => p.id === 'reem-mansour'),
        ahmed: PlaceHolderImages.find(p => p.id === 'ahmed-hassan'),
        hanin: PlaceHolderImages.find(p => p.id === 'hanin-islam'),
    }

    return (
        <section id="leadership" className="scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold mb-8 text-center text-black">قيادات اللجنة المركزية 🏛️</h2>
            <div className="grid grid-cols-1 gap-8">
                <div className="card-custom p-6 rounded-lg text-center flex flex-col items-center">
                    {leadershipImages.mostafa && (
                        <Dialog>
                            <DialogTrigger asChild>
                                <div className="relative group cursor-pointer mb-4">
                                    <Avatar className="w-32 h-32 border-4 border-accent">
                                        <AvatarImage src={leadershipImages.mostafa.imageUrl} alt={leadershipImages.mostafa.description} data-ai-hint={leadershipImages.mostafa.imageHint} />
                                        <AvatarFallback>MK</AvatarFallback>
                                    </Avatar>
                                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-all duration-300 rounded-full flex items-center justify-center">
                                        <ZoomIn className="text-white opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="p-0 border-0 max-w-fit">
                                <Image src={leadershipImages.mostafa.imageUrl} alt={leadershipImages.mostafa.description} width={600} height={600} className="rounded-lg" />
                            </DialogContent>
                        </Dialog>
                    )}
                     <h3 className="text-xl md:text-2xl font-bold text-black">أ. مصطفي قطامش</h3>
                     <p className="text-base md:text-lg text-muted-foreground">رئيس اتحاد طلاب تحيا مصر</p>
                     <div className="flex justify-center flex-wrap gap-2 mt-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="flex-grow md:flex-grow-0">
                                    <MessageCircle className="mr-2 h-4 w-4" />
                                    تواصل
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem asChild>
                                    <a href="mailto:mustafakatamesh70@gmail.com">
                                        <Mail className="ml-2 h-4 w-4" />
                                        <span>بريد إلكتروني</span>
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <a href="tel:01097096401">
                                        <Phone className="ml-2 h-4 w-4" />
                                        <span>اتصال هاتفي</span>
                                    </a>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
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
                                        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-all duration-300 rounded-full flex items-center justify-center">
                                            <ZoomIn className="text-white opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="p-0 border-0 max-w-fit">
                                    <Image src={leadershipImages.islam.imageUrl} alt={leadershipImages.islam.description} width={600} height={600} className="rounded-lg" />
                                </DialogContent>
                            </Dialog>
                        )}
                        <div className="text-center md:text-right flex-1">
                             <h3 className="text-xl md:text-2xl font-bold text-black">مهندس. اسلام فارس عبد الجليل</h3>
                             <p className="text-base md:text-lg text-muted-foreground mb-4">رئيس اللجنة المركزية للتنظيم</p>
                             <div className="text-sm md:text-base space-y-1">
                                 <p>🎂 <b className="font-semibold text-primary">العمر:</b> 25 سنة</p>
                                 <p>🎓 <b className="font-semibold text-primary">المؤهل:</b> بكالوريوس هندسة مدنية</p>
                                 <p>📍 <b className="font-semibold text-primary">محل الميلاد:</b> محافظة الجيزة</p>
                             </div>
                        </div>
                    </div>
                     <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isIslamExpanded ? 'max-h-screen' : 'max-h-0'}`}>
                         <div className="mt-4 pt-4 border-t text-sm md:text-base leading-relaxed space-y-3">
                             <p>المهندس إسلام فارس، ابن الجيزة، قائد شاب عنده 25 سنة، ورئيس اللجنة المركزية للتنظيم في اتحاد طلاب تحيا مصر. بخطوات واثقة، وتفكير هندسي راقي، أثبت إن القيادة مش مجرد منصب، دي مسؤولية وروح.</p>
                             <p>إسلام بيقود فريق كبير بروح واحدة، بيعرف يوزّع المهام صح، ويحط الجداول الزمنية بحكمة، ويدير الوقت كأنه كنز. في المواقف الصعبة بياخد القرار بسرعة وثبات، وفي لحظات التحدي بيفكر بطريقة مختلفة ويبدع في الحلول.</p>
                             <p>هو بطبعه محفّز، بيزرع في فريقه الحماس، ويدفعهم يشتغلوا كأنهم قلب واحد. عنده مهارات تفاوض وإقناع، وبيعرف يبني علاقات قوية مع كل اللجان، بيجمع بين قوة الشخصية ولباقة الأسلوب ومرونة التعامل.</p>
                             <p>التزامه وانضباطه سر نجاحه، وتحليله العميق وإبداعه طريقته عشان يقدّم فعاليات مختلفة ومميزة. قائد مؤمن إن التنظيم فن، وإن الشغل الجماعي هو أقصر طريق للنجاح.</p>
                         </div>
                    </div>
                    <div className="flex justify-center flex-wrap gap-2 mt-4">
                        <Button onClick={() => setIsIslamExpanded(!isIslamExpanded)} variant="outline" className="flex-grow md:flex-grow-0">
                            {isIslamExpanded ? 'عرض أقل' : 'اقرأ المزيد'}
                            {isIslamExpanded ? <ChevronUp className="mr-2 h-4 w-4" /> : <ChevronDown className="mr-2 h-4 w-4" />}
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="flex-grow md:flex-grow-0">
                                    <MessageCircle className="mr-2 h-4 w-4" />
                                    تواصل
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem asChild>
                                    <a href="mailto:islamfares255@gmail.com">
                                        <Mail className="ml-2 h-4 w-4" />
                                        <span>بريد إلكتروني</span>
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <a href="tel:01141800053">
                                        <Phone className="ml-2 h-4 w-4" />
                                        <span>اتصال هاتفي</span>
                                    </a>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
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
                                            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-all duration-300 rounded-full flex items-center justify-center">
                                                <ZoomIn className="text-white opacity-70 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
                                            </div>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="p-0 border-0 max-w-fit">
                                        <Image src={leadershipImages.reem.imageUrl} alt={leadershipImages.reem.description} width={600} height={600} className="rounded-lg" />
                                    </DialogContent>
                                </Dialog>
                            )}
                            <div className="text-center sm:text-right flex-1">
                                <h3 className="text-lg md:text-xl font-bold text-black">ريـــم مـنصــــور الــفقــي</h3>
                                <p className="text-sm md:text-md text-muted-foreground mb-4">نائب رئيس اللجنة المركزية للتنظيم</p>
                                <div className="text-xs md:text-sm space-y-1">
                                    <p>🎂 <b className="font-semibold text-primary">العمر:</b> 20 سنة</p>
                                    <p>🎓 <b className="font-semibold text-primary">المؤهل:</b> ليسانس لغات وترجمة</p>
                                    <p>📍 <b className="font-semibold text-primary">محل الميلاد:</b> محافظة الغربية</p>
                                </div>
                            </div>
                        </div>
                        <div className={`flex-grow transition-all duration-500 ease-in-out overflow-hidden ${isReemExpanded ? 'max-h-screen' : 'max-h-0'}`}>
                             <div className="text-sm md:text-base leading-relaxed pt-4 border-t mt-4">
                                <p>ريم مثال حي للشباب الطموح اللي بيقدر يحول أي تحدي لفرصة نجاح. من أهم إنجازاتها ومسؤولياتها:</p>
                                <ul className="list-disc list-inside space-y-2 mt-2">
                                    <li>بدأت رحلتها في الاتحاد من 6 أكتوبر 2022، وأثبتت نفسها كقائدة شابة بإصرار وحب للتجربة.</li>
                                    <li>نائب رئيس اللجنة المركزية للتنظيم.</li>
                                    <li>رئيس اتحاد المعهد العالي للغات في 6 أكتوبر للسنة الدراسية 2024/2025.</li>
                                    <li>معروفة بشخصيتها القيادية، احترامها، وتنظيمها لوقتها، مع مهارات تواصل عالية.</li>
                                    <li>شغالة حاليًا في كول سنتر، وده زوّد خبرتها العملية في التعامل مع الناس، إدارة المواقف، والمرونة تحت الضغط.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-center flex-wrap gap-2 mt-auto pt-4">
                            <Button onClick={() => setIsReemExpanded(!isReemExpanded)} variant="outline" className="flex-grow md:flex-grow-0">
                                {isReemExpanded ? 'عرض أقل' : 'اقرأ المزيد'}
                                {isReemExpanded ? <ChevronUp className="mr-2 h-4 w-4" /> : <ChevronDown className="mr-2 h-4 w-4" />}
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="flex-grow md:flex-grow-0">
                                        <MessageCircle className="mr-2 h-4 w-4" />
                                        تواصل
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem asChild>
                                        <a href="mailto:reemmansour7120@gmail.com">
                                            <Mail className="ml-2 h-4 w-4" />
                                            <span>بريد إلكتروني</span>
                                        </a>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <a href="tel:01270151360">
                                            <Phone className="ml-2 h-4 w-4" />
                                            <span>اتصال هاتفي</span>
                                        </a>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
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
                                            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-all duration-300 rounded-full flex items-center justify-center">
                                                <ZoomIn className="text-white opacity-70 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
                                            </div>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="p-0 border-0 max-w-fit">
                                        <Image src={leadershipImages.ahmed.imageUrl} alt={leadershipImages.ahmed.description} width={600} height={600} className="rounded-lg" />
                                    </DialogContent>
                                </Dialog>
                            )}
                            <div className="text-center sm:text-right flex-1">
                                <h3 className="text-lg md:text-xl font-bold text-black">احمد حسن عبدالرحيم</h3>
                                <p className="text-sm md:text-md text-muted-foreground mb-4">نائب رئيس اللجنة المركزية للتنظيم</p>
                                <div className="text-xs md:text-sm space-y-1">
                                    <p>🎂 <b className="font-semibold text-primary">العمر:</b> 22 سنة</p>
                                    <p>🎓 <b className="font-semibold text-primary">المؤهل:</b> بكالوريوس تجارة</p>
                                    <p>📍 <b className="font-semibold text-primary">محل الميلاد:</b> السعودية</p>
                                </div>
                            </div>
                        </div>
                        <div className={`flex-grow transition-all duration-500 ease-in-out overflow-hidden ${isAhmedExpanded ? 'max-h-screen' : 'max-h-0'}`}>
                            <div className="text-sm md:text-base leading-relaxed pt-4 border-t mt-4">
                                <p>أحمد مش بس قائد، ده كمان العقل المدبر ورا التكنولوجيا 💻 في الاتحاد. من أهم الحاجات اللي عملها:</p>
                                <ul className="list-disc list-inside space-y-2 mt-2">
                                    <li>دخل التكنولوجيا الحديثة في التنظيم، من الدعوات الإلكترونية وتسجيل الحضور، لحد استخراج الشهادات أونلاين.</li>
                                    <li>بيعرف يوازن بين الشغل الرسمي واللمسة الإنسانية، فهو صاحب فكرة التهنئة بأعياد الميلاد 🎂.</li>
                                    <li>ليه دور أساسي في إدارة وتنظيم فعاليات الاتحاد على مستوى الجمهورية عشان تظهر بأحسن صورة.</li>
                                    <li>صمم المساعد الذكي اللي بتتكلم معاه دلوقتي، وساب بصمة مبتكرة تتجاوز مجرد الإنجازات التنظيمية ✨🚀.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-center flex-wrap gap-2 mt-auto pt-4">
                            <Button onClick={() => setIsAhmedExpanded(!isAhmedExpanded)} variant="outline" className="flex-grow md:flex-grow-0">
                                {isAhmedExpanded ? 'عرض أقل' : 'اقرأ المزيد'}
                                {isAhmedExpanded ? <ChevronUp className="mr-2 h-4 w-4" /> : <ChevronDown className="mr-2 h-4 w-4" />}
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="flex-grow md:flex-grow-0">
                                        <MessageCircle className="mr-2 h-4 w-4" />
                                        تواصل
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem asChild>
                                        <a href="mailto:ahmedhassan.p33@gmail.com">
                                            <Mail className="ml-2 h-4 w-4" />
                                            <span>بريد إلكتروني</span>
                                        </a>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <a href="tel:01017841215">
                                            <Phone className="ml-2 h-4 w-4" />
                                            <span>اتصال هاتفي</span>
                                        </a>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
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
                                        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-all duration-300 rounded-full flex items-center justify-center">
                                            <ZoomIn className="text-white opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="p-0 border-0 max-w-fit">
                                    <Image src={leadershipImages.hanin.imageUrl} alt={leadershipImages.hanin.description} width={600} height={600} className="rounded-lg" />
                                </DialogContent>
                            </Dialog>
                        )}
                        <div className="text-center">
                            <h3 className="text-lg md:text-xl font-bold text-black">حـنيـن اســلام مـبـــروك</h3>
                            <p className="text-sm md:text-md text-muted-foreground">نائب رئيس اللجنة المركزية للتنظيم للمتابعة</p>
                        </div>
                    </div>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isHaninExpanded ? 'max-h-screen' : 'max-h-20 sm:max-h-24'}`}>
                        <p className="mt-4 pt-4 border-t text-center max-w-2xl mx-auto text-sm md:text-base leading-relaxed">حنين مثال للبنت القيادية اللي عارفة قيمة الالتزام والمتابعة الدقيقة. معروفة بشخصيتها الهادية، وحرصها الدايم إنها تتابع كل تفصيلة صغيرة قبل الكبيرة، عشان تضمن إن الشغل يطلع بأحسن صورة. بتتميز إنها منظمة، عندها مرونة في التعامل، وبتعرف توازن بين الحزم والروح الطيبة. حنين مؤمنة إن النجاح مش بس فكرة أو خطة… النجاح هو متابعة مستمرة عشان كل خطوة تتنفذ صح.</p>
                    </div>
                     <div className="flex justify-center flex-wrap gap-2 mt-4">
                        <Button onClick={() => setHaninExpanded(!isHaninExpanded)} variant="outline" className="flex-grow md:flex-grow-0">
                            {isHaninExpanded ? 'عرض أقل' : 'اقرأ المزيد'}
                            {isHaninExpanded ? <ChevronUp className="mr-2 h-4 w-4" /> : <ChevronDown className="mr-2 h-4 w-4" />}
                        </Button>
                         <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="flex-grow md:flex-grow-0">
                                    <MessageCircle className="mr-2 h-4 w-4" />
                                    تواصل
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem asChild>
                                    <a href="mailto:haneenislam8132003@gmail.com">
                                        <Mail className="ml-2 h-4 w-4" />
                                        <span>بريد إلكتروني</span>
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <a href="tel:01018200583">
                                        <Phone className="ml-2 h-4 w-4" />
                                        <span>اتصال هاتفي</span>
                                    </a>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </section>
    );
}
