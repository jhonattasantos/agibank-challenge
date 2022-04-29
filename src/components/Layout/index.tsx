import { AppRoutes } from "../../Routes";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Container } from "./styles";

export function Layout() {
  return (
    <Container>
      <Header />
      <AppRoutes />
      <Footer />
    </Container>
  );
}
