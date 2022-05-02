import { Planet } from "../../types";
import { Card, Wrapper } from "../Shared/styles";

type PlanetProps = {
  planet: Planet;
};

export const PlanetDetail: React.FC<PlanetProps> = ({ planet }) => {
  return (
    <Card>
      <h3>Planet</h3>
      <Wrapper>
        <div>Nome: {planet.name}</div>
      </Wrapper>
    </Card>
  );
};
