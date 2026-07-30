import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/common/Hero";
import Stats from "../../components/common/Stats";
import Features from "../../components/common/Features";
import Companies from "../../components/common/Companies";
import Sheets from "../../components/common/Sheets";
import Subjects from "../../components/common/Subjects";
import CTA from "../../components/common/CTA";
import Footer from "../../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <Stats />

      <Features />

      <Sheets />

      <Subjects />

      <Companies />

      <CTA />

      <Footer />
    </>
  );
};

export default Home;