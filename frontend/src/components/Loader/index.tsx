import React, { useEffect, useState } from 'react'
import App from '../../App'
import initiateApolloClient from '../../apolloClient'

export default function Loader() {
  const [client, setClient] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    initiateApolloClient().then((client) => {
      setClient(client)
      setLoading(false)
    })
  }, [])
  return (<App client={client} loading={loading} />)
}