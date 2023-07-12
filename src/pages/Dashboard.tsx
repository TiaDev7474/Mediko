
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';




const Dashboard = () => {
    
  return (
    <div className='dashboard'>
           <header className='dashboard-header'>
                <Header/>
           </header>
          
           <main className='dashboard-main'>
                <Outlet/>
           </main>  
    </div>
  )
}

export default Dashboard