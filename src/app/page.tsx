"use client";

import { FormEvent, useState } from "react";
import { Accordion } from "@base-ui/react/accordion";
import { Tabs } from "@base-ui/react/tabs";
import {
  CalendarDays,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  PartyPopper,
  Play,
  UsersRound,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const assetBase = "https://cdn.prod.website-files.com/63fa240476d6a3dc2954208b";

const images = {
  logo: `${assetBase}/6872baf6e63f5d576ffc6c58_pdolzubny.png`,
  mark: `${assetBase}/6872bb4e33838b7961330cc3_logo-256.png`,
  hero: `${assetBase}/63fa28f331e9568ceb3ad3f7_rsz_ob%C3%B3z_pwr_x_grelewski-45.jpg`,
  about: `${assetBase}/64395da365753b31b686bd48_rsz_ob%C3%B3z_pwr_x_grelewski-778.jpg`,
  history: `${assetBase}/63fa28f331e9560c343ad3eb_oboz2022-299.jpg`,
  team: `${assetBase}/63fb3253911c6faeeded1a90_oboz2022-17%20(1).jpg`,
  coopOne: `${assetBase}/64aa8d903be5dab60a48f6ac_354262853_799785631535965_886442415646028265_n.png`,
  coopTwo: `${assetBase}/64aa861c6b72ccc0d3717842_354217566_825493775811959_5844264926135523033_n.jpg`,
  facebookLogo: `${assetBase}/6439353e8e008228b7257bff_Facebook_Logo_(2019).png.webp`,
  instagramLogo: `${assetBase}/643934c78dc7ac956cef2348_download.jpeg`,
  youtubeLogo: `${assetBase}/643934680d0f1514bfa83303_YouTube_full-color_icon_(2017).svg.png`,
};

const navItems = [
  { href: "#about-2", label: "O obozie" },
  { href: "/history", label: "Poprzednie lata" },
  { href: "#faq", label: "Częste pytania" },
  { href: "#cooperation", label: "Współpraca" },
  { href: "#contact", label: "Kontakt" },
];

const stats = [
  ["6", "Niezapomnianych dni"],
  ["12", "Gier i atrakcji"],
  ["16", "Warsztatów"],
  ["~400", "Uczestników"],
];

const aboutCards = [
  {
    icon: PartyPopper,
    title: "Czym jest obóz?",
    copy: "Obóz Studentów PWr to tydzień pełen niezapomnianych wrażeń! Czekają na Ciebie inspirujące warsztaty, praktyczne szkolenia i świetna integracja z innymi studentami naszej uczelni.",
  },
  {
    icon: MapPin,
    title: "Gdzie się odbywa?",
    copy: "Dokładne miejsce obozu nie jest znane, będzie to prawdopodobnie miejsce nad jeziorem.",
  },
  {
    icon: UsersRound,
    title: "Dla kogo on jest?",
    copy: "Wydarzenie skierowane jest głównie do nowo przyjętych studentów, ale udział w nim może wziąć każdy student.",
  },
];

const attractionImages = [
  `${assetBase}/6474c4a2aec6c339d1ba959a_rsz_oboz2022-188.jpg`,
  `${assetBase}/63fa28f331e9560b043ad403_rsz_ob%C3%B3z_pwr_x_grelewski-739.jpg`,
  `${assetBase}/6477177f5daf8dabd92376aa_oboz2022-257%20(1).jpg`,
  `${assetBase}/63fa28f331e9568ceb3ad3f7_rsz_ob%C3%B3z_pwr_x_grelewski-45.jpg`,
];

const attractions = [
  {
    value: "party",
    title: "Imprezy",
    icon: PartyPopper,
    image: attractionImages[3],
    copy: "Imprezy tematyczne, super muzyka i zabawa do rana? Tak właśnie bawimy się na Obozie Studenckim PWr!",
  },
  {
    value: "integration",
    title: "Integracje",
    icon: UsersRound,
    image: attractionImages[0],
    copy: "Nowe przyjaźnie? Nic prostszego! Podczas integracji w drużynach i rywalizacji międzydrużynowej poznacie ludzi równie zakręconych jak Wy.",
  },
  {
    value: "training",
    title: "Szkolenia",
    icon: CalendarDays,
    image: attractionImages[1],
    copy: "Na obozie nie tylko się bawimy, ale też szkolimy. Przecież człowiek uczy się całe życie!",
  },
  {
    value: "workshops",
    title: "Warsztaty",
    icon: Play,
    image: attractionImages[2],
    copy: "Taniec, joga, malowanie, sztuka robienia drinków czy sekrety bycia DJ-em - to tylko niektóre z warsztatów.",
  },
];

const faqItems = [
  ["Kiedy i gdzie jest obóz?", "Termin i miejsce Obozu 2026 nie są jeszcze znane."],
  ["Jak dojechać na obóz?", "Oferujemy transport zorganizowany autokarami. Jeśli chcesz możesz dojechać też we własnym zakresie. Przy wyborze transportu własnego poinformujemy Cię o możliwych godzinach dojazdu do Ośrodka."],
  ["Czy mogę wybrać dietę?", "Tak, jeśli masz specjalne wymagania do diety będziesz, mógł nas o tym poinformować w formularzu zapisowym."],
  ["Czy w okolicy są sklepy?", "Tak, w okolicy znajduje się kilka mniejszych sklepów."],
  ["Czy studenci już studiujący mogą wziąć udział?", "Obóz jest skierowany głównie do nowo przyjętych na studia, ale wszyscy studenci są mile widziani."],
  ["Czy są tam jakieś imprezy?", "Codziennie będziecie mogli bawić się na imprezach, na których zagra dla Was @ksbajer."],
  ["Co lepiej zostawić w domu?", "Wartościowe rzeczy. Elektronika, drogie ubrania… Śpiwory, nie musicie ich zabierać domki będą zaopatrzone w pościele."],
  ["Gdzie będą wszystkie ważne informacje dot. obozu?", "Wszystkie informacje dotyczące obozu znajdziecie na naszej stronie internetowej, social mediach oraz na stanowisku promocyjnym."],
  ["Jak mogę się zapisać?", "Informacja na ten temat pojawi się na stronie jak i w naszych social mediach. Na naszym instagramie i facebooku, będziecie mogli zobaczyć tutorial jak krok po kroku zapisać się na nasz wyjazd."],
  ["Czy muszę być studentem, żeby pojechać na obóz?", "Tak, musisz mieć status studenta lub informacje w systemie, że od października zaczynasz studia."],
  ["Czy mogę wybrać z kim będę w domku?", "Tak, będzie można wybrać z kim będziecie zakwaterowani. Zapisy do domków odbędą się poprzez dedykowaną aplikację obozową, tuż przed wyjazdem. Nie będzie jednak możliwości wyboru frakcji, czyli drużyny z którą będziesz walczyć w różnych konkurencjach."],
  ["Ile kosztuje obóz?", "Dokładna cena jest jeszcze ustalana, aby zapewnić Wam jak najlepsze warunki."],
  ["Na czym polega Obóz studentów PWr?", "Jest to wyjazd pełen dobrej zabawy, integracji i okazji do poznania nowych osób. Czeka Was dużo gier integracyjnych i szalonych imprez!"],
  ["Co zabrać na wyjazd?", "Warto zaopatrzyć się w ubrania, których nie będzie szkoda Wam zniszczyć. Dokument tożsamości. Leki i inne suplementy które przyjmujecie na co dzień. Dobry uśmiech i pozytywną energię."],
  ["Z kim kontaktować się w razie pytań o obóz?", "Możecie kontaktować się z nami przez formularz kontaktowy, który znajduje się na stronie internetowej lub pisać bezpośrednio na maila oboz@samorzad.pwr.edu.pl."],
];

const partners = [
  `${assetBase}/64f264fcc9c5be1a47ada6f0_GAMING%20ARENA%20(4).png`,
  `${assetBase}/66d2fdca942268b324b8ad57_Dyz%CC%87ury.app-4.png`,
  `${assetBase}/64c91a3c1b0426df3f4c79d4_TSA_Logo_RGB.png`,
  `${assetBase}/66d054462df6ceeb659693b0_images-2.png`,
  `${assetBase}/64f2658b8b0f1c5e18c74fde_GORALKI-logo-ALT-RGB-RED.png`,
  `${assetBase}/66d0544648a5a2ffed1d52d3_2024-01-11-Nescafe_3in1_Logo_z_akcentem_w_tle_czarne.png`,
  `${assetBase}/66d05446ae99d642fa3a7d2c_RGB_Blue_Type_International_Stacked_1.png`,
  `${assetBase}/64f266cd590381a017d409d9_logo_official_vector.svg`,
  `${assetBase}/66d05446f196ddbec9c47cf7_PACKSHOT_wsparcie_1_1.png`,
  `${assetBase}/66d05446d7364601060350f5_logo-300x183-1.png`,
  `${assetBase}/64f26654a22fef789957a644_OYAKATA_logo%20(1).png`,
];

function SocialLinks({ compact = false }: { compact?: boolean }) {
  const social = [
    { href: "https://www.facebook.com/ObozPWr/?locale=pl_PL", label: "Facebook", image: images.facebookLogo },
    { href: "https://www.instagram.com/obozpwr/?hl=pl", label: "Instagram", image: images.instagramLogo },
    { href: "https://www.youtube.com/@SamorzadPWr", label: "Youtube", image: images.youtubeLogo },
  ];

  return (
    <div className="flex items-center gap-3">
      {social.map(({ href, label, image }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={cn(
            "grid place-items-center rounded-full bg-white text-[#ff9048] shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:text-[#d96f28]",
            compact ? "size-9" : "size-10",
          )}
        >
          <img src={image} alt="" className="size-4 object-contain" />
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [newsletterMessage, setNewsletterMessage] = useState("");
  const [newsletterError, setNewsletterError] = useState("");
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<string[]>([]);

  async function submitNewsletter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNewsletterMessage("");
    setNewsletterError("");
    setNewsletterSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("newsletter-email") ?? "").trim();

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        const message =
          response.status >= 500
            ? "Nie możemy teraz wysłać potwierdzenia. Spróbuj ponownie później albo napisz do nas na oboz@samorzad.pwr.edu.pl."
            : payload?.error ?? "Nie udało się zapisać do newslettera.";

        throw new Error(message);
      }

      setNewsletterMessage("Dziękujemy! Wysłaliśmy krótkie potwierdzenie na podany adres e-mail.");
      event.currentTarget.reset();
    } catch (error) {
      setNewsletterError(error instanceof Error ? error.message : "Nie udało się zapisać do newslettera.");
    } finally {
      setNewsletterSubmitting(false);
    }
  }

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Wiadomość ze strony - ${name || "Obóz Studentów PWr"}`);
    const body = encodeURIComponent(
      `Imię: ${name}\nEmail: ${email}\n\nWiadomość:\n${message}`,
    );

    window.location.href = `mailto:obozpwrtest@interia.pl?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#381000]">
      {bannerVisible ? (
        <section className="relative z-50 bg-[#ffd080] px-4 py-3 text-[#381000]">
          <button
            aria-label="Zamknij informator"
            onClick={() => setBannerVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 transition hover:bg-white/15"
          >
            <X className="size-4" />
          </button>
          <form
            onSubmit={submitNewsletter}
            className="mx-auto flex max-w-6xl flex-col items-center gap-3 pr-8 text-center md:flex-row md:justify-center md:text-left"
          >
            <p className="text-sm font-bold">
              Dołącz do naszego informatora obozowego. Bądź na bieżąco i nie przegap niczego!
            </p>
            <div className="flex w-full max-w-md overflow-hidden rounded-full bg-white p-1 shadow-xl shadow-blue-950/10">
              <input
                required
                type="email"
                name="newsletter-email"
                placeholder="Podaj e-mail..."
                className="min-w-0 flex-1 bg-transparent px-4 text-sm font-semibold text-[#381000] outline-none placeholder:text-[#9a806a]"
              />
              <Button
                type="button"
                size="sm"
                className="shrink-0"
                disabled={newsletterSubmitting}
                onClick={(event) => event.currentTarget.form?.requestSubmit()}
              >
                {newsletterSubmitting ? "Wysyłamy..." : "Dołącz"}
              </Button>
            </div>
            {newsletterMessage ? (
              <span className="text-xs font-bold text-white">{newsletterMessage}</span>
            ) : null}
            {newsletterError ? (
              <span className="text-xs font-bold text-white">{newsletterError}</span>
            ) : null}
          </form>
        </section>
      ) : null}

      <section className="relative isolate min-h-[780px] bg-[#171717] text-white">
        <img
          src={images.hero}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#171717]/76 via-[#171717]/30 to-[#171717]/82" />

        <header className="mx-auto max-w-7xl px-5 pt-5">
          <div className="flex flex-col gap-4 border-b border-white/18 pb-5 md:flex-row md:items-center md:justify-between">
            <a
              href="mailto:oboz@samorzad.pwr.edu.pl?subject=Prośba o dodatkowe informacje - Obóz Studentów PWr"
              className="inline-flex items-center gap-2 text-sm font-bold text-white/90 hover:text-white"
            >
              <Mail className="size-4 text-[#ffd080]" />
              oboz@samorzad.pwr.edu.pl
            </a>
            <SocialLinks compact />
          </div>

          <nav className="mt-5 flex items-center justify-between rounded-full bg-white/14 px-4 py-3 backdrop-blur-md">
            <a href="#" className="flex items-center">
              <img src={images.logo} alt="Obóz Studentów PWr" className="h-14 w-auto" />
            </a>
            <div className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-extrabold text-white/90 transition hover:text-[#ffd080]"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <button
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Menu"
              className="grid size-11 place-items-center rounded-full bg-white text-[#381000] lg:hidden"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </nav>
          {menuOpen ? (
            <div className="mt-3 grid gap-2 rounded-3xl bg-white p-4 text-[#381000] shadow-2xl lg:hidden">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-extrabold hover:bg-[#fff2d8]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          ) : null}
        </header>

        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-24 lg:grid-cols-[1fr_420px] lg:items-end lg:pt-36">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full bg-white/12 px-4 py-2 text-sm font-extrabold text-[#ffd080] ring-1 ring-white/15">
              #JedźnaObóz
            </p>
            <h1 className="text-balance text-5xl font-black leading-[1.05] md:text-7xl">
              Obóz Studentów PWr 2026
              <span className="block text-[#ffd080]">już wkrótce...</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-semibold leading-8 text-white/88 md:text-xl">
              Obóz studentów PWr to niezapomniany tydzień pełen warsztatów, szkoleń i integracji - idealna okazja do zdobycia nowych umiejętności, nawiązania przyjaźni i zanurzenia się w wyjątkowej atmosferze Politechniki Wrocławskiej!
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-5 text-[#381000] shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
            <p className="text-lg font-black">Po więcej informacji zaobserwuj nasze wydarzenie na Facebooku</p>
            <a
              href="https://www.facebook.com/ObozPWr?locale=pl_PL"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff9048] px-6 py-4 text-sm font-black text-[#381000] transition hover:bg-[#d96f28]"
            >
              <img src={images.facebookLogo} alt="" className="size-4 rounded-sm object-contain" />
              Dołącz do wydarzenia
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f8d8] px-5 py-12">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="text-center">
              <div className="text-5xl font-black text-[#ff9048] md:text-6xl">{value}</div>
              <h2 className="mt-2 text-lg font-black text-[#381000]">{label}</h2>
            </div>
          ))}
        </div>
      </section>

      <section id="about-2" className="px-5 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <img src={images.mark} alt="" className="mx-auto mb-5 size-20" />
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff9048]">#JedźnaObóz</p>
          <h2 className="mt-3 text-4xl font-black text-[#381000] md:text-5xl">Obóz Studentów PWr</h2>
          <img
            src={images.about}
            alt="Uczestnicy Obozu Studentów PWr"
            className="mt-12 aspect-[16/9] w-full rounded-[1.5rem] object-cover shadow-[0_25px_70px_rgba(56,16,0,0.18)]"
          />
          <div className="mt-14 grid gap-8 text-left md:grid-cols-3">
            {aboutCards.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="rounded-3xl bg-white p-7 shadow-[0_18px_50px_rgba(56,16,0,0.10)] ring-1 ring-[#ead7b8]">
                <div className="grid size-14 place-items-center rounded-2xl bg-[#fff2d8] text-[#ff9048]">
                  <Icon className="size-7" />
                </div>
                <h3 className="mt-6 text-2xl font-black">{title}</h3>
                <p className="mt-4 text-base font-medium leading-7 text-[#6f5847]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="attractions" className="bg-[#f0f8d8] px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff9048]">#Atrakcje</p>
            <h2 className="mt-3 text-4xl font-black text-[#381000] md:text-5xl">
              Dowiedz się co cię czeka podczas obozu...
            </h2>
          </div>

          <Tabs.Root defaultValue="party" className="mt-12">
            <Tabs.List className="grid gap-3 rounded-[1.5rem] bg-white p-3 shadow-sm ring-1 ring-[#ead7b8] md:grid-cols-4">
              {attractions.map(({ value, title, icon: Icon }) => (
                <Tabs.Tab
                  key={value}
                  value={value}
                  className="group flex items-center justify-center gap-3 rounded-2xl px-4 py-4 text-sm font-black text-[#6f5847] outline-none transition data-[selected]:bg-[#ff9048] data-[selected]:text-[#381000]"
                >
                  <Icon className="size-5" />
                  {title}
                </Tabs.Tab>
              ))}
            </Tabs.List>

            {attractions.map(({ value, title, copy, image }) => (
              <Tabs.Panel key={value} value={value} className="pt-8 outline-none">
                <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_70px_rgba(56,16,0,0.12)] ring-1 ring-[#ead7b8] lg:grid-cols-[1fr_0.9fr]">
                  <img src={image} alt="" className="h-80 w-full object-cover lg:h-full" />
                  <div className="flex flex-col justify-center p-8 md:p-12">
                    <h3 className="text-4xl font-black text-[#381000]">{title}</h3>
                    <p className="mt-5 text-lg font-medium leading-8 text-[#6f5847]">{copy}</p>
                  </div>
                </div>
              </Tabs.Panel>
            ))}
          </Tabs.Root>
        </div>
      </section>

      <section id="faq" className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff9048]">#FAQ</p>
            <h2 className="mt-3 text-4xl font-black text-[#381000] md:text-5xl">
              Często zadawane pytania...
            </h2>
            <p className="mt-5 text-lg font-medium leading-8 text-[#6f5847]">
              Skorzystaj z naszych gotowych odpowiedzi na najbardziej nurtujące pytania.
            </p>
          </div>

          <Accordion.Root
            value={openFaq}
            onValueChange={(value) => setOpenFaq(value.slice(-1))}
            className="mt-12 grid items-start gap-4 lg:grid-cols-2"
          >
            {faqItems.map(([question, answer]) => (
              <Accordion.Item
                key={question}
                value={question}
                className="self-start rounded-3xl bg-white shadow-[0_18px_50px_rgba(56,16,0,0.08)] ring-1 ring-[#ead7b8]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-5 p-6 text-left text-lg font-black text-[#381000]">
                    <span>{question}</span>
                    <ChevronDown className="size-5 shrink-0 text-[#ff9048] transition group-data-[panel-open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel className="px-6 pb-6 text-base font-medium leading-7 text-[#6f5847]">
                  {answer}
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      <section id="history" className="px-5 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff9048]">#TAKBYŁO</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Historia obozów</h2>
            <p className="mt-5 text-lg font-medium leading-8 text-[#6f5847]">
              Poprzednie edycje najlepiej pokazują tempo, energię i atmosferę wyjazdu. Zobacz archiwum obozów, tematy przewodnie i ludzi, którzy je współtworzyli.
            </p>
            <a
              href="/history"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#ff9048] px-6 py-3 text-sm font-black text-[#381000] transition hover:bg-[#d96f28]"
            >
              <Play className="size-4 fill-current" />
              Poprzednie lata
            </a>
          </div>
          <a
            href="https://www.youtube.com/watch?v=BBdA5LIUQCM"
            target="_blank"
            rel="noreferrer"
            className="group relative block overflow-hidden rounded-[2rem] shadow-[0_25px_70px_rgba(56,16,0,0.16)]"
          >
            <img src={images.history} alt="" className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105" />
            <span className="absolute inset-0 bg-[#381000]/25" />
            <span className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#ff9048] shadow-2xl">
              <Play className="ml-1 size-8 fill-current" />
            </span>
          </a>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-black md:text-5xl">Kim jesteśmy?</h2>
            <div className="mt-9 grid gap-7">
              {[
                ["Sztab", "Sztab to ekipa, która czuwa nad organizacją obozu. Coś wydaje się niemożliwe? Na pewno nie dla nich!"],
                ["Kadra", "To właśnie oni wezmą Was pod swoje skrzydła podczas obozu! Dzięki warsztatom, szkoleniom i integracjom, które poprowadzą, z pewnością nie będziecie się nudzić!"],
              ].map(([title, copy]) => (
                <article key={title} className="flex gap-5">
                  <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[#fff2d8] text-[#ff9048]">
                    <UsersRound className="size-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black">{title}</h3>
                    <p className="mt-2 text-base font-medium leading-7 text-[#6f5847]">{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <img src={images.team} alt="" className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[0_25px_70px_rgba(56,16,0,0.16)]" />
        </div>
      </section>

      <section id="cooperation" className="bg-[#456f97] px-5 py-24 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-5xl font-black">Współpraca</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg font-medium leading-8 text-white/82">
            Obóz Studentów PWr to unikalna okazja do zaangażowania się w projekt, który skupia aktywnych, ambitnych i otwartych na nowe doświadczenia studentów oraz promuje wartości bliskie nowoczesnym przedsiębiorstwom.
          </p>
          <a
            href="mailto:oboz@samorzad.pwr.edu.pl?subject=Współpraca - Obóz Studentów PWr"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-black text-[#381000] transition hover:bg-[#f0f8d8]"
          >
            Skontaktuj się z nami!
          </a>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <img src={images.coopOne} alt="" className="h-80 w-full rounded-[2rem] object-cover" />
            <img src={images.coopTwo} alt="" className="h-80 w-full rounded-[2rem] object-cover" />
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-black md:text-5xl">Partnerzy</h2>
          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {partners.map((src) => (
              <div key={src} className="flex h-32 items-center justify-center rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#ead7b8]">
                <img src={src} alt="" className="max-h-20 max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="bg-white px-5 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff9048]">#Kontakt</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Formularz kontaktowy</h2>
            <p className="mt-5 text-lg font-medium leading-8 text-[#6f5847]">
              Masz pytania, na które nie znalazłeś odpowiedzi? Napisz do nas, a wiadomość zostanie przygotowana do wysłania na adres obozpwrtest@interia.pl.
            </p>
            <a
              href="mailto:obozpwrtest@interia.pl"
              className="mt-7 inline-flex items-center gap-2 text-base font-black text-[#ff9048] transition hover:text-[#d96f28]"
            >
              <Mail className="size-5" />
              obozpwrtest@interia.pl
            </a>
          </div>

          <form
            onSubmit={submitContact}
            className="rounded-[2rem] bg-[#f0f8d8] p-6 shadow-[0_24px_70px_rgba(56,16,0,0.10)] ring-1 ring-[#ead7b8] md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-black text-[#381000]">
                Imię
                <input
                  required
                  name="name"
                  placeholder="Jan Nowak"
                  className="min-h-14 rounded-2xl border border-[#ead7b8] bg-white px-4 text-base font-semibold outline-none transition placeholder:text-[#9a806a] focus:border-[#ff9048] focus:ring-4 focus:ring-[#ff9048]/15"
                />
              </label>
              <label className="grid gap-2 text-sm font-black text-[#381000]">
                Email
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  className="min-h-14 rounded-2xl border border-[#ead7b8] bg-white px-4 text-base font-semibold outline-none transition placeholder:text-[#9a806a] focus:border-[#ff9048] focus:ring-4 focus:ring-[#ff9048]/15"
                />
              </label>
              <label className="grid gap-2 text-sm font-black text-[#381000] md:col-span-2">
                Twoja wiadomość
                <textarea
                  required
                  name="message"
                  rows={7}
                  placeholder="Wpisz tu swoją wiadomość..."
                  className="resize-y rounded-2xl border border-[#ead7b8] bg-white px-4 py-4 text-base font-semibold leading-7 outline-none transition placeholder:text-[#9a806a] focus:border-[#ff9048] focus:ring-4 focus:ring-[#ff9048]/15"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#ff9048] px-7 py-4 text-sm font-black text-[#381000] transition hover:bg-[#d96f28] md:w-auto"
            >
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </section>

      <footer id="contact" className="bg-[#f0f8d8] px-5 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <img src={images.logo} alt="Obóz Studentów PWr" className="h-20 w-auto" />
            <p className="mt-5 max-w-md text-base font-medium leading-7 text-[#6f5847]">
              Tydzień niesamowitych warsztatów, szkoleń i integracji studentów naszej uczelni.
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-black">Obóz</h3>
            <ul className="mt-5 grid gap-3 text-sm font-bold text-[#6f5847]">
              {navItems.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-[#ff9048]">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-black">Kontakt</h3>
            <ul className="mt-5 grid gap-3 text-sm font-bold text-[#6f5847]">
              <li><a href="mailto:oboz@samorzad.pwr.edu.pl" className="hover:text-[#ff9048]">Email</a></li>
              <li><a href="https://www.facebook.com/ObozPWr/?locale=pl_PL" className="hover:text-[#ff9048]">Facebook</a></li>
              <li><a href="https://www.instagram.com/obozpwr/?hl=pl" className="hover:text-[#ff9048]">Instagram</a></li>
              <li><a href="https://www.youtube.com/@SamorzadPWr" className="hover:text-[#ff9048]">Youtube</a></li>
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-6xl border-t border-[#ead7b8] pt-6 text-sm font-bold text-[#9a806a]">
          Copyright © Sztab Obozu Studentów PWr
        </p>
      </footer>
    </main>
  );
}
