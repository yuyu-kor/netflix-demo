import api from "../utils/api";
import { useQuery } from "@tanstack/react-query";

export const useMovieReviews = (movieId) => {
  return useQuery({
    queryKey: ["movie-review", movieId],
    queryFn: () => api.get(`/movie/${movieId}/reviews`),
    select: (data) => data.data.results,
  });
};
