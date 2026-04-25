import { getSchemaById } from '@/app/lib/materie'
import Canvas from '@/app/components/canvas';

type Props = {
    params: Promise<{
      schemaId: string
      materiaId: string
    }>
}


const SchemaPage = async ({params}: Props) => {
  const {schemaId, materiaId} = await params
  const schema = getSchemaById(materiaId, schemaId)
  const existingNodes = schema?.nodes || []
  const existingEdges = schema?.edges || []


  return (
    <div className="h-screen w-full overflow-hidden bg-white">
      <Canvas existingNodes={existingNodes} existingEdges={existingEdges} />
    </div>
  )
}

export default SchemaPage
