import { Check, Layers3, Rocket, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Layers3,
    title: "Soluções especializadas",
    description: "Cada produto NEKKO nasce pensado para as necessidades reais de um segmento.",
  },
  {
    icon: Sparkles,
    title: "Tecnologia simples",
    description: "Interfaces modernas e experiências pensadas para facilitar a rotina, não complicá-la.",
  },
  {
    icon: Rocket,
    title: "Feito para crescer",
    description: "Um ecossistema de soluções que acompanha a evolução de diferentes negócios.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden border-y border-white/5 py-24 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-white/[0.035] blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Sobre a NEKKO SYSTEMS</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">Tecnologia criada para acompanhar negócios reais.</h2>
          <p className="mt-6 text-base leading-8 text-zinc-400 md:text-lg">A NEKKO SYSTEMS é uma empresa de tecnologia que cria sistemas especializados para diferentes tipos de negócio.</p>
          <p className="mt-4 text-sm leading-7 text-zinc-500 md:text-base">Em vez de oferecer uma solução genérica para todo mundo, desenvolvemos produtos pensados para as necessidades específicas de cada segmento.</p>
          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs text-zinc-300">
            <Check size={14} className="text-emerald-300" /> Um ecossistema. Diferentes soluções.
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3 md:gap-5">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 md:p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-200 transition group-hover:bg-white/[0.08]">
                  <Icon size={20} />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-500">{pillar.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
