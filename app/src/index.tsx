import { useState } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import {register} from "./serviceWorkerRegistration"

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery} from "@apollo/client"

import { Menu, SearchBar, Title } from "./components/NavBar"
import { FilteredFriends, CardContainer } from './components/FriendList';
import { AppContext } from './components/AppContext';
import {Panel} from "./components/Base";
import UserPanel from './components/ProfilePage';

register();

const client = new ApolloClient({uri: "http://localhost:4000", cache: new InMemoryCache()});
const GlobalStyle = createGlobalStyle`
	body{
		margin: 0px;
		width: 100vw;
		height: 100vh;
		padding: 0px;
		font-family: Arial;
		background-color: #FFF;
	}
`

function App(){
	
	const [filter, setFilter] = useState<string>("");
	const [profile, setProfile] = useState<Person | undefined>(window.history.state.usr?.profile);
	const nav = useNavigate();
	 console.log("App", profile)
	 console.log("App_hist", window.history.state.usr?.profile)

  	return (
		<div>
			<GlobalStyle/>
			<Menu>
				<Title onClick={() => nav("/")}>MySocial</Title>
				<SearchBar setFilter={setFilter}/>
			</Menu>
			<Routes>
				<Route path='/' element={
					<AppContext.Provider value={{setProfile}}>
						<Panel>
							<FilteredFriends filter={filter}/>
						</Panel>			
					</AppContext.Provider>
				}/>
				<Route path='/user_profile' element={	
					<div>
						<AppContext.Provider value={{profile:window.history.state.usr?.profile || profile , setProfile}}>
							<Panel>
								<UserPanel/>
							</Panel>
							<Panel>
								<CardContainer label={profile?.name + "'s friends"} users={ window.history.state.usr?.profile.friends || profile.friends} status=""/> {/*TODO:understand "?"" use here*/}
							</Panel>
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

