import Nav from "./components/nav";
import Hero from "./components/hero";
import Learning from "./components/learning";
import Features from "./components/features";
import Management from "./components/management";
import Learn from "./components/learn";
import Training from "./components/training";
import Cta from "./components/cta";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Nav/>
      <Hero/>
      <Learning/>
      <Features/>
      <Management/>
      <Learn/>
      <Training/>
      <Cta/>
      <Testimonials/>
      <Footer/>
    </main>
  );
}
