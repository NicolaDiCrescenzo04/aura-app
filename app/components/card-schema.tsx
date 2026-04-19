import Link from 'next/link'
import React from 'react'

type SchemaProps = {
  materiaId: string
  schemaId: string,
  titolo: string,
  createdAt?: string
}

const CardSchema = ({ materiaId, schemaId, titolo, createdAt }: SchemaProps) => {
  return (
    <div className="rounded-lg p-4 m-4 w-32 h-32 flex flex-col items-center justify-center">
        <Link href={`/materie/${materiaId}/schemi/${schemaId}`} >
     {titolo}
      </Link>
      <p>{createdAt}</p>
    </div>


  )
}

export default CardSchema
