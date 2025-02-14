'use client';

import Link from 'next/link';

const Nav = () => {
  return (
    <div className="group nav-parent fixed z-50 flex items-center justify-center top-[66px] left-6">
        <span className='relative left-[18px]'>Menu</span>
       
        <div className='w-max nav-items'>
            <Link href="/seventysixth">
            <span className="absolute z-1 rotate-90 origin-center w-fit h-fit">Back to home</span>
            </Link>
            <Link href="/seventyeighth">
                <span className="relative z-1">Six degrees of separation</span>
            </Link>
        </div>
    </div>
  );
};

export default Nav;
