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
            <div class="container bg-gradient-to-bl from-[#04A8EA] to-[#8D298F] my-8 flex justify-around items-center mx-auto rounded-xl">
                <div class="w-2/5 py-10 ml-10">
                    <h2 class="text-white text-4xl font-bold block w-4/5 mb-5">{textTitle}</h2>
                    <p class="text-white text-xl">{textContent}</p>
                </div>
                <div class="w-1/2 py-10 mr-10">
                    <form class="flex flex-wrap">
                        <input type="text" name="name" id="name" placeholder="Nome" class="w-72 rounded-xl px-4 outline-none mr-4 mb-8 py-4"/>
                        <input type="text" name="email" id="email" placeholder="E-mail" class="w-72 rounded-xl px-4 outline-none py-4 mb-8"/>
                        <button class="w-72 rounded-full bg-[#04A8EA] text-white text-xl font-bold py-4">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}