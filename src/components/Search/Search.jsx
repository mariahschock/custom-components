/* eslint-disable max-len */
import SearchForm from './SearchForm.jsx';
import SearchResults from './SearchResults.jsx';
import useSearchResults from '../../hooks/use-search-results.js';
import { FormButton } from '../FormControls/FormControl.jsx';

export default function Search() {
  const {
    infiniteScrollRef,
    nextPage,
    pokemon,
    setPokemon,
    searchResults,
    searchPokedex,
  } = useSearchResults();
  return <section>
    <SearchForm pokemon={pokemon} setPokemon={setPokemon} onSubmit={searchPokedex} />
    <SearchResults results={searchResults} infiniteScrollRef={infiniteScrollRef}/>
    <FormButton onClick={nextPage}>More</FormButton>
  </section>;
}
