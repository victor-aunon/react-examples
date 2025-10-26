import { HeroUIProvider } from "@heroui/react";
import type { ReactNode } from "react";

interface UIProviderProps {
  children: ReactNode;
}

export function UIProvider({ children }: UIProviderProps) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
