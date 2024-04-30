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
    <div>
        {
            founder.map((value) => (
                <div>
                    <Image 
                        src={value?.imagem?.src || ""} 
                        width={1440} 
                        height={500} 
                        alt={value?.imagem?.alt}
                        class="relative"
                    />
                    <div>
                        <h5>{value.name}</h5>
                        <p>{value.description}</p>
                        <a href={value.linkedIn} target="_blank" rel="noopener noreferrer">Link</a>
                    </div>
                </div>
            ))
        }
    </div>
}