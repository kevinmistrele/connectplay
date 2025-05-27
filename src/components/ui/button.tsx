import React from "react"
import { cn } from "@/lib/utils.ts"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "accent" | "outline"
    size?: "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const baseStyle = "font-inter font-semibold rounded-md transition-all duration-300 cursor-pointer"

        const variants = {
            primary: "bg-primary hover:bg-primary-light text-white hover-glow",
            secondary: "bg-secondary hover:bg-secondary/80 text-foreground",
            accent: "bg-accent hover:bg-accent/80 text-white",
            outline: "bg-transparent border border-primary text-primary hover:bg-primary/10",
        }

        const sizes = {
            sm: "py-2 px-4 text-sm",
            md: "py-2 px-6 text-base",
            lg: "py-3 px-8 text-lg",
        }

        return (
            <button
                ref={ref}
                className={cn(baseStyle, variants[variant], sizes[size], className)}
                {...props}
            />
        )
    }
)

Button.displayName = "Button"

export { Button }
