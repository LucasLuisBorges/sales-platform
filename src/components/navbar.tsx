"use client";

import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { navigation } from "@/utils/navigation";
import { NavHeader } from "./nav-header";

export function Navbar() {
  const [state, setState] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="md:hidden mt-4 px-4">
        <NavHeader state={state} onClick={() => setState(!state)} />
      </div>

      <nav
        className={cn(
          "md:block fixed z-50 bg-background top-0 inset-x-0 rounded-b-2xl max-w-screen-xl mx-auto p-4",
          !state && "hidden"
        )}
      >
        <div className="items-center md:flex">
          <NavHeader state={state} onClick={() => setState(!state)} />

          <div
            className={cn(
              "flex-1 items-center text-foreground md:font-medium md:flex",
              state && "block mt-4",
              !state && "hidden"
            )}
          >
            <ul className="flex-1 md:ml-6 items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="block text-foreground w-full hover:text-muted-foreground"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
              <Link
                href=""
                className="text-foreground w-full hover:text-muted-foreground"
              >
                Entrar
              </Link>

              <Link
                href=""
                className={buttonVariants({
                  className: "w-full",
                })}
              >
                Cadastrar
                <ChevronRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
