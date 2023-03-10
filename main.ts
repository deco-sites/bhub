/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="deno.ns" />
/// <reference lib="esnext" />

import twindPlugin from "$fresh/plugins/twind.ts";
import { start } from "$fresh/server.ts";
import stylesPlugin from "$live/plugins/styles.ts";
import partytownPlugin from "partytown/mod.ts";
import prefetchPlugin from "prefetch";
import manifest from "./fresh.gen.ts";
import twindConfig from "./twind.config.ts";

await start(manifest, {
  plugins: [
    prefetchPlugin(),
    partytownPlugin(),
    stylesPlugin(
      "html{height: 100%;scroll-behavior:smooth;} body{height:100%;background:#141414;}"
    ),
    twindPlugin({
      selfURL: new URL("./twind.config.ts", import.meta.url).href,
      ...twindConfig,
    }),
  ],
});
