import { useState } from 'preact/hooks';
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
     * @description Banner Imagem Mobile
     */
    imagemMobile?: {
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

export default function BannerPrincipalIsland({
    imagem = {
        src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/7759/f941a0e0-1296-4e1f-993a-afbdea727685",
        alt: "Banner Principal - Instituto Escola Conectada"
    },
    imagemMobile = {
        src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/7759/301b19f2-f571-4fab-9b50-792a73026e98",
        alt: "Banner Principal - Instituto Escola Conectada"
    },
    imagemPlayer = {
        src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/7759/828d911e-66eb-40de-aa2f-e8391ee55705",
        alt: "Player"
    },
    textBanner = "Conectando para Transformar",
    textButton = "Doe agora",
    linkButton = "#",
    linkIframe = "https://www.youtube.com/embed/zAdabsYmc3c?si=aFIOf6LCNIWVEqFp"
}: Props) {

    const [ modal, setModal ] = useState(false)

    const stopAllYouTubeVideos = () => { 
        const iframe = document.querySelectorAll('iframe')
        console.log('iframe', iframe[0])
        let iframePause = iframe[0].src
        iframe[0].src = iframePause
    }
    
    return (
        <div>
            <div class="relative bg-gradient-to-bl from-[#04A8EA] to-[#8D298F] max-[1020px]:h-[440px]">
                <Image 
                    src={imagem.src || ""} 
                    width={1440} 
                    height={500} 
                    alt={imagem.alt}
                    class="relative max-[1020px]:hidden"
                />
                <Image 
                    src={imagemMobile.src || ""} 
                    width={360} 
                    height={440} 
                    alt={imagemMobile.alt}
                    class="relative min-[1020px]:hidden max-[1020px]:w-full"
                />
                <div class="banner-main-home absolute mx-auto right-0 left-0">
                    <div class="mx-auto text-center w-7/12 border-2 border-white py-14 px-8 relative max-[1020px]:w-4/5 max-[1020px]:mt-8">
                        <h1 class="text-4xl font-family text-white w-full uppercase mb-6 font-bold max-[1020px]:text-xl">{textBanner}</h1>
                        <Image
                            src={imagemPlayer.src || ""} 
                            width={100} 
                            height={28} 
                            alt={imagemPlayer.alt}
                            class="mx-auto cursor-pointer my-10"
                            onClick={() => setModal(true)}
                        /> 
                        <a class="absolute -bottom-10 left-0 right-0 mx-auto w-1/5 bg-[#04A8EA] uppercase font-bold py-5 px-4 text-white max-[1020px]:w-3/5 max-[1020px]:py-2 max-[1020px]:px-2 max-[1020px]:-bottom-5" href={linkButton} target="_blank">{textButton}</a>
                    </div>
                </div>
            </div>
            <div class={(modal == true) ? "visible" : "hidden"}>
                <div class="w-full h-full absolute top-0 left-0 bg-black opacity-70 z-10" onClick={() => {setModal(false), stopAllYouTubeVideos()}}></div>
                <iframe  src={linkIframe} loading="lazy" class="z-50 fixed top-0 left-0 right-0 mx-auto w-1/2 bottom-0 my-auto" height={600} width={1000}></iframe>    
            </div>
        </div>
    )
}