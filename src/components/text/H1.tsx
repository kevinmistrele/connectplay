import * as React from "react"
import { cn } from "@/lib/utils"

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {
    font?: "orbitron" | "poppins" | "rubik" | "sans"
}

const fontClassMap: Record<NonNullable<H1Props["font"]>, string> = {
    orbitron: "font-orbitron",
    poppins: "font-poppins",
    rubik: "font-rubik",
    sans: "font-sans"
}

export function H1({ className, font = "orbitron", children, ...props }: H1Props) {
    return (
        <div
            className={cn(
                "border-b border-primary pb-2 w-fit",
                fontClassMap[font],
                className
            )}
            {...props}
        >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {children}
            </h1>
        </div>
    )
}
