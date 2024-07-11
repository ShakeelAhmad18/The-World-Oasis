import { useQuery } from "@tanstack/react-query";
import { getCobin } from "../../services/apiCabin";

export function useCabin(){
    const {
        data,isLoading
      
       } = useQuery({
          queryKey:['cabins'],
          queryFn: getCobin
        })

    return {data,isLoading}
}