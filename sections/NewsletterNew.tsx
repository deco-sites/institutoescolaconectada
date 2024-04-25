export interface Props {
    textTitle?: string
    textContent?: string
}

export default function NewsletterNew({
    textTitle = "Assine nossa Newsletter",
    textContent = "Fique por dentro de tudo"
}: Props) {
    return (
        <div>
            <div>
                <div>
                    <h2>{textTitle}</h2>
                    <p>{textContent}</p>
                </div>
                <div>
                    <form>
                        <input type="text" name="name" id="name" />
                        <input type="text" name="email" id="email" />
                        <button>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}