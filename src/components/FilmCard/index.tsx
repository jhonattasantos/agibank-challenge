import { Film } from "../../types";

type FilmProps = {
  film: Film;
};

export const FilmCard: React.FC<FilmProps> = ({ film }) => {
  return (
    <div>
      <h4>{film.title}</h4>
      <p>{film.director}</p>
    </div>
  );
};
