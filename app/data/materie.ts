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
      },
    ],
  },
]