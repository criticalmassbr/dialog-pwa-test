import { useState} from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"

import { Menu, SearchBar, Title } from "./components/NavBar"
import FriendList from "./components/FriendList"
import ProfilePage from "./components/ProfilePage"

const client = new ApolloClient({uri: "http://localhost:4000", cache: new InMemoryCache()});
const GlobalStyle = createGlobalStyle`
	body{
		margin: 0px;
		width: 100vw;
		height: 100vh;
		font-family: Arial;
	}
`
// client.query(
// 	{
// 		query: gql`
// 			query getUsers {
// 				list{
// 					_id,
// 					name
// 				}
// 			}
// 		`
// 	}
// )
// 	.then( ({data}) => console.log(data.list))
// 	.catch( err => console.error(err))

function App(){
	
	// const [users, setUsers] = useState([]);
	// const [profile, setProfile] = useState({});
	const [search, setSearch] = useState("");

	console.log("Parent render")

  	return (
		<div>
			<GlobalStyle/>
			<Menu>
				<Title>MySocial</Title>
				<SearchBar setState={setSearch}/>
			</Menu>
			<Routes>
				<Route path='/' element={<FriendList state={search}/>}/>
				<Route path='/friend_profile' element={<ProfilePage/>}/>
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
