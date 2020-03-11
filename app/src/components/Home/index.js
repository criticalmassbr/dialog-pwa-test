import React from 'react'
import { Offline } from 'react-detect-offline'

// Components
import Header from '../Header'
import Search from '../Search'
import Artist from '../Artist'
import Albums from '../Albums'

// Styled
import { Notification } from './styled'

function Home() {
  return (
    <>
      <Header />

      <main>
        <Search />
        <Artist />

        <Albums />
      </main>

      <Offline>
        <Notification>You are now on offline mode!</Notification>
      </Offline>
    </>
  )
}

export default Home
