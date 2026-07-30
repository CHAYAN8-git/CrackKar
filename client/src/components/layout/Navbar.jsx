import Logo from "../ui/Logo";
import Button from "../ui/Button";
import Container from "../ui/Container";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-[#0B1220]/90 backdrop-blur-md">

      <Container>

        <div className="h-20 flex justify-between items-center">

          <Logo />

          <div className="hidden lg:flex gap-10 text-slate-300">

            <a className="hover:text-white transition">

              Problems

            </a>

            <a className="hover:text-white transition">

              Sheets

            </a>

            <a className="hover:text-white transition">

              Subjects

            </a>

            <a className="hover:text-white transition">

              Contest

            </a>

          </div>

          <Button>

            Login

          </Button>

        </div>

      </Container>

    </nav>
  );
};

export default Navbar;