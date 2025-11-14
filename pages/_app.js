import "@/styles/globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import CrispChat from "@/components/CrispChat";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ScrollProgressBar = dynamic(() => import("@/components/ScrollProgressBar"), { ssr: false });
const CrispDebug = dynamic(() => import("@/components/CrispDebug"), { ssr: false });

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
      <ScrollProgressBar />
      <Navbar />
      <Component {...pageProps} />
      <CrispChat />
      {/* Remove CrispDebug after confirming Crisp works */}
      <CrispDebug />
    </div>
  );
}
