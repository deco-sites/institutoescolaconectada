import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
     /**
     * @description Banner Imagem
     */
     imagem?: {
        src?: ImageWidget
        alt?: string
    }
}


export default function BannerImage({
    imagem = {
        src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/7759/f941a0e0-1296-4e1f-993a-afbdea727685",
        alt: "Banner"
    }
}: Props) {
    return (
        <div class="w-full">
            <Image 
                src={imagem.src || ""} 
                width={1440} 
                height={500} 
                alt={imagem.alt}
                class="relative"
            />
        </div>
    )
}