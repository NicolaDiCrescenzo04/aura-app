import Link from 'next/link'
import React from 'react'

type Props = {
    params: Promise<{
      schemaId: string
      materiaId: string
    }>
}

const SchemaPage = async ({params}: Props) => {
  console.log(params) 
  const {schemaId, materiaId} = await params
  return (
    <div>
       <Link href={`/materie/${materiaId}`}>
      Torna indietro
      </Link>
      <p>{schemaId}</p>
    </div>
  )
}

export default SchemaPage
