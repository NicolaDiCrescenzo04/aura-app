import { getSchemaById } from '@/app/lib/materie'
import Link from 'next/link'
import { ReactFlow, Background, Controls, applyNodeChanges, applyEdgeChanges } from '@xyflow/react';
import Canvas from '@/app/components/canvas';
import { get } from 'http';

type Props = {
    params: Promise<{
      schemaId: string
      materiaId: string
    }>
}


const SchemaPage = async ({params}: Props) => {
  const {schemaId, materiaId} = await params
  getSchemaById(materiaId, schemaId)
  const existingNodes = getSchemaById(materiaId, schemaId)?.nodes || []
  const existingEdges = getSchemaById(materiaId, schemaId)?.edges || []


  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Canvas existingNodes={existingNodes} existingEdges={existingEdges} />
    </div>
  )
}

export default SchemaPage
