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
        src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
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

    return (
        <div>
            <div>
                <Image 
                    src={imagem.src || ""} 
                    width={100} 
                    height={28} 
                    alt={imagem.alt}
                />
                <div>
                    <Image
                        src={imagemPlayer.src || ""} 
                        width={100} 
                        height={28} 
                        alt={imagemPlayer.alt}
                    /> 
                    <h1>{textBanner}</h1>
                    <a href={linkButton} target="_blank">{textButton}</a>
                </div>
            </div>
            <div>
                <iframe src={linkIframe} loading="lazy"></iframe>    
            </div>
        </div>
    )
}