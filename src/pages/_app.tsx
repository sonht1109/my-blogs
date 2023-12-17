import "../globals.css";
import { Analytics } from '@vercel/analytics/react';

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
