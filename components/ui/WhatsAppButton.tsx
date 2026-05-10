import Image from "next/image";
import { ASSETS, WHATSAPP_URL } from "@/constants/site";

type WhatsAppButtonProps = {
  children?: React.ReactNode;
  variant?: "primary" | "light" | "outline";
  className?: string;
};

export function WhatsAppButton({
  children = "Falar com a advogada agora",
  variant = "primary",
  className = "",
}: WhatsAppButtonProps) {
  const variantClass = {
    primary:
      "bg-[#D1AF66] text-[#1C1917] shadow-[0_20px_42px_rgba(209,175,102,0.24)] hover:bg-[#e0c277]",
    light:
      "bg-white text-[#4A0001] shadow-[0_18px_38px_rgba(0,0,0,0.16)] hover:bg-[#f7f1e9]",
    outline:
      "border border-[#D1AF66]/55 bg-transparent text-[#D1AF66] hover:bg-[#D1AF66] hover:text-[#1C1917]",
  };

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 max-w-full items-center justify-center gap-3 rounded-[3px] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.08em] transition duration-300 sm:px-6 sm:text-xs sm:tracking-[0.12em] ${variantClass[variant]} ${className}`}
    >
      <Image
        src={ASSETS.whatsapp}
        alt=""
        width={20}
        height={20}
        className="h-5 w-5 object-contain"
      />
      <span className="min-w-0 text-center">{children}</span>
    </a>
  );
}
