'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type AccordionItemData = {
  title: string;
  content: string;
};

type CustomAccordionProps = {
  items: AccordionItemData[];
  type?: "single" | "multiple";
  defaultValue?: string;
};

export default function CustomAccordion({ items, type = "single", defaultValue }: CustomAccordionProps) {
  return (
    <Accordion type={type} className="w-full space-y-4" defaultValue={defaultValue}>
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="card-custom rounded-lg overflow-hidden border-none">
          <AccordionTrigger className="accordion-trigger-custom w-full px-4 md:px-6 py-4 text-right flex justify-between items-center text-base md:text-lg font-bold hover:no-underline">
            <span className="text-right">{item.title}</span>
          </AccordionTrigger>
          <AccordionContent className="px-4 md:px-6 pb-6 text-sm md:text-base leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: item.content }} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
