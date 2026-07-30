import Container from "../ui/Container";

const stats = [
  {
    number: "500+",
    title: "Coding Problems",
  },
  {
    number: "25+",
    title: "Core Subjects",
  },
  {
    number: "50+",
    title: "Companies",
  },
  {
    number: "24/7",
    title: "Practice",
  },
];

const Stats = () => {
  return (
    <section className="py-20 border-y border-slate-800">

      <Container>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (

            <div
              key={item.title}
              className="text-center"
            >

              <h2 className="text-5xl font-black text-amber-500">

                {item.number}

              </h2>

              <p className="mt-3 text-slate-400">

                {item.title}

              </p>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
};

export default Stats;