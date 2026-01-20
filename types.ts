export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TeamCategory {
  id: string;
  title: string;
  role: string;
  description: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export enum PageRoutes {
  HOME = '/',
  ABOUT = '/about',
  SERVICES = '/services',
  TEAM = '/team',
  CONTACT = '/contact',
}