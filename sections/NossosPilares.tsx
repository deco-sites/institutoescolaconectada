import { HTMLWidget } from "apps/admin/widgets.ts";

export interface ItemPillar {
    title?: string
    content?: HTMLWidget
}

export interface Props {
    title?: string
    items?: ItemPillar[]
}

function validaCaracteres(strToReplace) {
    const strSChar = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";
    const strNoSChars = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
    var newStr = "";
    for (var i = 0; i < strToReplace.length; i++) {
        if (strSChar.indexOf(strToReplace.charAt(i)) != -1) {
            newStr += strNoSChars.substr(strSChar.search(strToReplace.substr(i, 1)), 1);
        } else {
            newStr += strToReplace.substr(i, 1);
        }
    }
    
    return newStr.replace(/[^a-zA-Z 0-9]/g, '').toUpperCase();
}

export default function NossosPilares({
    title = "Nossos pilares",
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
        <div class="relative after:w-full after:h-96 after:bg-[#8F298C] after:absolute after:-bottom-12 after:-z-10 mb-20 max-[1020px]:after:h-full">
            <h1 class="text-[#8D298F] text-4xl font-family text-center w-full uppercase font-bold mt-16 block mb-16">{title}</h1>
            <div class="grid grid-cols-5 grid-rows-6 gap-4 max-[1020px]:flex max-[1020px]:flex-col max-[1020px]:items-center">
                {
                    items.map((value) => (
                        <div class={`${validaCaracteres(value.title).toLocaleLowerCase()} item-grid w-64 h-auto bg-[#DDF5FF] rounded-xl text-center flex flex-col items-center justify-center px-4 py-4`}>
                            <h4 class="text-3xl font-bold bg-gradient-to-tr from-[#8D298F] to-[#04A8EA] inline-block text-transparent bg-clip-text mb-2">{value.title}</h4>
                            <div 
                                dangerouslySetInnerHTML={{
                                    __html: value.content
                                }}
                                class="text-base"
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}