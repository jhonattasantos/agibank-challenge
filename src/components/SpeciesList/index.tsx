import { Specie } from "../../types";
import { Card, Wrapper } from "../Shared/styles";

type SpeciesProps = {
  species?: Specie[];
};

export const SpeciesList: React.FC<SpeciesProps> = ({ species }) => {
  if (species?.length === 0) {
    return <div></div>;
  }

  return (
    <Card>
      <h3>Species</h3>
      <Wrapper>
        {species &&
          species.map((specie, index) => {
            return <div key={index}>{specie.name}</div>;
          })}
      </Wrapper>
    </Card>
  );
};
