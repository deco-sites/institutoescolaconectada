export interface Props {
  titlePage?: string
  /**
   * @description Nome da Sede
   */
  locationType?: string
  contentAddress?: string
  phone?: string
}

export default function Contact({
  titlePage = "Fale conosco",
  locationType = "Sede Administrativa da Escola Conectada",
  contentAddress = "Avenida Brigadeiro Faria Lima, 3144. Cj 131. Jardim Paulistano. São Paulo-SP. CEP: 01.451-000",
  phone
}: Props) {
  return (
      <div class="container md:max-w-6xl max-[1020px]:w-[95%]">
          <h1 class="text-4xl font-bold text-[#8D298F] pb-3">{titlePage}</h1>
          <div>
              <h2 class="font-bold text-xl">{locationType}</h2>
              <p class="py-2">{contentAddress}</p>
              {
                  phone != "" ?
                      <p>{phone}</p>
                  : ''
              }
          </div>
          <div class="flex mt-4">
              <form class="flex flex-wrap justify-center flex-col w-1/2 gap-3 max-[1020px]:w-full" action="https://submit-form.com/pghKKaUz">
                  <input type="hidden" name="_redirect" value="https://www.escolaconectada.org/obrigado-contato" />
                  <input type="text" name="name" id="name" placeholder="Nome" required class="w-full border border-slate-400 p-4 rounded-xl" />
                  <input type="text" name="email" id="email" placeholder="E-mail" required class="w-full border border-slate-400 p-4 rounded-xl" />
                  <input type="text" name="phone" id="phone" placeholder="Telefone" required class="w-full border border-slate-400 p-4 rounded-xl" />
                  <textarea name="message" id="message" cols="30" rows="10" placeholder="Mensagem" class="w-full border border-slate-400 p-4 rounded-xl" ></textarea>
                  <input type="submit" value="Enviar" class="w-1/2 rounded-full bg-[#04A8EA] text-white text-xl font-bold py-4 cursor-pointer" />
              </form>
          </div>
      </div>
  )
}