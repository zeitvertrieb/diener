import Link from 'next/link';
import Image from 'next/image'
import PicspaceLink from '../components/PicspaceLink';
import logo from '../public/logo.svg'

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="w-40 h-auto block mx-auto mb-2">
        <Link href="/">
          <a>
            <Image
              alt="Agentur Diener"
              src={logo}
              layout="responsive"
              width={200}
              height={100}
            />
          </a>
        </Link>
      </div>
      <p className="text-lg dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
      <PicspaceLink />
    </header>
  );
}
