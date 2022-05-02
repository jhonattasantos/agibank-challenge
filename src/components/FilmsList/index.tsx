import { Film } from "../../types";
import { FilmCard } from "../FilmCard";
import { Card, Wrapper } from "../Shared/styles";

type FilmsProps = {
  films?: Film[];
};

export const FilmsList: React.FC<FilmsProps> = ({ films }) => {
  return (
    <Card>
      <h3>Films</h3>
      <Wrapper>
        {films &&
          films.map((film, index) => {
            return <FilmCard key={index} film={film} />;
          })}
      </Wrapper>
    </Card>
  );
};
