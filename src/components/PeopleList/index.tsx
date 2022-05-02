import { Person } from "../../types";
import { PeopleCard } from "../PeopleCard";
import { Container, PeopleListWrapper } from "./style";

type PeopleProps = {
  people?: Person[] | undefined;
};

export const PeopleList: React.FC<PeopleProps> = ({ people }) => {
  return (
    <Container>
      <PeopleListWrapper>
        {people &&
          people.map((person, index) => {
            return <PeopleCard key={index} person={person} />;
          })}
      </PeopleListWrapper>
    </Container>
  );
};
