import React, { useEffect } from 'react'
import UserGrid from '../componentes/UserGrid'
import Loading from '../componentes/Loading'
import DisplayErro from '../componentes/DisplayErro'
import userQueries from '../graphql/user.queries'
import { useLazyQuery } from "@apollo/react-hooks"


function PaginaHome() {

    const [search, { loading, data, error }] = useLazyQuery(userQueries.QUERY_SEARCH_USERS);

    useEffect(() => {
        search({ variables: { name: '' } })
    }, [])

    if (loading || !data) return <Loading />;
    if (error) return <DisplayErro erro={error} />;

    return (
        <div>
            <UserGrid users={data.list} />
        </div>
    );
}

export default PaginaHome;