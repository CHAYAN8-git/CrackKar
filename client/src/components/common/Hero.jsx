import Button from "../ui/Button";
import Container from "../ui/Container";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center">

      <Container>

        <div className="max-w-4xl">

          <p className="text-amber-400 font-semibold tracking-widest uppercase mb-4">
            Crack Interviews • Crack Companies
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">

            From Beginner

            <br />

            To

            <span className="text-amber-400"> Offer Letter.</span>

          </h1>

          <p className="text-slate-400 text-lg mt-8 max-w-2xl leading-8">

            Practice coding, master DSA, prepare Core Subjects,
            compete in contests and track your complete placement
            journey — all in one platform.

          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <Button>

              Start Cracking 🚀

            </Button>

            <Button className="bg-slate-800 text-white hover:bg-slate-700">

              Explore Problems

            </Button>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default Hero;