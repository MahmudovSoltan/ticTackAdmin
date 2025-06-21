import ReactPaginate from "react-paginate";
import "./pagination.css";

interface PaginationProps {
  pageCount: number;
  onPageChange: (selected: { selected: number }) => void;
  forcePage?: number;
}

const Pagination = ({ pageCount, onPageChange, forcePage }: PaginationProps) => {
  return (
    <ReactPaginate
      previousLabel={"⬅"}
      nextLabel={"➡"}
      breakLabel={"..."}
      pageCount={pageCount}
      onPageChange={onPageChange}
      forcePage={forcePage}
      containerClassName="pagination-container"
      activeClassName="active-page"
    />
  );
};

export default Pagination;
