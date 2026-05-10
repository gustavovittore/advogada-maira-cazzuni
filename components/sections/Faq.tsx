import { faqs } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Faq() {
  return (
    <section id="duvidas" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.82fr_1.18fr] md:px-8">
        <SectionHeader
          eyebrow="Dúvidas frequentes"
          title="Dúvidas reais de quem precisa agir com segurança."
          description="O primeiro contato costuma vir acompanhado de medo, pressa e muitas perguntas. Estas respostas ajudam a entender como a orientação acontece, sem substituir a análise individual do caso."
        />

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border border-[#d8c4a1]/70 bg-[#fbf8f3] p-5 shadow-[0_16px_38px_rgba(74,0,1,0.04)] md:p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-[1.35rem] leading-tight text-[#1C1917] md:text-2xl">
                {faq.question}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#4A0001] text-sm text-[#D1AF66] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-[17px] leading-8 text-[#5f5650] md:text-lg">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
