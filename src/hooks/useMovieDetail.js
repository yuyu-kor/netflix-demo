import api from "../utils/api";
import { useQuery } from "@tanstack/react-query";

const fetchMovieDetail = (movieId) => {
  return api.get(`/movie/${movieId}`);
};

export const useMovieDetailQuery = (movieId) => {
  return useQuery({
    queryKey: ["movie-detail", movieId],
    queryFn: () => fetchMovieDetail(movieId),
    select: (result) => result.data,
    enabled: !!movieId, // movieId가 undefined일 때 호출 안 하도록
  });
};
