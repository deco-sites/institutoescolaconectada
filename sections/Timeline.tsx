import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
    title?: string
    image?: {
        src?: ImageWidget
        alt?: string
    }
}

export default function ImageComponent({
    title = "",
    image = {
        src: "",
        alt: ""
    }
}: Props) {
    return (
        <div>
            <h2>{title}</h2>
            <div>
                <Image 
                    src={image.src || ""} 
                    width={1440} 
                    height={336} 
                    alt={image.alt}
                    class="relative mb-16 lg:w-full"
                />
            </div>
        </div>
    )
}