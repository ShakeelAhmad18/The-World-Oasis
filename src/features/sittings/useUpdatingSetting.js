import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSetting";
import toast from "react-hot-toast";

export function useUpdatingSetting(){
    const queryClient=useQueryClient()
    const {mutate:updateSetting,isLoading:isUpdating}=useMutation({
        mutationFn:updateSettingApi,
        onSuccess:()=>{
            toast.success("Cabin Successfully updating");
            queryClient.invalidateQueries({
                queryKey:['setting']
            });
        },
        onError:(err)=>toast.error(err.message)
    })

    return {updateSetting,isUpdating}
}