import Image from "next/image";
import { ASSETS } from "@/constants/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const heroBackground = "/brand/2/background-hero.png.png";
const heroPhoto = "/brand/2/foto-mayra-hero-3.png.png";

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
    mobileLines: ["Estratégia personalizada", "para cada caso"],
    icon: ASSETS.icons.customStrategy,
    iconClass: "h-14 w-14 lg:h-[58px] lg:w-[58px]",
  },
  {
    text: "Acompanhamento próximo e transparente",
    lines: ["Acompanhamento", "próximo e", "transparente"],
    mobileLines: ["Acompanhamento próximo", "e transparente"],
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
      className="relative isolate overflow-hidden bg-[#130000] text-white"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(18,0,0,0.96) 0%, rgba(42,2,2,0.86) 36%, rgba(44,3,3,0.44) 62%, rgba(10,0,0,0.1) 100%), url('${heroBackground}')`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.16)_0%,transparent_45%,rgba(15,0,0,0.26)_78%,rgba(15,0,0,0.52)_100%)]" />
      <div className="absolute inset-y-0 left-0 -z-10 w-[62%] bg-[radial-gradient(circle_at_24%_35%,rgba(105,8,8,0.54),transparent_38%)]" />

      <div className="mx-auto grid max-w-[1440px] gap-8 px-5 pb-8 pt-6 sm:px-8 md:pb-10 md:pt-10 lg:min-h-[700px] lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-0 lg:px-14 lg:pt-20">
        <div className="relative z-10 mx-auto h-[560px] w-full max-w-[520px] overflow-hidden sm:h-[650px] lg:hidden">
          <Image
            src={heroPhoto}
            alt="MaÃ­ra Cazzuni, advogada criminalista"
            width={1380}
            height={2530}
            priority
            unoptimized
            quality={100}
            sizes="(max-width: 768px) 94vw, 520px"
            className="absolute left-1/2 top-0 z-10 h-auto max-w-none -translate-x-1/2 object-contain drop-shadow-[0_24px_70px_rgba(0,0,0,0.44)]"
            style={{
              width: "clamp(430px, 112vw, 560px)",
            }}
          />
          <div className="absolute bottom-0 left-1/2 z-0 h-[68%] w-[92%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.54),transparent_68%)]" />
        </div>

        <div className="relative z-20 max-w-[700px] lg:pt-6">
          <div className="mb-8 flex items-center gap-5 md:mb-9">
            <p className="text-[11px] font-bold uppercase tracking-[0.36em] text-[#D1AF66] md:text-xs">
              Advocacia criminal em Erechim/RS
            </p>
            <span className="hidden h-px w-32 bg-[#D1AF66]/80 sm:block" />
          </div>

          <h1 className="max-w-[360px] font-serif text-[2.45rem] leading-[0.98] tracking-normal text-white sm:max-w-[650px] sm:text-[4.6rem] sm:leading-[0.94] md:text-[5.1rem] lg:max-w-[720px] lg:text-[4.95rem] xl:text-[5.35rem] 2xl:text-[5.75rem]">
            <span className="block whitespace-nowrap">Defesa criminal</span>
            <span className="block whitespace-nowrap">estratégica para</span>
            <span className="block whitespace-nowrap">quem precisa agir</span>
            <span className="block whitespace-nowrap font-serif italic text-[#D1AF66]">
              com segurança.
            </span>
          </h1>

          <div className="my-8 flex items-center gap-4 md:my-9">
            <span className="h-px w-24 bg-[#D1AF66]/80" />
            <span className="h-2 w-2 rotate-45 border border-[#D1AF66]" />
            <span className="h-px w-24 bg-[#D1AF66]/80" />
          </div>

          <p className="max-w-[360px] text-[17px] leading-8 text-white/86 sm:max-w-[620px] md:text-[19px] md:leading-9">
            Atuação em Tribunal do Júri, Execução Penal, prisões em flagrante e
            ações criminais, com{" "}
            <strong className="font-semibold text-[#D1AF66]">
              transparência, empatia e orientação clara
            </strong>{" "}
            em momentos decisivos.
          </p>

          <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
            <WhatsAppButton className="!w-full !max-w-[350px] px-7 py-4 sm:!w-auto" />
            <div className="grid max-w-[360px] grid-cols-2 gap-0 text-[11px] font-bold uppercase leading-5 tracking-[0.1em] text-white/84 sm:max-w-[430px] sm:text-xs">
              {trustPills.map((item) => (
                <span
                  key={item.text}
                  className="flex min-h-14 min-w-0 items-center gap-3 border-l border-[#D1AF66]/42 px-4 sm:px-5"
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

        <div className="relative z-10 mx-auto hidden min-h-[440px] w-full max-w-[430px] overflow-visible sm:min-h-[560px] sm:max-w-[560px] lg:-mt-16 lg:block lg:min-h-[764px] lg:max-w-none">
          <Image
            src={heroPhoto}
            alt="Maíra Cazzuni, advogada criminalista"
            width={1380}
            height={2530}
            priority
            unoptimized
            quality={100}
            sizes="(max-width: 768px) 420px, (max-width: 1200px) 52vw, 710px"
            className="absolute left-1/2 top-10 z-10 h-auto max-w-none -translate-x-1/2 object-contain drop-shadow-[0_24px_70px_rgba(0,0,0,0.42)] sm:top-8 lg:left-auto lg:right-0 lg:top-[-20px] lg:translate-x-0 xl:right-6"
            style={{
              width: "clamp(400px, 46vw, 620px)",
            }}
          />
          <div className="absolute bottom-0 left-1/2 z-0 h-[62%] w-[82%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.5),transparent_66%)] lg:left-auto lg:right-[54px] lg:w-[70%] lg:translate-x-0 xl:right-[86px]" />

        </div>
      </div>

      <div className="relative z-30 border-y border-[#D1AF66]/16 bg-[#2A0202]/86 backdrop-blur">
        <div className="mx-auto grid max-w-[1440px] gap-0 px-5 py-7 md:grid-cols-4 md:px-8 lg:px-14">
          {heroHighlights.map((item) => (
            <div
              key={item.text}
              className="min-w-0 border-[#D1AF66]/20 py-4 md:border-l md:px-4 md:first:border-l-0 lg:px-7 xl:px-8"
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
                  {item.mobileLines ? (
                    <span className="block md:hidden">
                      {item.mobileLines.map((line) => (
                        <span key={line} className="block whitespace-nowrap">
                          {line}
                        </span>
                      ))}
                    </span>
                  ) : null}
                  <span
                    className={item.mobileLines ? "hidden md:block" : "block"}
                  >
                    {item.lines.map((line) => (
                      <span key={line} className="block whitespace-nowrap">
                        {line}
                      </span>
                    ))}
                  </span>
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
