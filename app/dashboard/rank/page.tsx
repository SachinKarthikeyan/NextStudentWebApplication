'use client'

import SideNav from '@/app/ui/dashboard/sidenav';
import Search from '@/app/ui/search';
import RankTable from '@/app/ui/dashboard/RankTable';
import userData from "../../../admin/user-data.json"

import { poppins } from '@/app/ui/fonts';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  const userRole = userData[0].role; 
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
        content={[
          { id: 1, col1: "1", col2: "Darwin Shaffer", col3: "Computer Science and Engineering", col4: "94 %" },
          { id: 2, col1: "2", col2: "Darwin Shaffer", col3: "Computer Science and Engineering", col4: "94 %" },
          { id: 3, col1: "3", col2: "Darwin Shaffer", col3: "Computer Science and Engineering", col4: "94 %" },
        ]}
        width="100%"
        height="auto"
      />

      </div>
      </div>
    </div>
  );
}