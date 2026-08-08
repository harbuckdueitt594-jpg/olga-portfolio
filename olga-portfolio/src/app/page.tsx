import { FilmGrain } from "@/components/FilmGrain";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { TrustBar } from "@/components/TrustBar";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <FilmGrain />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Process />
        <TrustBar />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
