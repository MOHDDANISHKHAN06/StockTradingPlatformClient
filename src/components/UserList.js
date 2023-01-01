// import React, { useState, useEffect } from "react";
// import { UserService } from "../services/UserService";

// const UserList = () => {
//   /*const navigate = useNavigate();*/

//   const [loading, setLoading] = useState(true);
//   const [users, setUsers] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await new UserService().getUser();
//         setUsers(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, []);
//   return (
//     <table className="min-w-full">
//       <thead className="bg-gray-50">
//         <tr>
//           <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
//             Name
//           </th>
//           <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
//             Username
//           </th>
//           <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
//             Email ID
//           </th>
//           <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
//             Password
//           </th>
//         </tr>
//       </thead>
//       {!loading && (
//         <tbody className="bg-white">
//           {users.map((user) => (
//             <tr key={user.emailId}>
//               <td className="text-left px-6 py-4 whitespace-nowrap">
//                 <div className="text-sm text-gray-500">{user.emailId}</div>
//               </td>
//               <td className="text-left px-6 py-4 whitespace-nowrap">
//                 <div className="text-sm text-gray-500">{user.fullName}</div>
//               </td>
//               <td className="text-left px-6 py-4 whitespace-nowrap">
//                 <div className="text-sm text-gray-500">{user.userName}</div>
//               </td>
//               <td className="text-left px-6 py-4 whitespace-nowrap">
//                 <div className="text-sm text-gray-500">{user.password}</div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       )}
//     </table>
//   );
// };

// export default UserList;
