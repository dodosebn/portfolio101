import type { ComponentType, ReactNode  } from "react"
import type { LinkProps as TanStackLinkProps } from "@tanstack/react-router"

// ✅ Replaces next/image & next/link with plain React & TanStack equivalents

export interface SkillHolProps {
  name: string
  stackName: ComponentType
}

export interface ContactDetail {
  id: number
  content: string
  logo: ComponentType
}

// TanStack’s <Link> uses different props than Next.js, so we define our own
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
  // No StaticImageData — just use string (URL or import path)
  // pjPics: string
  liveUrl: string
}
