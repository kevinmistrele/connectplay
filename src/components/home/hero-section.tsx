import { Gamepad2, Play } from "lucide-react"
import { Button } from "@/components/ui/button.tsx"

export function HeroSection() {
    return (
        <section className="relative py-20 lg:py-32 hero-gradient">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wider">
                        ENCONTRE SEU
                        <span className="block text-primary">PARCEIRO</span>
                        <span className="block text-accent">DE JOGO</span>
                    </h1>

                    <p className="font-inter text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                        A plataforma definitiva para conectar jogadores. Encontre sua dupla perfeita, forme equipes completas e
                        domine os rankings juntos.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Button variant="primary" size="lg" className="flex items-center gap-2">
                            <Play className="h-5 w-5" />
                            Começar Agora
                        </Button>
                        <Button variant="outline" size="lg" className="flex items-center gap-2">
                            <Gamepad2 className="h-5 w-5" />
                            Ver Demo
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-primary/20">
                            <div className="text-3xl font-bold text-primary mb-2 font-orbitron">50K+</div>
                            <div className="font-inter text-muted-foreground">Jogadores Ativos</div>
                        </div>
                        <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-primary/20">
                            <div className="text-3xl font-bold text-accent mb-2 font-orbitron">25K+</div>
                            <div className="font-inter text-muted-foreground">Matches Realizados</div>
                        </div>
                        <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-primary/20">
                            <div className="text-3xl font-bold text-primary-light mb-2 font-orbitron">100+</div>
                            <div className="font-inter text-muted-foreground">Jogos Suportados</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
