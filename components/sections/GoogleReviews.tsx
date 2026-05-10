import { reviews } from "@/data/reviews";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

function ReviewMarquee({
  items,
  reverse = false,
}: {
  items: typeof reviews;
  reverse?: boolean;
}) {
  const loop = [...items, ...items];

  return (
    <div className="review-mask overflow-hidden py-2">
      <div
        className={`review-track flex w-max gap-5 ${
          reverse ? "review-track-reverse" : ""
        }`}
      >
        {loop.map((review, index) => (
          <ReviewCard
            key={`${review.name}-${index}-${reverse ? "reverse" : "forward"}`}
            review={review}
          />
        ))}
      </div>
    </div>
  );
}

export function GoogleReviews() {
  const firstRow = reviews.slice(0, 12);
  const secondRow = reviews.slice(12);

  return (
    <section
      id="avaliacoes"
      className="relative overflow-hidden bg-[#4A0001] py-16 text-white md:py-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#4A0001_0%,#260001_56%,#120000_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#D1AF66]/40" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <SectionHeader
            eyebrow="Avaliações reais"
            title="Mais de 100 avaliações 5 estrelas no Google"
            description="Clientes destacam o atendimento humanizado, a clareza nas orientações e a atuação técnica da Dra. Maíra Cazzuni."
            inverse
          />
          <div className="border-l-2 border-[#D1AF66] bg-white/[0.07] p-5 text-[17px] leading-8 text-white/78 shadow-[0_18px_46px_rgba(0,0,0,0.12)] backdrop-blur md:text-lg">
            Depoimentos reais selecionados a partir do material fornecido no
            projeto, apresentados em movimento lento para manter a seção leve.
          </div>
        </div>
      </div>

      <div className="relative mt-10 space-y-4 md:mt-14">
        <ReviewMarquee items={firstRow} />
        <div className="hidden md:block">
          <ReviewMarquee items={secondRow} reverse />
        </div>
      </div>
    </section>
  );
}
