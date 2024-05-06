export interface Link {
    text?: string
    link?: string
}

export interface Props {
    title?: string
    link?: Link[]
}

export default function LinksTransparencia({
    title = "Transparência",
    link = [
        {
            text: "Relatórios anuais",
            link: "#"
        },
        {
            text: "Relatórios Anuais De Auditoria Externa",
            link: "#"
        },
        {
            text: "Estatuto Social",
            link: "#"
        },
        {
            text: "Código de Conduta",
            link: "#"
        },
        {
            text: "Política de Privacidade",
            link: "#"
        },
        {
            text: "Política de Doação",
            link: "#/"
        },
        {
            text: "Cartão CNPJ",
            link: "#"
        },
        {
            text: "Ata Eleição Diretoria",
            link: "#"
        }
    ]
}: Props) {
    return (
        <div>
            <h1 class="text-[#8D298F] text-4xl font-family text-center w-full uppercase font-bold mt-16 block mb-16">{title}</h1>
            <div>
                {
                    link?.map((value) => (
                        <a href={value.link} target="_blank" noopener noreferrer>{value.text}</a>
                    ))
                }
            </div>
        </div>
    )
}