
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div className='home'>
        <div className='home-left'>
            
        </div>
        <div className='home-main'>
             <Outlet/>
        </div>
         <aside className='home-aside'>
              Aside
         </aside>
    </div>
  )
}

export default HomeLayout