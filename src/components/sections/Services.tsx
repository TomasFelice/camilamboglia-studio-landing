import {
    Megaphone,
    PenTool,
    Users,
    BarChart
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Services() {
    const services = [
        {
            title: "Estrategia Integral",
            description: "Desarrollo de planes de marketing a medida.",
            icon: <BarChart className="h-8 w-8 text-zinc-500 mb-4" />
        },
        {
            title: "Producción y Edición",
            description: "Creación de visuales y copys atractivos.",
            icon: <PenTool className="h-8 w-8 text-zinc-500 mb-4" />
        },
        {
            title: "Community Management",
            description: "Gestión y crecimiento de tus comunidades online.",
            icon: <Users className="h-8 w-8 text-zinc-500 mb-4" />
        },
        {
            title: "Pauta Publicitaria",
            description: "Campañas optimizadas para maximizar tu inversión.",
            icon: <Megaphone className="h-8 w-8 text-zinc-500 mb-4" />
        }
    ];

    return (
        <section id="services" className="w-full py-12 md:py-24 bg-background">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                        ¿Qué hacemos?
                    </h2>
                    <p className="max-w-[700px] text-zinc-800 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-muted-foreground">
                        Contamos con un equipo especializado que se encarga de todo lo que necesita tu marca para destacar en el entorno digital.
                    </p>
                    <div className="w-[100px] h-[1px] bg-zinc-300 mt-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Card key={index} className="bg-white border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                            <CardHeader className="flex flex-col items-center text-center pt-8 pb-4">
                                {service.icon}
                                <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center pb-8">
                                <CardDescription className="text-base text-zinc-600">
                                    {service.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
