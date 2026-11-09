import type { ReactNode } from "react";

// Dados provisórios: substitua pelos dados reais do petshop.
const CONTATO = {
  nome: "Patas & Cia",
  whatsapp: "5500000000000",
  telefone: "(00) 00000-0000",
  endereco: "Rua Exemplo, 123 - Sua Cidade",
  horarios: "Segunda a sábado, das 8h às 18h",
  mensagem: "Olá! Gostaria de agendar um horário para o meu pet.",
};

const LINK_WHATSAPP = `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(CONTATO.mensagem)}`;

const ANO = 2026;

const NAVEGACAO = [
  { href: "#servicos", rotulo: "Serviços" },
  { href: "#como-funciona", rotulo: "Como funciona" },
  { href: "#contato", rotulo: "Contato" },
];

const SERVICOS = [
  {
    titulo: "Banho e tosa",
    descricao:
      "Banho, secagem, escovação e tosa de acordo com a pelagem e o porte do seu pet.",
    icone: <IconeGota />,
  },
  {
    titulo: "Consulta veterinária",
    descricao:
      "Consultas de rotina, vacinas e orientações para manter a saúde em dia.",
    icone: <IconeCruz />,
  },
  {
    titulo: "Hospedagem",
    descricao:
      "Um lugar seguro e acolhedor para o seu pet ficar enquanto você viaja.",
    icone: <IconeCasa />,
  },
  {
    titulo: "Ração e acessórios",
    descricao:
      "Alimentação, brinquedos e itens de higiene para cães e gatos de todas as idades.",
    icone: <IconeSacola />,
  },
];

const DIFERENCIAIS = [
  {
    titulo: "Atendimento sem pressa",
    descricao:
      "Respeitamos o tempo de cada animal, para que a visita seja tranquila.",
  },
  {
    titulo: "Cuidado sob medida",
    descricao:
      "Você conta como é o seu pet e combinamos o que faz mais sentido para ele.",
  },
  {
    titulo: "Tudo em um só lugar",
    descricao:
      "Banho, saúde, hospedagem e compras resolvidos em uma única parada.",
  },
];

const PASSOS = [
  {
    titulo: "Chame no WhatsApp",
    descricao: "Conte qual é o seu pet e do que ele precisa.",
  },
  {
    titulo: "Escolha o horário",
    descricao: "Combinamos o dia e a hora que ficam melhores para você.",
  },
  {
    titulo: "Traga o seu pet",
    descricao: "É só chegar. A partir daí, a gente cuida dele com carinho.",
  },
];

export default function Home() {
  return (
    <>
      <Cabecalho />
      <main className="flex-1">
        <Hero />
        <Servicos />
        <Diferenciais />
        <ComoFunciona />
        <Contato />
      </main>
      <Rodape />
    </>
  );
}

function Cabecalho() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2 text-lg font-bold">
          <span className="text-primary">
            <IconePata className="h-6 w-6" />
          </span>
          {CONTATO.nome}
        </a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {NAVEGACAO.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-primary">
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <BotaoWhatsApp className="h-10 px-4 text-sm">
          <span className="sm:hidden">WhatsApp</span>
          <span className="hidden sm:inline">Falar no WhatsApp</span>
        </BotaoWhatsApp>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="scroll-mt-16 overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="font-semibold text-primary">Petshop para cães e gatos</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Seu pet bem cuidado, do banho à consulta
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            Na {CONTATO.nome}, seu melhor amigo recebe atenção de verdade.
            Agende pelo WhatsApp e deixe o resto com a gente.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BotaoWhatsApp className="h-12 px-6">Agendar pelo WhatsApp</BotaoWhatsApp>
            <a
              href="#servicos"
              className="flex h-12 items-center justify-center rounded-full border border-line px-6 font-semibold transition-colors hover:bg-soft"
            >
              Conhecer os serviços
            </a>
          </div>
        </div>
        <IlustracaoPets />
      </div>
    </section>
  );
}

