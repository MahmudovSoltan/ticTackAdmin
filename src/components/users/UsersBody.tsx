import { useShallow } from "zustand/shallow";
import { useUserStore } from "../../store/userStore";
import TableHeader from "../../ui/tableHeader";
import UsersTables from "../tables/userTables";
import { useEffect } from "react";

const customers = [
    {
        id: 1,
        full_name: "John Doe",
        phone: "+994516667766",
        address: "Bakı, Nərimanov",
        img_url: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        id: 2,
        full_name: "Aysel Məmmədova",
        phone: "+994505555555",
        address: "Gəncə, Nizami",
        img_url: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        id: 3,
        full_name: "Elvin Rzayev",
        phone: "+994701234567",
        address: null,
        img_url: null,
    },
    {
        id: 4,
        full_name: "Leyla Abbasova",
        phone: "+994553334455",
        address: "Sumqayıt, 9-cu mikrorayon",
        img_url: "https://randomuser.me/api/portraits/women/3.jpg",
    },
];


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
