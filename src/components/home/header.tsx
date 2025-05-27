import { Button } from "@/components/ui/button.tsx"

export function Header() {
    return (
        <header className="bg-secondary/80 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <h1 className="font-orbitron text-2xl font-bold text-primary tracking-wider">
                            CONNECT<span className="text-accent">PLAY</span>
                        </h1>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <a
                            href="#features"
                            className="font-inter text-foreground hover:text-primary-light transition-colors"
                        >
                            Recursos
                        </a>
                        <a
                            href="#how-it-works"
                            className="font-inter text-foreground hover:text-primary-light transition-colors"
                        >
                            Como Funciona
                        </a>
                        <a
                            href="#games"
                            className="font-inter text-foreground hover:text-primary-light transition-colors"
                        >
                            Jogos
                        </a>
                        <a
                            href="#community"
                            className="font-inter text-foreground hover:text-primary-light transition-colors"
                        >
                            Comunidade
                        </a>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <Button variant="outline" size="sm">
                            Login
                        </Button>
                        <Button variant="primary" size="sm">
                            Cadastrar
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
