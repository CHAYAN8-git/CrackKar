import Card from "../ui/Card";
import Section from "../ui/Section";

const subjects = [
  "Operating System",
  "DBMS",
  "Computer Networks",
  "OOP",
  "SQL",
  "JavaScript",
];

const Subjects = () => {
  return (
    <Section
      title="Core Subjects"
      subtitle="Revise important CS fundamentals for interviews."
    >
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <Card key={subject}>
            <h3 className="text-xl font-semibold">
              {subject}
            </h3>

            <p className="mt-3 text-slate-400">
              Interview Notes • MCQs • Revision
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Subjects;