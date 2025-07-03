import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
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
const appName = import.meta.env.VITE_APP_NAME;

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => setIsOpen(false);

  const navOptions = [
    { id: 0, page: "/", label: "Home" },
    { id: 1, page: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 w-full border-b-2 border-secondary dark:border-gray-800 bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}

        <Link to="/">
          <div className="text-2xl font-bold text-primary">{appName}</div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          {navOptions.map((n) => (
            <Link key={n.id} to={n.page}>
              <Button variant="ghost">{n.label}</Button>
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
              <Avatar className="cursor-pointer">
                <AvatarImage src="" alt="@user" />
                <AvatarFallback>?</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Hamburger menu for small screens */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 px-3">
                <div className="flex flex-col gap-4 mt-10">
                  {navOptions.map((n) => (
                    <Link key={n.id} to={n.page} onClick={closeSheet}>
                      <Button variant="outline" className="w-full block">
                        {n.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
