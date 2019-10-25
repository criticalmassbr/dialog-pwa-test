import styled from "styled-components";

export const Wrapper = styled.div``;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`;


export const Title = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
  margin: 1rem;
`;

export const SearchSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const InputTextStyled = styled.input.attrs(props => ({
  type: "text",
  size: "1em",
  placeholder: "Search"
}))`
  :focus {
      outline: none;
  };
  color: black;
  width: 30rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid black;
  border-radius: 3rem;
`;

export const ArtistSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 2rem;
`;

export const Image = styled.img`
  src: url(${props => props.src});
  height: 9rem;
  width: 9rem;
`;

export const ArtistTitle = styled.span`
  font-size: 3rem;
  font-weight: 600;
  margin: 1rem;
`;

export const AlbumSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem;
`;

export const AlbumItem = styled.div`
  height: 12.5rem;
  width: 9rem;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
  margin-bottom: 1.3rem;
`;

export const AlbumImage = styled.img.attrs(props => ({
    src: props.src
  }))`  
  transition: width 2s;
  width: ${props => props.animate ? "20px" : "10px"};
  height: auto;
  width: 9rem;
  -webkit-animation: fadein 1s;
       -moz-animation: fadein 1s; 
        -ms-animation: fadein 1s; 
         -o-animation: fadein 1s;
            animation: fadein 1s;
  
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @-moz-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }
  @-webkit-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }
  @-ms-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }
`;


export const AlbumTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  overflow: hidden;
  ${'' /* white-space: nowrap; */}
  text-overflow: ellipsis;
  margin: 0;
`;

export const AlbumNotFound = styled.p`
  font-size: 2rem;
  font-weight: 600;
  margin: 2rem;
  text-align: center;
`;