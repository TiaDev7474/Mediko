
import  { useEffect, useState } from 'react'
import {collection, getDocs } from 'firebase/firestore';
import  {database} from '../services/firebase';
import TableView from '../components/TableView';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export type IDoctor = {
    firstname:string,
    lastname: string,
    work_days:number,
    daily_rate:number,
    id:string,
}

const ListView = () => {
    const [doctorList, setDoctorList] = useState<IDoctor[] | null >(null);
    useEffect(() =>{
         const getMedicinDocs = async ():Promise<void> =>{
              const data = await getDocs(collection(database,"Medecin"));
              setDoctorList(data.docs.map((doc) => ({...doc.data(),id:doc.id} as IDoctor))) 
         };
        void getMedicinDocs();
    },[])
  return (
    <div className='section-list'>
        <div className='section-header'>
            <h2 className='title'>Doctors</h2>
        </div>
        <div className='filter'>
             <span className='filter-btn'>
                    <FontAwesomeIcon icon={faSliders} />
             </span>
        </div>
          <TableView doctorList={doctorList} />
    </div>
  )
}

export default ListView