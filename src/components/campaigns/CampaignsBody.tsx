import React from 'react'
import CampaignsHeader from './CampaignsHeader'
import CampaignsTable from '../tables/campaignsTable/CampaignsTable'
import TableHeader from '../../ui/tableHeader';
import CampinsDeleteModal from '../modals/campinsDeleteModal/CampinsDeleteModal';
import { useCampinstStore } from '../../store/campaignsStore';
import CampinsModal from '../modals/campinsModal';
const products: any[] = [
  {
    no: 1,
    date: "2025-06-19",
    desc: "Alma",
    content: "Qırmızı alma, təzə və şirin",
  },
  {
    no: 2,
    date: "2025-06-18",
    desc: "Pomidor",
    content: "Təbii yetişmiş pomidor, salatlar üçün",
  },
  {
    no: 3,
    date: "2025-06-17",
    desc: "Xiyar",
    content: "Uzun xiyar, sərin və təzə",
  },
  {
    no: 4,
    date: "2025-06-16",
    desc: "Banan",
    content: "Rəngli sarı banan, enerjili qəlyanaltı",
  },
  {
    no: 5,
    date: "2025-06-15",
    desc: "Kök",
    content: "Təzə kök, şirəli və sağlam",
  },
];
const CampaignsBody = () => {
  const {deleteModal,campingsModal,openCampingsModal}= useCampinstStore()
  return (
    <div className='campaings_body'>
      <TableHeader title="Kampaniyalar" onClick={openCampingsModal} />
      <CampaignsTable product={products} />
      {
        campingsModal && <CampinsModal />
      }
      {deleteModal && <CampinsDeleteModal />}
    </div>
  )
}

export default CampaignsBody
