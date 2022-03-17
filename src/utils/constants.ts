import { IoLogoDiscord, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";

export const PROJECT_CONST = {
  // Set a max width for layout containers
  maxWidth: "1140px",
  // Add navigation links here
  navLinks: [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/about",
      label: "About",
    },
  ],
  // Add social links here
  socialLinks: [
    {
      href: "https://twitter.com",
      icon: IoLogoTwitter,
    },
    {
      href: "https://discord.gg",
      icon: IoLogoDiscord,
    },
    {
      href: "https://instagram.com",
      icon: IoLogoInstagram,
    },
  ],
};

export const MIGHTY_MINT_CONST = {
  company_name: "Mighty Mint",
  website_url: "https://twitter.com/MightyMint_",
};
