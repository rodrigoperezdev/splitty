import Link from "next/link";
import { getTranslations, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocalePage({ params }: { params: { locale: string } }) {
  const t = getTranslations(params.locale);

  return (
    <main className="min-h-screen bg-[#283D3B] text-[#44B0B8] flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-3xl rounded-3xl border border-[#1F4E59] bg-[#1F4E59]/80 p-10 shadow-2xl shadow-black/30 backdrop-blur-lg">
        <div className="space-y-6 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-[#1B4440] px-4 py-2 text-sm font-medium text-[#A8D9DC] ring-1 ring-[#44B0B8]/40">
            <span className="h-2 w-2 rounded-full bg-[#44B0B8]" />
            {t.versionLabel}
          </div>
          <h1 className="title-font text-4xl font-medium tracking-tight text-[#44B0B8] sm:text-5xl">
            {t.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-[#A8D9DC]">
            {t.subtitle}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#1F4E59] bg-[#1B4440]/90 p-6 text-left">
              <h2 className="title-font text-xl font-medium text-[#44B0B8]">{t.whatsNextTitle}</h2>
              <p className="mt-3 text-[#A8D9DC]">{t.whatsNextText}</p>
            </div>
            <div className="rounded-2xl border border-[#1F4E59] bg-[#1B4440]/90 p-6 text-left">
              <h2 className="title-font text-xl font-medium text-[#44B0B8]">{t.techStackTitle}</h2>
              <p className="mt-3 text-[#A8D9DC]">{t.techStackText}</p>
            </div>
          </div>
          <div className="mt-8 space-y-3 rounded-2xl border border-[#1F4E59] bg-[#1B4440]/80 p-6 text-left text-[#A8D9DC]">
            <p className="font-semibold text-[#44B0B8]">{t.chooseLanguage}</p>
            <div className="flex flex-wrap gap-3">
              {locales.map((locale) => (
                <Link
                  key={locale}
                  href={`/${locale}`}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    locale === params.locale ? "border-[#44B0B8] bg-[#44B0B8]/15 text-[#44B0B8]" : "border-[#1F4E59] bg-transparent text-[#A8D9DC]"
                  }`}
                >
                  {locale === "en" ? t.english : locale === "es" ? t.spanish : t.portuguese}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
