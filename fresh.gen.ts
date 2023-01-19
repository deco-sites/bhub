// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import * as $0 from "./routes/[...catchall].tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/_middleware.ts";
import * as $3 from "./routes/index.tsx";
import * as $$0 from "./islands/CarouselBrands.tsx";
import * as $$1 from "./islands/LiveControls.tsx";
import * as $$2 from "./islands/NavBarItem.tsx";
import * as $$3 from "./islands/Navbar.tsx";
import * as $$$0 from "./sections/Banner.tsx";
import * as $$$1 from "./sections/CarouselBrandsSection.tsx";
import * as $$$2 from "./sections/FeaturesSection.tsx";
import * as $$$3 from "./sections/Head.tsx";
import * as $$$4 from "./sections/Header.tsx";
import * as $$$5 from "./sections/Markdown.tsx";
import * as $$$6 from "./sections/ProblemSection.tsx";
import * as $$$7 from "./sections/SolutionsSection.tsx";
import * as $$$8 from "./sections/WorksSection.tsx";
import * as $$$$0 from "./functions/LoadGitHubRaw.ts";

const manifest: DecoManifest = {
  routes: {
    "./routes/[...catchall].tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/_middleware.ts": $2,
    "./routes/index.tsx": $3,
  },
  islands: {
    "./islands/CarouselBrands.tsx": $$0,
    "./islands/LiveControls.tsx": $$1,
    "./islands/NavBarItem.tsx": $$2,
    "./islands/Navbar.tsx": $$3,
  },
  sections: {
    "./sections/Banner.tsx": $$$0,
    "./sections/CarouselBrandsSection.tsx": $$$1,
    "./sections/FeaturesSection.tsx": $$$2,
    "./sections/Head.tsx": $$$3,
    "./sections/Header.tsx": $$$4,
    "./sections/Markdown.tsx": $$$5,
    "./sections/ProblemSection.tsx": $$$6,
    "./sections/SolutionsSection.tsx": $$$7,
    "./sections/WorksSection.tsx": $$$8,
  },
  functions: { "./functions/LoadGitHubRaw.ts": $$$$0 },
  schemas: {
    "./sections/Banner.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/CarouselBrandsSection.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/FeaturesSection.tsx": {
      "inputSchema": {
        "title": " Features Section",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "features": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Features",
          },
          "image": {
            "format": "image-uri",
            "type": "string",
            "title": "Image",
          },
        },
        "required": [
          "title",
          "features",
          "image",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Head.tsx": {
      "inputSchema": {
        "title": " Head",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "description": {
            "type": "string",
            "title": "Description",
          },
          "url": {
            "type": "string",
            "title": "Url",
          },
          "imageUrl": {
            "type": "string",
            "title": "Image Url",
          },
          "faviconUrl": {
            "type": "string",
            "title": "Favicon Url",
          },
          "styleUrls": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Style Urls",
          },
          "themeColor": {
            "type": "string",
            "title": "Theme Color",
          },
        },
        "required": [
          "title",
          "description",
          "url",
          "imageUrl",
          "faviconUrl",
          "styleUrls",
          "themeColor",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Header.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/Markdown.tsx": {
      "inputSchema": {
        "title": " Markdown",
        "type": "object",
        "properties": {
          "text": {
            "$id": "5b1cd5713a375e18bb93e9635b8a2dc5fc2672cf",
            "format": "live-function",
            "type": "string",
            "title": "Text",
          },
        },
        "required": [
          "text",
        ],
      },
      "outputSchema": null,
    },
    "./sections/ProblemSection.tsx": {
      "inputSchema": {
        "title": " Problem Section",
        "type": "object",
        "properties": {
          "title": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title",
          },
          "listProblems": {
            "type": "array",
            "items": {
              "title": "Problem",
              "type": "object",
              "properties": {
                "src": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Src",
                },
                "alt": {
                  "type": [
                    "string",
                    "null",
                  ],
                  "title": "Alt",
                },
                "href": {
                  "type": [
                    "string",
                    "null",
                  ],
                  "title": "Href",
                },
                "title": {
                  "type": [
                    "string",
                    "null",
                  ],
                  "title": "Title",
                },
                "description": {
                  "type": [
                    "string",
                    "null",
                  ],
                  "title": "Description",
                },
              },
              "required": [],
            },
            "title": "List Problems",
          },
        },
        "required": [],
      },
      "outputSchema": null,
    },
    "./sections/SolutionsSection.tsx": {
      "inputSchema": {
        "title": " Solutions Section",
        "type": "object",
        "properties": {
          "title": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title",
          },
          "solutionFeatured": {
            "title": "Solution Featured",
            "type": "object",
            "properties": {
              "image": {
                "format": "image-uri",
                "type": "string",
                "title": "Image",
              },
              "alt": {
                "type": [
                  "string",
                  "null",
                ],
                "title": "Alt",
              },
              "title": {
                "type": "string",
                "title": "Title",
              },
              "description": {
                "type": "string",
                "title": "Description",
              },
              "btnLabel": {
                "type": "string",
                "title": "Btn Label",
              },
              "btnLink": {
                "type": "string",
                "title": "Btn Link",
              },
              "linkLabel": {
                "type": "string",
                "title": "Link Label",
              },
              "linkHref": {
                "type": "string",
                "title": "Link Href",
              },
            },
            "required": [
              "title",
              "description",
              "btnLabel",
              "btnLink",
              "linkLabel",
              "linkHref",
            ],
          },
          "listSolutions": {
            "type": "array",
            "items": {
              "title": "Solution",
              "type": "object",
              "properties": {
                "title": {
                  "type": "string",
                  "title": "Title",
                },
                "description": {
                  "type": "string",
                  "title": "Description",
                },
                "btnLabel": {
                  "type": "string",
                  "title": "Btn Label",
                },
                "btnLink": {
                  "type": "string",
                  "title": "Btn Link",
                },
                "linkLabel": {
                  "type": "string",
                  "title": "Link Label",
                },
                "linkHref": {
                  "type": "string",
                  "title": "Link Href",
                },
              },
              "required": [
                "title",
                "description",
                "btnLabel",
                "btnLink",
                "linkLabel",
                "linkHref",
              ],
            },
            "title": "List Solutions",
          },
        },
        "required": [
          "solutionFeatured",
        ],
      },
      "outputSchema": null,
    },
    "./sections/WorksSection.tsx": {
      "inputSchema": {
        "title": " Works Section",
        "type": "object",
        "properties": {
          "title": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title",
          },
          "subtitle": {
            "type": [
              "string",
              "null",
            ],
            "title": "Subtitle",
          },
          "listWorks": {
            "type": "array",
            "items": {
              "title": "Work",
              "type": "object",
              "properties": {
                "image": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Image",
                },
                "description": {
                  "type": [
                    "string",
                    "null",
                  ],
                  "title": "Description",
                },
              },
              "required": [],
            },
            "title": "List Works",
          },
        },
        "required": [],
      },
      "outputSchema": null,
    },
    "./functions/LoadGitHubRaw.ts": {
      "inputSchema": {
        "title": " Load Git Hub Raw",
        "type": "object",
        "properties": {
          "repo": {
            "type": "string",
            "title": "Repo",
            "description": "Complete user/repo format",
          },
          "branch": {
            "type": "string",
            "title": "Branch",
            "description": "Branch",
          },
          "path": {
            "type": "string",
            "title": "Path",
            "description":
              "Path to fetch, or leave blank and add :path route param.",
          },
        },
        "required": [
          "repo",
          "branch",
          "path",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "5b1cd5713a375e18bb93e9635b8a2dc5fc2672cf",
          },
        },
        "additionalProperties": true,
      },
    },
  },
  baseUrl: import.meta.url,
  config,
};

// live — this exposes the manifest so the live server can render components dynamically
globalThis.manifest = manifest;

export default manifest;
