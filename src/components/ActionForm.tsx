import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import InputForm from "./InputForm"

import { useNavigate } from "react-router-dom"
import {  useFormik } from "formik"
import * as Yup from 'yup'
import { addDoc, collection } from "firebase/firestore"
import { database } from "../services/firebase"



 export interface Values {
    firstName: string;
    lastName: string;
    work_days: number;
    daily_rate: number;
  }
// const initialsValues:Values = {
//     firstName: '',
//     lastName: '',
//     work_days: 0,
//     daily_rate: 0,
// }


export const ActionForm = () => {
  const navigate = useNavigate();

  const creatDoctorDoc =  async (value:Values) => {
        await addDoc(collection(database,"Medecin"), value)
  }
  const formik =  useFormik({
       initialValues: {
        firstName: '',
        lastName: '',
        work_days: 0,
        daily_rate: 0,
      
       },
       validationSchema:Yup.object({
          firstname: Yup.string().required('Required'),
          lastname: Yup.string().required('Required'),
          work_days:Yup.number().required('Required'),
          daily_rate:Yup.number().required('Required'),
    
          
       }),
       onSubmit: async(values:Values) =>{
             await creatDoctorDoc(values)
             setTimeout(() => {
                 navigate('/')
             },2000)
       }

  })





  return (

    <div className="form-container">
      <div className="section-title">
          <span  className='back-icon'onClick={ () => navigate('/')}>
              <FontAwesomeIcon icon={faArrowLeftLong} />
          </span>
          <h2 className="title">ADD DOCTOR</h2>
      </div>
      <form className="form" onSubmit={formik.handleSubmit}>
          {/* <div className="aside">
                <label className="file-input">
                      <img src='https://placehold.co/600x400'/>
                      <input type="file" style={{display:'none'}} />
                      <span className="camera">
                         <FontAwesomeIcon icon={faCamera}/>
                      </span>
                </label> 
                

          </div> */}
          <div>
               <InputForm 
                    type="text" 
                    label="Fistname" 
                    htmlFor="firstname" 
                    placeholder="Enter your firstname"
                    formik={formik}
                />
                 <InputForm 
                    type="text" 
                    label="Lastname" 
                    htmlFor="lastname" 
                    placeholder="Enter your lastname"
                    formik={formik}
                />
                <InputForm 
                    type="text" 
                    label="Work's days" 
                    htmlFor="work_days" 
                    placeholder="Enter the number of work's days"
                    formik={formik}
                />
                 <InputForm 
                    type="text" 
                    label="Daily Rate" 
                    htmlFor="daily_rate" 
                    placeholder="Enter the number of work's days"
                    formik={formik}
                />
                <div className="form-btn">
                    <button type="submit"  className="btn btn_submit">Submit</button>
                    <a className="btn btn_cancel" onClick={ () => navigate('/')}>Cancel</a>
                </div>    
          </div>
         
      </form>
    </div>
  )
}
