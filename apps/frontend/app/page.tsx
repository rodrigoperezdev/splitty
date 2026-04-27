import Link from "next/link";

const locales = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#283D3B] text-[#44B0B8] flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-3xl rounded-3xl border border-[#1F4E59] bg-[#1F4E59]/80 p-10 shadow-2xl shadow-black/30 backdrop-blur-lg">
        <div className="space-y-8 text-center">
          <h1 className="title-font text-5xl font-medium tracking-tight text-[#44B0B8]">
            Splitty
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-[#A8D9DC]">
            Select a language to start building the localized app experience.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {locales.map((locale) => (
              <Link
                key={locale.code}
                href={`/${locale.code}`}
                className="rounded-2xl border border-[#44B0B8] bg-[#44B0B8]/10 px-6 py-5 text-lg font-medium text-[#44B0B8] transition hover:bg-[#44B0B8]/20"
              >
                {locale.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
