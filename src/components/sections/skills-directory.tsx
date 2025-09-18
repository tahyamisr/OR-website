import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, HeartHandshake, Puzzle, MessageSquare, Clock, Star } from "lucide-react";

const skills = [
  { name: "Communication", icon: MessageSquare },
  { name: "Problem-Solving", icon: Puzzle },
  { name: "Time Management", icon: Clock },
];

const qualities = [
  { name: "Patience", icon: HeartHandshake },
  { name: "Adaptability", icon: Star },
  { name: "Integrity", icon: BrainCircuit },
];

export default function SkillsDirectory() {
  return (
    <section id="skills" className="space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline text-primary">
          Member Skills & Qualities
        </h2>
        <p className="text-muted-foreground md:text-xl/relaxed max-w-3xl mx-auto">
          The essential skills and personal qualities that define our committee members.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center gap-2">
              <BrainCircuit className="h-6 w-6 text-accent" />
              Essential Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {skills.map((skill) => (
                <li key={skill.name} className="flex items-center gap-3">
                  <skill.icon className="h-5 w-5 text-primary" />
                  <span className="text-foreground">{skill.name}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center gap-2">
              <HeartHandshake className="h-6 w-6 text-accent" />
              Personal Qualities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {qualities.map((quality) => (
                <li key={quality.name} className="flex items-center gap-3">
                  <quality.icon className="h-5 w-5 text-primary" />
                  <span className="text-foreground">{quality.name}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
