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
            <h1 class="text-[#8D298F] text-5xl font-family text-center w-full uppercase mb-6 font-bold after:h-2 after:w-[30%] after:block after:mx-auto after:bg-gradient-to-r after:from-[#8D298F] after:to-[#04A8EA] after:mt-1">{title}</h1>
            <div class="flex flex-wrap w-1/2 mx-auto justify-around">
                {
                    logoParceiro?.map((value) => (
                        <Image 
                            src={value.src || ""} 
                            width={285} 
                            height={98} 
                            alt={value.label}
                            class="relative mb-8"
                        />
                    ))
                }
            </div>
        </div>
    )
}