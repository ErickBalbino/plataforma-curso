import { format, isPast } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { CheckCircle, Lock } from "phosphor-react";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

const Lesson = (props: LessonProps) => {
  const isAvailableLesson = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  return (
    <a href="#">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {isAvailableLesson ? (
            <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
            {props.type === "live" ? "AO VIVO" : "Aula pratica"}
          </span>
        </header>

        <span className="text-gray-200 mt-5 block">{props.title}</span>
      </div>
    </a>
  );
};

export default Lesson;
