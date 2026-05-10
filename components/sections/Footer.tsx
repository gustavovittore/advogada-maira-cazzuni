import Image from "next/image";
import { ASSETS, CONTACT, WHATSAPP_URL } from "@/constants/site";

export function Footer() {
  return (
    <footer className="border-t border-[#D1AF66]/18 bg-[#4A0001] py-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1fr_1fr_1fr] md:px-8">
        <div>
          <div className="flex h-16 w-[220px] items-center">
            <Image
              src={ASSETS.logo}
              alt="Maíra Cazzuni Advocacia Criminal"
              width={532}
              height={233}
              className="h-auto w-full"
            />
          </div>
          <p className="mt-5 max-w-sm text-base leading-8 text-white/68">
            Defesa criminal estratégica, transparente e humanizada em
            Erechim/RS.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D1AF66]">
            Contato
          </h3>
          <div className="mt-4 space-y-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg font-semibold text-white transition hover:text-[#D1AF66]"
            >
              <Image
                src={ASSETS.whatsappFooter}
                alt=""
                width={24}
                height={24}
                className="h-5 w-5 object-contain brightness-0 invert"
              />
              {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 text-[17px] leading-7 text-white/74 transition hover:text-[#D1AF66]"
            >
              <Image
                src={ASSETS.email}
                alt=""
                width={22}
                height={22}
                className="h-5 w-5 object-contain"
              />
              {CONTACT.email}
            </a>
            <a
              href="https://www.instagram.com/mairacazzuniadv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[17px] leading-7 text-white/74 transition hover:text-[#D1AF66]"
            >
              <Image
                src={ASSETS.instagram}
                alt=""
                width={22}
                height={22}
                className="h-5 w-5 object-contain"
              />
              {CONTACT.instagram}
            </a>
          </div>
          <p className="mt-4 text-base text-white/64">{CONTACT.oab}</p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D1AF66]">
            Endereço
          </h3>
          <address className="mt-4 not-italic text-[17px] leading-8 text-white/70">
            {CONTACT.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
      </div>
      <p className="mx-auto mt-9 max-w-7xl border-t border-[#D1AF66]/14 px-5 pt-6 text-center text-xs leading-6 text-white/48 md:px-8">
        Copyright © 2026 Dra. Maíra Cazzuni | Todos os direitos reservados.
      </p>
    </footer>
  );
}
