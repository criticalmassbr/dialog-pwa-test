import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { ResetCssGlobal } from './components/ResetCss';
import HeaderComponent from './components/Header';
import ArtistComponent from './components/Artist';
import AlbumsComponent from './components/Albums/index';
import LayoutAlignComponent from './components/LayoutAlign/index';

export default function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState({})
  const [showFirstMessage, setShowFirstMessage] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = e => setInput(e.target.value)

  useEffect(() => {

    setIsLoading(true)
    setShowFirstMessage(false)
    setShowErrorMessage(false)

    setData({})
    const query = encodeURIComponent(`{
      queryArtists(byName: "${input}") {
        name
        id
        image
        albums {
          name
          id
          image 
        }
      }
    }`)
    axios(`https://spotify-graphql-server.herokuapp.com/graphql?query=${query}`)
      .then(res => {
        setIsLoading(false)
        res.data.data.queryArtists !== null && res.data.data.queryArtists.length > 0 ? setData(res.data.data.queryArtists[0]) : (input === '' ? setShowFirstMessage(true) : setShowErrorMessage(true)) 
      })
      .catch(err => {
        setIsLoading(false)
        input === '' ? setShowFirstMessage(true) : setShowErrorMessage(true) 
      })

  }, [input])

  return (
    <>
      <ResetCssGlobal />
      <HeaderComponent input={input} handleChange={handleChange}/>
      {
        Object.keys(data).length > 0 &&
          <>
            <ArtistComponent artist={data.name} image={data.image}/>
            <AlbumsComponent albums={data.albums}/>
          </>
      }
      <LayoutAlignComponent flow="column">
        {
          isLoading && <p>Loading...</p>
        }
        {
          showErrorMessage && <p>Artista não encontrado.</p>
        }
        {
          showFirstMessage && <p>Procure algo acima.</p>
        }
      </LayoutAlignComponent>
    </>
  );
}

