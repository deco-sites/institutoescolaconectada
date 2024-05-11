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
    numberOfSchools?: number
     /**
     * @description Banner - Texto Botão
     */
     textContentOfSchols?: string
    /**
     * @description Banner - Texto Botão
     */
    numberOfSchoolsConections?: number
     /**
     * @description Banner - Texto Botão
     */
     textContentOfScholsConections?: string
    /**
     * @description Banner - Texto Botão
     */
    numberOfStudants?: number
     /**
     * @description Banner - Texto Botão
     */
     textContentOfStudants?: string
    /**
     * @description Banner - Texto Botão
     */
    numberOfProviders?: number
     /**
     * @description Banner - Texto Botão
     */
     textContentOfProviders?: string
}

export default function BannerLast({
    imagem = {
        src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/7759/f941a0e0-1296-4e1f-993a-afbdea727685",
        alt: "Banner Principal - Instituto Escola Conectada"
    },
    imagemMobile = {
        src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/7759/ec05cc54-ba21-4c3a-a3d2-766fb0896724",
        alt: "Banner Principal - Instituto Escola Conectada"
    },
    textBanner = "Propósito",
    numberOfSchools = 461,
    textContentOfSchols = "Escolas Conectadas",
    textContentBanenr = "Impulsionar a transformação da educação por meio da conectividade.",
    numberOfSchoolsConections = 292,
    textContentOfScholsConections = "Escolas em Conexão",
    numberOfStudants = 198.312,
    textContentOfStudants = "Estudantes Beneficiados",
    numberOfProviders = 10,
    textContentOfProviders = "Provedores Parceiros"
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
                    class="relative max-[1020px]:hidden  lg:w-full"
                />
                <Image 
                    src={imagemMobile.src || ""} 
                    width={360} 
                    height={794} 
                    alt={imagemMobile.alt}
                    class="relative min-[1020px]:hidden max-[1020px]:w-full"
                />
                <div class="banner-main-home absolute mx-auto right-0 left-0 flex align-top max-[1020px]:flex-col">
                    <div class="mx-auto w-[35%] py-14 px-8 relative text-left max-[1020px]:w-[95%]">
                        <h1 class="text-3xl font-family text-white w-full mb-6 font-bold">{textBanner}</h1>
                        <p class="block text-white text-base">{textContentBanenr}</p>
                    </div>
                    <div class="mx-auto w-[35%] py-14 px-8 relative text-left before:w-2 before:h-[70%] before:inline-block before:bg-[#04A8EA] before:absolute before:left-1 max-[1020px]:w-[95%] max-[1020px]:before:left-2">
                        <div class="flex items-center w-[45%] mb-2">
                            <span class="text-white text-5xl font-bold block mr-2">{numberOfSchools}</span>
                            <p class="block text-white text-base">{textContentOfSchols}</p>
                        </div>
                        <div class="flex items-center w-[45%] mb-2">
                            <span class="text-white text-5xl font-bold block mr-2">{numberOfSchoolsConections}</span>
                            <p class="block text-white text-base">{textContentOfScholsConections}</p>
                        </div>
                        <div class="flex items-center w-[45%] mb-2">
                            <span class="text-white text-5xl font-bold block mr-2">{numberOfStudants}</span>
                            <p class="block text-white text-base">{textContentOfStudants}</p>
                        </div>
                        <div class="flex items-center w-[45%]">
                            <span class="text-white text-5xl font-bold block mr-2">{numberOfProviders}</span>
                            <p class="block text-white text-base">{textContentOfProviders}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}