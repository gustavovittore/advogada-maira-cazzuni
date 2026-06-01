import Image from "next/image";
import { ASSETS, CONTACT, WHATSAPP_URL } from "@/constants/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#D1AF66]/55 bg-[#2D0001] py-12 text-white md:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(95,4,4,0.3),transparent_28%),linear-gradient(135deg,#3D0001_0%,#260000_58%,#140000_100%)]" />
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr_1fr] md:gap-12">
          <div>
            <div className="flex h-24 w-[310px] max-w-full items-center">
              <Image
                src={ASSETS.logo}
                alt="Maíra Cazzuni Advocacia Criminal"
                width={532}
                height={233}
                className="h-auto w-full"
              />
            </div>
            <p className="mt-6 max-w-[420px] text-[18px] leading-9 text-white/78 md:text-[20px]">
              Defesa criminal estratégica, transparente e humanizada em
              Erechim/RS.
            </p>
          </div>

          <div className="border-[#D1AF66]/55 md:border-l md:pl-12">
            <h3 className="text-[13px] font-bold uppercase tracking-[0.34em] text-[#D1AF66]">
              Contato
            </h3>
            <div className="mt-6 space-y-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[20px] font-semibold text-white transition hover:text-[#D1AF66]"
              >
                <Image
                  src={ASSETS.whatsappFooter}
                  alt=""
                  width={26}
                  height={26}
                  className="h-6 w-6 object-contain"
                />
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-4 text-[18px] leading-7 text-white/82 transition hover:text-[#D1AF66]"
              >
                <Image
                  src={ASSETS.email}
                  alt=""
                  width={26}
                  height={26}
                  className="h-6 w-6 object-contain"
                />
                {CONTACT.email}
              </a>
              <a
                href="https://www.instagram.com/mairacazzuniadv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[18px] leading-7 text-white/82 transition hover:text-[#D1AF66]"
              >
                <Image
                  src={ASSETS.instagram}
                  alt=""
                  width={26}
                  height={26}
                  className="h-6 w-6 object-contain"
                />
                {CONTACT.instagram}
              </a>
            </div>
            <p className="mt-5 text-[18px] text-[#D1AF66]">{CONTACT.oab}</p>
          </div>

          <div className="border-[#D1AF66]/55 md:border-l md:pl-12">
            <h3 className="text-[13px] font-bold uppercase tracking-[0.34em] text-[#D1AF66]">
              Endereço
            </h3>
            <address className="mt-6 space-y-3 not-italic text-[18px] leading-8 text-white/80 md:text-[20px]">
              {CONTACT.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>

        <div className="mt-12 flex items-center text-[#D1AF66]">
          <span className="h-px flex-1 bg-current" />
          <span className="h-3 w-3 rotate-45 bg-current" />
          <span className="h-px flex-1 bg-current" />
        </div>

        <div className="mt-8 flex flex-col gap-5 text-[14px] leading-6 text-white/66 md:flex-row md:items-center md:justify-between md:text-[16px]">
          <p>Copyright © 2026 Dra. Maíra Cazzuni | Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-3 text-white/66">
            <a href="#" className="transition hover:text-white/86">
              Política de privacidade
            </a>
            <span>|</span>
            <a href="#" className="transition hover:text-white/86">
              Termos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
