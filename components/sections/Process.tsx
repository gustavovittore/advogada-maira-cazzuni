import { serviceSteps } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Process() {
  return (
    <section className="bg-[#fbf8f3] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Como funciona"
          title="Um caminho claro desde o primeiro contato."
          description="O atendimento organiza a situação com sigilo, escuta e orientação técnica, sempre sem prometer resultado."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {serviceSteps.map((step, index) => (
            <article
              key={step.title}
              className="relative overflow-hidden border border-[#d8c4a1]/70 bg-white p-7 shadow-[0_18px_42px_rgba(74,0,1,0.045)]"
            >
              <span className="absolute right-5 top-4 font-serif text-6xl text-[#D1AF66]/26">
                {index + 1}
              </span>
              <span className="mb-8 block h-px w-12 bg-[#D1AF66]" />
              <h3 className="font-serif text-2xl leading-tight text-[#1C1917]">
                {step.title}
              </h3>
              <p className="mt-4 text-[17px] leading-8 text-[#5f5650] md:text-lg">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
