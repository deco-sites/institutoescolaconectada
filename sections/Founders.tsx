import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Founder {
    imagem?: {
        src?: ImageWidget
        alt?: string
    }
    name?: string
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
            description: "Lorem ipsum dolor sit amet. Qui dignissimos inventore in consequatur ratione qui asperiores quibusdam aut quaerat veniam est animi dicta.",
            linkedIn: "#"
        },
        {
            imagem: {
                src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/7759/f941a0e0-1296-4e1f-993a-afbdea727685",
                alt: "New"
            },
            name: "Nome",
            description: "Lorem ipsum dolor sit amet. Qui dignissimos inventore in consequatur ratione qui asperiores quibusdam aut quaerat veniam est animi dicta.",
            linkedIn: "#"
        },
        {
            imagem: {
                src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/7759/f941a0e0-1296-4e1f-993a-afbdea727685",
                alt: "New"
            },
            name: "Nome",
            description: "Lorem ipsum dolor sit amet. Qui dignissimos inventore in consequatur ratione qui asperiores quibusdam aut quaerat veniam est animi dicta.",
            linkedIn: "#"
        }
    ]
}: Props) {
    return (
        <div class="container flex gap-3 justify-around my-10">
            {
                founder.map((value) => (
                    <div class="w-80">
                        <Image 
                            src={value?.imagem?.src || ""} 
                            width={1440} 
                            height={500} 
                            alt={value?.imagem?.alt}
                            class="relative -bottom-[1px] w-full"
                        />
                        <div class="border-[#04A8EA] border-r border-b border-l rounded-bl-[10px] rounded-br-[10px] text-center relative px-4 py-10">
                            <h5 class="text-2xl font-bold bg-gradient-to-tr from-[#8D298F] to-[#04A8EA] inline-block text-transparent bg-clip-text mb-2 text-center mx-auto">{value.name}</h5>
                            <p>{value.description}</p>
                            <a class="absolute -top-6 right-4 button-linkedin" href={value.linkedIn} target="_blank" rel="noopener noreferrer">Link</a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}