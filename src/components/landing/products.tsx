import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  MonitorPlay,
  Sparkles,
  Store,
} from "lucide-react";

import { Button } from "../ui/button";

type ProductColor = "green" | "pink";

function MediaShowcase({
  product,
  color,
  video,
  screenshots,
}: {
  product: string;
  color: ProductColor;
  video: string;
  screenshots: { src: string; label: string }[];
}) {
  const [videoFailed, setVideoFailed] = useState(false);
  const [failedImages, setFailedImages] = useState<string[]>([]);
  const isGreen = color === "green";
  const accent = isGreen ? "text-emerald-300" : "text-pink-200";
  const border = isGreen ? "border-emerald-400/20" : "border-pink-300/20";
  const glow = isGreen ? "from-emerald-400/[0.10]" : "from-pink-300/[0.10]";

  return (
    <div className="min-w-0">
      <div className={`relative overflow-hidden rounded-[1.6rem] border ${border} bg-gradient-to-br ${glow} via-zinc-950 to-zinc-950 p-2 shadow-2xl shadow-black/30`}>
        <div className="flex items-center justify-between px-3 py-3">
          <div className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${isGreen ? "bg-emerald-400" : "bg-pink-300"}`} />
            <span className="text-xs font-medium text-zinc-300">Demonstração do {product}</span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-600">Preview</span>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-[#08090b]">
          {!videoFailed ? (
            <>
              <video
                className="h-full w-full object-cover"
                src={video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                onError={() => setVideoFailed(true)}
                aria-label={`Demonstração em vídeo do ${product}`}
              />
              <div className="pointer-events-none absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/65 px-3 py-1.5 text-[10px] text-zinc-300 backdrop-blur">
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Vídeo demonstrativo
              </div>
            </>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden p-6 text-center">
              <div className={`absolute -right-12 -top-16 h-48 w-48 rounded-full blur-3xl ${isGreen ? "bg-emerald-400/10" : "bg-pink-300/10"}`} />
              <div className={`relative flex h-14 w-14 items-center justify-center rounded-2xl border ${border} bg-white/[0.04] ${accent}`}>
                <MonitorPlay size={26} />
              </div>
              <p className="relative mt-5 text-sm font-semibold text-white">Conheça o {product} por dentro</p>
              <p className="relative mt-2 max-w-sm text-xs leading-6 text-zinc-500">A demonstração em vídeo será exibida aqui. Adicione seu arquivo na pasta <code className="text-zinc-300">public/media</code>.</p>
              <span className={`relative mt-4 rounded-full border ${border} px-3 py-1.5 text-[10px] ${accent}`}>{video.split("/").pop()}</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-3">
        {screenshots.map((screenshot) => {
          const hasFailed = failedImages.includes(screenshot.src);
          return (
            <div key={screenshot.src} className="group min-w-0">
              <div className={`relative aspect-[4/3] overflow-hidden rounded-xl border ${border} bg-zinc-900`}>
                {!hasFailed ? (
                  <img
                    src={screenshot.src}
                    alt={`${product} — ${screenshot.label}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    onError={() => setFailedImages((current) => [...current, screenshot.src])}
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-white/[0.05] to-transparent p-2 text-center">
                    <MonitorPlay size={17} className="text-zinc-600" />
                    <span className="text-[9px] leading-4 text-zinc-500">Imagem será adicionada</span>
                  </div>
                )}
              </div>
              <p className="mt-2 truncate text-[10px] text-zinc-500">{screenshot.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FeatureList({ features, color }: { features: string[]; color: ProductColor }) {
  const isGreen = color === "green";
  return (
    <ul className="grid gap-x-5 gap-y-3 sm:grid-cols-2">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-2.5 text-sm leading-6 text-zinc-300">
          <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${isGreen ? "bg-emerald-400/10 text-emerald-300" : "bg-pink-300/10 text-pink-200"}`}>
            <Check size={12} strokeWidth={2.5} />
          </span>
          {feature}
        </li>
      ))}
    </ul>
  );
}

export function Products() {
  return (
    <section id="produtos" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Encontre sua solução</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">Sistemas feitos para a realidade do seu negócio.</h2>
          <p className="mt-6 text-base leading-8 text-zinc-400 md:text-lg">Conheça cada plataforma, explore suas funcionalidades e veja como a tecnologia certa pode transformar sua rotina.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-2">
            <a href="#nekko-os" className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-xs font-semibold text-emerald-200 transition hover:bg-emerald-400/[0.13]">NEKKO OS <ChevronRight size={13} className="ml-1 inline" /></a>
            <a href="#nekko-beauty" className="rounded-full border border-pink-300/20 bg-pink-300/[0.07] px-4 py-2 text-xs font-semibold text-pink-100 transition hover:bg-pink-300/[0.13]">NEKKO BEAUTY <ChevronRight size={13} className="ml-1 inline" /></a>
          </div>
        </div>

        <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
          <article id="nekko-os" className="scroll-mt-32 overflow-hidden rounded-[2rem] border border-emerald-400/15 bg-gradient-to-br from-emerald-400/[0.055] via-zinc-950 to-zinc-950 p-5 md:p-9 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-12">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300"><Store size={24} /></div>
                  <div><p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-300/80">ERP • Gestão empresarial</p><p className="mt-1 text-xs text-zinc-500">Para assistências técnicas e lojas</p></div>
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">NEKKO <span className="text-emerald-300">OS</span></h3>
                <p className="mt-5 text-sm leading-7 text-zinc-400 md:text-base">Gestão completa para assistências técnicas, lojas de manutenção e empresas que trabalham com uma ou várias filiais. Organize sua operação, acompanhe resultados e tenha as informações do negócio em um só lugar.</p>
                <div className="my-7 h-px bg-white/10" />
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">O que você encontra</p>
                <FeatureList color="green" features={["Ordens de serviço","Cadastro de clientes e aparelhos","Estoque e produtos","Vendas e cupons","Dashboard financeiro","Gestão de múltiplas filiais","Modo CEO","E muito mais"]} />
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button onClick={() => { window.location.href = "#planos-nekko-os"; }} className="border border-emerald-400/20 bg-emerald-400 text-zinc-950 hover:bg-emerald-300">Ver planos do NEKKO OS <ArrowRight size={17} /></Button>
                  <a href="#faq" className="inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-white/[0.05]">Tirar dúvidas</a>
                </div>
              </div>
              <MediaShowcase product="NEKKO OS" color="green" video="/media/nekko-os-demo.mp4" screenshots={[
                { src: "/media/nekko-os-dashboard.webp", label: "Painel financeiro" },
                { src: "/media/nekko-os-ordens.webp", label: "Ordens de serviço" },
                { src: "/media/nekko-os-estoque.webp", label: "Estoque e produtos" },
              ]} />
            </div>
          </article>

          <article id="nekko-beauty" className="scroll-mt-32 overflow-hidden rounded-[2rem] border border-pink-300/15 bg-gradient-to-br from-pink-300/[0.055] via-zinc-950 to-zinc-950 p-5 md:p-9 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-12">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-pink-300/20 bg-pink-300/10 text-pink-200"><Sparkles size={24} /></div>
                  <div><p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-pink-200/80">Agenda • Gestão para beleza</p><p className="mt-1 text-xs text-zinc-500">Para profissionais e espaços de beleza</p></div>
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">NEKKO <span className="text-pink-200">BEAUTY</span></h3>
                <p className="mt-5 text-sm leading-7 text-zinc-400 md:text-base">Agenda e gestão para profissionais da beleza, salões e espaços de estética. Organize horários, clientes e serviços para cuidar melhor da rotina e oferecer uma experiência mais profissional.</p>
                <div className="my-7 h-px bg-white/10" />
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">O que você encontra</p>
                <FeatureList color="pink" features={["Agenda online","Agendamento de clientes","Cadastro de serviços","Controle de horários","Cadastro de clientes","Organização da rotina","Gestão da agenda","E muito mais"]} />
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button onClick={() => { window.location.href = "#planos-nekko-beauty"; }} className="border border-pink-300/20 bg-pink-200 text-zinc-950 hover:bg-pink-100">Ver planos do NEKKO BEAUTY <ArrowRight size={17} /></Button>
                  <a href="#faq" className="inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-white/[0.05]">Tirar dúvidas</a>
                </div>
              </div>
              <MediaShowcase product="NEKKO BEAUTY" color="pink" video="/media/nekko-beauty-demo.mp4" screenshots={[
                { src: "/media/nekko-beauty-agenda.webp", label: "Agenda" },
                { src: "/media/nekko-beauty-clientes.webp", label: "Clientes" },
                { src: "/media/nekko-beauty-servicos.webp", label: "Serviços" },
              ]} />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
