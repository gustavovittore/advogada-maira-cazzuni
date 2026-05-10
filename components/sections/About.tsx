import Image from "next/image";
import { ASSETS, CONTACT } from "@/constants/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function About() {
  return (
    <section
      id="sobre"
      className="relative isolate overflow-hidden bg-[#4A0001] py-16 text-white md:py-24"
    >
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#4A0001_0%,#260001_54%,#120000_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(90deg,rgba(209,175,102,0.16)_1px,transparent_1px),linear-gradient(0deg,rgba(209,175,102,0.08)_1px,transparent_1px)] [background-size:90px_90px]" />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Sobre Maíra Cazzuni"
            title="Defesa criminal com técnica, firmeza e orientação humana."
            description="Maíra Cazzuni é advogada criminalista, inscrita na OAB/RS 115.945, com atuação em Tribunal do Júri, Execução Penal, acompanhamento de prisão em flagrante e ações criminais."
            inverse
          />

          <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-white/78 md:text-lg md:leading-9">
            <p>
              Sua atuação combina estudo minucioso, postura firme e leitura
              sensível do contexto para orientar pessoas e famílias em momentos
              de medo, pressão e incerteza.
            </p>
            <p>
              Cada caso é analisado a partir dos fatos, dos documentos e das
              necessidades concretas de quem busca uma defesa responsável e bem
              estruturada em Erechim/RS e região.
            </p>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            <div className="border border-[#D1AF66]/40 bg-white/[0.06] p-5 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D1AF66]">
                OAB
              </p>
              <p className="mt-2 font-serif text-2xl text-white">
                {CONTACT.oab}
              </p>
            </div>
            <div className="border border-[#D1AF66]/40 bg-white/[0.06] p-5 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D1AF66]">
                Cidade
              </p>
              <p className="mt-2 font-serif text-2xl text-white">
                {CONTACT.city}
              </p>
            </div>
            <div className="border border-[#D1AF66]/40 bg-white/[0.06] p-5 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D1AF66]">
                Atuação
              </p>
              <p className="mt-2 font-serif text-2xl text-white">
                Criminal
              </p>
            </div>
          </div>

          <div className="mt-9">
            <WhatsAppButton />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute -right-4 top-6 h-full w-full border border-[#D1AF66]/60 md:-right-6 md:top-8" />
          <div className="absolute -left-4 -top-4 h-full w-full bg-[#D1AF66]/12 md:-left-6 md:-top-6" />
          <div className="relative overflow-hidden border border-[#D1AF66]/30 bg-[#180001] shadow-[0_34px_100px_rgba(0,0,0,0.4)]">
            <Image
              src={ASSETS.aboutPhoto}
              alt="Retrato profissional de Maíra Cazzuni"
              width={1127}
              height={1396}
              sizes="(max-width: 1024px) 92vw, 560px"
              className="aspect-[4/5] w-full object-cover object-[52%_18%] saturate-[0.96]"
            />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#120000]/92 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
