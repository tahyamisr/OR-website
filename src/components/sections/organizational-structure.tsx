import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const StructureNode = ({ name, role, className }: { name: string; role: string; className?: string }) => (
  <div className={cn("flex flex-col items-center", className)}>
    <Card className="p-4 text-center shadow-md w-52 bg-card hover:shadow-lg transition-shadow">
      <CardTitle className="text-base font-headline text-primary">{name}</CardTitle>
      <CardDescription>{role}</CardDescription>
    </Card>
  </div>
);

export default function OrganizationalStructure() {
  return (
    <section id="structure" className="space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline text-primary">
          الهيكل التنظيمي
        </h2>
        <p className="text-muted-foreground md:text-xl/relaxed max-w-3xl mx-auto">
          تمثيل مرئي للتسلسل الهرمي للجنة وأدوار القيادة لدينا.
        </p>
      </div>
      <div className="flex flex-col items-center w-full overflow-x-auto py-4">
        <div className="flex flex-col items-center" style={{ minWidth: '700px' }}>
          {/* Top Level Node */}
          <StructureNode name="إسلام فارس" role="رئيس اللجنة المركزية" />

          {/* Vertical connector */}
          <div className="w-px h-12 bg-border my-4" />

          {/* Horizontal connector line */}
          <div className="w-full max-w-2xl h-px bg-border relative">
            {/* Downward T-connector from middle */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-4 bg-border" />
          </div>

          {/* Sub-nodes container */}
          <div className="flex justify-around w-full max-w-3xl mt-4">
            {/* Sub-node 1 */}
            <div className="flex flex-col items-center">
              <div className="w-px h-8 bg-border" />
              <StructureNode name="ريم منصور" role="نائب الرئيس" />
            </div>
            {/* Sub-node 2 */}
            <div className="flex flex-col items-center">
              <div className="w-px h-8 bg-border" />
              <StructureNode name="أحمد حسن" role="رئيس الخدمات اللوجستية" />
            </div>
            {/* Sub-node 3 */}
            <div className="flex flex-col items-center">
              <div className="w-px h-8 bg-border" />
              <StructureNode name="حنين إسلام" role="رئيسة الخدمات الرقمية" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
