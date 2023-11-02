'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import userData from "../../../admin/user-data.json";

const links = [
  { name: 'Home', 
    href: '/dashboard', 
    icon: HomeIcon },
  {
    name: 'Department',
    href: '/dashboard/department',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Results', 
    href: '/dashboard/result', 
    icon: UserGroupIcon 
  },
  { name: 'Rank', 
    href: '/dashboard/rank', 
    icon: UserGroupIcon 
  }
];

interface NavLinksProps {
  userRole: string;
}

const userRole = userData[0].role; // Make sure you're using userData[0] for Department

export default function NavLinks({ userRole }: NavLinksProps) {
  const pathname = usePathname();
  const adminDepartmentLink = '/dashboard/department'; 
  const otherPageLink = '/dashboard/error'; 
  
  console.log('User Role:', userRole); // Add this line for debugging

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const linkHref = userRole === 'admin' ? adminDepartmentLink : otherPageLink;
        
        return (
          <Link
            key={link.name}
            href={linkHref}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-green-100 hover:text-green-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-green-100 text-green-600': pathname === linkHref,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
