import * as React from "react"
import { cn } from "@/lib/utils"
import {
    InfoIcon,
    CheckCircle2Icon,
    AlertTriangleIcon
} from "lucide-react"

type Variant = "info" | "success" | "error"

const variantConfig: Record<Variant, {
    icon: React.ReactNode
    bg: string
    border: string
    text: string
}> = {
    info: {
        icon: <InfoIcon className="h-5 w-5 text-primary" />,
        bg: "bg-primary/20",
        border: "border-primary",
        text: "text-primary-light"
    },
    success: {
        icon: <CheckCircle2Icon className="h-5 w-5 text-accent" />,
        bg: "bg-accent/20",
        border: "border-accent",
        text: "text-accent"
    },
    error: {
        icon: <AlertTriangleIcon className="h-5 w-5 text-error" />,
        bg: "bg-destructive/20",
        border: "border-destructive",
        text: "text-error"
    }
}

interface NotificationProps {
    variant?: Variant
    message: string
    className?: string
}

export function AlertNotification({
                                 variant = "info",
                                 message,
                                 className
                             }: NotificationProps) {
    const config = variantConfig[variant]

    return (
        <div
            className={cn(
                "flex items-start gap-3 rounded-r-md border-l-4 p-4",
                config.bg,
                config.border,
                className
            )}
        >
            <div className="flex-shrink-0">{config.icon}</div>
            <p className={cn("font-inter text-sm", config.text)}>{message}</p>
        </div>
    )
}
