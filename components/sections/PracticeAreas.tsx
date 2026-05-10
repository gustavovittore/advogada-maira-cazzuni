import Image from "next/image";
import { practiceAreas } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function PracticeAreas() {
  return (
    <section id="atuacao" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Áreas de atuação"
          title="Atuação criminal estratégica em momentos decisivos"
          description="Uma defesa criminal bem conduzida começa com escuta, análise técnica e orientação clara sobre os caminhos possíveis para cada situação."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <article
              key={area.title}
              className="group relative overflow-hidden border border-[#e0cfad] bg-[#fbf8f3] p-7 shadow-[0_18px_48px_rgba(74,0,1,0.06)] transition duration-300 hover:-translate-y-1 hover:bg-white md:p-8"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[#D1AF66]" />
              <div className="mb-6 flex items-center gap-5">
                <Image
                  src={area.icon}
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 object-contain opacity-90"
                />
                <span className="h-px w-14 bg-[#D1AF66]/80" />
              </div>
              <h3 className="font-serif text-[1.8rem] leading-tight text-[#1C1917] md:text-3xl">
                {area.title}
              </h3>
              <p className="mt-5 text-[17px] leading-8 text-[#5f5650] md:text-lg">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
