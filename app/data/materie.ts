import { Materia } from "../types/materia";


export const MATERIE: Materia[] = [
  {
    id: "analisi-matematica",
    nome: "Analisi Matematica",
    schemi: [
      {
        id: "schema-limiti",
        titolo: "Limiti e Continuità",
        createdAt: "2024-09-15",
      },
      {
        id: "schema-derivate",
        titolo: "Derivate",
        createdAt: "2024-10-01",
      },
    ],
  },
  {
    id: "diritto-commerciale",
    nome: "Diritto Commerciale",
    schemi: [
      {
        id: "schema-spa",
        titolo: "Struttura S.p.A.",
        createdAt: "2025-03-10",
        nodes:[
  {
    id: 'n1',
    position: { x: 0, y: 0 },
    data: { label: 'Node 1' },
    type: 'custom',
  },
  {
    id: 'n2',
    position: { x: 100, y: 100 },
    data: { label: 'Node 2' },
    type: "custom"
  },],
  edges: [
  {
    id: 'n1-n2',
    source: 'n1',
    target: 'n2',
    label: 'Edge 1',
  },
]
      },
    ],
  },
]