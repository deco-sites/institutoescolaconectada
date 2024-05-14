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
            <div>
                <h1 class="text-[#8D298F] text-3xl mt-8 font-family text-center w-full uppercase mb-6 font-bold  max-[1020px]:text-xl">{title}</h1>
                <div class="flex flex-wrap w-1/2 mx-auto justify-around">
                    {
                        logoParceiro?.map((value) => (
                            <Image 
                                src={value.src || ""} 
                                width={185}
                                alt={value.label}
                                class="relative mb-8"
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