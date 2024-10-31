import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Parceiro {
    src?: ImageWidget
    label?: string
    width?: number
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
            label: "",
            width: 200
        },
        {
            src: "",
            label: "",
            width: 200
        }
    ]
}: Props) {
    return (
        <div>
            <div>
                <h1 class="text-[#8D298F] text-3xl mt-8 font-family text-center w-full uppercase mb-6 font-bold  max-[1020px]:text-xl">{title}</h1>
                <div class="flex flex-wrap w-1/2 mx-auto justify-center items-center gap-9">
                    {
                        logoParceiro?.map((value) => (
                            <Image 
                                src={value.src || ""} 
                                width={value.width}
                                alt={value.label}
                                class="relative w-auto max-w-40 h-auto max-h-max"
                                decoding="async"
                                loading="lazy"
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}