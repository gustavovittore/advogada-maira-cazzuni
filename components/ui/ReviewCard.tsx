import Image from "next/image";
import { ASSETS } from "@/constants/site";
import type { Review } from "@/data/reviews";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="review-card w-[320px] shrink-0 border border-[#d8c4a1]/75 bg-white p-6 shadow-[0_18px_46px_rgba(0,0,0,0.12)] md:w-[420px]">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="flex gap-1" aria-label="5 estrelas">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image
              key={index}
              src={ASSETS.star}
              alt=""
              width={16}
              height={16}
              className="h-4 w-4"
            />
          ))}
        </div>
        <Image
          src={ASSETS.googleLogo}
          alt="Google"
          width={70}
          height={24}
          className="h-auto w-[62px] object-contain"
        />
      </div>
      <p className="min-h-[156px] text-base leading-8 text-[#5f5650] md:text-[17px]">
        “{review.comment}”
      </p>
      <div className="mt-6 border-t border-[#D1AF66]/35 pt-4 text-xs font-bold uppercase tracking-[0.18em] text-[#4A0001]">
        {review.name}
      </div>
    </article>
  );
}
