import { useState } from "preact/hooks";

export default function ComoParticipar() {
    
    const [activeModal, setModal] = useState(false)
    const [activeSchool, setScholl] = useState(false)
    const [activeProvider, setProvider] = useState(false)

    return (
        <div>
            <div>
                <h2>Como participar</h2>
                <div>
                    <div>
                        <h3>Escola</h3>
                        <p>Se você é uma escola candidate-se para receber internet rápida e gratuita.</p>
                        <button onClick={(e) => {e.preventDefaul(), setModal(true), setScholl(true)}}>Quero internet</button>
                    </div>
                    <div>
                        <h3>Provedor</h3>
                        <p>Se você é um provedor, se inscreva que buscaremos uma escola na sua região.</p>
                        <button onClick={(e) => {e.preventDefaul(), setModal(true), setProvider(true)}}>Quero internet</button>
                    </div>
                    <div>
                        <h3>Apoiador</h3>
                        <p>Se você quer apoiar o nosso trabalho, doe para o Escola Conectada.</p>
                        <a href="#" target="_blank">Quero doar</a>
                    </div>
                </div>
            </div>
            <div class={activeModal == true ? `fixed top-0 left-0 w-full h-full` : `opacity-0 overflow-hidden hidden`}>
                <div class="w-full h-full absolute top-0 left-0 bg-black opacity-5" onClick={() => {setModal(false), (activeSchool == true) ? setScholl(false) : '', (activeProvider == true) ? setProvider(false) : ''}}></div>
                <div class={activeSchool == true ? `fixed mx-auto w-80 top-10` : `opacity-0 overflow-hidden hidden`}>
                    <form action="https://submit-form.com/6mzk0gaK7" style="display: flex; flex-direction: column; font-family: Inter, sans-serif; font-size: 1.8vh; color: black; padding: 24px; background-color: white; border-radius: 8px; box-shadow: rgba(0, 0, 0, 0) 0px 0px 8px 0px;">
                        <input type="hidden" name="_redirect" value="https://escolaconectada.org/obrigado-contato" />
                        <label for="ispName" style="margin-bottom: 8px;">Nome da Escola</label>
                        <input type="text" id="name" name="name_escola" placeholder="Nome da Escola" required="" style="width: 100%; padding: 16px; margin-bottom: 4vh; border: 1px solid rgb(204, 204, 204); border-radius: 4px;" />
                        <label for="codInep" style="margin-bottom: 8px;">Código Inep:</label>
                        <input type="text" id="codInep" name="codInep" placeholder="código Inep da escola" required="" style="width: 100%; padding: 16px; margin-bottom: 4vh; border: 1px solid rgb(204, 204, 204); border-radius: 4px;" />
                        <label for="name" style="margin-bottom: 8px;">Seu nome:</label>
                        <input type="text" id="name" name="name" placeholder="Seu nome" required="" style="width: 100%; padding: 16px; margin-bottom: 4vh; border: 1px solid rgb(204, 204, 204); border-radius: 4px;" />
                        <label for="email" style="margin-bottom: 8px;">Email:</label>
                        <input type="text" id="email" name="email" placeholder="Email" required="" style="width: 100%; padding: 16px; margin-bottom: 4vh; border: 1px solid rgb(204, 204, 204); border-radius: 4px;" />
                        <label for="phone" style="margin-bottom: 8px;">Telefone:</label>
                        <input type="text" id="phone" name="phone" placeholder="Telefone com DDD para WhatsApp" required="" style="width: 100%; padding: 16px; margin-bottom: 4vh; border: 1px solid rgb(204, 204, 204); border-radius: 4px;" />
                        <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&amp;render=explicit" async="" defer=""></script>
                        <input type="submit" value="Enviar" style="font-size: 16px; font-family: Manrope, &quot;sans serif&quot;; width: 100%; padding: 16px; background-color: rgb(33, 33, 33); color: white; font-weight: bold; border: none; border-radius: 4px; cursor: pointer;" />
                    </form>
                </div> 
                <div class={activeProvider == true ? `fixed mx-auto w-80 top-10` : `opacity-0 overflow-hidden hidden`}>
                    <form action="https://submit-form.com/y3JeZtOB3" style="display: flex; flex-direction: column; font-size: 1.8vh; color: black; padding: 24px; background-color: white; border-radius: 8px; box-shadow: rgba(0, 0, 0, 0) 0px 0px 8px 0px;">
                        <input type="hidden" name="_redirect" value="https://escolaconectada.org/obrigado-contato" />
                        <label for="ispName" style="margin-bottom: 8px;">Nome do Provedor</label>
                        <input type="text" id="name" name="name_provider" placeholder="Nome do provedor" required="" style="width: 100%; padding: 16px; margin-bottom: 2vh; border: 1px solid rgb(204, 204, 204); border-radius: 4px;" />
                        <label for="name" style="margin-bottom: 8px;">Seu nome:</label>
                        <input type="text" id="name" name="name" placeholder="Seu nome" required="" style="width: 100%; padding: 16px; margin-bottom: 2vh; border: 1px solid rgb(204, 204, 204); border-radius: 4px;" />
                        <label for="email" style="margin-bottom: 8px;">Email:</label>
                        <input type="text" id="email" name="email" placeholder="Email" required="" style="width: 100%; padding: 16px; margin-bottom: 2vh; border: 1px solid rgb(204, 204, 204); border-radius: 4px;" />
                        <label for="phone" style="margin-bottom: 8px;">Telefone:</label>
                        <input type="text" id="phone" name="phone" placeholder="Telefone com DDD para contato" required="" style="width: 100%; padding: 16px; margin-bottom: 2vh; border: 1px solid rgb(204, 204, 204); border-radius: 4px;" />
                        <label for="website" style="margin-bottom: 8px;">Website:</label>
                        <input type="text" id="website" name="website" placeholder="Website da empresa" required="" style="width: 100%; padding: 16px; margin-bottom: 2vh; border: 1px solid rgb(204, 204, 204); border-radius: 4px;" />
                        <label for="region" style="margin-bottom: 8px;">Regiões:</label>
                        <textarea type="textarea" rows="2" id="region" name="region" placeholder="Cidades/Estados onde o provedor atua" required="" style="width: 100%; padding: 16px; margin-bottom: 2vh; border: 1px solid rgb(204, 204, 204); border-radius: 4px;"></textarea>
                        <input type="submit" value="Enviar" style="font-size: 16px; font-family: Manrope, &quot;sans serif&quot;; width: 100%; padding: 16px; background-color: rgb(33, 33, 33); color: white; font-weight: bold; border: none; border-radius: 4px; cursor: pointer;" />
                    </form>
                </div> 
            </div>
        </div>
    );

}