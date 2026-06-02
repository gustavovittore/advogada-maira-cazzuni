import Image from "next/image";
import { practiceAreas } from "@/data/content";

const wineIconFilter =
  "brightness(0) saturate(100%) invert(18%) sepia(32%) saturate(2947%) hue-rotate(327deg) brightness(66%) contrast(118%)";

export function PracticeAreas() {
  return (
    <section id="atuacao" className="bg-[#fffdfb] py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[960px] text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.34em] text-[#4A0001]">
            Áreas de atuação
          </p>
          <div className="mx-auto mt-5 flex max-w-[300px] items-center justify-center text-[#D1AF66]">
            <span className="h-px flex-1 bg-current" />
            <span className="mx-3 h-4 w-4 rotate-45 border border-current" />
            <span className="h-px flex-1 bg-current" />
          </div>
          <h2 className="mx-auto mt-6 max-w-[370px] font-serif text-[2.38rem] leading-[1.08] text-[#3B090A] sm:max-w-none sm:text-[3.85rem] sm:leading-[1.07] lg:text-[4.35rem]">
            Atuação criminal estratégica em momentos decisivos
          </h2>
          <div className="mx-auto my-6 h-3 w-20 border-b border-[#D1AF66]" />
          <p className="mx-auto max-w-[890px] text-[19px] leading-9 text-[#322b2b] md:text-[21px]">
            Uma defesa criminal bem conduzida começa com escuta, análise técnica
            e orientação clara sobre os caminhos possíveis para cada situação.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <article
              key={area.title}
              className="flex min-h-[326px] flex-col items-center border border-[#D1AF66]/48 bg-[#fffaf4] px-8 py-8 text-center shadow-[0_22px_68px_rgba(73,23,14,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#D1AF66] hover:bg-white md:px-10 md:py-9"
            >
              <Image
                src={area.icon}
                alt=""
                width={64}
                height={64}
                className="h-16 w-16 object-contain opacity-95"
                style={{ filter: wineIconFilter }}
              />
              <div className="my-6 flex w-full max-w-[175px] items-center justify-center text-[#D1AF66]">
                <span className="h-px flex-1 bg-current" />
                <span className="mx-3 h-3 w-3 rotate-45 border border-current" />
                <span className="h-px flex-1 bg-current" />
              </div>
              <h3 className="font-serif text-[1.9rem] leading-tight text-[#3B090A] md:text-[2.08rem]">
                {area.title}
              </h3>
              <p className="mt-5 text-[18px] leading-8 text-[#3f3938] md:text-[19px] md:leading-9">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
