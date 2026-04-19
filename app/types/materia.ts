export interface Schema {
  id: string
  titolo: string
  createdAt: string          // scritto in ISO, es. "2024-09-15"
}

export interface Materia {
//   slug: string               // usato per il routing: /materie/analisi-matematica
  id: string
  nome: string
  schemi: Schema[]
}