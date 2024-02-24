import React, {useState, useEffect} from 'react';
import UserCard from '../../components/userCard/userCard';
import api from '../../api';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/users/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching Users:", error);
      }
    };

    fetchUsers();
  }, [accessToken]);


  return (
  <div className="users-page">
    <h2>Всі користувачі</h2>
    {users.length > 0 ? (
      users.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          {...user}
        />
      ))
    ) : (
      <p>Користувачів не знайдено</p>
    )}
  </div>
)};

export default UsersPage;
