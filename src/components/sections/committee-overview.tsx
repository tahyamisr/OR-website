import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark, Target, History } from "lucide-react";

export default function CommitteeOverview() {
  return (
    <section id="overview" className="space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline text-primary">
          حول اللجنة المركزية
        </h2>
        <p className="text-muted-foreground md:text-xl/relaxed max-w-3xl mx-auto">
          تعرف على مهمتنا الأساسية وتاريخنا التأسيسي والهيكل التنظيمي الذي يدفع نجاحنا.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="font-headline text-xl">مهمتنا</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              تمكين المجتمعات من خلال التنظيم الاستراتيجي والتنفيذ الفعال للفعاليات وتعزيز ثقافة القيادة والتعاون. نهدف إلى أن نكون العمود الفقري للمبادرات المؤثرة.
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <History className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="font-headline text-xl">تاريخنا</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              تأسست لجنتنا على مبادئ النزاهة والخدمة، وقد نمت من مجموعة صغيرة من أصحاب الرؤى إلى شبكة على مستوى الدولة مكرسة لتنظيم ودعم الفعاليات والبرامج الرئيسية.
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Landmark className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="font-headline text-xl">هيكلنا التنظيمي</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              يتم تنظيم لجنتنا في لجان فرعية متخصصة، يقود كل منها أعضاء من ذوي الخبرة، مما يضمن الإدارة الفعالة للخدمات اللوجستية والخدمات الرقمية وتنسيق الأعضاء.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
