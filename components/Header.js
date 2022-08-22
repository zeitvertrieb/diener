import Link from 'next/link';
import PicspaceLink from '../components/PicspaceLink';
import Brand from '../components/Brand'

export default function Header({ name }) {
  return (
    <header className="flex justify-between w-full px-4 py-4 lg:px-8 bg-gradient-to-b from-white dark:from-gray-900">
      <div className="w-40 h-auto block">
        <Link href="/">
          <a>
            <Brand />
            <span className="mx-3">{name}</span>
          </a>
        </Link>
      </div>
      <PicspaceLink />
    </header>
  );
}
