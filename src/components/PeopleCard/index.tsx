import { useNavigate } from "react-router-dom";
import { getId } from "../../helper";
import { Person } from "../../types";
import { Heading, Text } from "../Shared/typography";
import { Button, Container, Item } from "./style";

type PersonProps = {
  person: Person;
};

export const PeopleCard: React.FC<PersonProps> = ({ person }) => {
  let navigate = useNavigate();
  function goToProfile() {
    const url = person.url;
    const entity = "people";
    navigate(`/people/${getId({ url, entity })}`);
  }

  return (
    <Container>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
          style={{ width: "75px" }}
        />
      </div>
      <Heading level={1}>{person.name}</Heading>
      <Text color="subtitle" size="xsmall" fontWeight={100}>
        {person.gender}
      </Text>
      <Text color="subtitle" size="xsmall" fontWeight={100}>
        {person.name}
      </Text>

      <Item>
        <Text color="title" size="xsmall" fontWeight={100}>
          Films
        </Text>
        <Text color="title" size="xsmall" fontWeight={100}>
          {person.films.length}
        </Text>
      </Item>

      <Item>
        <Text color="title" size="xsmall" fontWeight={100}>
          Species
        </Text>
        <Text color="title" size="xsmall" fontWeight={100}>
          {person.species.length}
        </Text>
      </Item>

      <Item>
        <Text color="title" size="xsmall" fontWeight={100}>
          Vehicles
        </Text>
        <Text color="title" size="xsmall" fontWeight={100}>
          {person.vehicles.length}
        </Text>
      </Item>

      <Item>
        <Text color="title" size="xsmall" fontWeight={100}>
          Starships
        </Text>
        <Text color="title" size="xsmall" fontWeight={100}>
          {person.starships.length}
        </Text>
      </Item>

      <Button onClick={() => goToProfile()}>Detalhes</Button>
    </Container>
  );
};
