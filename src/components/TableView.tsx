
import { IDoctor } from '../layout/ListView';


export interface DoctorListProps{
     doctorList:IDoctor[] | null
}
const TableView = ({ doctorList }: DoctorListProps) => {
  return (
   <div>
        <table>
                <thead>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Work's days</th>
                    <th>Daily rate</th>
                </thead>
                {doctorList && (
                    doctorList.map(item => (
                      <tbody>
                          <td>{item.firstname}</td>
                          <td>{item.lastname}</td>
                          <td>{item.work_days}</td>
                          <td>{item.daily_rate}</td>
                      </tbody>
                    ))
                )}
            </table>
   </div>
   
  )
}

export default TableView