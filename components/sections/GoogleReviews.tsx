import Image from "next/image";
import { ASSETS } from "@/constants/site";
import { reviews } from "@/data/reviews";
import { ReviewCard } from "@/components/ui/ReviewCard";

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
        className={`review-track flex w-max gap-5 md:gap-6 ${
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
      className="relative isolate overflow-hidden bg-[#3A0001] py-16 text-white md:py-24 lg:py-28"
    >
      <Image
        src={ASSETS.googleReviewsBackground}
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-30 object-cover object-[64%_50%] opacity-82"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(61,0,1,0.98)_0%,rgba(74,0,1,0.9)_48%,rgba(59,0,1,0.58)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(130,15,15,0.36),transparent_32%)]" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.9fr] lg:items-end">
          <div className="max-w-[760px]">
            <div className="mb-7 flex items-center gap-6">
              <p className="text-[13px] font-bold uppercase tracking-[0.34em] text-[#D1AF66]">
                Avaliações reais
              </p>
              <span className="hidden h-px w-28 bg-[#D1AF66]/70 sm:block" />
              <span className="hidden h-3 w-3 rotate-45 bg-[#D1AF66] sm:block" />
            </div>
            <h2 className="max-w-[760px] font-serif text-[3rem] leading-[1.08] text-white sm:text-[3.95rem] lg:text-[4.45rem]">
              Mais de <span className="text-[#D1AF66]">100</span> avaliações 5
              estrelas no Google
            </h2>
            <span className="mt-8 block h-px w-28 bg-[#D1AF66]" />
            <p className="mt-8 max-w-[600px] text-[18px] leading-9 text-white/78 md:text-[21px] md:leading-10">
              Clientes destacam o atendimento humanizado, a clareza nas
              orientações e a atuação técnica da Dra. Maíra Cazzuni.
            </p>
          </div>

          <div className="relative border border-[#D1AF66]/52 bg-[#4A0001]/42 px-7 py-7 shadow-[0_26px_80px_rgba(0,0,0,0.2)] backdrop-blur-[2px] md:px-10">
            <div className="absolute -left-px -top-px h-6 w-6 border-l border-t border-[#D1AF66]" />
            <div className="absolute -bottom-px -right-px h-6 w-6 border-b border-r border-[#D1AF66]" />
            <div className="grid gap-6 sm:grid-cols-[72px_1fr] sm:items-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#D1AF66]/48">
                <Image
                  src={ASSETS.iconDepositions}
                  alt=""
                  width={46}
                  height={46}
                  className="h-[46px] w-[46px] object-contain"
                />
              </span>
              <p className="border-l border-[#D1AF66]/55 pl-6 font-serif text-[19px] italic leading-9 text-white/86 md:text-[22px]">
                Relatos de clientes que destacam acolhimento, clareza e postura
                técnica em atendimentos conduzidos com responsabilidade.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-11 space-y-4 md:mt-14">
        <ReviewMarquee items={firstRow} />
        <div className="hidden md:block">
          <ReviewMarquee items={secondRow} reverse />
        </div>
      </div>
    </section>
  );
}
