import { Separator } from "@/components/ui/separator";

export default function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background">
      <Separator />
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {currentYear} Central Committee Connect. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
