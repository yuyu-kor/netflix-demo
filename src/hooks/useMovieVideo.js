import api from "../utils/api";
import { useQuery } from "@tanstack/react-query";

const fetchMovieVideo = (movieId) => {
  return api.get(`/movie/${movieId}/videos`);
};

export const useMovieVideoQuery = (movieId) => {
  return useQuery({
    queryKey: ["movie-videos", movieId],
    queryFn: () => fetchMovieVideo(movieId),
    select: (data) =>
      data.data.results.find(
        (video) => video.site === "YouTube" && video.type === "Trailer"
      ), //첫 번째 예고편만 선택
  });
};
