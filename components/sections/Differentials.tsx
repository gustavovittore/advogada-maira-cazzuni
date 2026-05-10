import Image from "next/image";
import { differentiators } from "@/data/content";
import { ASSETS } from "@/constants/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Differentials() {
  return (
    <section className="relative isolate overflow-hidden bg-[#4A0001] py-16 text-white md:py-24">
      <Image
        src={ASSETS.justiceTexture}
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-30 object-cover object-[78%_50%] opacity-55 mix-blend-screen"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#4A0001_0%,rgba(74,0,1,0.95)_42%,rgba(74,0,1,0.72)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),transparent_42%,rgba(0,0,0,0.2))]" />

      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <SectionHeader
            eyebrow="Diferenciais"
            title="Presença firme para momentos que exigem cuidado."
            description="A comunicação é direta e humana para que você compreenda direitos, riscos e próximos passos sem se sentir perdido."
            inverse
          />
          <div className="mt-8 max-w-xl border-l border-[#D1AF66] pl-5 text-[17px] leading-8 text-white/78 md:text-xl md:leading-9">
            Técnica, sigilo e clareza caminham juntos para transformar um
            momento de pressão em uma condução mais consciente e organizada.
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {differentiators.map((item) => (
            <article
              key={item.title}
              className="border border-[#D1AF66]/32 bg-[#210001]/72 p-6 text-white shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur transition duration-300 hover:border-[#D1AF66]/75 hover:bg-[#2d0001]/80 md:p-7"
            >
              <span className="mb-5 block h-px w-12 bg-[#D1AF66]" />
              <h3 className="font-serif text-2xl leading-tight md:text-[1.7rem]">
                {item.title}
              </h3>
              <p className="mt-4 text-[17px] leading-8 text-white/76 md:text-lg">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
