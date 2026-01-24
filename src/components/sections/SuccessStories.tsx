import { Card, CardContent } from "@/components/ui/card";

export default function SuccessStories() {
    const cases = [
        {
            brand: "Marca 1",
            challenge: "Incrementar la visibilidad de la marca en un mercado saturado.",
            metrics: [
                "+150% Alcance Orgánico",
                "x2 Conversiones en Ventas"
            ]
        },
        {
            brand: "Marca 2",
            challenge: "Optimizar el retorno de inversión en campañas publicitarias.",
            metrics: [
                "30% Crecimiento de Seguidores",
                "ROI del 400% en Pauta"
            ]
        },
        // Adding a 3rd mock case for better layout in grid
        {
            brand: "Marca 3",
            challenge: "Lanzamiento de nueva línea de productos con estrategia influencer.",
            metrics: [
                "Sold Out en 48hs",
                "+5k Nuevos Leads"
            ]
        }
    ];

    return (
        <section id="success-stories" className="w-full py-12 md:py-24 bg-[#F5F5F0]">
            <div className="container px-4 md:px-6 mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary text-center mb-12">
                    Historias de Éxito
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cases.map((item, index) => (
                        <Card key={index} className="bg-background border-zinc-200 overflow-hidden">
                            <CardContent className="p-8 flex flex-col items-center text-center h-full">
                                {/* Logo Placeholder */}
                                <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mb-6 text-zinc-400 font-bold">
                                    LOGO
                                </div>

                                <p className="text-muted-foreground mb-6 italic">
                                    "{item.challenge}"
                                </p>

                                <div className="mt-auto space-y-2">
                                    {item.metrics.map((metric, i) => (
                                        <div key={i} className="text-xl md:text-2xl font-bold text-primary">
                                            {metric}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
