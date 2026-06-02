import Image from "next/image";
import { ASSETS } from "@/constants/site";
import { urgentSituations } from "@/data/content";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function UrgentSituations() {
  return (
    <section className="bg-[#fffdfb] py-16 md:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16">
        <div className="grid min-w-0 gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-16">
          <div className="max-w-[540px]">
            <p className="text-[12px] font-bold uppercase tracking-[0.34em] text-[#360A0B]">
              Situações urgentes
            </p>
            <h2 className="mt-8 max-w-[360px] font-serif text-[2.08rem] leading-[1.06] tracking-normal text-[#360A0B] sm:max-w-[530px] sm:text-[3.8rem] sm:leading-[1.1] lg:text-[4.1rem]">
              <span className="block whitespace-nowrap sm:hidden">
                Você pode precisar
              </span>
              <span className="block whitespace-nowrap sm:hidden">
                de orientação
              </span>
              <span className="block whitespace-nowrap italic text-[#B38B35] sm:hidden">
                <span className="not-italic text-[#360A0B]">criminal </span>se...
              </span>
              <span className="hidden sm:inline">
                Você pode precisar de orientação criminal{" "}
                <span className="italic text-[#B38B35]">se...</span>
              </span>
            </h2>
            <div className="my-8 flex items-center gap-0 text-[#D1AF66]">
              <span className="h-px w-28 bg-current" />
              <span className="h-3 w-3 rotate-45 border border-current" />
              <span className="h-px w-28 bg-current" />
            </div>
            <p className="max-w-[520px] text-[19px] leading-[2.05] text-[#3d3431] md:text-[21px]">
              Nem sempre a pessoa sabe se o que está vivendo já precisa de apoio
              jurídico. Em situações de medo, dúvida ou urgência, uma conversa
              inicial pode trazer direção e reduzir a sensação de estar sozinha.
            </p>
            <div className="mt-10 max-sm:hidden">
              <WhatsAppButton className="min-h-[64px] min-w-[360px] max-sm:w-full max-sm:min-w-0" />
            </div>
          </div>

          <div>
            <div className="grid min-w-0 gap-5 sm:grid-cols-2">
              {urgentSituations.map((situation, index) => (
                <article
                  key={situation.title}
                  className="min-w-0 border border-[#D1AF66]/45 bg-[#fffaf4] px-7 py-8 text-left shadow-[0_22px_70px_rgba(73,23,14,0.055)] transition duration-300 hover:-translate-y-1 hover:border-[#D1AF66] hover:bg-white md:min-h-[315px] md:px-8 md:py-9"
                >
                  <span className="mb-6 flex items-center justify-start text-[#D1AF66]">
                    <span className="h-px w-20 bg-current" />
                    <span className="h-3 w-3 rotate-45 border border-current" />
                    <span className="h-px w-20 bg-current" />
                  </span>
                  <span className="mb-6 block h-[54px] w-[54px]">
                    <Image
                      src={ASSETS.urgentIcons[index]}
                      alt=""
                      width={54}
                      height={54}
                      className="h-[54px] w-[54px] object-contain"
                    />
                  </span>
                  <h3 className="max-w-[310px] font-serif text-[1.5rem] leading-tight text-[#360A0B] md:text-[1.78rem]">
                    {situation.title}
                  </h3>
                  <p className="mt-5 max-w-full break-words text-[18px] leading-8 text-[#5d5652] md:text-[19px] md:leading-9">
                    {situation.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 sm:hidden">
              <WhatsAppButton className="min-h-[64px] w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
