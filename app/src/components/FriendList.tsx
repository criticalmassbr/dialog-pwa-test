import styled from "styled-components"
import { gql, useQuery } from "@apollo/client";
import {useNavigate} from "react-router"
import { useContext } from "react";
import { AppContext } from "./AppContext";

const Card = styled.span`
    height: 300px;
    width: 200px;
    background-color: lightblue;
    display: inline;
    grid-row-start: 1;

    img{
        height:50px;
    }
`
const Container = styled.div`
    height: auto;
    background-color: gray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 25px;
    overflow-x: auto;
`;

function UserCard({user}:{user:Person}){
   
    const {setProfile} = useContext(AppContext);
    const nav = useNavigate();
    const showUserProfile = ()=>{ setProfile(user); nav("/user_profile?user_id="+user._id) }

    return (
        <Card onClick={showUserProfile}>
            <img src={user.picture}></img>
            <div>Name: {user.name} </div>
            <div>Eye Color: {user.eyeColor} </div>
            <div>Company: {user.company} </div>
            <div>Email: {user.email} </div>
        </Card>
    )
}

export function CardContainer({users, status}: {status:string, users?:Person[]}){

    const buildCards = ()=>{
        if(users){
            // return users.length > 0 ? users.map( (usr:Person) => <UserCard user={usr} key={usr._id}></UserCard>) : <div>Nenhum resultado encontrado</div>
            if(users.length == 0){ return <div>Nenhum resultado encontrado</div>}
            return  users.map( (usr:Person) => <UserCard user={usr} key={usr.index}></UserCard>)
        }

        return <div>{status}</div> 
    }

    return (
        <Container>
            {buildCards()}
        </Container>
    )
}


export function FilteredFriends({filter}:{filter: string}){

    const users_query = gql`
        query GetUsers($name:String){
        	list(name: $name){
        		_id
        		index
        		picture
        		age
        		eyeColor
        		name
        		company
        		email
        		phone
        		greeting
        		friends{
        			index
        			picture
        			age
        			eyeColor
        			name
        			company
        			email
        			phone
        			greeting
        		}
        	}
        }
    `;

    const {loading, error, data}:QueryResult = useQuery(users_query, {variables: {name: filter}}) 

    return (
        <CardContainer 
            status={ loading ? "Loading..." : "Something went wrong: " + JSON.stringify(error) }
            users = {data ? data.list : undefined} 
        />
    )
}