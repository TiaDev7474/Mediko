
import { deleteDoc, doc } from 'firebase/firestore';
import { IDoctor } from '../layout/ListView';
import TableAcionBtn from './TableAcionBtn';
import TableHeader from './TableHeader';
import { database } from '../services/firebase';
import { useCallback } from 'react';

const tableHeader =[
  {
    title: 'Name'
  }, {
    title: 'Work\'s days'
  }, {
    title: 'Daily rate'
  }
  , {
    title: 'Prestation'
  }
  , {
    title: 'Actions'
  }
]
export interface DoctorListProps{
     doctorList:IDoctor[] | null
}
const TableView = ({ doctorList }: DoctorListProps) => {
   const handleDelete = useCallback(async (id:string) => {
    const doctorDocRef = doc(database, 'Medecin', id)
    await deleteDoc(doctorDocRef);
 },[]) 
  return (
   <div>
        <table className='table'>
                <thead className='table-header'>
                     {
                       tableHeader.map(item => (
                           <TableHeader title={item.title}/>
                       ))
                     }
                </thead>
                {doctorList && (
                    doctorList.map(item => (
                      <tbody className='table-body'>
                          <td className='table-data'>{item.firstname} {item.lastname}</td>
                          <td className='table-data'>{item.work_days} days</td>
                          <td className='table-data'>{item.daily_rate} Ar</td>
                          <td className='table-data'>{item.daily_rate * item.work_days} Ar</td>
                          <TableAcionBtn id={item.id} handleDelete={handleDelete}/>
                      </tbody>
                    ))
                )}
        </table>
   </div>
   
  )
}

export default TableView