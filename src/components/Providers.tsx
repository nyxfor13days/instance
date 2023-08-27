"use client";

import { FC, ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

interface LayoutProps extends ThemeProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
      networkMode: "always",
    },
  },
});

const Providers: FC<LayoutProps> = ({ children, ...props }) => {
  return (
    <NextThemesProvider {...props}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>{children}</SessionProvider>
      </QueryClientProvider>
    </NextThemesProvider>
  );
};

export default Providers;
