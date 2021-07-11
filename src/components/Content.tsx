import { GenreResponseProps, MovieProps } from "../App";
import { MovieCard } from "./MovieCard";
import { ContentHeader } from './ContentHeader';

interface ContentProps {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
}

export function Content({movies, selectedGenre}: ContentProps) {
  return (
    <>
      <ContentHeader title={selectedGenre.title}/>
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </>
  );
}