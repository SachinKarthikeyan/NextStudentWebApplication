import SideNav from '@/app/ui/dashboard/sidenav';
import Search from '@/app/ui/search';
import userData from "../../../admin/user-data.json"
import GetResultForm from '@/app/ui/dashboard/Form';

export default function Layout({ children }: { children: React.ReactNode }) {
  const userRole = userData[0].role; 
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
      <SideNav userRole={userRole} />
      </div>
      
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-0">
          <Search placeholder="Search" />
        </div>
      </div>
      <div className="flex ">
      <GetResultForm
        heading="Get Exam Result"
        description="Enter your details to get the result."
      />
      </div>
    </div>
  );
}
