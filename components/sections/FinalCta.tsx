import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#4A0001] py-16 text-white md:py-24">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#4A0001_0%,#260001_58%,#120000_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.13] [background-image:linear-gradient(90deg,rgba(209,175,102,0.16)_1px,transparent_1px),linear-gradient(0deg,rgba(209,175,102,0.08)_1px,transparent_1px)] [background-size:92px_92px]" />
      <div className="absolute inset-y-10 right-8 -z-10 hidden w-[38%] border border-[#D1AF66]/28 md:block" />

      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1fr_0.72fr] md:items-center md:px-8">
        <div>
          <div className="mb-6 flex items-center gap-4">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#D1AF66]">
              Próximo passo
            </p>
            <span className="h-px w-24 bg-[#D1AF66]/70" />
          </div>
          <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            Precisa de orientação criminal{" "}
            <span className="italic text-[#D1AF66]">com segurança?</span>
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-8 text-white/80 md:text-xl md:leading-9">
            Fale com a advogada pelo WhatsApp e receba orientação sobre os
            próximos passos com sigilo, clareza e atenção.
          </p>
        </div>
        <div className="border border-[#D1AF66]/42 bg-[#1f0001]/72 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur md:p-8">
          <p className="text-[15px] font-bold uppercase leading-7 tracking-[0.16em] text-white/84 md:text-base md:tracking-[0.2em]">
            Atendimento em Erechim/RS e região com discrição, clareza e cuidado.
          </p>
          <div className="mt-7">
            <WhatsAppButton className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
