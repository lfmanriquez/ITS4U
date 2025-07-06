import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { navOptionsAtom } from "@/state/navOptionsAtom";
import brandLogo from "@/assets/its4u-logo.png";

const appName = import.meta.env.VITE_APP_NAME;

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => setIsOpen(false);

  const navOptions = useRecoilValue(navOptionsAtom);

  return (
    <header className="sticky top-0 w-full border-b-2 border-secondary dark:border-gray-800 bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-10 h-10" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 px-3">
              <SheetHeader>
                <SheetTitle className="text-lg font-bold">Menu</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-4">
                {navOptions.map((n) => (
                  <Link key={n.id} to={n.page} onClick={closeSheet}>
                    <Button
                      variant="default"
                      className="w-full block dark:hover:bg-primary/50 dark:hover:text-black"
                    >
                      {n.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <Link to="/">
          <img
            src={brandLogo}
            alt="ITS4U logo"
            className="hover:scale-105"
            style={{ maxHeight: "55px" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          {navOptions.map((n) => (
            <Link key={n.id} to={n.page}>
              <Button
                variant="default"
                className="dark:hover:bg-primary/50 dark:hover:text-black"
              >
                {n.label}
              </Button>
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <ModeToggle />

          {/* Avatar dropdown (always visible) */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="relative">
                <Avatar className="cursor-pointer">
                  <AvatarImage src="" alt="@user" />
                  <AvatarFallback>?</AvatarFallback>
                </Avatar>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Hamburger menu for small screens */}
        </div>
      </div>
    </header>
  );
}
