import { InstagramIcon, LinkedinIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { TbBrandWhatsapp } from 'react-icons/tb';

export const socials = [
  {
    id: 1,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/company/bluefin-aviation-services',
    icon: LinkedinIcon,
  },
  {
    id: 2,
    name: 'Instagram',
    url: 'https://www.instagram.com/bluefin_aviation/?hl=en',
    icon: InstagramIcon,
  },
  {
    id: 3,
    label: 'WhatsApp',
    url: 'https://wa.me/+19548812932',
    icon: TbBrandWhatsapp,
  },
  {
    id: 4,
    name: 'Phone',
    url: 'tel:0019545900851',
    icon: PhoneIcon,
  },
  {
    id: 5,
    name: 'Email',
    url: 'mailto:operations@bluefinaviation.com',
    icon: MailIcon,
  },
];
