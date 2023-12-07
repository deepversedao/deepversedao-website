import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const buttonStyle = {
    fontFamily: 'urbanist, sans-serif',
    backgroundColor: '#7684FF',
    color: '#FFFFFF',
    fontWeight: 'bold',
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    cursor: 'pointer',
  };

  const linkStyle = {
    fontFamily: 'urbanist, sans-serif',
    color: '#FFFFFF',
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-4 px-2 absolute z-auto top-0 right-0 left-0" style={{ backgroundColor: 'transparent', color: '#fff', padding: '1rem 2rem' }}>
      <div className='px-4'>
        <Link href="/">
          <Image src="/deepverse.svg" alt="Deepverse Logo" width={100} height={50} />
        </Link>
      </div>
      <div className="lg:hidden absolute top-0 right-0 mt-4 mr-4 z-50">
        <button className="text-white" onClick={toggleSidebar}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {showSidebar ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      <div className={`lg:flex lg:items-center lg:space-x-16 ${showSidebar ? 'block' : 'hidden'}`}>
        <div className="lg:flex lg:space-x-16 lg:items-center">
          <Link href="/resources" style={linkStyle}>
            Resources
          </Link>
          <Link href="/about" style={linkStyle}>
            About us
          </Link>
          <Link href="/Media" style={linkStyle}>
            Media
          </Link>
          <Link href="https://discord.gg/vH6rMR5VEB">
            <button className="lg:block hover:bg-pink-200 w-36 h-8 rounded-full flex items-center justify-center" style={buttonStyle}>
              Join Discord
            </button>
          </Link>
        </div>
      </div>
      <div className={`lg:hidden fixed top-0 right-0 h-full w-full bg-black bg-opacity-50 z-10 ${showSidebar ? 'block' : 'hidden'}`} onClick={toggleSidebar}>
        <div className="p-4 flex flex-col space-y-4">
          <Link href="/resources" style={linkStyle}>
            Resources
          </Link>
          <Link href="/about" style={linkStyle}>
            About us
          </Link>
          <Link href="/Media" style={linkStyle}>
            Media
          </Link>
          <Link href="/join">
            Join us
          </Link>
        </div>
      </div>
    </nav>
  );
}
