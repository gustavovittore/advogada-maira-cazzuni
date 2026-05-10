import Image from "next/image";
import { ASSETS, NAV_ITEMS, WHATSAPP_URL } from "@/constants/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#D1AF66]/18 bg-[#4A0001]/96 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8 md:py-5">
        <a
          href="#topo"
          className="flex h-12 w-[132px] shrink-0 items-center sm:w-[190px] md:h-16 md:w-[252px]"
          aria-label="Maíra Cazzuni Advocacia Criminal"
        >
          <Image
            src={ASSETS.logo}
            alt="Maíra Cazzuni Advocacia Criminal"
            width={532}
            height={233}
            priority
            className="h-auto w-full"
          />
        </a>

        <nav className="hidden items-center gap-10 text-xs font-bold uppercase tracking-[0.22em] text-white/78 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-[#D1AF66]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton />
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[3px] bg-[#D1AF66] text-sm font-bold text-[#1C1917] shadow-[0_14px_30px_rgba(209,175,102,0.18)] md:hidden"
          aria-label="Falar com a advogada pelo WhatsApp"
        >
          <Image
            src={ASSETS.whatsapp}
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 object-contain"
          />
        </a>
      </div>
    </header>
  );
}
