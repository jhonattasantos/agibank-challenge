import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FilmsList } from "../../components/FilmsList";
import { PlanetDetail } from "../../components/PlanetDetail";
import { Text } from "../../components/Shared/typography";
import { SpeciesList } from "../../components/SpeciesList";
import { StarshipsList } from "../../components/StarshipsList";
import { VehiclesList } from "../../components/VehiclesList";
import { getId, getRelationship } from "../../helper";
import {
  getFilms,
  getPerson,
  getPlanet,
  getSpecies,
  getVehicles,
  getStarships,
} from "../../services/http";
import { Person } from "../../types";
import {
  BackButton,
  BackButtonMobile,
  Container,
  PersonCard,
  PersonDetails,
} from "./style";

export function PersonPage() {
  let params = useParams();
  const [person, setPerson] = useState<Person | undefined>();

  const [loading, setLoading] = useState(false);

  function init() {
    setLoading(true);
    if (!params.id) {
      return;
    }

    const fetchData = async () => {
      const personData = await getPerson(String(params.id));
      const homeworlUrl = String(personData.data.homeworld);
      const homeworldId = getId({ url: homeworlUrl, entity: "planets" });

      const planetData = await getPlanet(homeworldId);
      const planet = planetData.data;

      const films = await getRelationship(
        "films",
        personData.data.films,
        getFilms
      );

      const species = await getRelationship(
        "species",
        personData.data.species,
        getSpecies
      );

      const vehicles = await getRelationship(
        "vehicles",
        personData.data.vehicles,
        getVehicles
      );

      const starships = await getRelationship(
        "starships",
        personData.data.starships,
        getStarships
      );

      setPerson({
        ...personData.data,
        homeworld: planet,
        species,
        vehicles,
        starships,
        films,
      });
      setLoading(false);
    };
    fetchData();
  }

  useEffect(init, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (person == undefined) {
    return <h1>Registro não encontrado</h1>;
  }

  return (
    <Container>
      <PersonCard>
        <div>
          <Text size="small">Nome:</Text>
          {person.name}
          <Text size="small">Gender:</Text>
          {person.gender}
          <Text size="small">Height:</Text>
          {person.height}
          <Text size="small">Mass:</Text>
          {person.mass}
          <Text size="small">Hair Color: </Text>
          {person.hair_color}
          <Text size="small">Skin Color: </Text>
          {person.skin_color}
          <Text size="small">Eye Color: </Text>
          {person.eye_color}
          <Text size="small">Birth Year: </Text>
          {person.birth_year}
        </div>
        <BackButton>
          <Link to="/">Voltar</Link>
        </BackButton>
      </PersonCard>
      <PersonDetails>
        <PlanetDetail planet={person.homeworld} />
        <FilmsList films={person.films} />
        <SpeciesList species={person.species} />
        <VehiclesList vehicles={person.vehicles} />
        <StarshipsList starships={person.starships} />
      </PersonDetails>

      <BackButtonMobile>
        <Link to="/">Voltar</Link>
      </BackButtonMobile>
    </Container>
  );
}
