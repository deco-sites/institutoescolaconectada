import formNewsletter from "../actions/sendNewsletter.tsx"

export interface Props {
    textTitle?: string
    textContent?: string
}

export default function NewsletterNew({
    textTitle = "Assine nossa Newsletter",
    textContent = "Fique por dentro de tudo"
}: Props) {
    return (
        <div class="flex">
            <div class="container bg-gradient-to-bl from-[#04A8EA] to-[#8D298F] my-8 flex justify-around items-center mx-auto rounded-xl max-[1020px]:flex-col max-[1020px]:w-[90%]">
                <div class="w-2/5 py-10 ml-10 max-[1020px]:ml-0 max-[1020px]:w-[90%]">
                    <h2 class="text-white text-4xl font-bold block w-4/5 mb-5 max-[1020px]:text-xl max-[1020px]:w-full max-[1020px]:text-center">{textTitle}</h2>
                    <p class="text-white text-xl max-[1020px]:text-base max-[1020px]:w-full max-[1020px]:text-center">{textContent}</p>
                </div>
                <div class="w-1/2 py-10 mr-10 max-[1020px]:mr-0 max-[1020px]:py-2 max-[1020px]:w-full">
                    {/* <form class="flex flex-wrap justify-center">
                        <input type="text" name="name" id="name" placeholder="Nome" class="w-72 rounded-xl px-4 outline-none mr-4 mb-8 py-4 max-[1020px]:mr-0"/>
                        <input type="text" name="email" id="email" placeholder="E-mail" class="w-72 rounded-xl px-4 outline-none py-4 mb-8"/>
                        <textarea name="message" id="message" cols="30" rows="1" placeholder="Mensagem" class="w-72 rounded-xl px-4 outline-none mr-4 py-4 max-[1020px]:mr-0"></textarea>
                        <button class="w-72 rounded-full bg-[#04A8EA] text-white text-xl font-bold py-4" onChange={(e) => {e.stopPropagation()}}>Enviar</button>
                    </form> */}
                    <form class="flex flex-wrap justify-start" action="https://submit-form.com/pghKKaUz">
                        <input type="hidden" name="_redirect" value="https://escolaconectada.org/obrigado-contato" />
                        <input type="text" name="name" id="name" placeholder="Nome" class="w-72 rounded-xl px-4 outline-none mr-4 mb-8 py-4 max-[1020px]:mr-0"/>
                        <input type="text" name="email" id="email" placeholder="E-mail" class="w-72 rounded-xl px-4 outline-none py-4 mb-8"/>
                        <input type="submit" value="Enviar" class="w-72 rounded-full bg-[#04A8EA] text-white text-xl font-bold py-4 cursor-pointer"/>
                    </form>
                </div>
            </div>
        </div>
    )
}