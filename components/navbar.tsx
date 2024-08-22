// imports
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/mode-toggle";
import { LuMenu } from "react-icons/lu";

export default function Navbar({ }): any {
    return (
        <nav className="fixed z-50 flex items-center justify-between w-full h-24 px-4 py-10 backdrop-blur-md bg-background bg-opacity-30 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <Link className="flex  justify-center items-center gap-2" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-12 fill-[#b700ff]">
             <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>

            <p>FileFuze</p>

            </Link>
            <div className="hidden gap-1 md:gap-2 lg:gap-4 md:flex">
                <Button variant="ghost" className="font-semibold text-md">
                    <Link href="/">Home</Link>
                </Button>
                <Link href="/about">
                    <Button variant="ghost" className="font-semibold text-md">
                        About
                    </Button>
                </Link>
                <Link href="/privacy-policy">
                    <Button variant="ghost" className="font-semibold text-md">
                        Privacy Policy
                    </Button>
                </Link>
            </div>
            <div className="items-center hidden gap-2 md:flex">
                <ModeToggle />
                <Link href="https://github.com/KowyXYZ">
                    <Button
                        variant="default"
                        className="items-center hidden gap-2 bg-[#9333ea] rounded-full w-fit md:flex"
                        size="lg"
                    >
                        <span>My Github</span>
                        <span className="text-xl">
                            <BsGithub />
                        </span>
                    </Button>
                </Link>
            </div>
            {/* MOBILE NAV */}
            <Sheet>
                <SheetTrigger className="block p-3 md:hidden">
                    <span className="text-2xl text-slate-950 dark:text-slate-200">
                        <LuMenu />
                    </span>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetDescription>
                            <div className="flex flex-col w-full h-full">
                                <SheetTrigger asChild>
                                    <Link href="/">
                                        <Button variant="link" className="w-full font-semibold text-md">
                                            Home
                                        </Button>
                                    </Link>
                                </SheetTrigger>
                                <SheetTrigger asChild>
                                    <Link href="/about">
                                        <Button variant="link" className="w-full font-semibold text-md">
                                            About
                                        </Button>
                                    </Link>
                                </SheetTrigger>
                                <SheetTrigger asChild>
                                    <Link href="/privacy-policy">
                                        <Button variant="link" className="w-full font-semibold text-md">
                                            Privacy Policy
                                        </Button>
                                    </Link>
                                </SheetTrigger>
                                <ModeToggle />
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </nav>
    );
}