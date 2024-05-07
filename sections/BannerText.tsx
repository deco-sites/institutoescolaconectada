// import { useState } from 'preact/hooks';
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
     /**
     * @description Banner Imagem
     */
     imagemMobile?: {
        src?: ImageWidget
        alt?: string
    }
    /**
     * @description Texto Principal - Banner
     */
    textBanner?: string
    /**
     * @description Texto secundário - Banner
     */
    textContentBanenr?: string
    /**
     * @description Banner - Texto Botão
     */
    textButton?: string
    /**
     * @description Banner - Link Botão
     */
    linkButton?: string
}

export default function BannerSecond({
    imagem = {
        src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/7759/f941a0e0-1296-4e1f-993a-afbdea727685",
        alt: "Banner Principal - Instituto Escola Conectada"
    },
    imagemMobile = {
        src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/7759/a2a401c7-8dfb-4433-b145-404d1ff544f6",
        alt: "Banner Principal - Instituto Escola Conectada"
    },
    textBanner = "Propósito",
    textButton = "Nosso propósito",
    textContentBanenr = "Impulsionar a transformação da educação por meio da conectividade.",
    linkButton = "#"
}: Props) {

    // const [ modal, setModal ] = useState(false)

    return (
        <div>
            <div class="relative bg-gradient-to-bl from-[#04A8EA] to-[#8D298F] ">
                <Image 
                    src={imagem.src || ""} 
                    width={1440} 
                    height={500} 
                    alt={imagem.alt}
                    class="relative max-[1020px]:hidden"
                />
                <Image 
                    src={imagemMobile.src || ""} 
                    width={440} 
                    height={360} 
                    alt={imagemMobile.alt}
                    class="relative min-[1020px]:hidden"
                />
                <div class="banner-main-home absolute mx-auto right-0 left-0">
                    <div class="mx-auto text-center w-7/12 py-14 px-8 relative max-[1020px]:w-[95%] max-[1020px]:mt-[25%]">
                        <h1 class="text-4xl font-family text-white w-full uppercase mb-6 font-bold after:h-2 after:w-[30%] after:block after:mx-auto after:bg-gradient-to-r after:from-[#8D298F] after:to-[#04A8EA] after:mt-1 max-[1020px]:text-xl">{textBanner}</h1>
                        <p class="block text-white text-2xl my-14 max-[1020px]:text-base">{textContentBanenr}</p>
                        <a class="mx-auto w-1/5 bg-[#8D298F] uppercase font-bold py-4 px-4 text-white max-[1020px]:text-xl" href={linkButton} target="_blank">{textButton}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}