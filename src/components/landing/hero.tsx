import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MessageCircle,
  Sparkles,
  Users,
} from "lucide-react";

import { Button } from "../ui/button";

export function Hero() {
  return (
    <section id="inicio" className="nekko-grid relative overflow-hidden pt-36">
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-emerald-400/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-white/[0.035] blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-32">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-neutral-300">
            <Sparkles size={14} className="text-emerald-300" />
            Tecnologia especializada para negócios reais
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Seu negócio merece uma gestão <span className="nekko-text-gradient">mais inteligente.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-neutral-400 sm:text-lg">
            Conheça sistemas criados para simplificar a rotina, organizar processos e dar mais controle a quem empreende. Encontre a solução certa para o seu negócio.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button onClick={() => { window.location.href = "#produtos"; }}>
              Encontrar meu sistema <ArrowRight size={17} />
            </Button>
            <Button variant="secondary" onClick={() => { window.location.href = "#planos"; }}>
              Ver planos e preços
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-neutral-400">
            <div className="flex items-center gap-2"><Check size={16} className="text-emerald-300" /> Soluções por segmento</div>
            <div className="flex items-center gap-2"><Check size={16} className="text-emerald-300" /> Gestão em um só lugar</div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-emerald-400/[0.10] via-transparent to-pink-300/[0.08] blur-2xl" />
          <div className="relative grid gap-4 sm:grid-cols-[0.88fr_1.12fr]">
            <article className="relative flex min-h-[245px] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/[0.12] to-zinc-950 p-6 shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-200/80">NEKKO SYSTEMS</span>
                <Users size={18} className="text-emerald-200" />
              </div>
              <div>
                <p className="text-5xl font-black tracking-tight text-white sm:text-6xl">+30</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-100">Empresas ativas</p>
                <p className="mt-4 max-w-[15rem] text-sm leading-6 text-zinc-400">Soluções desenvolvidas para acompanhar a rotina de quem empreende.</p>
              </div>
              <div className="absolute -bottom-10 -right-8 h-36 w-36 rounded-full border border-emerald-300/10" />
            </article>

            <article className="flex min-h-[245px] flex-col justify-between rounded-[1.75rem] border border-white/10 bg-zinc-950/90 p-6 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">A experiência NEKKO</span>
                <MessageCircle size={18} className="text-zinc-300" />
              </div>
              <div>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Nosso compromisso</p>
                <p className="text-lg font-semibold leading-7 text-white">“Mais clareza na rotina. Mais controle sobre o negócio. Mais tempo para crescer.”</p>
                <p className="mt-3 text-xs leading-5 text-zinc-500">Tecnologia pensada para facilitar o dia a dia de cada negócio.</p>
              </div>
              <a href="#produtos" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-zinc-200 transition hover:text-white">
                Descubra nossas soluções <ArrowUpRight size={15} />
              </a>
            </article>
          </div>
          <p className="mt-3 text-center text-[10px] text-zinc-600">*Indicador de empresas conforme informação comercial da NEKKO SYSTEMS. Atualize o número quando necessário.</p>
        </div>
      </div>
    </section>
  );
}
