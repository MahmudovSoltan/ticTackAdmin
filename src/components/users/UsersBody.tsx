import { useShallow } from "zustand/shallow";
import { useUserStore } from "../../store/userStore";

import UsersTables from "../tables/userTables";
import { useEffect, useState } from "react";
import Pagination from "../pagination/pagination";




const UsersBody = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;
    const { users, fetchUsers } = useUserStore(
        useShallow((state) => ({
            users: state.users,
            fetchUsers: state.fetchUsers,
        }))
    );

    useEffect(() => {
        fetchUsers()
    }, [])



    const offset = currentPage * itemsPerPage;
    const currentItems = users.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(users.length / itemsPerPage);

    const handlePageChange = ({ selected }: { selected: number }) => {
        setCurrentPage(selected);
    };
    return (
        <div className="users_body">
            <p>İstifadəçilər</p>
            <UsersTables customers={currentItems} />
            <Pagination onPageChange={handlePageChange} pageCount={pageCount} forcePage={currentPage} />
        </div>
    )
}

export default UsersBody
