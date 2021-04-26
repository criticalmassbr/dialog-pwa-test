import React from "react";
import IUser from "../../model/UserProps";
import { Container, ProfilePicture } from "./styles";

interface ProfileProps {
    user: IUser;
}

export default function UserProfile({ user }: ProfileProps) {
    return (
        <Container>
              <ProfilePicture src={user.picture} alt={user.name} />
              <div>
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <p>Email: {user.email}</p>
              </div>
        </Container>
    )
}