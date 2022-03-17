import { IoLogoDiscord, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";

export const globals = {
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
