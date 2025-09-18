import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark, Target, History } from "lucide-react";

export default function CommitteeOverview() {
  return (
    <section id="overview" className="space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline text-primary">
          About the Central Committee
        </h2>
        <p className="text-muted-foreground md:text-xl/relaxed max-w-3xl mx-auto">
          Learn about our core mission, foundational history, and organizational structure that drives our success.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="font-headline text-xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To empower communities through strategic organization, effective event execution, and fostering a culture of leadership and collaboration. We aim to be the backbone of impactful initiatives.
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <History className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="font-headline text-xl">Our History</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Founded on principles of integrity and service, our committee has grown from a small group of visionaries to a nationwide network dedicated to organizing and supporting key events and programs.
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Landmark className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="font-headline text-xl">Our Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our committee is organized into specialized sub-committees, each led by experienced members, ensuring efficient management of logistics, digital services, and member coordination.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
