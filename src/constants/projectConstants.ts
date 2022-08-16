import { SocialLinkProps } from "@/types/SocialLinkProps";

interface ProjectConstants {
  layoutMaxWidth: string;
  companyName: string;
  companyEmail: string;
  navLinks: {
    href: string;
    label: string;
  }[];
  socialLinks: SocialLinkProps[];
}

export const PROJECT_CONST: ProjectConstants = {
  layoutMaxWidth: "1920px",
  companyName: "Project Name",
  companyEmail: "contact@nueva.tech",
  navLinks: [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "#",
      label: "Services",
    },
  ],
  socialLinks: [
    {
      name: "twitter",
      url: "https://twitter.com/NuevaTech_",
    },
  ],
};
