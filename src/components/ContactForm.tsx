import "./css/ContactForm.css";
import { db, Lead } from "astro:db";

export default function ContactForm() {
//   useEffect(async () => {
//     const leads = await db.select(Lead).all();
//     console.log(leads);
//   }, []);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("tel");
    const title = data.get("title");
    const description = data.get("description");
    const message = data.get("message");
    const budget = data.get("budget");

    const lead = {
      name,
      email,
      tel: password,
      from: "website",
    };

    const res = await db.insert(Lead).values(lead);

    const brief = {
      title,
      description,
      message,
      budget,
    };

    console.log(lead, res);
    console.log(brief);
  }
  return (
    <form onSubmit={submit}>
      <h1>Contacto</h1>
      <p>Cuentame sobre ti y tu proyecto para que pueda ayudarte.</p>
      <label>
        Nombre
        <input type="text" placeholder="Nombre completo" name="name" />
      </label>
      <label>
        Email
        <input type="email" placeholder="usuario@dominio.com" name="email" />
      </label>
      <label>
        Telefono
        <input type="tel" placeholder="+52 123 456 7890" name="tel" />
      </label>
      <label>
        Marca Empresarial o Personal
        <input type="text" placeholder="Nombre comercial" name="title" />
      </label>
      <label>
        Descripción de la Marca
        <textarea
          placeholder="Descripción de la marca"
          name="description"
        ></textarea>
      </label>
      <label>
        Mensaje
        <textarea
          placeholder="Describe tu proyecto"
          rows={5}
          name="message"
        ></textarea>
      </label>
      <label>
        Presupuesto (USD)
        <input type="number" placeholder="$ 0.00" name="budget" />
      </label>
      <button>Enviar</button>
    </form>
  );
}
