import { createContext, useState, ReactNode } from 'react';

interface SearchContextProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
interface SearchProviderProps {
  children: ReactNode;
}

const SearchContext = createContext<SearchContextProps>({
  search: '',
  setSearch: () => {
    undefined;
  },
  loading: false,
  setLoading: () => {
    undefined;
  },
});

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <SearchContext.Provider value={{ search, setSearch, loading, setLoading }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