function Servicos() {
  return (
    <section id="servicos" className="scroll-mt-16 bg-surface py-16 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <TituloSecao
          titulo="O que fazemos pelo seu pet"
          descricao="Os cuidados do dia a dia, reunidos em um só lugar."
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICOS.map((servico) => (
            <li key={servico.titulo} className="rounded-2xl border border-line bg-background p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft text-primary">
                {servico.icone}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{servico.titulo}</h3>
              <p className="mt-2 leading-7 text-muted">{servico.descricao}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Diferenciais() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <TituloSecao
          titulo="Por que escolher a gente"
          descricao="Cada pet tem seu jeito, e o cuidado precisa acompanhar isso."
        />
        <ul className="divide-y divide-line border-y border-line">
          {DIFERENCIAIS.map((diferencial) => (
            <li key={diferencial.titulo} className="flex gap-4 py-6">
              <span className="mt-1 shrink-0 text-primary">
                <IconePata className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{diferencial.titulo}</h3>
                <p className="mt-1 leading-7 text-muted">{diferencial.descricao}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ComoFunciona() {
  return (
    <section id="como-funciona" className="scroll-mt-16 bg-surface py-16 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <TituloSecao
          titulo="Como funciona"
          descricao="Agendar leva poucos minutos."
        />
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {PASSOS.map((passo, indice) => (
            <li key={passo.titulo}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                {indice + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{passo.titulo}</h3>
              <p className="mt-2 leading-7 text-muted">{passo.descricao}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Contato() {
  const informacoes = [
    { rotulo: "Endereço", valor: CONTATO.endereco },
    { rotulo: "Horários", valor: CONTATO.horarios },
    { rotulo: "Telefone", valor: CONTATO.telefone },
  ];

  return (
    <section id="contato" className="scroll-mt-16 bg-accent py-16 text-accent-foreground lg:py-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Vamos cuidar do seu pet?
          </h2>
          <p className="mt-4 max-w-md text-lg leading-8 opacity-90">
            Mande uma mensagem e combine o melhor horário para a visita.
          </p>
          <BotaoWhatsApp className="mt-8 h-12 px-6">Agendar pelo WhatsApp</BotaoWhatsApp>
        </div>
        <dl className="grid gap-6">
          {informacoes.map((informacao) => (
            <div key={informacao.rotulo}>
              <dt className="text-sm font-semibold opacity-80">{informacao.rotulo}</dt>
              <dd className="mt-1 text-lg">{informacao.valor}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Rodape() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>
          © {ANO} {CONTATO.nome}. Todos os direitos reservados.
        </p>
        <ul className="flex flex-wrap gap-6">
          {NAVEGACAO.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-primary">
                {item.rotulo}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

function TituloSecao({ titulo, descricao }: { titulo: string; descricao: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{titulo}</h2>
      <p className="mt-4 text-lg leading-8 text-muted">{descricao}</p>
    </div>
  );
}

function BotaoWhatsApp({ className, children }: { className: string; children: ReactNode }) {
  return (
    <a
      href={LINK_WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-primary font-semibold text-primary-foreground transition-opacity hover:opacity-90 ${className}`}
    >
      {children}
    </a>
  );
}

function IlustracaoPets() {
  return (
    <svg
      viewBox="0 0 480 400"
      role="img"
      aria-label="Ilustração de um cachorro e um gato lado a lado"
      className="mx-auto w-full max-w-md lg:max-w-none"
    >
      <circle cx="240" cy="210" r="180" className="fill-soft" />

      {/* Cachorro */}
      <ellipse cx="102" cy="195" rx="34" ry="72" transform="rotate(14 102 195)" fill="#a8652c" />
      <ellipse cx="278" cy="195" rx="34" ry="72" transform="rotate(-14 278 195)" fill="#a8652c" />
      <circle cx="190" cy="215" r="98" fill="#e9a862" />
      <ellipse cx="190" cy="258" rx="56" ry="46" fill="#fbeedd" />
      <circle cx="156" cy="192" r="11" fill="#23302e" />
      <circle cx="224" cy="192" r="11" fill="#23302e" />
      <circle cx="160" cy="188" r="3.5" fill="#ffffff" />
      <circle cx="228" cy="188" r="3.5" fill="#ffffff" />
      <ellipse cx="190" cy="232" rx="17" ry="12" fill="#23302e" />
      <path d="M190 244v14M190 258c-8 12-24 10-28 0M190 258c8 12 24 10 28 0" fill="none" stroke="#23302e" strokeWidth="4" strokeLinecap="round" />

      {/* Gato */}
      <path d="M306 240l4-66 46 38ZM414 240l-4-66-46 38Z" fill="#6b7c78" />
      <circle cx="360" cy="280" r="74" fill="#6b7c78" />
      <ellipse cx="360" cy="312" rx="36" ry="26" fill="#fbeedd" />
      <circle cx="334" cy="268" r="9" fill="#23302e" />
      <circle cx="386" cy="268" r="9" fill="#23302e" />
      <circle cx="337" cy="265" r="3" fill="#ffffff" />
      <circle cx="389" cy="265" r="3" fill="#ffffff" />
      <path d="M352 298h16l-8 9Z" fill="#c2500f" />
      <path d="M360 307v6M360 313c-5 7-13 6-16 0M360 313c5 7 13 6 16 0" fill="none" stroke="#23302e" strokeWidth="3" strokeLinecap="round" />
      <path d="M312 300l-34-6M312 312l-34 4M408 300l34-6M408 312l34 4" fill="none" stroke="#fbeedd" strokeWidth="3" strokeLinecap="round" />

      {/* Coração */}
      <path d="M300 92c-9-17-36-11-36 10 0 18 20 30 36 44 16-14 36-26 36-44 0-21-27-27-36-10Z" className="fill-primary" />
    </svg>
  );
}

function IconePata({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <ellipse cx="5" cy="11" rx="2.2" ry="3" />
      <ellipse cx="9.5" cy="6" rx="2.2" ry="3" />
      <ellipse cx="14.5" cy="6" rx="2.2" ry="3" />
      <ellipse cx="19" cy="11" rx="2.2" ry="3" />
      <path d="M12 11c-3.4 0-6.2 3.2-6.2 6.2 0 2.2 1.7 3.3 3.5 3 1-.2 1.8-.5 2.7-.5s1.7.3 2.7.5c1.8.3 3.5-.8 3.5-3 0-3-2.8-6.2-6.2-6.2Z" />
    </svg>
  );
}

function IconeBase({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6"
    >
      {children}
    </svg>
  );
}

function IconeGota() {
  return (
    <IconeBase>
      <path d="M12 3s7 7.2 7 12a7 7 0 0 1-14 0c0-4.8 7-12 7-12Z" />
    </IconeBase>
  );
}

function IconeCruz() {
  return (
    <IconeBase>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M12 8v8M8 12h8" />
    </IconeBase>
  );
}

function IconeCasa() {
  return (
    <IconeBase>
      <path d="M3 11l9-8 9 8" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M10 21v-6h4v6" />
    </IconeBase>
  );
}

function IconeSacola() {
  return (
    <IconeBase>
      <path d="M5 8h14l1 13H4L5 8Z" />
      <path d="M9 11V6a3 3 0 0 1 6 0v5" />
    </IconeBase>
  );
}
