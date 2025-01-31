import { useQuery } from "react-query";
import tmdb from "./tmdb";

export const useGetPopularMovies = (page = 1) =>
  useQuery(
    ["getPopularMovies", page],
    async () => {
      const { data } = await tmdb.get(`/movie/popular`, {
        params: {
          page,
        },
      });
      return data;
    },
    {
      keepPreviousData: true,
    }
  );
