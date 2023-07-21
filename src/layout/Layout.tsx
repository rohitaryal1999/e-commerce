import { FC, useState } from "react";
import clsx from "clsx";
import Svg from "@src/components/Svg";
import T from "@src/components/T";

import Image from "next/image";
import { useRouter } from "next/router";
import brand from "@public/images/brand.png";
import Link, { useNavigation } from "@components/Link";
import { useIsMobile } from "@src/utils/utils";

const HeaderNavigations = [
  { label: "Home", url: "/" },
  { label: "About us", url: "/team" },
  { label: "Services", url: "/services" },
  { label: "Contact Us", url: "/contactUs" },
];

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigation();
  const router = useRouter();
  const isMobile = useIsMobile();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div>
      <header className="sticky top-0 z-10 mx-auto flex justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-stone-800">
        <Link
          href="/"
          className={clsx(
            "ml-3 flex h-full w-fit items-center rounded py-5",
            isMobile ? "px-1" : "px-3"
          )}
        >
          <Image
            alt="logo"
            src={brand}
            width={150}
            height={40}
            layout="fixed"
            priority
          />
        </Link>
        {isMobile ? (
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center justify-center"
          >
            {showMenu ? (
              <Svg id="cross" className="stroke-white" viewBox="0 0 32 32" />
            ) : (
              <Svg id="menu" className="stroke-white" viewBox="0 0 32 32" />
            )}
          </button>
        ) : (
          <div className="flex w-1/2 items-center justify-between pr-4">
            {HeaderNavigations.map((n) => (
              <div role="button" tabIndex={0} onClick={() => navigate(n.url)}>
                <T
                  type="p16"
                  className={`relative text-white ${
                    router.asPath === n.url
                      ? "after:absolute after:-bottom-[3px] after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-white"
                      : ""
                  }`}
                >
                  {n.label}
                </T>
              </div>
            ))}
          </div>
        )}
      </header>
      <main className="scrollbar min-h-screen self-start overflow-y-auto">
        {children}
      </main>
      <footer className="bg-accent-blue p-8">
        <div className="mx-auto max-w-screen-xl text-white">A footer</div>
      </footer>
    </div>
  );
};

export default Layout;
