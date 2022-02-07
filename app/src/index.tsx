import { useState } from 'react';
import ReactDOM from 'react-dom';
import {register} from "./serviceWorkerRegistration"

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery} from "@apollo/client"

import { GlobalStyle, Panel } from './components/Base';
import { Menu, SearchBar, Title } from "./components/NavBar"
import { FilteredFriends, CardContainer } from './components/FriendList';
import { AppContext } from './components/AppContext';
import UserPanel from './components/ProfilePage';

register();

const client = new ApolloClient({uri: "http://localhost:4000", cache: new InMemoryCache()});

function App(){
	
	const [filter, setFilter] = useState<string>("");
	const profile:Person = window.history.state.usr ? window.history.state.usr.profile : undefined;

	const nav = useNavigate(); 
	
	console.log("app render")

  	return (
		<div>
			<GlobalStyle/>
			<Menu>
				<Title onClick={() => nav("/")}>MySocial</Title>
				<SearchBar setFilter={setFilter}/>
			</Menu>
			<Routes>
				<Route path='/' element={
					<Panel>
						<FilteredFriends filter={filter}/>
					</Panel>			
				}/>
				<Route path='/user_profile' element={/* TODO:This element should not render on profile = undefined */	
					<div>
						<AppContext.Provider value={{profile}}>
							{ profile ? 
							
							<div>
								<Panel>
									<UserPanel/>
								</Panel>
								<Panel>
									<CardContainer label={ profile ? profile.name+ "'s friends" : ""} users={ profile ? profile.friends : []} status=""/>
								</Panel>
							</div>	
							
							: 
							
							<div>Nothing to see here :(</div>
							}
							
						</AppContext.Provider>
					</div>
				}/>
			</Routes>
		</div>
  	)
}

ReactDOM.render( 
	<ApolloProvider client={client}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</ApolloProvider>, 
	document.getElementById('root')
);

