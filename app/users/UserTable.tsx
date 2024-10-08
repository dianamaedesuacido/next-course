// "use client";
// import Link from "next/link";
// import React from "react";
// import { sort } from "fast-sort";

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// interface Props {
//   sortOrder: string;
// }
// const UserTable = async ({ sortOrder }: Props) => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/users",
//     // { next: { revalidate: 10 } }
//     { cache: "no-store" }
//   );
//   const users: User[] = await res.json();

//   const sortedUsers = sort(users).asc(
//     sortOrder === "email" ? (user) => user.email : (user) => user.name
//   );
//   return (
//     <table className="table table-bordered">
//       <thead>
//         <tr>
//           <th>
//             <Link href="/users?sortOrder=name">Name</Link>
//           </th>
//           <th>
//             <Link href="/users?sortOrder=email">Email</Link>
//           </th>
//         </tr>
//       </thead>
//       <tbody>
//         {/* {sortedUsers.map((user) => (
//           <tr key={user.id}>
//             <td>{user.name}</td>
//             <td>{user.email}</td>
//           </tr>
//         ))} */}
//       </tbody>
//     </table>
//   );
// };

// export default UserTable;

import { sort } from "fast-sort";
import UserTableClient from "./UserTableClient"; // Client component

interface User {
  id: number;
  name: string;
  email: string;
  emailVerified: Date;
  hashedPassword: string;
  image: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("http://localhost:3000/api/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );

  return <UserTableClient users={sortedUsers} />;
};

export default UserTable;
