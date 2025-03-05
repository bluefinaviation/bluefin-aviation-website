import {
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";

export const navLinks = [
  {
    label: "about",
    slug: "/about",
  },
  {
    label: "contact",
    slug: "/contact",
  },
];

export const navigation = {
  main: [
    {
      id: 1,
      name: "Services",
      href: "/services",
    },
    {
      id: 2,
      name: "Flight Support",
      href: "/services/flight-support",
    },
    {
      id: 3,
      name: "Fuel",
      href: "/services/fuel-support",
    },
    {
      id: 4,
      name: "Charter",
      href: "/charter-brokerage",
    },
    {
      id: 5,
      name: "About",
      href: "/about",
    },
    {
      id: 6,
      name: "Contact",
      href: "/contact",
    },
  ],
  social: [
    {
      id: 1,
      name: "Instagram",
      href: "https://www.instagram.com/bluefin_aviation/?hl=en",
      icon: InstagramLogo,
    },
    {
      id: 2,
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/bluefin-aviation-services",
      icon: LinkedinLogo,
    },
    {
      id: 3,
      name: "WhatsApp",
      href: "https://wa.me/+19548812932",
      icon: WhatsappLogo,
    },
  ],
  policies: [
    { id: 1, name: "Cookie Policy", href: "/policies/cookie-policy" },
    { id: 2, name: "Privacy Policy", href: "/policies/privacy-policy" },
    {
      id: 3,
      name: "Terms & Conditions",
      href: "/policies/terms-and-conditions",
    },
  ],
};
