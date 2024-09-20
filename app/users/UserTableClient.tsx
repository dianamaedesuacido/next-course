"use client";
import Link from "next/link";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
  emailVerified: Date;
  hashedPassword: string;
  image: string;
}

interface Props {
  users: User[];
}

const UserTableClient = ({ users }: Props) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTableClient;
