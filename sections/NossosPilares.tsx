import { HTMLWidget } from "apps/admin/widgets.ts";

export interface ItemPillar {
    title?: string
    content?: HTMLWidget
}

export interface Props {
    title?: string
    items?: ItemPillar[]
}

export default function NossosPilares({
    title = "",
    items = [
        {
            title: "Missão",
            content: "Conectar pessoas à internet de qualidade para fazer do Brasil um lugar com mais oportunidades para todos a partir da educação."
        },
        {
            title: "Propósito",
            content: "Impulsionamos a transformação da sociedade por meio da conectividade."
        },
        {
            title: "Valores",
            content: "<ul><li>Ética e transparência nas relações</li><li>Inovação permanente</li><li>Ênfase na qualidade dos produtos e serviços</li><li>Desenvolvimento de relações empáticas e altruístas</li><li>Promoção de uma sociedade menos desigual</li><li>Crença na solução de qualquer problema.</li></ul>"
        },
        {
            title: "Visão",
            content: "Um Brasil em que todas as pessoas, independentemente de gênero, etnia ou classe social, tenham acesso a uma educação inclusiva, conectada, equitativa e de qualidade."
        }
    ]
}: Props) {
    return (
        <div>
            <h1>{title}</h1>
            <div>
                {
                    items.map((value) => (
                        <div>
                            <h4>{value.title}</h4>
                            <div 
                                dangerouslySetInnerHTML={{
                                    __html: value.content
                                }}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}