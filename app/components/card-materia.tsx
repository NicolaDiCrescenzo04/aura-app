import Link from "next/link"

type CardMateriaProps = {
  id: string;
  nome: string;
  numero_schemi: number;
}

const CardMateria = ({ id, nome, numero_schemi }: CardMateriaProps ) => {
  return (
  <Link href={`/materie/${id}`} className="rounded-lg p-4 m-4 w-32 h-32 flex flex-col items-center justify-center">

      <p className="uppercase font-bold">{nome}</p>
      <p className="text-xs">{numero_schemi} schemi</p>
    </Link>
  )
}

export default CardMateria
