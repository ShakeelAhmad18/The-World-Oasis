import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin as createCabinApi } from "../../services/apiCabin";
import toast from "react-hot-toast";

export function useCreateCabin(){

    const queryClient=useQueryClient()

    const {mutate:createCabin,isLoading:isCreating}=useMutation({
        mutationFn:(cabin)=>createCabinApi(cabin),
        onSuccess:()=>{
          toast.success('Cabin Successfully Created')
          queryClient.invalidateQueries({
            queryKey:['cabins']});
        },
        onError:(err)=>toast.error(err.message)
      })

      return {createCabin,isCreating}
}