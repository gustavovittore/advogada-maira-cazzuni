import { faqs } from "@/data/content";

export function Faq() {
  return (
    <section id="duvidas" className="bg-[#fffdfb] py-16 md:py-24 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-16 lg:px-16">
        <div className="max-w-[640px]">
          <div className="mb-8 flex max-w-[360px] items-center justify-center text-[#D1AF66]">
            <span className="h-px flex-1 bg-current" />
            <span className="mx-4 h-4 w-4 rotate-45 border border-current" />
            <span className="h-px flex-1 bg-current" />
          </div>
          <p className="text-[13px] font-bold uppercase tracking-[0.46em] text-[#4A0001]">
            Dúvidas frequentes
          </p>
          <h2 className="mt-8 max-w-[640px] font-serif text-[2.25rem] leading-[1.1] text-[#3B090A] sm:text-[3rem] lg:text-[3.45rem]">
            <span className="block">Dúvidas reais de</span>
            <span className="block">quem precisa</span>
            <span className="block md:whitespace-nowrap">agir com segurança.</span>
          </h2>
          <div className="my-8 flex items-center gap-0 text-[#D1AF66]">
            <span className="h-px w-28 bg-current" />
            <span className="h-4 w-4 rotate-45 border border-current" />
            <span className="h-px w-28 bg-current" />
          </div>
          <p className="text-[20px] leading-[2.05] text-[#38414A] md:text-[23px]">
            O primeiro contato costuma vir acompanhado de medo, pressa e muitas
            perguntas. Estas respostas ajudam a entender como a orientação
            acontece, sem substituir a análise individual do caso.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border border-[#D1AF66]/55 bg-white shadow-[0_22px_70px_rgba(73,23,14,0.045)]"
            >
              <summary className="grid cursor-pointer list-none grid-cols-[26px_1fr_48px] items-center gap-5 px-5 py-6 font-serif text-[1.35rem] leading-tight text-[#3B090A] md:grid-cols-[36px_1fr_54px] md:gap-7 md:px-8 md:py-7 md:text-[1.75rem] [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-center border-r border-[#D1AF66]/55 pr-5 text-[#D1AF66]">
                  <span className="h-3 w-3 rotate-45 border border-current" />
                </span>
                <span>{faq.question}</span>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[3px] bg-[#6A0001] font-sans text-[24px] leading-none text-[#D1AF66] shadow-[0_12px_24px_rgba(74,0,1,0.18)] transition group-open:rotate-45 md:h-12 md:w-12">
                  +
                </span>
              </summary>
              <p className="px-5 pb-7 pl-[76px] text-[17px] leading-8 text-[#5f5650] md:px-8 md:pb-8 md:pl-[116px] md:text-[18px]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
