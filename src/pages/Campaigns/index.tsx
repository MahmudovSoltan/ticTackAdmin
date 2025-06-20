
import Header from '../../components/Layout/header/Header'
import Sidebar from '../../components/Layout/sidebar'

import './css/compaings.css'
import CampaignsBody from '../../components/campaigns/CampaignsBody'


const Campaigns = () => {
  return (
 <div >
      <Header />
      <div className="campaigns_content container">
        <Sidebar />
        <CampaignsBody/>
      </div>
    </div>
  )
}

export default Campaigns