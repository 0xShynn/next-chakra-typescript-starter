// More info on Next SEO at https://github.com/garmeeh/next-seo#readme
// Create a favicon set at https://realfavicongenerator.net and put it in the public folder

// Edit the canonical url
const canonicalUrl = "";

// Edit the default title
const defaultTitle = "Next Chakra Starter TS";
const defaultDescription =
  "A simple starter for Next.js with Chakra UI and TypeScript";

// Edit the SEO parameters
export const SEO = {
  defaultTitle: defaultTitle,
  titleTemplate: `%s • ${defaultTitle}`,
  canonical: canonicalUrl,
  additionalLinkTags: [
    {
      rel: "icon",
      href: "favicons/favicon-16x16.png",
      type: "image/png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      href: "favicons/favicon-32x32.png",
      type: "image/png",
      sizes: "32x32",
    },
    {
      rel: "apple-touch-icon",
      href: "favicons/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "favicons/site.webmanifest",
    },
    {
      rel: "mask-icon",
      href: "favicons/safari-pinned-tab.svg",
      // Edit the touch bar background color
      color: "#FFFFFF",
    },
  ],
  additionalMetaTags: [
    {
      name: "msapplication-TileColor",
      // Edit the tile color (windows)
      content: "#222222",
    },
    {
      name: "theme-color",
      // Edit the full background color (android)
      content: "#ffffff",
    },
  ],
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    type: "website",
    locale: "en_IE",
    url: canonicalUrl,
    images: [
      {
        // Add a custom image for social media sharing
        url: "https://via.placeholder.com/1200x630",
        width: 1200,
        height: 630,
        alt: "Preview of the website",
      },
    ],
  },
  // Edit the twitter info or delete
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export default SEO;
