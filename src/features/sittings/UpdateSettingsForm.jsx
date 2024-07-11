import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useSetting } from './useSetting';
import Spinner from '../../ui/Spinner'
import {useUpdatingSetting} from './useUpdatingSetting'

function UpdateSettingsForm() {

  const {isLoading,setting:{
    maxBookinglength,
    minBookinglength,
    maxGuestPerBooking,
    breakFastPrice,
  }={},}=useSetting()

const {updateSetting,isUpdating}=useUpdatingSetting()

  if(isLoading) return <Spinner/>

  function handleUpdating(e,field){
      const {value}=e.target;
      if(!value) return;
      updateSetting({[field]:value})
  }
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input disabled={isUpdating} type='number' id='min-nights' defaultValue={minBookinglength} onBlur={(e)=>handleUpdating(e,'minBookinglength')}/>
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input disabled={isUpdating} type='number' id='max-nights' defaultValue={maxBookinglength} onBlur={(e)=>handleUpdating(e,'maxBookinglength')}/>
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input disabled={isUpdating} type='number' id='max-guests' defaultValue={maxGuestPerBooking} onBlur={(e)=>handleUpdating(e,'maxGuestPerBooking')}/>
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input disabled={isUpdating} type='number' id='breakfast-price' defaultValue={breakFastPrice} onBlur={(e)=>handleUpdating(e,'breakFastPrice')}/>
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
