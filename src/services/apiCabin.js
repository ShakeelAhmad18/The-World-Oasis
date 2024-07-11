import supabase, { supabaseUrl } from "./supabase";

export async function getCobin() {
  let { data: cobins, error } = await supabase
    .from('cobins')
    .select('*')

  if (error) {
    console.log(error)
    throw new Error('Cobin does not load')
  }

  return cobins

}


export async function deleteCabins(id) {


  const { data, error } = await supabase
    .from('cobins')
    .delete()
    .eq('id', id)


  if (error) {
    console.log(error)
    throw new Error('Cobin does not load')
  }

  return data;
}


export async function createCabin(newCabin) {
 //https://watjrxbhxvscproshfag.supabase.co/storage/v1/object/public/cabins-images/cabin_002.jpg
 const hasImagePath=newCabin.image?.startsWith?.(supabaseUrl)

  const imageName=`${Math.random()}-${newCabin.image.name}`.replaceAll("/","")

  const imagePath=hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`

  //create a cabin/edit

  const { data, error } = await supabase
    .from('cobins')
    .insert([{...newCabin, image:imagePath}])
    .select()

  
 if (error) {
    console.log(error)
    throw new Error('Cabin does not craeted')
  }
   

  //2.Upload image
   if(hasImagePath) return data;

  const { error:errorStrorage } = await supabase
  .storage
  .from('cabins-images')
  .upload(imageName,newCabin.image)
  
  //delete a cabin if there was an error while uploading a image

  if(errorStrorage){
    await supabase
    .from('cobins')
    .delete()
    .eq('id', data.id)

    console.error(errorStrorage);
    throw new Error('Cabin image does not upoaded')
  }


  console.log(data)

  return data;

}