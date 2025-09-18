import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const members = [
  {
    id: "islam-fares",
    name: "إسلام فارس",
    role: "رئيس اللجنة المركزية",
    description: "يقود الاستراتيجية والرؤية العامة للجنة، ويضمن توافق جميع العمليات مع مهمتنا.",
  },
  {
    id: "reem-mansour",
    name: "ريم منصور",
    role: "نائب الرئيس",
    description: "تدعم رئيس اللجنة وتشرف على التنسيق بين الإدارات والمشاريع الخاصة.",
  },
  {
    id: "ahmed-hassan",
    name: "أحمد حسن",
    role: "رئيس الخدمات اللوجستية",
    description: "يدير جميع الجوانب اللوجستية للفعاليات، من تخطيط الأماكن إلى التنفيذ في الموقع.",
  },
  {
    id: "hanin-islam",
    name: "حنين إسلام",
    role: "رئيسة الخدمات الرقمية",
    description: "تشرف على تطوير وصيانة جميع المنصات والخدمات الرقمية.",
  },
];

export default function MemberProfiles() {
  const getImageForMember = (id: string) => {
    return PlaceHolderImages.find((img) => img.id === id);
  };

  return (
    <section id="members" className="space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline text-primary">
          تعرف على اللجنة
        </h2>
        <p className="text-muted-foreground md:text-xl/relaxed max-w-3xl mx-auto">
          فريق قيادتنا المتفاني الذي يقود مبادرات ونجاح اللجنة.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((member) => {
          const memberImage = getImageForMember(member.id);
          return (
            <Card key={member.name} className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6 flex flex-col items-center gap-4">
                <Avatar className="h-24 w-24 border-2 border-primary/50">
                  {memberImage && (
                    <Image
                      src={memberImage.imageUrl}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="object-cover"
                      data-ai-hint={memberImage.imageHint}
                    />
                  )}
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="font-headline text-lg">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mt-1 bg-primary/10 text-primary">{member.role}</Badge>
                </div>
                <CardDescription>{member.description}</CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
