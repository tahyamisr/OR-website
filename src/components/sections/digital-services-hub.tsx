import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, ArrowUpRight, CheckSquare, Mail } from "lucide-react";

const services = [
  {
    title: "'Tahya Misr' Invitation Bot",
    description: "Generate and manage event invitations seamlessly with our dedicated Telegram bot.",
    icon: Mail,
    link: "https://t.me/invite_tahyamisrbot",
    cta: "Open Invitation Bot",
  },
  {
    title: "Attendance & Certificate Bot",
    description: "Register attendance and receive digital participation certificates instantly.",
    icon: CheckSquare,
    link: "https://t.me/certificate_tahyamisr1bot",
    cta: "Open Certificate Bot",
  },
];

export default function DigitalServicesHub() {
  return (
    <section id="digital-services" className="space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline text-primary">
          Digital Services Hub
        </h2>
        <p className="text-muted-foreground md:text-xl/relaxed max-w-3xl mx-auto">
          Access our suite of digital tools designed to streamline event management and participation.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-start gap-4">
                 <div className="bg-primary/10 p-3 rounded-full">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                  <CardDescription className="mt-1">{service.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex items-end">
              <Button asChild className="w-full" variant="outline">
                <a href={service.link} target="_blank" rel="noopener noreferrer">
                  {service.cta}
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
