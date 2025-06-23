import { useShallow } from "zustand/shallow";
import { useUserStore } from "../../store/userStore";

import UsersTables from "../tables/userTables";
import { useEffect } from "react";




const UsersBody = () => {
    const { users,fetchUsers } = useUserStore(
        useShallow((state) => ({
            users: state.users,
            fetchUsers: state.fetchUsers,
        }))
    );

    useEffect(()=>{
        fetchUsers()
    },[])
    
    return (
        <div className="users_body">
            <p>İstifadəçilər</p>
            <UsersTables customers={users} />
        </div>
    )
}

export default UsersBody
