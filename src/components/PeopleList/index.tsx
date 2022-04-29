import { PeopleCard } from "../PeopleCard";
import { Container, PeopleListWrapper } from "./style";

export function PeopleList() {
  return (
    <Container>
      <PeopleListWrapper>
        <PeopleCard />
      </PeopleListWrapper>
    </Container>
  );
}
