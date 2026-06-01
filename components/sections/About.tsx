import Image from "next/image";
import { ASSETS, CONTACT } from "@/constants/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function About() {
  return (
    <section
      id="sobre"
      className="relative isolate overflow-hidden bg-[#210000] py-16 text-white md:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(111,9,9,0.65),transparent_33%),linear-gradient(135deg,#5B0506_0%,#2D0001_54%,#140000_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.18] [background-image:linear-gradient(90deg,rgba(209,175,102,0.11)_1px,transparent_1px),linear-gradient(0deg,rgba(209,175,102,0.07)_1px,transparent_1px)] [background-size:118px_118px]" />

      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 md:px-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:px-16">
        <div className="max-w-[650px]">
          <div className="mb-8 flex items-center gap-6">
            <p className="shrink-0 text-[12px] font-bold uppercase tracking-[0.34em] text-[#D1AF66]">
              Sobre Maíra Cazzuni
            </p>
            <span className="hidden h-px flex-1 bg-[#D1AF66]/55 sm:block" />
            <span className="hidden h-3 w-3 rotate-45 border border-[#D1AF66] sm:block" />
          </div>

          <h2 className="max-w-[620px] font-serif text-[2.75rem] leading-[1.12] text-white sm:text-[3.35rem] lg:text-[3.72rem]">
            Defesa criminal com técnica, firmeza e orientação{" "}
            <span className="text-[#D1AF66]">humana.</span>
          </h2>

          <div className="my-8 flex items-center gap-0 text-[#D1AF66]">
            <span className="h-px w-24 bg-current" />
            <span className="h-3 w-3 rotate-45 border border-current" />
          </div>

          <div className="space-y-6 text-[19px] leading-[2.04] text-white/82 md:text-[21px]">
            <p>
              Maíra Cazzuni é advogada criminalista, inscrita na OAB/RS 115.945,
              com atuação em Tribunal do Júri, Execução Penal, acompanhamento de
              prisão em flagrante e ações criminais.
            </p>
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
            {[
              ["OAB", CONTACT.oab.replace(" ", "\n")],
              ["Cidade", CONTACT.city],
              ["Atuação", "Criminal"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="min-h-[112px] border border-[#D1AF66]/58 bg-[#4A0001]/24 p-5"
              >
                <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-[#D1AF66]">
                  {label}
                </p>
                <p className="mt-4 whitespace-pre-line font-serif text-[1.34rem] leading-tight text-white md:text-[1.52rem]">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9">
            <WhatsAppButton className="min-h-[64px] min-w-[360px] max-sm:w-full max-sm:min-w-0" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[680px]">
          <div className="absolute -right-4 -top-7 h-[calc(100%+56px)] w-[calc(100%-20px)] border border-[#D1AF66]/78 md:-right-7" />
          <div className="absolute -right-9 -top-2 h-[calc(100%+28px)] w-[calc(100%-12px)] border border-[#D1AF66]/50 md:-right-12" />
          <div className="absolute -left-3 -top-4 h-12 w-12 border-l border-t border-[#D1AF66] md:-left-6" />
          <div className="absolute -bottom-4 -right-3 h-12 w-12 border-b border-r border-[#D1AF66] md:-right-6" />

          <div className="relative aspect-[1/1.14] overflow-hidden border border-[#D1AF66]/72 bg-[#160000] shadow-[0_34px_110px_rgba(0,0,0,0.42)]">
            <Image
              src={ASSETS.aboutBackground}
              alt=""
              fill
              sizes="(max-width: 1024px) 92vw, 660px"
              className="object-cover object-center opacity-82"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.2),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.42))]" />
            <Image
              src={ASSETS.aboutPhoto}
              alt="Retrato profissional de Maíra Cazzuni"
              width={796}
              height={1356}
              sizes="(max-width: 1024px) 80vw, 560px"
              className="absolute bottom-[-24%] left-1/2 h-[125%] w-auto max-w-none -translate-x-[39%] object-contain drop-shadow-[0_24px_70px_rgba(0,0,0,0.42)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
