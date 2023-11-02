import { FC } from 'react';
import Link from 'next/link';

interface Props {}

const Navbar: FC<Props> = (props): JSX.Element => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex">
        <Link href={'/'} className="btn btn-ghost normal-case text-xl">
          Flix Finder
        </Link>
      </div>
      <div className="flex-none">
        <button type="submit" className="btn btn-square btn-ghost">
          <Link href="/movies">Movies</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
