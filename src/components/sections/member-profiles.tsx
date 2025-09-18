import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const members = [
  {
    id: "islam-fares",
    name: "Islam Fares",
    role: "Head of Central Committee",
    description: "Leads the overall strategy and vision of the committee, ensuring all operations align with our mission.",
  },
  {
    id: "reem-mansour",
    name: "Reem Mansour",
    role: "Deputy Head",
    description: "Supports the Head of Committee and oversees inter-departmental coordination and special projects.",
  },
  {
    id: "ahmed-hassan",
    name: "Ahmed Hassan",
    role: "Head of Logistics",
    description: "Manages all logistical aspects of events, from venue planning to on-site execution.",
  },
  {
    id: "hanin-islam",
    name: "Hanin Islam",
    role: "Head of Digital Services",
    description: "Oversees the development and maintenance of all digital platforms and services.",
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
          Meet the Committee
        </h2>
        <p className="text-muted-foreground md:text-xl/relaxed max-w-3xl mx-auto">
          Our dedicated leadership team driving the committee's initiatives and success.
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
