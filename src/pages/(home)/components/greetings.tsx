import { format } from 'date-fns'
import { ptBR } from "date-fns/locale/pt-BR";

export function Greetings() {
 return (
    <>
      <h2 className="text-base sm:text-lg md:text-xl font-bold font-mono mb-2.5">Olá! O que vamos anotar hoje?
        {/* {session?.user ? `Olá, ${session.user.name?.split(" ")[0]}!` : "Olá! O que vamos anotar hoje?"} */}
      </h2>
      <p className="capitalize text-sm">
        {format(new Date(), "EEEE',' dd 'de' MMMM",{
          locale: ptBR,
        })}
      </p>
    </>
  );
}
