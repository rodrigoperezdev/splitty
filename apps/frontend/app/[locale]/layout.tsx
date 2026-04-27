import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { defaultLocale, locales } from "@/lib/i18n";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Splitty",
  description: "A friend cost-splitting app for shared outings.",
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = locales.includes(params.locale as Locale) ? (params.locale as Locale) : defaultLocale;

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
