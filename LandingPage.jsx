import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Layers,
  TrendingUp,
  Users,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const features = [
  {
    title: "Calcul automatique de la TVA",
    description:
      "Kauri identifie et calcule vos taxes en temps réel, pour que vous restiez concentré sur votre activité.",
    icon: ShieldCheck,
  },
  {
    title: "Épargne retraite automatisée",
    description:
      "Une réserve doucement construite chaque mois, sans effort et toujours adaptée à votre revenu.",
    icon: Sparkles,
  },
  {
    title: "Investissements thématiques",
    description:
      "Choisissez des portefeuilles alignés avec vos valeurs et laissez l’IA optimiser vos placements.",
    icon: Layers,
  },
];

const testimonials = [
  {
    name: "Lina, Créatrice de contenu",
    role: "YouTubeuse lifestyle",
    quote:
      "Avec Kauri, je sais exactement ce que je garde, ce que j’épargne et ce que je déclare. C’est un vrai soulagement.",
  },
  {
    name: "Maxime, Freelance UX",
    role: "Designer indépendant",
    quote:
      "La simulation de revenu m’a aidé à mieux planifier mes dépenses et à me sentir plus serein chaque mois.",
  },
  {
    name: "Élodie, Photographe",
    role: "Solopreneure créative",
    quote:
      "Le support Kauri est humain et clair. Enfin une solution banque qui me parle comme un partenaire.",
  },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "Twitter" },
];

