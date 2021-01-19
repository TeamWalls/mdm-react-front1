import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';/*iniciar el cliente */

import { ApolloProvider } from '@apollo/client';/*para envolver el app */

import { useQuery, gql } from '@apollo/client';/*la peticion */

const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache()
});

const EXCHANGE_RATES = gql`
{
  characters {
    results {
      id
      name
    }
  }
}
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
    
    return data.characters.results.map(character => {
      return <p key={character.id}>{character.name}</p>;
    });
}

class Apollo extends React.Component{
  render(){
      return(
        <ApolloProvider client={client}>
           <ExchangeRates></ExchangeRates>
        </ApolloProvider>
      )
  }
}

export default Apollo