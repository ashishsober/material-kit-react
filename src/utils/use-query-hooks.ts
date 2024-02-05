import { useQuery } from "react-query";
import { getData } from "./http-service";

export const useCaseQueryData = (url: string, key: string) =>
    useQuery({
        queryKey: [key],
        queryFn: () => getData(`${url}`),
    });  