const LandingPage = () => {
  const [revenue, setRevenue] = useState(5200);

  const distribution = useMemo(() => {
    const taxes = Math.round(revenue * 0.24);
    const savings = Math.round(revenue * 0.18);
    const spend = revenue - taxes - savings;
    return { taxes, savings, spend };
  }, [revenue]);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#0D5C63]/20 blur-3xl" />
        <div className="pointer-events-none absolute top-10 right-0 h-56 w-56 rounded-full bg-[#F2B824]/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#F07167]/20 blur-3xl" />

        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-8">
          <div className="flex items-center gap-3 text-lg font-semibold text-[#0D5C63]">
            <img src="/logo.svg" alt="Kauri Logo" className="h-12 w-12" />
            <span>Kauri</span>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#features" className="transition hover:text-[#0D5C63]">
              Fonctionnalités
            </a>
            <a href="#simulation" className="transition hover:text-[#0D5C63]">
              Tarifs
            </a>
            <a href="#about" className="transition hover:text-[#0D5C63]">
              À propos
            </a>
          </nav>

          <a
            href="#"
            className="inline-flex items-center rounded-full bg-[#F07167] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#F07167]/20 transition hover:-translate-y-0.5 hover:bg-[#d85253]"
          >
            Ouvrir mon compte
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </header>

        <main className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:pb-24">
          <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0D5C63]/10 px-4 py-2 text-sm font-semibold text-[#0D5C63]">
                <Sparkles className="h-4 w-4" />
                Une néo-banque pensée pour les créateurs ambitieux
              </div>

              <div className="space-y-6">
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                  Votre talent mérite une banque à sa hauteur
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
                  Kauri automatise la gestion de la TVA, l’épargne intelligente
                  et les investissements thématiques pour que vous puissiez
                  créer en toute sérénité.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#simulation"
                  className="inline-flex items-center justify-center rounded-full bg-[#F07167] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#F07167]/20 transition hover:-translate-y-0.5"
                >
                  Découvrir ma simulation
                </a>
                <a
                  href="#features"
                  className="text-sm font-semibold text-[#0D5C63] transition hover:text-[#0B4D54]"
                >
                  Voir les fonctionnalités <span aria-hidden="true">→</span>
                </a>
              </div>

              <div className="grid gap-4 rounded-3xl border border-white/80 bg-white/80 p-5 shadow-xl shadow-slate-900/5 backdrop-blur-xl sm:grid-cols-3">
                <div className="rounded-3xl bg-[#0D5C63]/5 p-4 text-center">
                  <p className="text-2xl font-semibold text-[#0D5C63]">24/7</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Suivi en continu de votre trésorerie.
                  </p>
                </div>
                <div className="rounded-3xl bg-[#F2B824]/10 p-4 text-center">
                  <p className="text-2xl font-semibold text-[#B17510]">0€</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Sans frais cachés pour les solopreneurs.
                  </p>
                </div>
                <div className="rounded-3xl bg-[#F07167]/10 p-4 text-center">
                  <p className="text-2xl font-semibold text-[#B14A42]">
                    3 minutes
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Pour ouvrir un compte et démarrer.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-xl"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
                <div className="absolute -right-10 top-6 h-24 w-24 rounded-full bg-[#F07167]/20 blur-2xl" />
                <div className="absolute -left-10 bottom-8 h-28 w-28 rounded-full bg-[#0D5C63]/20 blur-2xl" />
                <div className="relative rounded-[1.75rem] border border-slate-200/80 bg-slate-50 p-6 shadow-inner shadow-slate-900/5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                        Kauri
                      </p>
                      <p className="mt-2 text-xl font-semibold text-slate-950">
                        Tableau de bord
                      </p>
                    </div>
                    <div className="h-11 w-11 rounded-2xl bg-[#0D5C63] text-white shadow-lg shadow-[#0D5C63]/20" />
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-3xl bg-white p-4 shadow-sm shadow-slate-900/5">
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <span>Solde disponible</span>
                        <span className="font-semibold text-slate-900">
                          12 480€
                        </span>
                      </div>
                      <div className="mt-4 flex items-end justify-between gap-4">
                        <div>
                          <p className="text-3xl font-semibold text-[#0D5C63]">
                            8 720€
                          </p>
                          <p className="text-xs text-slate-500">Compte pro</p>
                        </div>
                        <div className="rounded-2xl bg-[#F2B824]/15 px-3 py-1 text-xs font-semibold text-[#B17510]">
                          Succès
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-3xl bg-[#0D5C63]/5 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                          TVA
                        </p>
                        <p className="mt-3 text-xl font-semibold text-slate-900">
                          24%
                        </p>
                      </div>
                      <div className="rounded-3xl bg-[#F07167]/5 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                          Investissements
                        </p>
                        <p className="mt-3 text-xl font-semibold text-slate-900">
                          11%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 rounded-[1.5rem] bg-[#0D5C63]/5 p-4">
                  <p className="text-sm font-semibold text-[#0D5C63]">
                    Interface mobile
                  </p>
                  <div className="mt-4 h-64 rounded-[1.5rem] bg-gradient-to-br from-white to-slate-100 p-5 shadow-lg shadow-slate-900/5">
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <span>Evolution de trésorerie</span>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                        Nouveau
                      </span>
                    </div>
                    <div className="mt-6 space-y-4">
                      <div className="h-3 rounded-full bg-slate-200" />
                      <div className="h-3 rounded-full bg-slate-200 w-5/6" />
                      <div className="h-3 rounded-full bg-slate-200 w-3/4" />
                      <div className="h-3 rounded-full bg-slate-200 w-2/3" />
                    </div>
                    <div className="mt-8 flex items-center justify-between rounded-3xl bg-white/75 px-4 py-4 shadow-sm shadow-slate-900/5">
                      <div>
                        <p className="text-sm text-slate-500">
                          Prochain virement
                        </p>
                        <p className="mt-1 text-lg font-semibold text-slate-900">
                          3 450€
                        </p>
                      </div>
                      <div className="rounded-3xl bg-[#F2B824]/10 px-3 py-2 text-sm font-semibold text-[#B17510]">
                        Prévision
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <section id="features" className="mt-24 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-3 text-center"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0D5C63]">
                Ce que Kauri vous apporte
              </p>
              <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
                Un accompagnement clair, simple et premium.
              </h2>
              <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600">
                Trois piliers pensés pour transformer votre gestion financière
                en une expérience fluide et rassurante.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      delay: index * 0.15,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    className="rounded-[2rem] border border-white/80 bg-white/80 p-7 shadow-xl shadow-slate-900/5 backdrop-blur-xl"
                  >
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#0D5C63]/10 text-[#0D5C63]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-slate-950">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          <section
            id="simulation"
            className="mt-24 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-6 rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-xl"
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-[#F2B824]/10 px-4 py-2 text-sm font-semibold text-[#B17510]">
                <TrendingUp className="h-4 w-4" />
                Simulation interactive
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
                  Visualisez votre revenu et voyez exactement ce que Kauri
                  propose.
                </h2>
                <p className="max-w-xl text-base leading-7 text-slate-600">
                  Ajustez votre revenu mensuel et la répartition conseillée
                  s’adapte instantanément : taxes, épargne et reste à dépenser.
                </p>
              </div>

              <div className="space-y-6">
                <div className="rounded-[1.75rem] border border-slate-200/80 bg-slate-50 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">
                        Revenu mensuel estimé
                      </p>
                      <p className="mt-2 text-3xl font-semibold text-slate-950">
                        {revenue.toLocaleString()}€
                      </p>
                    </div>
                    <div className="rounded-3xl bg-[#0D5C63] px-4 py-2 text-sm font-semibold text-white">
                      {Math.round((distribution.spend / revenue) * 100)}% libre
                      à dépenser
                    </div>
                  </div>

                  <div className="mt-6">
                    <input
                      type="range"
                      min="1200"
                      max="12000"
                      step="100"
                      value={revenue}
                      onChange={(event) =>
                        setRevenue(Number(event.target.value))
                      }
                      className="w-full accent-[#F07167]"
                    />
                    <div className="mt-3 flex justify-between text-xs text-slate-500">
                      <span>1 200€</span>
                      <span>12 000€</span>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[1.75rem] bg-[#F07167]/10 p-5 text-slate-950">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B14A42]">
                      Taxes
                    </p>
                    <p className="mt-4 text-3xl font-semibold">
                      {distribution.taxes.toLocaleString()}€
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                      24% conseillé par l’IA.
                    </p>
                  </div>
                  <div className="rounded-[1.75rem] bg-[#F2B824]/10 p-5 text-slate-950">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B17510]">
                      Épargne
                    </p>
                    <p className="mt-4 text-3xl font-semibold">
                      {distribution.savings.toLocaleString()}€
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                      Pensée pour votre avenir sans prise de tête.
                    </p>
                  </div>
                  <div className="rounded-[1.75rem] bg-[#0D5C63]/10 p-5 text-slate-950">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0D5C63]">
                      Libre
                    </p>
                    <p className="mt-4 text-3xl font-semibold">
                      {distribution.spend.toLocaleString()}€
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                      À utiliser comme vous le souhaitez.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="rounded-[2rem] border border-white/80 bg-gradient-to-br from-[#F8F9FA] to-white p-8 shadow-2xl shadow-slate-900/10"
            >
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0D5C63]">
                  Pourquoi cette simulation
                </p>
                <h3 className="text-3xl font-semibold text-slate-950">
                  Un aperçu clair pour mieux décider dès aujourd’hui.
                </h3>
                <p className="text-base leading-7 text-slate-600">
                  Kauri transforme vos chiffres en actions concrètes : paiement
                  des obligations, constitution d’une épargne et marge de
                  manœuvre pour vos projets.
                </p>
              </div>
              <div className="mt-8 space-y-4 rounded-[1.75rem] bg-white p-6 shadow-sm shadow-slate-900/5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-500">
                      Projection mensuelle
                    </p>
                    <p className="mt-2 text-xl font-semibold text-slate-950">
                      {revenue.toLocaleString()}€
                    </p>
                  </div>
                  <div className="rounded-3xl bg-[#0D5C63]/10 px-3 py-2 text-sm font-semibold text-[#0D5C63]">
                    Gestion intelligente
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>TVA & taxes</span>
                    <span>{distribution.taxes.toLocaleString()}€</span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-[#F07167]"
                      style={{
                        width: `${(distribution.taxes / revenue) * 100}%`,
                      }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>Épargne & protection</span>
                    <span>{distribution.savings.toLocaleString()}€</span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-[#F2B824]"
                      style={{
                        width: `${(distribution.savings / revenue) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <section
            id="about"
            className="mt-24 rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
            >
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0D5C63]">
                  Témoignages de créateurs
                </p>
                <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
                  Ils ont choisi Kauri pour garder le contrôle sans complexité.
                </h2>
                <p className="max-w-2xl text-base leading-7 text-slate-600">
                  Des créateurs comme vous racontent comment Kauri a rendu leur
                  gestion financière plus simple, plus transparente et plus
                  humaine.
                </p>
              </div>

              <div className="grid gap-4">
                {testimonials.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    className="rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-900/5"
                  >
                    <p className="text-base leading-7 text-slate-700">
                      “{item.quote}”
                    </p>
                    <div className="mt-6 flex items-center justify-between gap-4 text-sm text-slate-500">
                      <div>
                        <p className="font-semibold text-slate-950">
                          {item.name}
                        </p>
                        <p>{item.role}</p>
                      </div>
                      <Users className="h-5 w-5 text-[#0D5C63]" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        </main>
      </div>

      <footer className="border-t border-slate-200/80 bg-white/80 px-6 py-10 text-slate-600 shadow-inner shadow-slate-900/5 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-lg font-semibold text-[#0D5C63]">
              <img src="/logo.svg" alt="Kauri Logo" className="h-10 w-10" />
              Kauri
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600">
              Une banque qui donne de la clarté aux solopreneurs, avec une
              expérience fluide et bienveillante.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-600">
            <a href="#" className="transition hover:text-[#0D5C63]">
              Mentions légales
            </a>
            <a href="#" className="transition hover:text-[#0D5C63]">
              Conditions générales
            </a>
            <a href="#" className="transition hover:text-[#0D5C63]">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  type="button"
                  aria-label={item.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition hover:bg-[#0D5C63] hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </button>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
