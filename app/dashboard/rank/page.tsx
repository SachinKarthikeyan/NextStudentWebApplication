'use client'
import React, { useState, useEffect } from 'react';
import SideNav from '@/app/ui/dashboard/sidenav';
import Search from '@/app/ui/search';
import RankTable from '@/app/ui/dashboard/RankTable';
import userData from "../../../admin/user-data.json"

import { poppins } from '@/app/ui/fonts';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  const userRole = userData[0].role;
  const [data, setData] = useState([]);
  const columns = [
    { name: 'Serial Number', isNumeric: false },
    { name: 'Name', isNumeric: false },
    { name: 'College Name', isNumeric: false },
    { name: 'Percentage', isNumeric: true },
  ];

  useEffect(() => {
    fetch('your-database-endpoint')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
      <SideNav userRole={userRole} />
      </div>
      <div className=''>
        
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-0">
            <Search placeholder="Search" />
        </div>


      <div className="container mt-40">
      <RankTable
      heading="Ranking present here is for demo purposes"
      content={data}
      columns={columns}
      width="100%"
      height="auto"
    />

      </div>
      </div>
    </div>
  );
}