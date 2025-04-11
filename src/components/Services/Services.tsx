import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Content as ServiceContent,
  ContentType,
} from "@/components/Services/Content";
import PageIdentifier from "../Home/page_identifier";

export default function Content() {
  return (
    <>

      <PageIdentifier tab_link="/services" title="Services" />

      <section className="max-w-6xl mx-auto px-4 py-16 bg-background">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Services
        </h2>
        <Accordion type="multiple" className="space-y-4">
          {ServiceContent.map((service: ContentType, index: number) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-2xl font-semibold">
                {service.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-1/3 object-cover rounded-sm"
                  />
                  <div className="px-20">
                    <p className="text-muted-foreground mb-2 text-sm">
                      {service.description}
                    </p>
                    <p className="text-base whitespace-pre-line">
                      {service.details}
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
