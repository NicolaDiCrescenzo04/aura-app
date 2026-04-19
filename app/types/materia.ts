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

export interface Nodes {
  id: string
  position: { x: number, y: number }
  data: { label: string }
  type?: string
}

export interface Edges {
  id: string
  source: string
  target: string
  label?: string
}