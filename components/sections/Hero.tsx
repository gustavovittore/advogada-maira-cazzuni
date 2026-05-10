import Image from "next/image";
import { ASSETS } from "@/constants/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const goldIconFilter =
  "brightness(0) saturate(100%) invert(76%) sepia(24%) saturate(822%) hue-rotate(3deg) brightness(89%) contrast(86%)";

const heroHighlights = [
  {
    text: "Atuação focada em direito criminal",
    lines: ["Atuação focada em", "direito criminal"],
    icon: ASSETS.icons.criminalFocus,
    iconClass: "h-16 w-16 lg:h-[66px] lg:w-[66px]",
  },
  {
    text: "Estratégia personalizada para cada caso",
    lines: ["Estratégia", "personalizada para", "cada caso"],
    icon: ASSETS.icons.customStrategy,
    iconClass: "h-14 w-14 lg:h-[58px] lg:w-[58px]",
  },
  {
    text: "Acompanhamento próximo e transparente",
    lines: ["Acompanhamento", "próximo e", "transparente"],
    icon: ASSETS.icons.closeFollowUp,
    iconClass: "h-14 w-14 lg:h-[58px] lg:w-[58px]",
  },
  {
    text: "Defesa técnica com responsabilidade",
    lines: ["Defesa técnica com", "responsabilidade"],
    icon: ASSETS.icons.responsibleDefense,
    iconClass: "h-16 w-16 lg:h-[66px] lg:w-[66px]",
  },
];

const trustPills = [
  {
    text: "Atendimento sigiloso",
    icon: ASSETS.icons.confidentialCare,
  },
  {
    text: "Atendimento humanizado",
    icon: ASSETS.icons.humanCare,
  },
];

