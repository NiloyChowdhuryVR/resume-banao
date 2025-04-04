"use client";

import { useState } from "react";
// import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Lightbulb, Code, BookOpen } from "lucide-react";
import classNames from "classnames";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { title: "Home", href: "/", icon: <Lightbulb size={18} className="mr-2" /> },
    { title: "Resume Builder", href: "/resume", icon: <Code size={18} className="mr-2" /> },
    { title: "About", href: "/about", icon: <BookOpen size={18} className="mr-2" /> },
  ];

  return (
    // <SessionProvider>
      
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur flex justify-center supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between w-[85%]">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-eduforge-600"
            >
              <path d="M12 22v-5.5" />
              <path d="m9 8 3-4 3 4" />
              <path d="M9.27 12a2 2 0 0 0-1.5 3.3l4.5 4.5a2 2 0 0 0 2.83 0l4.5-4.5a2 2 0 0 0-1.5-3.3H9.27Z" />
            </svg>
            <span className="font-display text-xl font-bold">Sophora</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div
                className={classNames(
                  "text-sm font-medium transition-colors flex items-center",
                  {
                    "text-eduforge-600": pathname === item.href,
                    "hover:text-blue-600": pathname !== item.href,  // Blue color on hover
                  }
                )}
                >
                {item.icon}
                {item.title}
              </div>
            </Link>
          ))}
        </nav>

        {/* Auth & Mobile Menu */}
        <div className="flex items-center gap-2">

          {/* Hamburger Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu size={20} />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            {/* Mobile Sheet Menu */}
            <SheetContent side="right">
              <div className="flex items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-eduforge-600"
                    >
                    <path d="M12 22v-5.5" />
                    <path d="m9 8 3-4 3 4" />
                    <path d="M9.27 12a2 2 0 0 0-1.5 3.3l4.5 4.5a2 2 0 0 0 2.83 0l4.5-4.5a2 2 0 0 0-1.5-3.3H9.27Z" />
                  </svg>
                  <span className="font-display text-xl font-bold">EduForge</span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="mt-8 flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                    <div className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-600">
                      {item.icon}
                      {item.title}
                    </div>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
                  // </SessionProvider>
  );
};

export default Navbar;
