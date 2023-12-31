import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 border-b">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-4">
            <Link className="block" href="/">
              <Image
                src="/logo.svg"
                alt="quickshare logo"
                width={40}
                height={40}
              />
            </Link>
            <Link href="/">
              <h2 className="md:block text-primary sm:font-bold text-lg  md:text-4xl tracking-wider">
                QuickShare
              </h2>
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 font-bold tracking-wide"
                    href="/"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 font-bold tracking-wide"
                    href="/sign-in"
                  >
                    Upload
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/7 font-bold tracking-wide"
                    href="/"
                  >
                    About us
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 font-bold tracking-wide"
                    href="/"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
              href="/sign-in"
            >
              Getting Started
            </Link>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
