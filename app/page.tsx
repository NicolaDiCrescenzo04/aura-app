import CardMateria from "./components/card-materia";
import { getMaterie } from "./lib/materie";

const cardTones = [
  "bg-[#DCF0FA] hover:bg-[#D2ECF8]",
  "bg-[#FFD6E0] hover:bg-[#FFC9D7]",
  "bg-[#D4EDDA] hover:bg-[#C8E7D0]",
  "bg-[#FFF3CD] hover:bg-[#FFECAF]",
  "bg-[#E8DAEF] hover:bg-[#DECBE8]",
  "bg-[#FDEBD0] hover:bg-[#FBE1BC]",
];

export default function Home() {
  const materie = getMaterie();

  return (
    <main className="flex-1 bg-[#fbfdff] px-8 py-12 text-[#2d2d2d]">
      <section className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <header className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium tracking-[0.18em] text-[#4ba3c7] uppercase">
              Aura
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight text-[#2d2d2d]">
              Materie
            </h1>
          </div>
          <p className="text-sm text-[#6b7280]">
            {materie.length} materie
          </p>
        </header>

        <div className="grid grid-cols-2 gap-4">
          {materie.map((materia, index) => (
            <CardMateria
              key={materia.id}
              id={materia.id}
              nome={materia.nome}
              numero_schemi={materia.schemi.length}
              toneClassName={cardTones[index % cardTones.length]}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
