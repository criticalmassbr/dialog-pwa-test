import React from 'react';

interface HeaderProps {
  search: string;
  setSearch(value: React.SetStateAction<string>): void;
}

const Header: React.FC<HeaderProps> = ({ search, setSearch }) => {
  return (
    <header>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </header>
  );
};

export default Header;
