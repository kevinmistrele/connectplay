import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
    return (
        <section className="py-20 bg-gradient-to-br from-primary/20 to-accent/10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6 tracking-wider">
                    PRONTO PARA <span className="text-primary">DOMINAR</span>?
                </h2>
                <p className="font-inter text-lg text-gray-300 mb-8">
                    Junte-se a milhares de jogadores que já encontraram seus parceiros perfeitos
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="primary" size="lg" className="flex items-center justify-center gap-2">
                        Criar Conta Grátis
                        <ArrowRight className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-accent text-accent hover:bg-accent/10"
                    >
                        Saiba Mais
                    </Button>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-400">
                    <Star className="h-4 w-4 text-accent fill-current" />
                    <span>Gratuito para sempre • Sem anúncios • Comunidade ativa</span>
                </div>
            </div>
        </section>
    )
}
