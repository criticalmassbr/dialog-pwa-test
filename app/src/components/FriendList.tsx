import { gql, useQuery } from "@apollo/client";
import { useNavigate } from "react-router"
import {Card, CardDescription, PanelTitle, Container, ErrorPanel} from "./Base"

function UserCard({user}:{user:Person}){
   
    const nav = useNavigate();
    const showUserProfile = ()=>{ nav("/user_profile", {state: {profile: user}}) }

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

export function CardContainer({users = [], status, label}: {status?:string, users:Person[], label?:string}){

    const buildCards = ()=>{
        if(users.length == 0){ 
            return <ErrorPanel>{ status || "Nothing to see here :("} </ErrorPanel>
        }

        return  <Container>{users.map( (usr:Person) => <UserCard user={usr} key={usr.index}></UserCard>)}</Container>
    }

    return (
        <div>
            <PanelTitle>
                <h3>{label}</h3>
            </PanelTitle>
                {buildCards()}
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
                status={ loading ? "Loading..." : "No friends match the search criteria" }
                users = {data ? data.list : undefined} 
                label = { "My Friends" }
            />
        </div>

    )
}