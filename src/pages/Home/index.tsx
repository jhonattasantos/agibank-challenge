import { PeopleList } from "../../components/PeopleList";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <h1>Home</h1>
      <PeopleList />
    </Container>
  );
}
