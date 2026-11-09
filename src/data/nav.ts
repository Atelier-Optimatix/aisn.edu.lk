// Shared navigation data for the desktop menu and the mobile off-canvas menu.
export interface NavItem {
  key: string;
  label: string;
  href: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  { key: 'home', label: 'HOME', href: './' },
  {
    key: 'about',
    label: 'ABOUT US',
    href: 'about-us/',
    children: [
      { key: 'gallery', label: 'GALLERY', href: 'about-us/gallery/' },
      { key: 'articles', label: 'OUR EVENTS', href: 'about-us/articles/' },
    ],
  },
  { key: 'academics', label: 'ACADEMICS', href: 'academics/' },
  { key: 'administration', label: 'ADMINISTRATION', href: 'administration/' },
  { key: 'admission', label: 'ADMISSIONS', href: 'admission/' },
  { key: 'contact', label: 'CONTACT US', href: 'contact-us/' },
];

export function isActive(item: NavItem, current: string): boolean {
  if (item.key === current) return true;
  return Boolean(item.children?.some((child) => child.key === current));
}

export const site = {
  name: 'Adventist International School Negombo',
  tagline: 'Nurturing Excellence in Education',
  description:
    'Adventist International School Negombo is a prestigious educational institution in Sri Lanka, offering a curriculum and a nurturing environment for students.',
  facebook: 'https://www.facebook.com/aisn2020/',
  contactHref: 'contact-us/',
  copyright: '© 2026 Seventh-Day Adventist International School. Designed By ',
  designer: 'Atelier Optimatix',
  designerHref: 'https://atelieroptimatix.com/',
};
