import React from 'react'

// Component
import Album from '../Album'

// Styled
import { AlbumsWrapper, AlbumList, P } from './styled'

// const Albums = ({ albums }) => (
//   <AlbumsWrapper>
//     {albums.length ? (
//       <>
//         <h2>albums</h2>
//         <AlbumList>
//           {albums.map((album, i) => (
//             <li key={i}>
//               <Album album={album} />
//             </li>
//           ))}
//         </AlbumList>
//       </>
//     ) : (
//       <P>search for an artist to see their information and albums!</P>
//     )}
//   </AlbumsWrapper>
// )

const Albums = ({ albums }) => (
  <AlbumsWrapper>
    <>
      <h2>albums</h2>
      <AlbumList>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((album, i) => (
          <li key={i}>
            <Album
              album={{
                name: 'Testing album 1',
                id: i,
                image: 'https://f4.bcbits.com/img/a1218962898_10.jpg'
              }}
            />
          </li>
        ))}
      </AlbumList>
    </>
  </AlbumsWrapper>
)

export default Albums
