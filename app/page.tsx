import { About } from "@/components/sections/About";
import { Differentials } from "@/components/sections/Differentials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { Process } from "@/components/sections/Process";
import { UrgentSituations } from "@/components/sections/UrgentSituations";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-[81px] md:pt-[105px]">
      <Header />
      <Hero />
      <UrgentSituations />
      <About />
      <PracticeAreas />
      <Differentials />
      <Process />
      <GoogleReviews />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
