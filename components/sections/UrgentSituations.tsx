import { urgentSituations } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function UrgentSituations() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="grid min-w-0 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Situações urgentes"
              title="Você pode precisar de orientação criminal se..."
              description="Nem sempre a pessoa sabe se o que está vivendo já exige apoio jurídico. Em situações de medo, dúvida ou urgência, uma conversa inicial pode trazer direção e reduzir a sensação de estar sozinha."
            />
            <div className="mt-8">
              <WhatsAppButton />
            </div>
          </div>
          <div className="grid min-w-0 gap-4 sm:grid-cols-2">
            {urgentSituations.map((situation) => (
              <article
                key={situation.title}
                className="group relative min-w-0 overflow-hidden border border-[#e5d8c0] bg-[#fbf8f3] p-6 shadow-[0_18px_46px_rgba(74,0,1,0.045)] transition duration-300 hover:-translate-y-1 hover:border-[#D1AF66] hover:bg-white md:p-7"
              >
                <span className="absolute right-0 top-0 h-full w-1 bg-[#D1AF66]/0 transition group-hover:bg-[#D1AF66]" />
                <span className="mb-5 flex items-center gap-3">
                  <span className="h-px w-12 bg-[#D1AF66]" />
                  <span className="h-1.5 w-1.5 rotate-45 bg-[#D1AF66]" />
                </span>
                <h3 className="font-serif text-2xl leading-tight text-[#1C1917] md:text-[1.72rem]">
                  {situation.title}
                </h3>
                <p className="mt-4 max-w-full break-words text-[17px] leading-8 text-[#5f5650] md:text-lg">
                  {situation.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
