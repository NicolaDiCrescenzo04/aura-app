import Link from 'next/link'
import React from 'react'

type Props = {
    params: Promise<{materiaId: string}>
}

const MateriaPage = async ({params}: Props) => {
  const {materiaId} = await params
  return (
    <div> 
   
      <Link href={`/`}>
      Torna indietro
      </Link>
      <p>{materiaId}</p>
      <Link href={`/materie/${materiaId}/schemi/schema-1`}>
     Schema 1
      </Link>
    </div>
  )
}

export default MateriaPage
