
import { Outlet } from 'react-router-dom'
import Card from '../components/Card'
import { useEffect, useState } from 'react'
import {  collection, getDocs} from 'firebase/firestore';
import { database } from '../services/firebase';


export interface IDoctor {
     firstanme: string; 
     lastname:string ; 
     daily_rate: number; 
     work_days: number
}
const HomeLayout = () => {
     
     const [ highestPrestation , setHighestPrestation] = useState<number>()
     const [ lowestPrestation , setLowestPrestation] = useState<number>()
     const [ TotalPrestation , setTotalPrestation] = useState<number>()
     const medecinRef =   collection(database, 'Medecin')

     async function fetchHighestAndLowestPrestation() {
          const querySnapshot = await getDocs(medecinRef);
         
          let highestEarnings = 0;
          let total = 0;
          let lowestEarnings = Number.POSITIVE_INFINITY;
          let highestEarningsDoctor: IDoctor | null = null;
          console.log(querySnapshot.docs)
          querySnapshot.docs.map(doc => {
             
              const doctor = doc.data() as IDoctor
              const earnings = doctor.daily_rate * doctor.work_days;
              total += earnings
              if(earnings < lowestEarnings){
                  lowestEarnings = earnings;

              }
              if (earnings > highestEarnings) {
                highestEarnings = earnings;

                highestEarningsDoctor = doctor;
              }

          })
          if(highestEarningsDoctor){
               setHighestPrestation(highestEarnings)
          }
          if(lowestEarnings){
               setLowestPrestation(lowestEarnings)
          }
          if(total){
               setTotalPrestation(total) 
          }
          
     }

     useEffect(() => {
           const fetchHghest = async () => {
              await fetchHighestAndLowestPrestation()
           }
           void fetchHghest()
          
     },[])

  return (
    <div className='home'>
        <div className='home-left'>
            
        </div>
        <div className='home-main'>
             <Outlet/>
        </div>
         <aside className='home-aside'>
              <Card  title='Highest prestation' amount={highestPrestation!} className='amount amount_high'/>
              <Card  title='Lowest prestation' amount={lowestPrestation!} className='amount amount_low'/>
              <Card  title='Total prestation' amount={TotalPrestation!} className='amount amount_total'/>
         </aside>
    </div>
  )
}

export default HomeLayout