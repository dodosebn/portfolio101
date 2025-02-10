import { StaticImageData } from "next/image";

export interface stackStyProps {
    stackName: string;
  }
  
  export interface pjProps {
    pjTitle: string;
    pjBio: string;
    pjStacks: string[];
    pjPics: string | StaticImageData;
        liveUrl: string;
    repoUrl: string;
  }