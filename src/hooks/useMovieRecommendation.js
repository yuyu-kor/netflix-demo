import api from "../utils/api";
import { useQuery } from "@tanstack/react-query";

export const useMovieRecommendation = (movieId) => {
  return useQuery({
    queryKey: ["movie-recommendation", movieId],
    queryFn: () => api.get(`/movie/${movieId}/recommendations`),
    select: (result) => result.data,
  });
};
