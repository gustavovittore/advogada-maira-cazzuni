import Image from "next/image";
import { ASSETS } from "@/constants/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#2D0001] py-16 text-white md:py-24 lg:py-28">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_12%,rgba(120,8,8,0.42),transparent_34%),linear-gradient(135deg,#4A0001_0%,#240000_58%,#120000_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(90deg,rgba(209,175,102,0.14)_1px,transparent_1px),linear-gradient(0deg,rgba(209,175,102,0.07)_1px,transparent_1px)] [background-size:110px_110px]" />

      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-10 lg:grid-cols-[0.92fr_0.9fr] lg:items-center lg:gap-20 lg:px-16">
        <div className="max-w-[820px]">
          <div className="mb-7 flex items-center gap-6">
            <p className="text-[13px] font-bold uppercase tracking-[0.42em] text-[#D1AF66]">
              Próximo passo
            </p>
            <span className="hidden h-px w-24 bg-[#D1AF66]/70 sm:block" />
          </div>
          <h2 className="max-w-[365px] font-serif text-[2.08rem] leading-[1.08] text-white sm:max-w-[760px] sm:text-[3.15rem] sm:leading-[1.1] lg:text-[3.55rem]">
            <span className="block sm:hidden">Precisa de orientação</span>
            <span className="block sm:hidden">
              criminal <span className="italic text-[#D1AF66]">com</span>
            </span>
            <span className="block italic text-[#D1AF66] sm:hidden">
              segurança?
            </span>
            <span className="hidden sm:block">Precisa de orientação</span>
            <span className="hidden whitespace-nowrap sm:block">
              criminal <span className="italic text-[#D1AF66]">com segurança?</span>
            </span>
          </h2>
          <span className="mt-8 block h-px w-24 bg-[#D1AF66]" />
          <p className="mt-8 max-w-[760px] text-[20px] leading-9 text-white/82 md:text-[23px] md:leading-10">
            Fale com a advogada pelo WhatsApp e receba orientação sobre os
            próximos passos com sigilo, clareza e atenção.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -right-6 -top-8 h-[calc(100%+64px)] w-[86%] border border-[#D1AF66]/45" />
          <div className="absolute -right-2 -top-4 h-[calc(100%+32px)] w-[92%] border border-[#D1AF66]/35" />
          <div className="relative border border-[#D1AF66]/62 bg-[#4A0001]/48 px-7 py-9 shadow-[0_30px_90px_rgba(0,0,0,0.25)] backdrop-blur-[2px] md:px-10 md:py-11">
            <div className="absolute -left-px -top-px h-7 w-7 border-l border-t border-[#D1AF66]" />
            <div className="absolute -bottom-px -right-px h-7 w-7 border-b border-r border-[#D1AF66]" />
            <div className="grid gap-6 sm:grid-cols-[66px_1fr] sm:items-center">
              <Image
                src={ASSETS.iconDepositions}
                alt=""
                width={52}
                height={52}
                className="h-[52px] w-[52px] object-contain"
              />
              <p className="border-l border-[#D1AF66]/60 pl-6 text-[14px] font-bold uppercase leading-8 tracking-[0.25em] text-white/88 md:text-base">
                Atendimento em Erechim/RS e região com discrição, clareza e
                cuidado.
              </p>
            </div>
            <div className="mt-9">
              <WhatsAppButton className="min-h-[64px] w-full" />
            </div>
            <div className="absolute inset-x-12 -bottom-[6px] flex justify-center">
              <span className="h-3 w-3 rotate-45 bg-[#D1AF66]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
