import  { useEffect, useState } from 'react'
import CampaignsTable from '../tables/campaignsTable/CampaignsTable'
import TableHeader from '../../ui/tableHeader';
import CampinsDeleteModal from '../modals/campinsDeleteModal/CampinsDeleteModal';
import { useCampinstStore } from '../../store/campaignsStore';
import CampinsModal from '../modals/campinsModal';
import Pagination from '../pagination/pagination';

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
