import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORM } from "../constants";
import apiClient from "../services/apiClient";
import { FetchResponse } from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}
const usePlatform = () => useQuery({
    queryKey: CACHE_KEY_PLATFORM,
    queryFn: () =>
            apiClient
                .get<FetchResponse<Platform>>('/platforms')
                .then(res => res.data),
                staleTime: 24* 60* 60* 1000,
})
export default usePlatform