import ComoParticipar from "../islands/ComoParticipar.tsx"

export interface Props {
    titleMap: string
    /** @format rich-text */
    textMap: string
    linkIframeMap: string
}

export default function Map({
    titleMap = "Nossos números",
    textMap = "O Instituto Escola Conectada começou as suas atividades em novembro de 2020. Em fevereiro do ano seguinte foi realizada a instalação de internet de alta velocidade na primeira escola do programa: Escola Municipal Prudente de Moraes, em Miracema (RJ).",
    linkIframeMap = `<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1lFW2lx4RYWygzowEV0GimuJ1hN_JpcU&ehbc=2E312F" width="640" height="480" class="max-[1020px]:w-full"></iframe>`
}: Props) {
    return (
        <div class="flex flex-col">
            <div class="relative after:w-full after:h-96 after:bg-[#8F298C] after:absolute after:-bottom-12 after:-z-10 mb-20 flex items-center mt-10 max-[1020px]:flex-col max-[1020px]:after:hidden max-[1020px]:bg-[#8F298C] max-[1020px]:py-10">
                <div class="content-text-map">
                    <h2 class="text-white text-4xl font-bold mb-4 block">{titleMap}</h2>
                    <p 
                        dangerouslySetInnerHTML={{
                            __html: textMap
                        }}
                        class="text-white"
                    />
                </div>
                <div class="max-[1020px]:mt-10 map-page">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: linkIframeMap
                        }}
                        class="max-[1020px]:w-full"
                    />
                </div>
            </div>
            <ComoParticipar />
        </div>
    )
}