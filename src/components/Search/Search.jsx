/* eslint-disable max-len */
import { useState } from 'react';
import SearchForm from './SearchForm';
import { FormButton } from '../FormControls/FormControl';
import { useLocation } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import { pokemonGetAll } from '../../services/pokedex';

export default function Search() {
  const { search } = useLocation();
  const query = new URLSearchParams(search, [search]);
  const type = query.get('type');
  console.log('type', type);
  const searchText = query.get('searchText');
  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [formData, setFormData] = useState(null);
  const onSubmit = async (searchFormData) => {
    setPage(1);
    setFormData(searchFormData);
    const pokemonResults = await pokemonGetAll(1, searchFormData);
    setSearchResults(pokemonResults.results);
  };
  const more = async () => {
    setPage(page + 1);
    const pokemonResults = await pokemonGetAll(page + 1, formData);
    setSearchResults(searchResults.concat(pokemonResults.results));
  };
  return <section>
    <SearchForm type={type} searchText={searchText} onSubmit={onSubmit} />
    <ul>
      {searchResults.map(result => {
        return <li key={result._id} >
          <PokemonCard pokemon={result} />
        </li>;
      })}
    </ul>    <FormButton onClick={more}>More</FormButton>
  </section>;
}
