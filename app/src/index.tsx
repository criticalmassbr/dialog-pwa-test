import { useState} from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import {register} from "./serviceWorkerRegistration"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery} from "@apollo/client"

import { Menu, SearchBar, Title } from "./components/NavBar"
import { FilteredFriends, CardContainer } from './components/FriendList';
// import ProfilePage, { UserInfo } from "./components/ProfilePage"
import { AppContext } from './components/AppContext';
import UserPanel from './components/ProfilePage';

register();

const client = new ApolloClient({uri: "http://localhost:4000", cache: new InMemoryCache()});
const GlobalStyle = createGlobalStyle`
	body{
		margin: 0px;
		width: 100vw;
		height: 100vh;
		font-family: Arial;
	}
`

function App(){
	
	const [filter, setFilter] = useState<string>("");
	const [profile, setProfile] = useState<Person | undefined>(undefined);

  	return (
		<div>
			<GlobalStyle/>
			<Menu>
				<Title>MySocial</Title>
				<SearchBar setFilter={setFilter}/>
			</Menu>
			<Routes>
				<Route path='/' element={
					<AppContext.Provider value={{setProfile}}>
						<FilteredFriends filter={filter}/>
					</AppContext.Provider>
				}/>
				<Route path='/user_profile' element={	
					<div>
						<AppContext.Provider value={{profile, setProfile}}>
							<UserPanel/>
							<CardContainer users={profile?.friends} status="Loaded."/> {/*TODO:understand "?"" use here*/}
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

