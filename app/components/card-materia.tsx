import Link from "next/link"

type MateriaProps = {
  nome: string
  numero_schemi: number
}

const CardMateria = ({ nome, numero_schemi }: MateriaProps) => {
  return (
  <Link href={`/materie/${nome.toLowerCase()}`} className="rounded-lg p-4 m-4 w-32 h-32 flex flex-col items-center justify-center">

      <p className="uppercase font-bold">{nome}</p>
      <p className="text-xs">{numero_schemi} schemi</p>
    </Link>
  )
}

export default CardMateria
