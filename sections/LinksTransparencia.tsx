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
            <h1 class="text-[#8D298F] text-5xl font-family text-center w-full uppercase mb-6 font-bold after:h-2 after:w-[30%] after:block after:mx-auto after:bg-gradient-to-r after:from-[#8D298F] after:to-[#04A8EA] after:mt-1">{title}</h1>
            <div class="flex max-w-5xl flex-wrap gap-4 justify-center mx-auto">
                {
                    link?.map((value) => (
                        <a href={value.link} target="_blank" noopener noreferrer class="font-bold w-[305px] border border-[#04A8EA] flex items-center justify-center text-center py-4 px-4 h-20 rounded-[10px] ">{value.text}</a>
                    ))
                }
            </div>
        </div>
    )
}