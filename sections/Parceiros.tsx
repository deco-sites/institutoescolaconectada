import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Parceiro {
    src?: ImageWidget
    label?: string
}

export interface Props {
    title?: string
    logoParceiro?: Parceiro[]
}

export default function Parceiros({
    title = "Nossos Parceiros",
    logoParceiro = [
        {
            src: "",
            label: ""
        },
        {
            src: "",
            label: ""
        }
    ]
}: Props) {
    return (
        <div>
            <h1 class="text-[#8D298F] text-4xl font-family text-center w-full uppercase font-bold mt-16 block mb-16">{title}</h1>
            {
                logoParceiro?.map((value) => (
                    <Image 
                        src={value.src || ""} 
                        width={285} 
                        height={98} 
                        alt={value.label}
                        class="relative"
                    />
                ))
            }
        </div>
    )
}