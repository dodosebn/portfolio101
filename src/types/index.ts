import type { ComponentType, ReactNode  } from "react"
import type { LinkProps as TanStackLinkProps } from "@tanstack/react-router"


export interface SkillHolProps {
  name: string
  stackName: ComponentType
}

export interface ContactDetail {
  id: number
  content: string
  logo: ComponentType
}

export interface TransitionLinkProps extends Partial<TanStackLinkProps> {
  children: ReactNode
  href: string
}

export interface stackStyProps {
  stackName: ComponentType
}

export interface ThemeContextType {
  theme: "light" | "dark"
  toggleTheme: () => void
}

export interface pjProps {
  pjTitle: string
  pjBio: string
  pjStacks: Array<string>

  liveUrl: string
}
