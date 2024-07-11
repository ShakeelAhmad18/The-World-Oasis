import supabase from "./supabase";

export async function getSettings(){
    
let { data,error } = await supabase
.from('settings')
.select('*').single();
 
if(error){
    console.log(error)
    throw new Error('Setting could not be loaded')
}

return data;

}


export async function updateSetting(newSetting){
   
const { data, error } = await supabase
.from('settings')
.update(newSetting)
.eq('id', 1)
.single()
        
if(error){
    console.error(error.message)
    throw new Error('Setting could not ')
}

return data;

}