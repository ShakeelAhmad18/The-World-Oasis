import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteCabins as deleteCabinsApi } from "../../services/apiCabin"
import toast from "react-hot-toast"

export function useDeleteCabin(){

    const queryClient=useQueryClient()

    const {isLoading,mutate:deleteCabins}=useMutation({
        mutationFn:(id)=>deleteCabinsApi(id),
        onSuccess:()=>{
          toast.success('cabin succesfully deleted')
          queryClient.invalidateQueries({
            queryKey:['cabins']
          })
        },
    
        onError:(err)=>toast.error(err.message)
      
      })
    
      return {isLoading,deleteCabins}
}
