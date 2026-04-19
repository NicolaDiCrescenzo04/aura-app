import CardMateria from "./components/card-materia";
import { getMaterie } from "./lib/materie";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-1">
      {getMaterie().map((materia) => (
        <CardMateria 
        key={materia.id}
          id={materia.id} 
          nome={materia.nome} 
          numero_schemi={materia.schemi.length} 
        />
      ))}
    </div>
  );
}
