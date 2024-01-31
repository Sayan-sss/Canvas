"use client";

import { OrganizationSwitcher } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { LayoutDashboard, Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favourites = searchParams.get("favourites");
  return (
    <div className=" hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <Image src="/logo.svg" alt="logo" height={60} width={60} />
          <span className={cn("font-semibold text-2xl", font.className)}>
            Canvas
          </span>
        </div>
      </Link>

      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              justifyContent: "space-between",
              backgroundColor: "white",
            },
          },
        }}
      />
      <div className=" space-y-1 w-full">
        <Button
          asChild
          variant={favourites ? "ghost" : "secondary"}
          size="lg"
          className=" font-normal justify-start px-2 w-full"
        >
          <Link href="/">
            <LayoutDashboard className=" h-4 w-4 mr-2 " />
            Team Canvas
          </Link>
        </Button>

        <Button
          asChild
          variant={favourites ? "secondary" : "ghost"}
          size="lg"
          className=" font-normal justify-start px-2 w-full"
        >
          <Link
            href={{
              pathname: "/",
              query: { favourites: true },
            }}
          >
            <Star className=" h-4 w-4 mr-2 " />
            Favourite Canvas
          </Link>
        </Button>
      </div>
    </div>
  );
};
