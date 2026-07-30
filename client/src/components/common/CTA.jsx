import Button from "../ui/Button";
import Container from "../ui/Container";

const CTA = () => {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10 md:p-16 text-center">

          <h2 className="text-4xl md:text-5xl font-bold">

            Ready To Crack Your Dream Company?

          </h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto leading-8">

            Join thousands of students preparing for placements with
            structured DSA, Core Subjects and Contests.

          </p>

          <Button className="mt-10">

            Start Cracking →

          </Button>

        </div>
      </Container>
    </section>
  );
};

export default CTA;