'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search } from 'lucide-react';
import Image from 'next/image';
import FlagDropdown from '@/components/FlagDropdown';
import { navLinks } from '@/constant/constants';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <header className='headerMainWrapper gradient-background'>
      <div className='headerWrapper'>
        <div className='logoWrapper'>
          <Link href='#'><Image src="/images/logo.png" width={100} height={10} alt="Logo" /></Link>
        </div>
        <div className='menuWrapper mobile-hide'>
          <nav className="navBar">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  isActive(link.href)
                    ? 'nav-menu active'
                    : 'nav-menu'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className='searchLangWrapper'>
          {/* <div className='mobile-hide searchWrapper'>
            <Search className="searchBar" />
            <input
              type="text"
              placeholder="Search..."
              className="searchInput"
            />
          </div> */}
          <div className='LangWrapper'>
            <FlagDropdown />
          </div>
          {/* Hamburger Menu */}
          <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)} >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <div className='mobileHeaderWrapper'>
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-sm font-medium ${
                  isActive(link.href)
                    ? 'text-blue-600 underline underline-offset-4'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Search Input for Mobile */}
            <div className="flex items-center border rounded px-2 py-1 mt-2">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 outline-none text-sm w-full"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
