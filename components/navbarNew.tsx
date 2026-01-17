"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
    SheetTitle,
    SheetDescription,
    SheetHeader,
} from "@/components/ui/sheet";
import logoImg from "@/public/assets/icononly.png";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
];

export function NavbarNew() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed z-50  duration-300 border-b border-transparent",
                isScrolled
                    ? "top-5 left-1/2 -translate-x-1/2 bg-white/50 w-[95%] md:w-[70%] rounded-full py-0 shadow-lg backdrop-blur-[4px] border border-white/40"
                    : "top-5 left-1/2 -translate-x-1/2 bg-white/50 w-[95%] md:w-[70%] rounded-full py-0 shadow-lg backdrop-blur-[4px] border border-white/40"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo (Left) */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src={logoImg}
                        alt="Delta Business Solutions"
                        width={50}
                        height={50}
                        className="w-auto h-10 object-contain"
                    />

                </Link>

                {/* Desktop Navigation (Right) */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors text-md hover:text-[#dc9d14]",
                                pathname === link.href ? "text-[#dc9d14]" :
                                    (isScrolled ? "text-black" : "text-black ")
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    {/* <Button className="bg-[#dc9d14] hover:bg-[#b88210] text-white rounded-full px-6">
                        Get Started
                    </Button> */}
                </nav>

                {/* Mobile Navigation (Hamburger) */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className={cn(isScrolled ? "text-black" : "text-black mix-blend-difference")}>
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] glass-effect border-l border-white/20">
                            <SheetHeader className="text-left mb-6">
                                <SheetTitle className="text-2xl font-bold flex items-center gap-2">
                                    <Image
                                        src={logoImg}
                                        alt="Delta Business Solutions"
                                        width={32}
                                        height={32}
                                        className="w-auto h-12 object-contain"
                                    />

                                </SheetTitle>

                            </SheetHeader>
                            <nav className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <SheetClose asChild key={link.href}>
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "text-lg font-medium transition-colors hover:text-[#dc9d14] p-2 rounded-md hover:bg-black/5",
                                                pathname === link.href ? "text-[#dc9d14]" : "text-black"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    </SheetClose>
                                ))}

                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
