import api from "../utils/api";
import { useQuery } from "@tanstack/react-query";

const fetchSearchMovie = ({ keyword, page }) => {
  return keyword
    ? api.get(`search/movie?query=${keyword}&page=${page}`)
    : api.get(`/movie/popular?page=${page}`);
};

export const useSearchMovieQuery = ({ keyword, page }) => {
  return useQuery({
    queryKey: ["search-movie", keyword, page], //keyword에 따라 유니크한 이름 지정
    queryFn: () => fetchSearchMovie({ keyword, page }),
    select: (result) => result.data,
  });
};
