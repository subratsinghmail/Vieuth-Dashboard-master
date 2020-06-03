import {GET_PROFILE,PROFILE_ERROR} from './types'
//Get Current Users Profile
export const getCurrentProfile=(formData,history)=>dispatch=>{
    dispatch({
        type:GET_PROFILE,
        payload:formData
    })
    history.push('/dashboard/profile')
}