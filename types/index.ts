import { StaticImageData } from "next/image";
import { LinkProps } from "next/link";
import { ReactNode } from "react";

export interface SkillHolProps {
    name: string;
    stackName: React.ComponentType ;
}
export interface ContactDetail {
  id: number;
  content: string;
  logo: React.ComponentType;
}
export interface TransitionLinkProps extends LinkProps{
    children: ReactNode;
    href: string;
}
export interface stackStyProps {
  stackName: React.ComponentType 
 }
  export interface ThemeContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
  }
  export interface pjProps {
    pjTitle: string;
    pjBio: string;
    pjStacks: string[];
    pjPics: string | StaticImageData;
        liveUrl: string;
  }