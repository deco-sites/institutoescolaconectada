import { useState } from 'preact/hooks';

export default function CookieConsent() {

    const [ activeModal, setActiveModal ] = useState(false);

    const activeModalCookie = sessionStorage.getItem('cookieConsent') || false;

    const setDisableModal = (e: any) => {
        e.preventDefault();
        sessionStorage.setItem('cookieConsent', 'true');
        setActiveModal(true);
    }



    return (
        activeModalCookie != 'true' && !activeModal ?
            <section class="fixed bottom-7 z-50 mx-auto right-0 left-2 flex justify-start">
                <div class=" w-11/12 px-4 py-4 flex-col lg:w-1/4 bg-white flex items-center h-21 lg:h-auto rounded-md justify-center gap-4">
                    <p class="text-sm lg:text-base">Utilizamos cookies para melhorar a sua experiência de navegação. Se você estiver de acordo, basta que continue a navegar no site. Para mais informações, acesse nossa Política. <a class="font-bold" href="/politica-de-privacidade">Saiba Mais</a></p>
                    <button class="px-3 py-2 rounded-md font-semibold text-white bg-gradient-to-bl from-[#00AEEF] to-[#8F298C]" onClick={(e: any) => setDisableModal(e)}>
                        Concordo
                    </button>
                </div>
            </section>
        : ""
    )

}