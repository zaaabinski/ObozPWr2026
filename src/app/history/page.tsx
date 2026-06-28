"use client";

import { Tabs } from "@base-ui/react/tabs";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

const assetBase = "https://cdn.prod.website-files.com/63fa240476d6a3dc2954208b";

const logo = `${assetBase}/6872baf6e63f5d576ffc6c58_pdolzubny.png`;

const years = [
  {
    year: "2025",
    tag: "#ObózTotalnejPolibudy",
    title: "Obóz 2025",
    image: `${assetBase}/68cfc48d4c4a65ac2f8b38a6_BRIX%20-%20Blog%20Card%20Image%20Featured.png`,
    copy: "Światło, kamera, akcja! Co prawda nasze reality show dobiegło już końca, ale setki kamer rozmieszczonych po całym ośrodku na pewno wszystko nagrały. Podczas tych wymagających paru dni nasi aktorzy, rozpoczynający swoją przygodę z Politechniką Wrocławską, zostali przetestowani na wielu poziomach.",
    people: [
      ["Mati Bieniek", "Koordynator Główny"],
      ["Krzysztof Kwater", "Organizator, Logistyka i Finanse"],
      ["Adam Szczepaniak", "Logistyka i Finanse"],
      ["Alicja Marmulewicz", "Program"],
      ["Daria Totoszko", "Program"],
      ["Kuba Cnota", "Kadra"],
    ],
  },
  {
    year: "2024",
    tag: "#GalijskaMisja",
    title: "Obóz 2024",
    image: `${assetBase}/6739fa4a08efbe5ead7e1010_Tematyka%20post%20(1).png`,
    copy: "Jest rok 2024 naszej ery. Cała Politechnika została podbita przez studentów... Cała? Nie! Ostała się ostatnia wioska Nieugiętych Galów, która wciąż walczy z legionami najeżdżającymi na Obóz Studentów PWr. To właśnie tutaj najbardziej zaangażowani Galowie powitali i wytrenowali nowe pokolenie wojowników.",
    people: [
      ["Piotr Gabrysch", "Koordynator Główny"],
      ["Wojciech Dominiak", "Logistyka"],
      ["Bartosz Polak", "Finanse"],
      ["Marta Garbuś", "Program"],
      ["Ewa Filipkowska", "Program"],
      ["Bartłomiej Pruszyński", "Kadra"],
    ],
  },
  {
    year: "2023",
    tag: "#KACAGŁOS",
    title: "Obóz 2023",
    image: `${assetBase}/6650ee8772bc521db9b7ac3d_oboz2023.png`,
    copy: "Nasze Igrzyska Dziesięciolecia są już historią. Wielu studentów poległo, jednak ci, którzy przetrwali, chodzą po uczelni dumni. Na obozie skorzystali z wielu warsztatów, rywalizowali w konkurencjach, zawiązali sojusze na całe studia i zgodzili się z jednym: obóz zostaje w pamięci.",
    people: [
      ["Karolina Łęcka", "Koordynatorka Główna"],
      ["Krzysztof Kwater", "Organizator"],
      ["Maja Zielińska", "Uczestnicy"],
      ["Zosia Lewandowska", "Program"],
      ["Paulina Sztama", "Program"],
      ["Mateusz Bieniek", "Kadra"],
    ],
  },
  {
    year: "2022",
    tag: "#ExecuteOrderPWr",
    title: "Obóz 2022",
    image: `${assetBase}/646e0db065058fe8962548bd_t%C5%82o%20wydarzenia%20gotowe%20(1).png`,
    copy: "Tym razem Sokół Millennium przeniósł nas do odległej Galaktyki. Wszyscy obecni Łowcy Nagród mieli szansę zawalczyć między sobą w licznych starciach, dobrze się poznać i podszkolić poza galaktycznym polem bitwy, uczestnicząc w różnorodnych warsztatach.",
    people: [
      ["Karolina Łęcka", "Koordynator Główny"],
      ["Krzysztof Kwater", "Organizator"],
      ["Agata Zawrotniak", "Uczestnicy"],
      ["Izabela Oszkandy", "Program"],
      ["Natalia Pabich", "Program"],
      ["Aleksandra Rozmus", "Kadra"],
    ],
  },
  {
    year: "2021",
    tag: "#SterNaPWr",
    title: "Obóz 2021",
    image: `${assetBase}/645a270588a80f7dd8483509_camp-2021-logo.jpg`,
    copy: "Podczas tego Obozu Studentów PWr wypłynęliśmy na szerokie wody, aby poznać smak przygody. Na nieznanych wodach sześć okrętów rywalizowało w wielu konkurencjach, a uczestnicy mogli wziąć udział w warsztatach takich jak samoobrona, malarstwo czy warsztaty barmańskie.",
    people: [
      ["Kamil Hrebeniuk", "Koordynator Główny"],
      ["Agata Skoczylas", "Uczestnicy"],
      ["Justyna Nowicka", "Program"],
      ["Wiktoria Olesiak", "Program"],
      ["Szymon Tomala", "Kadra"],
      ["Marcin Szubert", "Promocja"],
    ],
  },
  {
    year: "2019",
    tag: "#TylkoTam",
    title: "Obóz 2019",
    image: `${assetBase}/64720b5dee6a0b325b0006ec_camp-2019-logo.png`,
    copy: "Tego września postanowiliśmy wyruszyć do Śródziemia. Podczas niezapomnianej przygody inspirowanej twórczością Tolkiena, oprócz integracji z nowo przyjętymi studentami, uczestnicy wzięli udział w licznych warsztatach prowadzonych przez najaktywniejszych studentów.",
    people: [
      ["Klaudia Kaczmarczyk", "Koordynator Główny"],
      ["Gosia Skrońska", "Uczestnicy"],
      ["Karolina Rytel", "Program i atrakcje"],
      ["Ola Podróżna", "Program i atrakcje"],
      ["Dawid Bednarek", "Promocja"],
      ["Kornelia Głód", "Promocja"],
    ],
  },
  {
    year: "2018",
    tag: "#JaChceJeszczeRaz",
    title: "Obóz 2018",
    image: `${assetBase}/646d2397ef4d23d3e02089ec_camp-2018-logo.jpg`,
    copy: "Forma obozu przyjęła się rewelacyjnie i stała się integralną częścią naszych wyjazdów. Kontynuowaliśmy upiększanie warstwy graficznej, a uczestnicy zdobywali punkty podczas konkurencji, czytali obozowe newsy i korzystali z warsztatów od barmańskich po modelowanie i druk 3D.",
    people: [
      ["Kornel Flaga", "Koordynator Główny"],
      ["Gosia Skrońska", "Uczestnicy"],
      ["Igor Kuczyński", "Program"],
      ["Maciej Jurkowski", "Program"],
      ["Natalia Szubartowska", "Kadra"],
      ["Klaudia Ładziak", "Promocja"],
    ],
  },
];

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-[#f0f8d8] text-[#381000]">
      <header className="bg-white px-5 py-5 shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link href="/" aria-label="Strona główna">
            <img src={logo} alt="Obóz Studentów PWr" className="h-16 w-auto" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#ff9048] px-5 py-3 text-sm font-black text-[#381000] transition hover:bg-[#d96f28]"
          >
            <ArrowLeft className="size-4" />
            Wróć
          </Link>
        </div>
      </header>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff9048]">#TakByło</p>
            <h1 className="mt-3 text-5xl font-black md:text-6xl">Historia obozów</h1>
            <p className="mt-5 text-lg font-medium leading-8 text-[#6f5847]">
              Archiwum edycji Obozu Studentów PWr: tematy przewodnie, wspomnienia oraz osoby, które tworzyły klimat kolejnych wyjazdów.
            </p>
          </div>

          <Tabs.Root defaultValue="2025" className="mt-12">
            <Tabs.List className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3 rounded-[1.5rem] bg-white p-3 shadow-sm ring-1 ring-[#ead7b8]">
              {years.map((item) => (
                <Tabs.Tab
                  key={item.year}
                  value={item.year}
                  className="rounded-2xl px-5 py-3 text-sm font-black text-[#6f5847] outline-none transition data-[selected]:bg-[#ff9048] data-[selected]:text-[#381000]"
                >
                  {item.year}
                </Tabs.Tab>
              ))}
            </Tabs.List>

            {years.map((item) => (
              <Tabs.Panel key={item.year} value={item.year} className="pt-10 outline-none">
                <article className="overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(56,16,0,0.10)] ring-1 ring-[#ead7b8]">
                  <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                    <img src={item.image} alt="" className="h-full min-h-80 w-full object-cover" />
                    <div className="p-8 md:p-12">
                      <p className="inline-flex rounded-full bg-[#fff2d8] px-4 py-2 text-sm font-black text-[#ff9048]">
                        {item.tag}
                      </p>
                      <h2 className="mt-5 text-4xl font-black">{item.title}</h2>
                      <p className="mt-5 text-lg font-medium leading-8 text-[#6f5847]">{item.copy}</p>
                      <a
                        href="https://www.youtube.com/watch?v=BBdA5LIUQCM"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#ead7b8] px-5 py-3 text-sm font-black text-[#381000] transition hover:border-[#ff9048] hover:text-[#ff9048]"
                      >
                        Zobacz film
                        <ExternalLink className="size-4" />
                      </a>
                    </div>
                  </div>
                </article>

                <section className="mt-10">
                  <h3 className="text-3xl font-black">Sztab i współtwórcy</h3>
                  <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {item.people.map(([name, role]) => (
                      <div
                        key={`${item.year}-${name}`}
                        className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#ead7b8]"
                      >
                        <p className="text-sm font-black text-[#ff9048]">{role}</p>
                        <h4 className="mt-2 text-xl font-black">{name}</h4>
                      </div>
                    ))}
                  </div>
                </section>
              </Tabs.Panel>
            ))}
          </Tabs.Root>
        </div>
      </section>
    </main>
  );
}
