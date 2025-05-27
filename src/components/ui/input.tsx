import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    labelClassName?: string
    inputClassName?: string
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
    ({ label, id, className, labelClassName, inputClassName, type = "text", ...props }, ref) => {
        const inputId = id || props.name || Math.random().toString(36).substring(7)

        return (
            <div className={cn("space-y-1", className)}>
                {label && (
                    <label
                        htmlFor={inputId}
                        className={cn("block font-inter text-sm text-white", labelClassName)}
                    >
                        {label}
                    </label>
                )}
                <input
                    id={inputId}
                    type={type}
                    ref={ref}
                    className={cn(
                        "w-full rounded-md border border-gray-700 bg-background px-4 py-2 text-white placeholder-gray-500 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30",
                        inputClassName
                    )}
                    {...props}
                />
            </div>
        )
    }
)

InputField.displayName = "InputField"

export { InputField }
