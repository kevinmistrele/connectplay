// src/components/ui/modal.tsx

// src/components/ui/modal.tsx
import type {ReactNode} from "react"

type Props = {
    isOpen: boolean
    onClose: () => void
    title?: string
    children: ReactNode
}

export function Modal({ isOpen, onClose, title, children }: Props) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-cp-card-bg p-6 rounded-2xl shadow-lg w-full max-w-lg relative border border-cp-primary/20">
                <button onClick={onClose} className="absolute top-3 right-3 text-cp-text-light hover:text-cp-accent">
                    ✕
                </button>

                {title && (
                    <h2 className="text-center font-orbitron text-xl font-bold text-cp-primary mb-4">
                        {title}
                    </h2>
                )}

                {children}
            </div>
        </div>
    )
}
