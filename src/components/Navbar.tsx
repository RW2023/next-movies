import { FC } from 'react';
import Link from 'next/link';

interface Props {}

const Navbar: FC<Props> = (props): JSX.Element => {
  return (
    <div className="navbar bg-tertiary border fixed top-0 w-full z-50">
      <div className="flex">
        <Link href={'/'} className="btn btn-ghost normal-case text-2xl">
          Flix Finder
        </Link>
      </div>
      <div className="flex-none">
        <button type="submit" className="btn btn-square btn-ghost text-xl">
          <Link href="/movies">Movies</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

