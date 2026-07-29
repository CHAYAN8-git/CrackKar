import Button from "../ui/Button";
import Container from "../ui/Container";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-slate-700">

      <Container>

        <div className="h-20 flex items-center justify-between">

          <h1 className="text-2xl font-bold">

            🍪 CrackKar

          </h1>

          <div className="hidden md:flex items-center gap-8">

            <a href="#">Problems</a>

            <a href="#">Sheets</a>

            <a href="#">Subjects</a>

            <a href="#">Contest</a>

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