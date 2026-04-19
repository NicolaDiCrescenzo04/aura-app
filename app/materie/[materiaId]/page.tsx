import CardSchema from '@/app/components/card-schema'
import Link from 'next/link'
import { getMateriaById } from '@/app/lib/materie'


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
      <div className='flex flex-wrap'>
      {getMateriaById(materiaId)?.schemi.map((schema) => (
        <CardSchema 
          key={schema.id}
          materiaId={materiaId}
          schemaId={schema.id}
          titolo={schema.titolo} 
          createdAt={schema.createdAt}
        />
      ))}
      </div>

    </div>
  )
}

export default MateriaPage
