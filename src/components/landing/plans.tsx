import { useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    product: "NEKKO OS",
    description:
      "Gestão completa para assistências técnicas e empresas de manutenção.",
    color: "green",
    plans: [
      {
        name: "Baixa Demanda",
        monthlyPrice: 29.9,
        description: "Para operações com menor volume de ordens de serviço.",
        features: [
          "Até 10 OS por semana",
          "Ordens de serviço",
          "Clientes e aparelhos",
          "Estoque e produtos",
          "Vendas",
          "Dashboard financeiro",
        ],
      },
      {
        name: "Média Demanda",
        monthlyPrice: 49.9,
        description:
          "Para empresas que já possuem uma rotina maior de atendimento.",
        features: [
          "Até 20 OS por semana",
          "Ordens de serviço",
          "Clientes e aparelhos",
          "Estoque e produtos",
          "Vendas",
          "Dashboard financeiro",
        ],
      },
      {
        name: "Alta Demanda",
        monthlyPrice: 99.9,
        description: "Para operações com alto volume de ordens de serviço.",
        features: [
          "OS ILIMITADAS",
          "Ordens de serviço",
          "Clientes e aparelhos",
          "LOJISTAS e aparelhos",
          "Estoque e produtos",
          "Vendas",
          "Dashboard financeiro",
          "Gestão de MÚLTIPLAS filiais",
        ],
        featured: true,
      },
    ],
  },
  {
    product: "NEKKO BEAUTY",
    description:
      "Agenda e gestão para profissionais e empresas do segmento da beleza.",
    color: "pink",
    plans: [
      {
        name: "Essencial",
        monthlyPrice: 29.9,
        description:
          "Estrutura inicial para organizar sua rotina profissional.",
        features: [
          "Agenda online",
          "Agendamento de clientes",
          "Cadastro de serviços",
          "Controle de horários",
          "Cadastro de clientes",
          "Organização da rotina",
        ],
      },
      {
        name: "Profissional",
        monthlyPrice: 49.9,
        description: "Mais recursos para profissionais em crescimento.",
        features: [
          "Agenda online",
          "Agendamento de clientes",
          "Cadastro de serviços",
          "Controle de horários",
          "Cadastro de clientes",
          "Organização da rotina",
        ],
        featured: true,
      },
    ],
  },
];

function formatPrice(value: number) {
  return value.toFixed(2).replace(".", ",");
}

function PlanCard({
  plan,
  color,
  annual,
}: {
  plan: {
    name: string;
    monthlyPrice: number;
    description: string;
    features: string[];
    featured?: boolean;
  };
  color: "green" | "pink";
  annual: boolean;
}) {
  const isGreen = color === "green";

  const annualPrice = plan.monthlyPrice * 9;
  const equivalentMonthlyPrice = annualPrice / 12;

  return (
    <article
      className={`relative flex flex-col rounded-3xl border p-6 transition duration-300 md:p-7 ${
        plan.featured
          ? isGreen
            ? "border-emerald-400/50 bg-emerald-400/[0.07] shadow-[0_0_50px_rgba(16,185,129,0.08)]"
            : "border-pink-300/50 bg-pink-300/[0.07] shadow-[0_0_50px_rgba(244,114,182,0.08)]"
          : "border-white/10 bg-white/[0.025] hover:border-white/20"
      }`}
    >
      {plan.featured && (
        <span
          className={`absolute -top-3 left-6 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
            isGreen
              ? "bg-emerald-400 text-zinc-950"
              : "bg-pink-300 text-zinc-950"
          }`}
        >
          Mais escolhido
        </span>
      )}

      {annual && (
        <span
          className={`absolute -top-3 right-6 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
            isGreen
              ? "bg-emerald-400/15 text-emerald-300"
              : "bg-pink-300/15 text-pink-200"
          }`}
        >
          3 meses grátis
        </span>
      )}

      <h4 className="text-xl font-semibold text-white">{plan.name}</h4>

      <p className="mt-3 min-h-[56px] text-sm leading-6 text-zinc-400">
        {plan.description}
      </p>

      <div className="mt-6">
        <span className="text-sm text-zinc-500">R$</span>

        <span className="ml-1 text-4xl font-semibold tracking-tight text-white">
          {formatPrice(annual ? annualPrice : plan.monthlyPrice)}
        </span>

        <span className="ml-2 text-sm text-zinc-500">
          {annual ? "/ano" : "/mês"}
        </span>
      </div>

      {annual && (
        <p className="mt-2 text-xs text-zinc-500">
          Equivale a R$ {formatPrice(equivalentMonthlyPrice)}/mês
        </p>
      )}

      <div className="my-6 h-px bg-white/10" />

      <ul className="flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm text-zinc-300"
          >
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                isGreen
                  ? "bg-emerald-400/10 text-emerald-300"
                  : "bg-pink-300/10 text-pink-200"
              }`}
            >
              <Check size={12} strokeWidth={2.5} />
            </span>

            {feature}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={`mt-8 w-full rounded-xl border px-4 py-3 text-sm font-medium transition ${
          isGreen
            ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200 hover:bg-emerald-400/20"
            : "border-pink-300/20 bg-pink-300/10 text-pink-100 hover:bg-pink-300/20"
        }`}
      >
        Começar agora
      </button>
    </article>
  );
}

export function Plans() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="planos" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Planos
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Escolha a estrutura ideal para o seu negócio.
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-400 md:text-lg">
            Planos pensados para acompanhar o tamanho da sua operação,
            mantendo sua gestão simples, organizada e profissional.
          </p>

          <div className="mt-10 inline-flex rounded-2xl border border-white/10 bg-white/[0.03] p-1.5">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={`rounded-xl px-6 py-3 text-sm font-medium transition ${
                !annual
                  ? "bg-white text-zinc-950"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Mensal
            </button>

            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={`relative rounded-xl px-6 py-3 text-sm font-medium transition ${
                annual
                  ? "bg-white text-zinc-950"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Anual
              <span className="ml-2 text-[10px] font-semibold uppercase tracking-wide text-emerald-400">
                3 meses grátis
              </span>
            </button>
          </div>
        </div>

        <div className="mt-16 space-y-16">
          {plans.map((product) => (
            <div
              key={product.product}
              id={product.product === "NEKKO OS" ? "planos-nekko-os" : "planos-nekko-beauty"}
              className="scroll-mt-32"
            >
              <div className="mb-8">
                <h3
                  className={`text-2xl font-semibold ${
                    product.color === "green"
                      ? "text-emerald-300"
                      : "text-pink-200"
                  }`}
                >
                  {product.product}
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  {product.description}
                </p>
              </div>

              <div
                className={`grid gap-5 ${
                  product.plans.length === 2
                    ? "lg:grid-cols-2"
                    : "lg:grid-cols-3"
                }`}
              >
                {product.plans.map((plan) => (
                  <PlanCard
                    key={plan.name}
                    plan={plan}
                    color={product.color as "green" | "pink"}
                    annual={annual}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
