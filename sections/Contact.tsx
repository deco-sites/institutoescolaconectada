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
        <div>
            <h1>{titlePage}</h1>
            <div>
                <h2>{locationType}</h2>
                <p>{contentAddress}</p>
                {
                    phone != "" ?
                        <p>{phone}</p>
                    : ''
                }
            </div>
            <div>
                <form class="flex flex-wrap justify-center" action="https://submit-form.com/pghKKaUz">
                    <input type="hidden" name="_redirect" value="https://escolaconectada.org/obrigado-contato" />
                    <input type="text" name="name" id="name" placeholder="Nome" required />
                    <input type="text" name="email" id="email" placeholder="E-mail" required />
                    <input type="text" name="phone" id="phone" required />
                    <textarea name="message" id="message" cols="30" rows="1" placeholder="Mensagem" ></textarea>
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </div>
    )
}