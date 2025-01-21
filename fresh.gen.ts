// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $BannerPrincipal from "./islands/BannerPrincipal.tsx";
import * as $ComoParticipar from "./islands/ComoParticipar.tsx";
import * as $CookieConsent from "./islands/CookieConsent.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
  },
  islands: {
    "./islands/BannerPrincipal.tsx": $BannerPrincipal,
    "./islands/ComoParticipar.tsx": $ComoParticipar,
    "./islands/CookieConsent.tsx": $CookieConsent,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
