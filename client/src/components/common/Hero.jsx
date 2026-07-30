import Button from "../ui/Button";
import Container from "../ui/Container";
import Badge from "../ui/Badge";

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center">

      <Container>

        <Badge>

          🚀 Crack Interviews. Crack Companies.

        </Badge>

        <h1 className="mt-8 text-6xl lg:text-8xl font-black tracking-tight leading-none">

          From Beginner

          <br />

          To

          <span className="text-amber-500">

            {" "}Offer Letter.

          </span>

        </h1>

        <p className="mt-8 max-w-2xl text-lg text-slate-400 leading-8">

          CrackKar is your complete placement preparation platform.

          Practice DSA.

          Master Core Subjects.

          Join contests.

          Track progress.

          Land your dream job.

        </p>

        <div className="flex flex-wrap gap-4 mt-10">

          <Button>

            Start Cracking →

          </Button>

          <Button className="bg-slate-800 text-white hover:bg-slate-700">

            Explore Problems

          </Button>

        </div>

      </Container>

    </section>
  );
};

export default Hero;