export function Hero() {
  return (
    <section
      id="topo"
      className="relative isolate overflow-hidden bg-[#160000] text-white"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_73%_28%,rgba(107,17,14,0.52),transparent_31%),radial-gradient(circle_at_18%_30%,rgba(98,9,8,0.48),transparent_35%),linear-gradient(135deg,#050000_0%,#1A0000_31%,#2B0202_58%,#070000_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.34),transparent_44%,rgba(0,0,0,0.22)),linear-gradient(180deg,rgba(0,0,0,0.24),transparent_42%,rgba(0,0,0,0.3))]" />
      <div className="absolute inset-0 -z-10 opacity-[0.1] [background-image:linear-gradient(90deg,rgba(209,175,102,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(209,175,102,0.08)_1px,transparent_1px)] [background-size:92px_92px]" />
      <div className="absolute right-0 top-20 -z-10 hidden h-[74%] w-[30%] border-l border-[#D1AF66]/16 bg-[linear-gradient(90deg,transparent,rgba(209,175,102,0.045))] lg:block" />

      <div className="mx-auto grid max-w-[1500px] gap-12 px-5 pb-10 pt-12 md:px-8 md:pb-16 md:pt-20 lg:min-h-[760px] lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:px-12">
        <div className="relative z-20 max-w-[760px]">
          <div className="mb-8 flex items-center gap-5 md:mb-9">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#D1AF66]">
              Advocacia criminal em Erechim/RS
            </p>
            <span className="hidden h-px w-32 bg-[#D1AF66]/55 sm:block" />
          </div>

          <h1 className="max-w-[360px] font-serif text-[2.55rem] leading-[0.98] tracking-normal text-white sm:max-w-[650px] sm:text-[4.45rem] sm:leading-[0.94] md:max-w-[720px] md:text-[5rem] lg:text-[4.25rem] xl:text-[5.25rem] 2xl:text-[5.65rem]">
            <span className="block whitespace-nowrap">Defesa criminal</span>
            <span className="block whitespace-nowrap">estratégica para</span>
            <span className="block whitespace-nowrap">quem precisa agir</span>
            <span className="block whitespace-nowrap font-serif italic text-[#D1AF66]">
              com segurança.
            </span>
          </h1>

          <div className="my-8 flex items-center gap-4 md:my-9">
            <span className="h-px w-24 bg-[#D1AF66]" />
            <span className="h-2 w-2 rotate-45 border border-[#D1AF66]" />
            <span className="h-px w-24 bg-[#D1AF66]" />
          </div>

          <p className="max-w-[360px] text-[17px] leading-8 text-white/84 sm:max-w-[620px] md:text-xl md:leading-9">
            Atuação em Tribunal do Júri, Execução Penal, prisões em flagrante e
            ações criminais, com{" "}
            <strong className="font-semibold text-[#D1AF66]">
              transparência, empatia e orientação clara
            </strong>{" "}
            em momentos decisivos.
          </p>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
            <WhatsAppButton className="w-full max-w-[350px] sm:w-auto" />
            <div className="grid max-w-[350px] grid-cols-2 gap-4 text-[11px] font-bold uppercase leading-5 tracking-[0.08em] text-white/82 sm:max-w-none sm:text-xs sm:tracking-[0.12em]">
              {trustPills.map((item) => (
                <span
                  key={item.text}
                  className="flex min-h-14 min-w-0 items-center gap-3 border-l border-[#D1AF66]/45 pl-4"
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="h-8 w-8 shrink-0 object-contain opacity-90"
                    style={{ filter: goldIconFilter }}
                  />
                  <span className="min-w-0 text-pretty">{item.text}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[350px] pt-4 sm:max-w-[560px] md:pt-0 lg:max-w-[590px] xl:max-w-[640px]">
          <div className="absolute left-1/2 top-0 h-[88%] w-[84%] -translate-x-1/2 rounded-t-[999px] border border-[#D1AF66]/70" />
          <div className="absolute left-[53%] top-7 h-[82%] w-[82%] -translate-x-1/2 rounded-t-[999px] border border-[#D1AF66]/30" />
          <div className="relative z-10 mx-auto w-[88%] overflow-hidden rounded-t-[999px] border border-[#D1AF66]/22 bg-[#120000] shadow-[0_34px_120px_rgba(0,0,0,0.58)]">
            <Image
              src={ASSETS.heroPhoto}
              alt="Maíra Cazzuni, advogada criminalista"
              width={1080}
              height={1402}
              priority
              sizes="(max-width: 768px) 88vw, 590px"
              className="aspect-[4/5] w-full object-cover object-[50%_16%] opacity-95 mix-blend-lighten"
            />
            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#120000] via-[#220001]/72 to-transparent" />
          </div>

          <div className="absolute bottom-7 right-0 z-20 w-[370px] max-w-[min(370px,calc(100%-24px))] border border-[#D1AF66]/70 bg-[#210001]/82 px-6 py-5 shadow-[0_22px_60px_rgba(0,0,0,0.34)] backdrop-blur-md max-md:left-6 max-md:right-6 max-md:bottom-2 max-md:w-auto max-md:max-w-none max-md:px-5">
            <div className="flex items-center gap-5">
              <Image
                src={ASSETS.icons.strategyEthics}
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 shrink-0 object-contain opacity-90"
                style={{ filter: goldIconFilter }}
              />
              <p className="min-w-0 text-[12px] font-bold uppercase leading-6 tracking-[0.08em] sm:text-[13px] sm:tracking-[0.1em]">
                <span className="block whitespace-nowrap text-white">
                  Atuação com estratégia
                </span>
                <span className="block whitespace-nowrap text-[#D1AF66]">
                  ética e responsabilidade
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-[#D1AF66]/16 bg-[#2B0202]/70 backdrop-blur">
        <div className="mx-auto grid max-w-7xl gap-0 px-5 py-7 md:grid-cols-4 md:px-8">
          {heroHighlights.map((item) => (
            <div
              key={item.text}
              className="min-w-0 border-[#D1AF66]/20 py-4 md:border-l md:px-4 md:first:border-l-0 lg:px-5 xl:px-6"
            >
              <p className="flex min-h-16 min-w-0 items-center gap-5 text-xs font-bold uppercase leading-6 tracking-[0.09em] text-white/90 sm:text-[13px] sm:tracking-[0.1em] lg:text-[13px] lg:tracking-[0.1em]">
                <Image
                  src={item.icon}
                  alt=""
                  width={58}
                  height={58}
                  className={`${item.iconClass} shrink-0 object-contain opacity-95`}
                  style={{ filter: goldIconFilter }}
                />
                <span className="block min-w-0 max-w-[280px] flex-1 md:max-w-[230px] lg:max-w-[250px]">
                  {item.lines.map((line) => (
                    <span key={line} className="block whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
