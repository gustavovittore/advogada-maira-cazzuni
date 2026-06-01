import { serviceSteps } from "@/data/content";

export function Process() {
  return (
    <section className="bg-[#fffdfb] py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.34em] text-[#4A0001]">
            Como funciona
          </p>
          <div className="mx-auto mt-5 flex max-w-[315px] items-center justify-center text-[#D1AF66]">
            <span className="h-px flex-1 bg-current" />
            <span className="mx-3 h-4 w-4 rotate-45 border border-current" />
            <span className="h-px flex-1 bg-current" />
          </div>
          <h2 className="mt-6 font-serif text-[3.05rem] leading-[1.07] text-[#3B090A] sm:text-[3.95rem] lg:text-[4.55rem]">
            Um caminho claro desde o primeiro contato.
          </h2>
          <div className="mx-auto my-7 h-3 w-20 border-b border-[#D1AF66]" />
          <p className="mx-auto max-w-[860px] text-[20px] leading-9 text-[#39424A] md:text-[23px]">
            O atendimento organiza a situação com sigilo, escuta e orientação
            técnica, sempre sem prometer resultado.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {serviceSteps.map((step, index) => (
            <article
              key={step.title}
              className="relative min-h-[385px] overflow-hidden border border-[#D1AF66]/52 bg-white px-8 py-9 shadow-[0_22px_68px_rgba(73,23,14,0.05)]"
            >
              <span className="absolute right-8 top-7 font-serif text-[6.5rem] leading-none text-[#D1AF66]/22">
                {index + 1}
              </span>
              <div className="mb-24 flex items-center text-[#D1AF66] md:mb-28">
                <span className="h-3 w-3 rotate-45 border border-current" />
                <span className="h-px w-24 bg-current" />
              </div>
              <h3 className="max-w-[260px] font-serif text-[1.8rem] leading-[1.08] text-[#3B090A] md:text-[1.98rem]">
                {step.title}
              </h3>
              <div className="my-5 h-3 w-16 border-b border-[#D1AF66]" />
              <p className="text-[18px] leading-8 text-[#4f5962] md:text-[19px] md:leading-9">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
