import Link from 'next/link';
import { NavbarProps } from 'sanity';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';

const SanityNavBar = (props: NavbarProps) => {
  return (
    <div>
      <div className="flex p-5">
        <Link
          href="/api/exit-preview"
          className="font-bold flex items-center pl-4 pr-5 py-1 text-white"
        >
          <ArrowUturnLeftIcon className="h-4 mr-2 w-4" />
          Go to website
        </Link>
      </div>
      {props.renderDefault(props)}
    </div>
  );
};

export default SanityNavBar;
