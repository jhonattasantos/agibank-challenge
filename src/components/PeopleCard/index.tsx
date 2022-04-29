import { Container, Heading } from "./style";

export function PeopleCard() {
  return (
    <Container>
      <div>Foto</div>
      <Heading level={1} color="red">
        Luke Skywalker
      </Heading>
      <span>Male</span>
      <p>London, England</p>
    </Container>
  );
}
