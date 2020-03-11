import React from 'react'

// Components
import Header from '../Header'
import Search from '../Search'
import Artist from '../Artist'
import Albums from '../Albums'

function Home() {
  return (
    <>
      <Header />

      <main>
        <Search />
        <Artist />

        <Albums />
      </main>
    </>
  )
}

export default Home
