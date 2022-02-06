type Person = {
    _id?: string
    index?: number,
    picture?: string,
    age?: number,
    eyeColor?: number,
    name?: string,
    company?: string,
    email?: string,
    phone?: string,
    greeting?: string,
    friends?: Person[]
}

type QueryResult = {
    data?: {list: Person[]},
    error?: any,
    loading: boolean
}

type AppContext = {
    profile?:Person,
    setProfile: Function
}