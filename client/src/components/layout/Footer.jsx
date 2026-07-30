import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-10">

      <Container>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-slate-400">

            © 2026 CrackKar

          </p>

          <p className="text-slate-500">

            From Beginner to Offer Letter.

          </p>

        </div>

      </Container>

    </footer>
  );
};

export default Footer;