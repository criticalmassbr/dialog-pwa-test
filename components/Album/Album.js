import * as GridStyle from "~/styles/Grid";
import * as Style from './AlbumStyle';

const Album = ({albumProps}) => {
  const {
    name,
    image
  } = albumProps;

  return (
    <>
      <Style.CardAlbum>
        <GridStyle.Row>
          <GridStyle.Col
            mobile={12}
          >
            <img
              src={image}
              className="album-sprite"
            />
          </GridStyle.Col>

          <GridStyle.Col
            mobile={12}
          >
            <p className="has-text-centered">
              {name}
            </p>
          </GridStyle.Col>
        </GridStyle.Row>
      </Style.CardAlbum>
    </>
  )
};

export default Album;