import "react-photo-view/dist/react-photo-view.css";
import "../globals.css";

import { Analytics } from "@vercel/analytics/react";
import { PhotoProvider } from "react-photo-view";
import GoogleAnalytics from "@/components/ga";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <GoogleAnalytics gaId={"G-PZZ787TZQ5"} />
      <PhotoProvider>
        <Component {...pageProps} />
        <Analytics />
      </PhotoProvider>
    </>
  );
}
