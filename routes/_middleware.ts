import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 461,
  site: "bhub",
  domains: ["deco-sites-bhub.deno.dev"],
});