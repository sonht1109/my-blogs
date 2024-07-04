import "../globals.css";
import 'react-photo-view/dist/react-photo-view.css';

import { Analytics } from '@vercel/analytics/react';
import { PhotoProvider } from "react-photo-view";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <PhotoProvider>
      <Component {...pageProps} />
      <Analytics />
    </PhotoProvider>
  );
}
