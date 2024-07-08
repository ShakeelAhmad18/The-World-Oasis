import supabase from "./supabase";

export async function getCobin(){
    let { data: cobins, error } = await supabase
  .from('cobins')
  .select('*')

  if(error){
     console.log(error)
     throw new Error('Cobin does not load')
  }
  
  return cobins

}
          