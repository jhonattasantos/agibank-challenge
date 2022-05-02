import { Vehicle } from "../../types";
import { Card, Wrapper } from "../Shared/styles";

type VehiclesProps = {
  vehicles?: Vehicle[];
};

export const VehiclesList: React.FC<VehiclesProps> = ({ vehicles }) => {
  if (vehicles?.length === 0) {
    return <div></div>;
  }

  return (
    <Card>
      <h3>Vehicles</h3>
      <Wrapper>
        {vehicles &&
          vehicles.map((vehicle, index) => {
            return <div key={index}>{vehicle.name}</div>;
          })}
      </Wrapper>
    </Card>
  );
};
