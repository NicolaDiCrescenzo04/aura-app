import CardSchema from '@/app/components/card-schema'
import Link from 'next/link'
import { getMateriaById } from '@/app/lib/materie'


type Props = {
    params: Promise<{materiaId: string}>
}

const MateriaPage = async ({params}: Props) => {

  const {materiaId} = await params
  const materia = getMateriaById(materiaId)
  const schemi = materia?.schemi ?? []

  return (
    <main className="min-h-screen bg-[#fbfdff] px-8 py-10 text-[#2d2d2d]">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="flex items-end justify-between gap-6">
          <div>
            <Link
              href="/"
              className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium text-[#4ba3c7] transition hover:bg-[#dcf0fa] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ec8e3]"
            >
              Torna indietro
            </Link>
            <h1 className="mt-5 text-3xl font-semibold leading-tight">
              {materia?.nome ?? materiaId}
            </h1>
          </div>
          <p className="text-sm text-[#6b7280]">
            {schemi.length} schemi
          </p>
        </header>

        <div className="grid grid-cols-3 gap-5">
          {schemi.map((schema) => (
            <CardSchema
              key={schema.id}
              materiaId={materiaId}
              schemaId={schema.id}
              titolo={schema.titolo}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default MateriaPage
