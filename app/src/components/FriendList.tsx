import styled from "styled-components"
import {useEffect, useRef} from "react"
import { gql, useQuery } from "@apollo/client";


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

const CardContainer = styled.div`
    height: auto;
    background-color: gray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 25px;
    overflow-x: auto;
`;

function UserCard({user}:{user:Person}){

    return (
        <Card key={user._id}>
            <img src={user.picture}></img>
            <div>Name: {user.name} </div>
            <div>Eye Color: {user.eyeColor} </div>
            <div>Company: {user.company} </div>
            <div>Email: {user.email} </div>
        </Card>
    )
}

export default function FriendList({state}:{state:string}){
    //TODO: this needs to be stored somewhere
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

    const {loading, error, data}:QueryResult = useQuery(users_query,{variables:{name:state}});
   

    const buildCards = ()=>{
        if(loading){ return <div>Loading...</div>}

        if(error){ return <div> Error: {error}</div> }

        if(data){
            return data.list.length > 0 ?  data.list.map( (usr:Person) => <UserCard user={usr} key={usr._id}></UserCard>) : <div>Nenhum resultado encontrado</div>
        }
    }
    
    return (
        <CardContainer>
            {buildCards()}
        </CardContainer>
    )
}