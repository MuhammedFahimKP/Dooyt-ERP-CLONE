import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="h-screen">
        <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
            
            {/* Badge */}
            <div className="mb-4 inline-flex items-center rounded-full bg-[#F5ECE7] px-4 py-1.5 text-xs font-medium text-[#F97316]">
            🔥 Best ERP Software
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Accuracy. Productivity.
            <br />
            <span className="text-[#F97316]">
                Business Wins
            </span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-600 md:text-base">
            Instead of using many tools, just choose one to control your entire
            business effortlessly. Dooyt, the best ERP software that makes smarter
            decisions and drives business growth.
            </p>

            {/* Buttons */}
            <div className="mt-5 flex gap-3">
            <Button className="h-10 rounded-xl bg-[#F97316] px-5">
                Request A Demo
            </Button>

            <Button
                variant="outline"
                className="h-10 rounded-xl px-5"
            >
                Try Free For 30 Days
            </Button>
            </div>

            {/* Rating */}
            <div className="mt-3 text-xs text-neutral-500">
            ⭐⭐⭐⭐⭐ (Rating 4.5 star)
            </div>

            {/* Dashboard */}
            <div className="relative mt-6 flex-1 w-full max-w-5xl">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-100 blur-3xl" />

            <div className="relative h-full overflow-hidden rounded-[28px] border-[4px] border-black bg-white shadow-2xl">
                <Image
                src="/dashboard-preview.png"
                alt="Dashboard"
                fill
                priority
                className="object-contain"
                />
            </div>
            </div>
        </div>
    </section>
  );
}