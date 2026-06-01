import Image from "next/image";
import { ASSETS } from "@/constants/site";
import type { Review } from "@/data/reviews";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="review-card w-[320px] shrink-0 border border-[#EFE5D7] bg-white px-7 py-7 shadow-[0_20px_46px_rgba(0,0,0,0.16)] md:w-[420px] md:px-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex gap-1.5" aria-label="5 estrelas">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image
              key={index}
              src={ASSETS.star}
              alt=""
              width={18}
              height={18}
              className="h-[18px] w-[18px]"
            />
          ))}
        </div>
        <Image
          src={ASSETS.googleLogo}
          alt="Google"
          width={78}
          height={27}
          className="h-auto w-[68px] object-contain"
        />
      </div>
      <p className="min-h-[156px] font-serif text-[18px] leading-8 text-[#3E3330] md:text-[20px] md:leading-9">
        “{review.comment}”
      </p>
      <div className="mt-7 flex items-center text-[#D1AF66]">
        <span className="h-px flex-1 bg-current" />
        <span className="h-2.5 w-2.5 rotate-45 bg-current" />
        <span className="h-px flex-1 bg-current" />
      </div>
      <div className="mt-4 text-[12px] font-bold uppercase tracking-[0.24em] text-[#5B0708]">
        {review.name}
      </div>
    </article>
  );
}
