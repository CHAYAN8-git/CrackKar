import Card from "../ui/Card";
import Button from "../ui/Button";
import Section from "../ui/Section";

const sheets = [
  {
    title: "A2Z DSA Sheet",
    desc: "Master DSA from basics to advanced.",
    problems: "474 Problems",
  },
  {
    title: "Blind 75",
    desc: "Most asked coding interview questions.",
    problems: "75 Problems",
  },
  {
    title: "Top Interview 150",
    desc: "Essential interview preparation sheet.",
    problems: "150 Problems",
  },
];

const Sheets = () => {
  return (
    <Section
      title="DSA Learning Paths"
      subtitle="Follow structured roadmaps and stay consistent."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {sheets.map((sheet) => (
          <Card key={sheet.title}>
            <span className="text-sm text-amber-400 font-semibold">
              {sheet.problems}
            </span>

            <h3 className="mt-4 text-2xl font-bold">
              {sheet.title}
            </h3>

            <p className="mt-4 text-slate-400 leading-7">
              {sheet.desc}
            </p>

            <Button className="mt-8 w-full">
              Start Learning
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Sheets;