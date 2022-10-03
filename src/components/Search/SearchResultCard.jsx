export default function SearchResultCard({ pokemon, infiniteScrollRef }) {
  return <li ref={infiniteScrollRef}>
    {pokemon.pokemon}
  </li>;
}
