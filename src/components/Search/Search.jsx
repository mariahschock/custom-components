/* eslint-disable max-len */
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import useSearchResults from '../../hooks/use-search-results';
import { FormButton } from '../FormControls/FormControl';

export default function Search() {
  const {
    infiniteScrollRef,
    nextPage,
    pokemon,
    setPokemon,
    searchParams,
    SearchResults,
    searchPokedex,
  } = useSearchResults();
  return <section>
    <SearchForm pokemon={pokemon} setPokemon={setPokemon} onSubmit={searchPokedex} />
    <SearchResults results={SearchResults} infiniteScrollRef={infiniteScrollRef} />
    <FormButton onClick={nextPage}>More</FormButton>
  </section>;
}
