import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ className, ...props }, ref) => {
    return (
        <div className="relative">
            <input
                type="checkbox"
                className={cn(
                    "peer h-4 w-4 shrink-0 rounded-sm border border-gray-700 bg-cp-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cp-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-cp-primary data-[state=checked]:text-primary-foreground",
                    className,
                )}
                ref={ref}
                {...props}
            />
            <Check className="absolute left-0 top-0 h-4 w-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
        </div>
    )
})
Checkbox.displayName = "Checkbox"

export { Checkbox }
