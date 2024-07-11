import { useQuery } from "@tanstack/react-query";
import { getSettings } from '../../services/apiSetting'

export function useSetting(){
    
      const {isLoading,data:setting}=useQuery({
        queryKey:['setting'],
        queryFn: getSettings,
      })

      return {isLoading,setting}
}