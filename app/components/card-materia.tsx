import Link from "next/link"

type CardMateriaProps = {
  id: string;
  nome: string;
  numero_schemi: number;
  toneClassName: string;
}

const subjectEmojis = ["📘", "⚖️", "🧪", "🧠", "🎨", "🌍", "📐", "💬"];

function getSubjectEmoji(value: string) {
  const index = [...value].reduce((total, char) => total + char.charCodeAt(0), 0) % subjectEmojis.length;

  return subjectEmojis[index];
}

const CardMateria = ({ id, nome, numero_schemi, toneClassName }: CardMateriaProps ) => {
  return (
    <Link
      href={`/materie/${id}`}
      className={`${toneClassName} group flex min-h-44 flex-col justify-between rounded-lg p-6 text-[#2d2d2d] shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ec8e3] focus-visible:ring-offset-4`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/55 text-2xl shadow-sm">
          {getSubjectEmoji(id)}
        </div>
        <span className="rounded-full bg-white/45 px-3 py-1 text-xs font-medium text-[#4b5563]">
          {numero_schemi}
        </span>
      </div>
      <div>
        <p className="text-2xl font-semibold leading-tight">
          {nome}
        </p>
        <p className="mt-2 text-sm text-[#4b5563]">
          {numero_schemi} schemi
        </p>
      </div>
    </Link>
  )
}

export default CardMateria
