import type { Edge, Node } from "@xyflow/react"

export interface Schema {
  id: string
  titolo: string
  createdAt: string          // scritto in ISO, es. "2024-09-15"
  nodes?: Nodes[] 
  edges?: Edges[]  
}

export interface Materia {
  id: string
  nome: string
  schemi: Schema[]
}

export type Nodes = Node<{ label: string }, "custom">

export type Edges = Edge
