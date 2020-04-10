import { SuggestionsSearch } from "./SearchStyle";

const Suggestions = (props) => {
  return (
    <SuggestionsSearch>
      {props.results.map(({ name }, index) => (
        <li key={index + 1} onClick={e => props.searchArtists(props.textSearch, e)}>
          <p className="mt-6px bg-none tx-darkgrey fn-s14px ln-h19px tx-dn">
            {name}
          </p>
        </li>
      ))}
    </SuggestionsSearch>
  );
};

export default Suggestions;
