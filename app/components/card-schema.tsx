import Link from 'next/link'
import Image from 'next/image'
import schemaThumbnail from '../assets/schema-thumbnail.svg'

type SchemaProps = {
  materiaId: string
  schemaId: string,
  titolo: string
}

const CardSchema = ({ materiaId, schemaId, titolo }: SchemaProps) => {
  return (
    <Link
      href={`/materie/${materiaId}/schemi/${schemaId}`}
      className="group flex flex-col gap-4 rounded-lg border border-[#e5e7eb] bg-white p-4 text-[#2d2d2d] shadow-[0_12px_36px_rgba(15,23,42,0.05)] transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[#7ec8e3] hover:shadow-[0_18px_44px_rgba(15,23,42,0.09)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ec8e3] focus-visible:ring-offset-4"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={schemaThumbnail}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div>
        <p className="text-lg font-semibold leading-snug">
          {titolo}
        </p>
      </div>
    </Link>
  )
}

export default CardSchema
