import type { RefObject } from 'react'
export function useSectionReveal(scope: RefObject<HTMLElement | null>) {
  // Sections are intentionally static. Chapter transitions carry the page's motion.
  void scope
}
