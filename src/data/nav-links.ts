import { Instagram, Linkedin } from "lucide-react"
import { TbBrandWhatsapp } from "react-icons/tb"

export const navLinks = [
  {
    label: "about",
    slug: "/about",
  },
  {
    label: "contact",
    slug: "/contact",
  },
]

export const navigation = {
  main: [
    {
      id: 1,
      name: "Services",
      href: "/services",
    },
    {
      id: 2,
      name: "About",
      href: "/about",
    },
    {
      id: 3,
      name: "Contact",
      href: "/contact",
    },
  ],
  social: [
    {
      id: 1,
      name: "Instagram",
      href: "https://www.instagram.com/bluefin_aviation/?hl=en",
      icon: Instagram,
    },
    {
      id: 2,
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/bluefin-aviation-services",
      icon: Linkedin,
    },
    {
      id: 3,
      name: "WhatsApp",
      href: "https://wa.me/+19548812932",
      icon: TbBrandWhatsapp,
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
}
