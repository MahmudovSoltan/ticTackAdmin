import React, { useEffect, useState } from 'react'
import CampaignsHeader from './CampaignsHeader'
import CampaignsTable from '../tables/campaignsTable/CampaignsTable'
import TableHeader from '../../ui/tableHeader';
import CampinsDeleteModal from '../modals/campinsDeleteModal/CampinsDeleteModal';
import { useCampinstStore } from '../../store/campaignsStore';
import CampinsModal from '../modals/campinsModal';
import Pagination from '../pagination/pagination';
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
  const { deleteModal, campingsModal, openCampingsModal, campoings, fetchCampins } = useCampinstStore()
 const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

 

  const offset = currentPage * itemsPerPage;
  const currentItems = campoings.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(campoings.length / itemsPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };
  useEffect(() => {
    fetchCampins()
  }, [])
  return (
    <div className='campaings_body'>
      <TableHeader title="Kampaniyalar" onClick={openCampingsModal} />
      <CampaignsTable product={currentItems} />
      {
        campingsModal && <CampinsModal />
      }
      {deleteModal && <CampinsDeleteModal />}
      <Pagination onPageChange={handlePageChange} pageCount={pageCount} forcePage={currentPage} />
    </div>
  )
}

export default CampaignsBody
