// import { useDispatch, useSelector } from "react-redux";
// import type { AppDispatch, RootState } from "../../Store/Store";
// import { useEffect } from "react";
// import { fetchUsers } from "./UserSlice";
// export interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
// }

// function Users() {
//   const dispatch = useDispatch<AppDispatch>();
//   const { user, loading, error } = useSelector(
//     (state: RootState) => state.users
//   );
//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);
//   // “When the Users component first loads, run dispatch(fetchUsers())
//   //  one time to fetch user data. If dispatch ever changed (which it won’t), run it again.”
//   return (
//     <>
//       <div>Users</div>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       {!loading && user && (
//         <ul>
//           {user.map((u: User) => (
//             <li key={u.id}>{u.name}</li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// }

// export default Users;
