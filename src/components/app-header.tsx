import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Briefcase } from "lucide-react";

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold font-headline text-foreground">
              Central Committee Connect
            </h1>
          </div>
          <Button variant="outline" className="hidden sm:flex">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}
