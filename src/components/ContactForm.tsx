import { useState, type FormEvent } from "react";
import "./css/ContactForm.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const tel = data.get("tel") as string;
    const title = data.get("title");
    const description = data.get("description");
    const message = data.get("message");
    const budget = data.get("budget");

    const lead = {
      name,
      email,
      tel,
      from: "website",
      created: new Date(),
    };

    const brief = {
      title,
      description,
      message,
      budget,
      created: new Date(),
    };

    console.log(lead);
    console.log(brief);
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={submit}
      className="max-w-2xl mx-auto p-6 sm:p-10 rounded-2xl border border-white/10 bg-[#0c0c0c] text-white space-y-6"
    >
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-white">Contacto</h1>
        <p className="text-gray-300 text-base leading-relaxed">
          Cuéntame sobre ti y tu proyecto para que podamos construir una solución a tu medida.
        </p>
      </div>

      {submitted && (
        <div className="p-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-200 text-sm flex items-center gap-2.5">
          <i className="fas fa-circle-check" aria-hidden="true"></i>
          <span>Gracias por tu mensaje. Me pondré en contacto contigo muy pronto.</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="text-sm font-medium text-gray-200">
          Nombre completo
          <input
            type="text"
            required
            placeholder="Tu nombre completo"
            name="name"
            className="mt-1.5 w-full rounded-lg border border-white/15 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-white focus:outline-none"
          />
        </label>
        <label className="text-sm font-medium text-gray-200">
          Correo electrónico
          <input
            type="email"
            required
            placeholder="usuario@dominio.com"
            name="email"
            className="mt-1.5 w-full rounded-lg border border-white/15 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-white focus:outline-none"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="text-sm font-medium text-gray-200">
          Teléfono
          <input
            type="tel"
            placeholder="+52 55 1234 5678"
            name="tel"
            className="mt-1.5 w-full rounded-lg border border-white/15 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-white focus:outline-none"
          />
        </label>
        <label className="text-sm font-medium text-gray-200">
          Presupuesto estimado (USD)
          <input
            type="number"
            placeholder="2500"
            name="budget"
            className="mt-1.5 w-full rounded-lg border border-white/15 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-white focus:outline-none tabular-nums"
          />
        </label>
      </div>

      <label className="text-sm font-medium text-gray-200">
        Marca empresarial o personal
        <input
          type="text"
          placeholder="Nombre de tu empresa o proyecto"
          name="title"
          className="mt-1.5 w-full rounded-lg border border-white/15 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-white focus:outline-none"
        />
      </label>

      <label className="text-sm font-medium text-gray-200">
        Descripción de la marca
        <textarea
          placeholder="Breve contexto sobre tu empresa o sector"
          name="description"
          rows={3}
          className="mt-1.5 w-full rounded-lg border border-white/15 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-white focus:outline-none"
        ></textarea>
      </label>

      <label className="text-sm font-medium text-gray-200">
        Detalles del proyecto
        <textarea
          required
          placeholder="Describe los objetivos, alcance y tiempos estimados de tu proyecto"
          rows={5}
          name="message"
          className="mt-1.5 w-full rounded-lg border border-white/15 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-white focus:outline-none"
        ></textarea>
      </label>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap"
      >
        <span>Enviar mensaje</span>
        <i className="fas fa-paper-plane text-xs" aria-hidden="true"></i>
      </button>
    </form>
  );
}
