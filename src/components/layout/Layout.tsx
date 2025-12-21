import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // scroll the layout container to top on every route change
    console.log('scrolled')
    scrollRef.current?.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return (
    <div ref={scrollRef} className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <Footer />
    </div>
  );
}
