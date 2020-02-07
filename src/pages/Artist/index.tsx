import React from 'react';
import { useSelector } from 'react-redux';

import { ApplicationState } from '../../store';
import { IArtist } from '../../store/ducks/artists/types';

import Header from '../../components/Header';
import Search from '../../components/Search';
import DataArtist from '../../components/DataArtist';
import ListAlbuns from '../../components/ListAlbuns';

const Artist: React.FC = () => {
  const { data }: { data: IArtist | null } = useSelector(
    (state: ApplicationState) => state.artists,
  );

  return (
    <>
      <Header />
      <Search />
      {data && (
        <>
          <DataArtist data={data} />
          <ListAlbuns albums={data.albums} />{' '}
        </>
      )}
    </>
  );
};

export default Artist;
