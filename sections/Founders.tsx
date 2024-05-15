import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Founder {
    imagem?: {
        src?: ImageWidget
        alt?: string
    }
    name?: string
    cargo?: string
    description?: string
    linkedIn?: string
}

export interface Props {
    founder?: Founder[]
}

export default function Founders({
    founder = [
        {
            imagem: {
                src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/7759/f941a0e0-1296-4e1f-993a-afbdea727685",
                alt: "New"
            },
            name: "Nome",
            cargo: "Diretora da Escola Municipal Salles Marques - Além Paraiba - MG",
            description: "Lorem ipsum dolor sit amet. Qui dignissimos inventore in consequatur ratione qui asperiores quibusdam aut quaerat veniam est animi dicta.",
            linkedIn: "#"
        },
        {
            imagem: {
                src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/7759/f941a0e0-1296-4e1f-993a-afbdea727685",
                alt: "New"
            },
            name: "Nome",
            cargo: "Diretora da Escola Municipal Professor Lafayette Cortes - Além Paraíba - MG",
            description: "Lorem ipsum dolor sit amet. Qui dignissimos inventore in consequatur ratione qui asperiores quibusdam aut quaerat veniam est animi dicta.",
            linkedIn: "#"
        },
        {
            imagem: {
                src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/7759/f941a0e0-1296-4e1f-993a-afbdea727685",
                alt: "New"
            },
            name: "Nome",
            cargo: "Pedagoga da Escola Estadual Júlio Giongo - Pranchita - PR",
            description: "Lorem ipsum dolor sit amet. Qui dignissimos inventore in consequatur ratione qui asperiores quibusdam aut quaerat veniam est animi dicta.",
            linkedIn: "#"
        }
    ]
}: Props) {
    return (
        <div class="container flex gap-3 justify-around my-10 max-[1020px]:flex-col max-[1020px]:items-center flex-wrap">
            {
                founder.map((value) => (
                    <div class="w-80">
                        <Image 
                            src={value?.imagem?.src || ""} 
                            width={274} 
                            height={211} 
                            alt={value?.imagem?.alt}
                            class="relative -bottom-[1px] w-full min-h-[246px] max-h-[246px] max-[1020px]:object-contain rounded-tr-[10px] rounded-tl-[10px]"
                        />
                        <div class="border-[#04A8EA] border-r border-b border-l rounded-bl-[10px] rounded-br-[10px] text-center relative px-4 py-10 h-[320px] flex flex-col justify-center">
                            <h5 class="text-2xl font-bold bg-gradient-to-tr from-[#8D298F] to-[#04A8EA] inline-block text-transparent bg-clip-text text-center mx-auto">{value.name}</h5>
                            <span class="text-sm font-bold py-2 mb-2">{value.cargo}</span>
                            <p class="max-h-[220px] overflow-auto touch-pan-y">{value.description}</p>
                            <a class="absolute -top-6 right-4 button-linkedin" href={value.linkedIn} target="_blank" rel="noopener noreferrer">Link</a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}