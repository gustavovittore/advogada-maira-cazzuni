import Image from "next/image";
import { differentiators } from "@/data/content";
import { ASSETS } from "@/constants/site";

export function Differentials() {
  return (
    <section className="relative isolate overflow-hidden bg-[#310000] py-16 text-white md:py-24 lg:py-28">
      <Image
        src={ASSETS.justiceTexture}
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-30 object-cover object-[74%_50%] opacity-88"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(56,0,0,0.98)_0%,rgba(74,0,1,0.9)_42%,rgba(74,0,1,0.56)_72%,rgba(44,0,0,0.42)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(140,12,12,0.34),transparent_31%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.28))]" />

      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-10 lg:grid-cols-[0.72fr_1fr] lg:items-center lg:gap-20 lg:px-16">
        <div className="max-w-[540px]">
          <p className="text-[13px] font-bold uppercase tracking-[0.34em] text-[#D1AF66]">
            Diferenciais
          </p>
          <span className="mt-6 block h-px w-28 bg-[#D1AF66]" />
          <h2 className="mt-8 max-w-[520px] font-serif text-[3rem] leading-[1.1] text-white sm:text-[3.75rem] lg:text-[4.15rem]">
            Presença firme para momentos que exigem cuidado.
          </h2>
          <div className="my-9 flex items-center gap-0 text-[#D1AF66]">
            <span className="h-px w-28 bg-current" />
            <span className="h-3 w-3 rotate-45 border border-current" />
            <span className="h-px w-28 bg-current opacity-45" />
          </div>
          <p className="text-[19px] leading-9 text-white/84 md:text-[21px] md:leading-10">
            A comunicação é direta e humana para que você compreenda direitos,
            riscos e próximos passos sem se sentir perdido.
          </p>
          <p className="mt-9 border-l-2 border-[#D1AF66] pl-6 font-serif text-[21px] leading-10 text-white/78 md:text-[24px]">
            Técnica, sigilo e clareza caminham juntos para transformar um
            momento de pressão em uma condução mais consciente e organizada.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {differentiators.map((item, index) => (
            <article
              key={item.title}
              className="min-h-[258px] border border-[#D1AF66]/48 bg-[#360000]/50 p-7 text-white shadow-[0_22px_70px_rgba(0,0,0,0.18)] backdrop-blur-[2px] transition duration-300 hover:border-[#D1AF66]/85 hover:bg-[#3F0001]/62 md:p-8"
            >
              <span className="mb-5 block h-px w-16 bg-[#D1AF66]" />
              <Image
                src={ASSETS.differentialIcons[index]}
                alt=""
                width={62}
                height={62}
                className="h-[62px] w-[62px] object-contain"
              />
              <h3 className="mt-7 font-serif text-[1.62rem] leading-tight text-white md:text-[1.82rem]">
                {item.title}
              </h3>
              <p className="mt-5 text-[18px] leading-8 text-white/77 md:text-[19px] md:leading-9">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
