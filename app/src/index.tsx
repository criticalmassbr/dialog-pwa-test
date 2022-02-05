// import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql} from "@apollo/client"

import NavBar from "./components/NavBar"
import {FriendList} from "./components/FriendList"
import {UserInfo} from "./components/UserInfo"

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
  	return (
		<div>
			<GlobalStyle/>
			<NavBar/>
			<div>
				<Routes>
					<Route path='/' element={<FriendList>Your friends</FriendList>}/>
					<Route path='friend_detail' element={
						<div>
							<UserInfo>This guy's info</UserInfo>
							<FriendList>This guy's friends</FriendList>
						</div>
					}/>
				</Routes>
			</div>
		</div>
  	)
}


ReactDOM.render( 
	<BrowserRouter>
		{App()}
	</BrowserRouter>, 
	document.getElementById('root')
);
