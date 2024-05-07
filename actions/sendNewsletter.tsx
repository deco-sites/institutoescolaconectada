export interface Props {
  email: string;
  name?: string;
}

const actionNewsletter = async (
  props: Props,
  _req: Request,
): Promise<void> => {
  const form = new FormData();
  const {
    email,
    name = ""
  } = props;

  let email2 = (e.currentTarget.elements.namedItem("email"))?.value
  let name2 = (e.currentTarget.elements.namedItem("name"))?.value

  const postInfo = {
        headers: {
          "Authorization": "Bearer re_BkYSxTrZ_5uMxYkStSn1GkyJNCZY5uCtD",
          "Content-Type": "application/json"
        },
        method: "POST",
        data: {
          cc: [],
          to: ["rodrigoaraujo.contact@gmail.com"],
          bcc: [],
          from: "onboarding@resend.dev",
          text: `Nome: ${name2}, Email: ${email2}`,
          html: `<p>Nome: ${name2}, <p>Email: ${email2},</p>`
        }
  }

  const response = await fetch("https://api.resend.com/email", postInfo);
    if (response.ok) {
      alert("Email enviado com sucesso!");
    } else {
      alert("Falha ao enviar email.");
    }
};

export default actionNewsletter;