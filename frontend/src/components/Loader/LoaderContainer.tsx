import React, { useEffect, useState } from 'react'
import getApolloClient from '../../apolloClient'
import App from '../../App'

export default function WrapperApp() {
  const [client, setClient] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getApolloClient().then((client) => {
      setClient(client)
      setLoading(false)
    })
  }, [])
  return (<App client={client} loading={loading} />)

}