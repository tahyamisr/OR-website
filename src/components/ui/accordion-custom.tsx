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
  collapsible?: "true" | "false";
};

export default function CustomAccordion({ items, type = "single", defaultValue, collapsible }: CustomAccordionProps) {
  const isCollapsible = collapsible === "true" || (type === "multiple" && collapsible !== "false") || (type === 'single' && collapsible !== 'false');

  const accordionProps: {
    type: "single" | "multiple";
    collapsible?: true;
    className: string;
    defaultValue?: string;
  } = {
    type: type,
    className: "w-full space-y-4",
    defaultValue: defaultValue
  };

  if (isCollapsible) {
    accordionProps.collapsible = true;
  }

  return (
    <Accordion {...accordionProps}>
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="card-custom rounded-lg overflow-hidden border-none">
          <AccordionTrigger className="accordion-trigger-custom w-full px-4 md:px-6 py-4 text-right flex justify-between items-center text-base md:text-lg font-bold hover:no-underline">
            <span className="text-right flex-1">{item.title}</span>
          </AccordionTrigger>
          <AccordionContent className="px-4 md:px-6 pb-6 text-sm md:text-base leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: item.content }} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
