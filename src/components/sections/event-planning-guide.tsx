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
    title: "Offline (Field) Events",
    icon: Users,
    content: "Field events require meticulous planning. Secure a venue well in advance, arrange for necessary permits, and coordinate with local authorities. Plan for security, medical services, and adequate signage. On-site registration should be efficient, with clear entry and exit points.",
  },
  {
    value: "item-2",
    title: "Online (Digital) Events",
    icon: Server,
    content: "For online events, choose a reliable streaming platform. Test all equipment, including cameras and microphones, beforehand. Promote the event across digital channels and manage registrations online. Engage your audience with interactive elements like Q&A sessions and polls.",
  },
  {
    value: "item-3",
    title: "Logistics & Coordination",
    icon: CheckCircle2,
    content: "Create a detailed checklist for all logistical needs, from transportation and accommodation to catering and technical equipment. Assign specific roles to team members and establish clear communication channels. Regular check-in meetings are crucial to stay on track.",
  },
];

export default function EventPlanningGuide() {
  return (
    <section id="event-guide" className="space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline text-primary">
          Event Planning Guide
        </h2>
        <p className="text-muted-foreground md:text-xl/relaxed max-w-3xl mx-auto">
          Comprehensive guidelines for planning and executing successful events, both online and offline.
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
              <AccordionContent className="text-base text-muted-foreground pl-10">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
