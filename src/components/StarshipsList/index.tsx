import { Starship } from "../../types";
import { Card, Wrapper } from "../Shared/styles";

type StarshipsProps = {
  starships?: Starship[];
};

export const StarshipsList: React.FC<StarshipsProps> = ({ starships }) => {
  if (starships?.length === 0) {
    return <div></div>;
  }

  return (
    <Card>
      <h3>Starships</h3>
      <Wrapper>
        {starships &&
          starships.map((starship, index) => {
            return <div key={index}>{starship.name}</div>;
          })}
      </Wrapper>
    </Card>
  );
};
