import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
} from "@material-tailwind/react";
import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { setPublicKey } from "../features/userSlice";
import { collapseAddress } from "../core/utils";

import kit from "../core/stellar-wallets-kit";

const Header: FC = () => {
  const [openNav, setOpenNav] = useState(false);
  const publicKey = useSelector(
    (state: RootState) => state.user.connectionState.publicKey
  );
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const openWallet = async () => {
    try {
      await kit.openModal({
        onWalletSelected: async (option) => {
          try {
            kit.setWallet(option.id);
            const { address } = await kit.getAddress();
            dispatch(setPublicKey({ publicKey: address }));
          } catch (e) {
            console.error(e);
          }
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <li
        className="p-1 font-normal text-blue-500"
      >
        <Link to="/" className="block antialiased font-sans items-center text-xl text-custom-blue ">
          Home
        </Link>
      </li>
      <li
        className="p-1 font-normal text-blue-500"
      >
        <Link to="/newresearch" className="block antialiased font-sans items-center text-xl text-custom-blue ">
          New Research
        </Link>
      </li>
      <li
        className="p-1 font-normal text-blue-500"
      >
        <Link to="/myresearch" className="block antialiased font-sans items-center text-xl text-custom-blue">
          My Research
        </Link>
      </li>
    </ul>
  );

  return (
    <div className="max-h-[768px] w-[calc(100%+48px)]">
      <nav className="block w-full shadow-md backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border border-white/80 bg-white text-white sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="mr-4 cursor-pointer py-1.5 font-medium">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="logo" width="40px" height="40px" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {!publicKey ? (
                <button
                  className="font-sans hidden lg:inline-block btn-lowercase !border-none focus:outline-none bg-blue-400 text-gray-100"
                  onClick={() => {
                    openWallet();
                  }}
                >
                  <span className="text-xl">Sign in</span>
                </button>
              ) : (
                <button
                  className="font-sans hidden lg:inline-block btn-lowercase !border-none focus:outline-none bg-blue-400 text-gray-100"
                >
                  <span>{collapseAddress(publicKey)}</span>
                </button>
              )}
            </div>
            <button
              className="relative h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="absolute h-6 w-6 left-2 top-0"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute h-6 w-6 left-2 top-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            {!publicKey ? (
              <button
                className="font-sans hidden lg:inline-block btn-lowercase !border-none focus:outline-none bg-blue-400 text-gray-100"
                onClick={() => {
                  openWallet();
                }}
              >
                <span>Sign in</span>
              </button>
            ) : (
              <button className="font-sans hidden lg:inline-block btn-lowercase !border-none focus:outline-none bg-blue-400 text-gray-100">
                <span>{collapseAddress(publicKey)}</span>
              </button>
            )}
          </div>
        </Collapse>
      </nav>
    </div>
  );
};

export default Header;
