import Section from "../ui/Section";
import Card from "../ui/Card";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Adobe",
  "Oracle",
  "Uber",
  "Flipkart",
  "Atlassian",
];

const Companies = () => {
  return (
    <Section
      title="Top Companies"
      subtitle="Practice questions frequently asked by leading companies."
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {companies.map((company) => (
          <Card key={company}>
            <div className="flex justify-center items-center h-20">
              <h3 className="text-xl font-semibold text-slate-200">
                {company}
              </h3>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Companies;