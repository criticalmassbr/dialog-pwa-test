import { gql, useQuery } from "@apollo/client";
import { useNavigate } from "react-router"
import { useContext } from "react";
import { AppContext } from "./AppContext";
import {Card, CardDescription, PanelTitle, Container} from "./Base"

function UserCard({user}:{user:Person}){
   
    const {setProfile} = useContext(AppContext);
    const nav = useNavigate();
    const showUserProfile = ()=>{ setProfile(user); nav("/user_profile", {state: {profile: user}}) }

    return (
        <Card onClick={showUserProfile}>
            <div>
                <img src={user.picture}></img>
            </div>
            <CardDescription>
                <div><b>Name:</b> {user.name} </div>
                <div><b>Eye Color:</b> {user.eyeColor} </div>
                <div><b>Age: </b>{user.age} </div>
                <div><b>Company: </b>{user.company} </div>
                <div><b>Email: </b>{user.email}</div>
            </CardDescription>
        </Card>
    )
}

export function CardContainer({users, status, label}: {status:string, users?:Person[], label?:string}){

    const buildCards = ()=>{
        if(users){
            if(users.length == 0){ return <div>Your search returned no results :(</div>}
            return  users.map( (usr:Person) => <UserCard user={usr} key={usr.index}></UserCard>)
        }

        return <div>{status}</div> 
    }

    return (
        <div>
            <PanelTitle>
                <h3>{label}</h3>
            </PanelTitle>
            <Container>
                {buildCards()}
            </Container>
        </div>
       
    )
}


export function FilteredFriends({filter, label}:{filter: string, label?:string}){

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
        <div>
            <CardContainer 
                status={ loading ? "Loading..." : "Something went wrong: " + JSON.stringify(error) }
                users = {data ? data.list : undefined} 
                label = { "My Friends" }
            />
        </div>

    )
}