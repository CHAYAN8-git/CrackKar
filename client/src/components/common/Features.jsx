import {
  Code2,
  BookOpen,
  Trophy,
  Brain,
  BarChart3,
  Target,
} from "lucide-react";

import Card from "../ui/Card";
import Section from "../ui/Section";

const features = [
  {
    icon: Code2,
    title: "Practice Problems",
    desc: "Solve curated coding questions from easy to hard.",
  },
  {
    icon: BookOpen,
    title: "DSA Sheets",
    desc: "Follow structured sheets to stay consistent.",
  },
  {
    icon: Trophy,
    title: "Daily Contests",
    desc: "Compete with others and improve every day.",
  },
  {
    icon: Brain,
    title: "Core Subjects",
    desc: "OS, DBMS, CN, OOP and Interview Notes.",
  },
  {
    icon: Target,
    title: "Company Prep",
    desc: "Prepare for Amazon, Google, Microsoft and more.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    desc: "Track your complete placement journey.",
  },
];

const Features = () => {
  return (
    <Section
      title="Everything You Need"
      subtitle="One platform to prepare for coding interviews."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card key={feature.title}>
              <Icon
                size={34}
                className="text-amber-400"
              />

              <h3 className="mt-6 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-slate-400 leading-7">
                {feature.desc}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default Features;