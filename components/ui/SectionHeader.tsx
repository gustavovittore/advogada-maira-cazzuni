type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`min-w-0 max-w-full md:max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow ? (
        <p
          className={`mb-4 text-xs font-bold uppercase tracking-[0.22em] ${
            inverse ? "text-[#D1AF66]" : "text-[#4A0001]"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-serif text-3xl leading-tight md:text-5xl ${
          inverse ? "text-white" : "text-[#1C1917]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-full text-lg leading-8 text-pretty md:text-xl md:leading-9 ${
            inverse ? "text-white/76" : "text-[#675b52]"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
