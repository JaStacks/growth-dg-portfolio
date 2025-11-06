import "@/styles/globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import CrispChat from "@/components/CrispChat";

const ScrollProgressBar = dynamic(() => import("@/components/ScrollProgressBar"), { ssr: false });
const CrispDebug = dynamic(() => import("@/components/CrispDebug"), { ssr: false });

export default function App({ Component, pageProps }) {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <Component {...pageProps} />
      <CrispChat />
      {/* Remove CrispDebug after confirming Crisp works */}
      <CrispDebug />
    </>
  );
}
