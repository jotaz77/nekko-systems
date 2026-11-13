import { ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#produtos" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

const products = [
  { label: "NEKKO OS", href: "#nekko-os" },
  { label: "NEKKO BEAUTY", href: "#nekko-beauty" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a
              href="#inicio"
              className="inline-flex items-center"
              aria-label="NEKKO SYSTEMS - Início"
            >
              <img
                src="/logo.svg"
                alt="NEKKO SYSTEMS"
                className="h-9 w-auto"
              />
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-zinc-400">
              Tecnologia para simplificar a gestão, organizar sua rotina e
              acompanhar o crescimento do seu negócio.
            </p>

            <p className="mt-6 text-sm text-zinc-600">
              Tecnologia que acompanha seu negócio.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">
              Navegação
            </h3>

            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-zinc-500 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">
              Nossos produtos
            </h3>

            <ul className="mt-5 space-y-3">
              {products.map((product) => (
                <li key={product.label}>
                  <a
                    href={product.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-zinc-500 transition hover:text-white"
                  >
                    {product.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="my-10 h-px bg-white/10" />

        <div className="flex flex-col gap-4 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} NEKKO SYSTEMS. Todos os direitos
            reservados.
          </p>

          <p>
            Feito para empresas que querem crescer.
          </p>
        </div>
      </div>
    </footer>
  );
}
