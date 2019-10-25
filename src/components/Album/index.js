import React from "react";
import { Wrapper, TitleSection, Title, SearchSection, InputTextStyled, ArtistSection, Image, ArtistTitle, AlbumSection, AlbumItem, AlbumNotFound, AlbumImage, AlbumTitle } from './style';
import {observer, inject} from "mobx-react";
import { observable } from "mobx"

@inject('Query')
@observer
class Album extends React.Component {

  getAlbums = (data) => {
    return (
      <Wrapper>
        <AlbumSection>
          {
            data && data.length > 0 ? 
              data.map((item, index) => (
                  <AlbumItem animate={true} key={item.id}>
                    <AlbumImage src={item.image} />
                    <AlbumTitle>{item.name}</AlbumTitle>
                  </AlbumItem>
                )
              )
              :
              <AlbumNotFound>No search results found.</AlbumNotFound>
          }
        </AlbumSection>
      </Wrapper>   
    )
  }

  render() {
    const { data, filter, editFilter } = this.props.Query;
    return (
      <Wrapper>
        <TitleSection>
          <Title>Album Finder</Title>
        </TitleSection>
        <SearchSection>
          <InputTextStyled autoFocus value={filter} onChange={event => editFilter(event.target.value)} />
        </SearchSection>
        {data && data.length > 0 ?
          <Wrapper>
            <ArtistSection>
              <Image src={data[0].image} />
              <ArtistTitle>{data[0].name}</ArtistTitle>
            </ArtistSection>
            {data[0].albums && data[0].albums.length > 0 && 
                this.getAlbums([...data[0].albums])}
          </Wrapper>
         :
          <ArtistSection>
            <AlbumNotFound>No search results found.</AlbumNotFound>
          </ArtistSection>
        }
      </Wrapper>
    );
  }
}

export default Album;
