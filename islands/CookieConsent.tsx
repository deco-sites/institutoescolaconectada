import { useState } from 'preact/hooks';

export default function CookieConsent() {

    const [ activeModal, setActiveModal ] = useState(false);

    const activeModalCookie = localStorage.getItem('cookieConsent') || false;

    const setDisableModal = (e: any) => {
        e.preventDefault();
        localStorage.setItem('cookieConsent', 'true');
        setActiveModal(true);
    }



    return (
        activeModalCookie != 'true' && !activeModal ?
            <section class="fixed bottom-7 z-50 mx-auto right-0 left-0 flex justify-center">
                <div class=" w-11/12 px-2 py-2  lg:w-3/4 bg-white flex items-center h-21 lg:h-14 rounded-md justify-center gap-4">
                    <p class="text-sm lg:text-base">Este website utiliza cookies. Concorda com os nossos cookies se continuar a utilizar o nosso website.</p>
                    <button class="px-3 py-2 rounded-md font-semibold text-white bg-gradient-to-bl from-[#00AEEF] to-[#8F298C]" onClick={(e: any) => setDisableModal(e)}>
                        Concordo
                    </button>
                </div>
            </section>
        : ""
    )

}