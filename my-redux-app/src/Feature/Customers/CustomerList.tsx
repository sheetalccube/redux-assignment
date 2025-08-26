import { useGetUsersQuery } from "../Api/ApiSlice";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

function CustomerList() {
  const { data: users, error, isLoading } = useGetUsersQuery();
  return (
    <>
      <div>Users</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {JSON.stringify(error)}</p>}
      {!isLoading && users && (
        <ul>
          {users.map((u: User) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default CustomerList;
