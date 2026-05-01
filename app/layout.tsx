import type { Metadata } from "next";
import {
  Inter,
  DM_Serif_Display,
  UnifrakturCook,
  Special_Elite,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const blackletter = UnifrakturCook({
  variable: "--font-blackletter",
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

const typewriter = Special_Elite({
  variable: "--font-typewriter",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "umatteus — TE TATUA · Tatuagem Tradicional · Brasília/DF",
  description:
    "Estúdio de tatuagem tradicional em Brasília/DF. Flash autoral, panteras, adagas, hannya, kois, Old School clássico. Agendamento direto pelo Instagram @umatteus.",
  metadataBase: new URL("https://umatteus.vercel.app"),
  openGraph: {
    title: "TE TATUA — umatteus · Tatuagem Tradicional",
    description:
      "Tatuagem tradicional em Brasília/DF — flash autoral, traço pesado, cor sólida.",
    type: "website",
    locale: "pt_BR",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} ${dmSerif.variable} ${blackletter.variable} ${typewriter.variable}`}
    >
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
