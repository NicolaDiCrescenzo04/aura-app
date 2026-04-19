import { MATERIE } from "../data/materie";
import { Materia, Schema } from "../types/materia";

export function getMaterie(): Materia[] {
  return MATERIE;
}

export function getMateriaById(id: string): Materia | undefined {
  return MATERIE.find(materia => materia.id === id);
}

export function getSchemaById(materiaId: string, schemaId: string): Schema | undefined {
  const materia = getMateriaById(materiaId);
  return materia?.schemi.find(schema => schema.id === schemaId);
}