import React from "react";
import { UserService } from "../services/UserService";
import { useEffect } from "react";
import { useState } from "react";

const UsersList = () => {
  const [userList, setUserList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await new UserService().getAllUsers();
        setUserList(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <div className="bg-gray-800">
        <div className="h-16 px-8 flex items-center">
          <p className="text-white text-center font-bold font-center">
            List Of Users
          </p>
        </div>
      </div>
      <table className="min-w-full">
        <thead className="bg-gray-400">
          <tr>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Username
            </th>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Email ID
            </th>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
              Name
            </th>
          </tr>
        </thead>
        {!loading && (
          <tbody className="bg-white">
            {userList.map((userList) => (
              <tr key={userList.emailId}>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {userList.userName}
                  </div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {userList.emailId}
                  </div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {userList.fullName}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default UsersList;
