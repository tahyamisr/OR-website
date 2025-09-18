import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, Server, Users } from "lucide-react";

const guidelines = [
  {
    value: "item-1",
    title: "الفعاليات الميدانية (غير المتصلة بالإنترنت)",
    icon: Users,
    content: "تتطلب الفعاليات الميدانية تخطيطًا دقيقًا. قم بتأمين مكان مسبقًا، ورتب التصاريح اللازمة، ونسق مع السلطات المحلية. خطط للأمن والخدمات الطبية واللافتات الكافية. يجب أن يكون التسجيل في الموقع فعالاً، مع وجود نقاط دخول وخروج واضحة.",
  },
  {
    value: "item-2",
    title: "الفعاليات الرقمية (عبر الإنترنت)",
    icon: Server,
    content: "بالنسبة للفعاليات عبر الإنترنت، اختر منصة بث موثوقة. اختبر جميع المعدات، بما في ذلك الكاميرات والميكروفونات، مسبقًا. روّج للفعالية عبر القنوات الرقمية وأدر عمليات التسجيل عبر الإنترنت. تفاعل مع جمهورك من خلال عناصر تفاعلية مثل جلسات الأسئلة والأجوبة والاستطلاعات.",
  },
  {
    value: "item-3",
    title: "اللوجستيات والتنسيق",
    icon: CheckCircle2,
    content: "أنشئ قائمة تحقق مفصلة لجميع الاحتياجات اللوجستية، من النقل والإقامة إلى التموين والمعدات التقنية. قم بتعيين أدوار محددة لأعضاء الفريق وأنشئ قنوات اتصال واضحة. تعتبر اجتماعات المتابعة المنتظمة ضرورية للبقاء على المسار الصحيح.",
  },
];

export default function EventPlanningGuide() {
  return (
    <section id="event-guide" className="space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline text-primary">
          دليل تخطيط الفعاليات
        </h2>
        <p className="text-muted-foreground md:text-xl/relaxed max-w-3xl mx-auto">
          إرشادات شاملة لتخطيط وتنفيذ الفعاليات الناجحة، سواء عبر الإنترنت أو في الميدان.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
          {guidelines.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className="text-lg font-headline hover:no-underline">
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-primary" />
                  <span>{item.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground pr-10">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
