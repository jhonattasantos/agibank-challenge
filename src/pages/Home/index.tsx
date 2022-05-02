import { useState, useEffect, useLayoutEffect } from "react";
import { PeopleList } from "../../components/PeopleList";
import { getPeople } from "../../services/http";
import { PeoplePaginationProps, Person } from "../../types";
import { Container } from "./styles";

export function Home() {
  const [peopleData, setPeopleData] = useState<Person[]>([]);
  // const [people, setPeople] = useState<PeoplePaginationProps | undefined>();
  const [loading, setLoading] = useState(false);
  // const [perPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  // const pages = people ? Math.ceil(people.count / perPage) : 0;

  const loadMorePeople = () => {
    getPeople(currentPage)
      .then(({ data }) => {
        // setPeople(data);
        setPeopleData([...peopleData, ...data.results]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleScroll = (e) => {
    let scrollTop = e.target.documentElement.scrollTop;
    let scrollHeight = e.target.documentElement.scrollHeight;

    if (window.innerHeight + scrollTop + 1 >= scrollHeight) {
      setCurrentPage(currentPage + 1);
      // loadMorePeople();
    }
  };

  function init() {
    setLoading(true);
    loadMorePeople();
    window.addEventListener("scroll", handleScroll);
  }

  useEffect(init, [currentPage]);

  return (
    <Container>
      <PeopleList people={peopleData} />
    </Container>
  );
}
