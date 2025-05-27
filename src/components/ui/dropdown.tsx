import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface DropdownItem {
    label: string
    onSelect?: () => void
}

interface DropdownProps {
    triggerLabel: string
    items: DropdownItem[]
    className?: string
}

export function Dropdown({ triggerLabel, items, className }: DropdownProps) {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button
                    className={cn(
                        "inline-flex items-center gap-2 rounded-md border border-primary bg-background px-4 py-2 text-sm font-inter text-white transition-all hover:bg-primary/10 hover:text-primary-light",
                        className
                    )}
                >
                    {triggerLabel}
                    <ChevronDown className="h-4 w-4" />
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className="mt-2 min-w-[180px] rounded-md border border-primary/20 bg-card-bg p-1 shadow-md"
                    sideOffset={5}
                >
                    {items.map((item, idx) => (
                        <DropdownMenu.Item
                            key={idx}
                            onSelect={item.onSelect}
                            className="w-full cursor-pointer select-none rounded-sm px-3 py-2 text-sm text-white transition-colors hover:bg-primary/10 hover:text-primary-light focus:bg-primary/10 focus:text-primary-light outline-none"
                        >
                            {item.label}
                        </DropdownMenu.Item>
                    ))}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}
