import React from 'react';
import styled from "styled-components";
import Card from "../Card";
import Header from '../Header';
import PersonDetails from '../PersonDetails';
import { useLazyQuery, useQuery } from '@apollo/client';
import { FIND_QUERY, Person } from "../../queries/people/personQueries";

const CardContainer = styled.div`
  display:grid;
  grid-gap:2vw;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  padding:3vh 1vw;
  @media (max-width: 575px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 575px));
  };
`;

const Container = styled.div`
  overflow: hidden;
`;

const Empty = styled.span`
  font-size:2em;
  margin-left:50px;
  text-overflow: ellipsis;
`;

const FriendsHeader = styled.span`
  font-family: 'Archivo Narrow', sans-serif;
  font-size:2em; 
  margin:0 1vw;
`;

function Content() {
  const [filter, setFilter] = React.useState("");
  const [selectedDetails, showSelectedDetails] = React.useState<Person | null>(null);

  const [list, { loading: lazyLoading, data: lazyData, error: lazyError }] = useLazyQuery(FIND_QUERY);
  const { loading: queryLoad, data: queryData, error: queryError } = useQuery(FIND_QUERY);
  const data = (lazyData && !lazyLoading && !lazyError) ? lazyData : ((queryData && !lazyLoading) ? queryData : null);

  if (queryError) return <h2>Erro!</h2>
  if (queryLoad) return <h2>Carregando...</h2>

  return (
    <Container>
      <Header
        filter={filter}
        selected={!!selectedDetails}
        setFilter={(name: string) => { list({ variables: { name } }); setFilter(name); }}
        showSelectedDetails={showSelectedDetails}
      />
      { selectedDetails &&
        <PersonDetails person={selectedDetails} />
      }
      {selectedDetails && selectedDetails.friends && selectedDetails.friends.length > 0 &&
        <FriendsHeader>
          Friends:
        </FriendsHeader>
      }
      { !selectedDetails ?
        <CardContainer data-testid="personContainer">
          {data &&
            data.list &&
            data.list.map((person: Person) =>
              <Card
                key={person.id + Date.now() + "person"}
                person={person}
                onClick={() => { showSelectedDetails(person); setFilter(""); }}
              />)
          }
        </CardContainer>
        :
        <CardContainer data-testid="friendsContainer">
          {selectedDetails.friends &&
            selectedDetails
              .friends
              .filter(person => person.name?.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
              .map((person: Person) =>
                <Card
                  key={person.id + Date.now() + "friend"}
                  person={person}
                  onClick={() => { showSelectedDetails(person); setFilter(""); }}
                />)
          }
        </CardContainer>
      }
      {(!selectedDetails && data?.list?.length === 0) && <Empty>Sem resultados para: {filter}</Empty>}
    </Container>);
}

export default Content;