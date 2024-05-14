export interface Props {
  email?: string;
  name?: string;
  message?: string
}


export default function formNewsletter() {
  return (
    <form class="flex flex-wrap justify-center" action="https://submit-form.com/pghKKaUz">
        <input type="hidden" name="_redirect" value="https://escolaconectada.org/obrigado-contato" />
        <input type="text" name="name" id="name" placeholder="Nome" class="w-72 rounded-xl px-4 outline-none mr-4 mb-8 py-4 max-[1020px]:mr-0"/>
        <input type="text" name="email" id="email" placeholder="E-mail" class="w-72 rounded-xl px-4 outline-none py-4 mb-8"/>
        <textarea name="message" id="message" cols="30" rows="1" placeholder="Mensagem" class="w-72 rounded-xl px-4 outline-none mr-4 py-4 max-[1020px]:mr-0"></textarea>
        <input type="submit" value="Enviar" class="w-72 rounded-full bg-[#04A8EA] text-white text-xl font-bold py-4"/>
    </form>
  )
}