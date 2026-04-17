import Image from "next/image";
import Link from "next/link";
import CardMateria from "./components/card-materia";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-1">
      <CardMateria nome="Matematica" numero_schemi={10} />  
        <CardMateria nome="Diritto" numero_schemi={8} />  
    </div>
  );
}
