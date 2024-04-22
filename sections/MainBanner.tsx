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
     * @description Banner Texto
     */
    textBanner?: string
    /**
     * @description Banner Ícone Player
     */
    imagemPlayer?: {
        src?: ImageWidget
        alt?: string
    }
    /**
     * @description Banner - Texto Botão
     */
    textButton?: string
    /**
     * @description Banner - Link Botão
     */
    linkButton?: string
    /**
     * @description Banner - Link do vídeo
     */
    linkIframe?: string
}

export default function BannerPrincipal({
    imagem = {
        src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/7759/f941a0e0-1296-4e1f-993a-afbdea727685",
        alt: "Banner Principal - Instituto Escola Conectada"
    },
    imagemPlayer = {
        src: "",
        alt: ""
    },
    textBanner = "Conectando para Transformar",
    textButton = "Doe agora",
    linkButton = "#",
    linkIframe = "https://www.youtube.com/embed/N48elyl_Qz8?si=mOpmNKT307wMo8wl"
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
                    class="relative"
                />
                <div class="banner-main-home absolute mx-auto right-0 left-0">
                    <div class="mx-auto text-center w-7/12 border-2 border-white py-14 px-8 relative">
                        <h1 class="text-4xl font-family text-white w-full uppercase mb-6 font-bold">{textBanner}</h1>
                        <Image
                            src={imagemPlayer.src || ""} 
                            width={100} 
                            height={28} 
                            alt={imagemPlayer.alt}
                            class="mx-auto cursor-pointer my-10"
                        /> 
                        <a class="absolute -bottom-10 left-0 right-0 mx-auto w-1/5 bg-[#04A8EA] uppercase font-bold py-5 px-4 text-white" href={linkButton} target="_blank">{textButton}</a>
                    </div>
                </div>
            </div>
            <div class="hidden">
                <iframe src={linkIframe} loading="lazy"></iframe>    
            </div>
        </div>
    )
}