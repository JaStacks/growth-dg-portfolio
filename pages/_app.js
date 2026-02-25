import "@/styles/globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import CrispChat from "@/components/CrispChat";
import { Space_Grotesk, DM_Serif_Display, Space_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const ScrollProgressBar = dynamic(() => import("@/components/ScrollProgressBar"), { ssr: false });
const CrispDebug = dynamic(() => import("@/components/CrispDebug"), { ssr: false });

export default function App({ Component, pageProps }) {
  return (
    <div className={`${spaceGrotesk.variable} ${dmSerif.variable} ${spaceMono.variable} font-sans`}>
      <ScrollProgressBar />
      <Navbar />
      <Component {...pageProps} />
      <CrispChat />
      <CrispDebug />
    </div>
  );
}
