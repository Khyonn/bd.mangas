import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Fragment } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdMonitor, MdOutlineMenu, MdOutlineMenuOpen } from "react-icons/md";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { toggleSidebar } from "../../../store/ui/actions";
import { selectIsSidebarOpen } from "../../../store/ui/selectors";
import { setTheme } from "../../shared/utils/theme";

const themes = [
  {
    id: "light",
    label: "Light",
    handleClick: () => setTheme("light"),
    Icon: RiSunLine,
    value: "light",
  },
  {
    id: "dark",
    label: "Dark",
    handleClick: () => setTheme("dark"),
    Icon: RiMoonClearLine,
    value: "dark",
  },
  {
    id: "system",
    label: "System",
    handleClick: () => setTheme(),
    Icon: MdMonitor,
    value: undefined,
  },
] as const;

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector(selectIsSidebarOpen);

  return (
    <nav className="h-16 px-4 bg-ovh-500 dark:bg-ovh-dark text-ovh-50 dark:text-ovh-75 flex items-center">
      <div className="flex">
        <button
          id="sidebar_toggler"
          aria-haspopup="menu"
          aria-expanded={isSidebarOpen}
          aria-controls="sidebar"
          className="flex justify-center items-center h-8 w-8 rounded-full border-2 text-lg mr-4 border-ovh-50 lg:hidden"
          onClick={() => dispatch(toggleSidebar())}
        >
          {isSidebarOpen ? (
            <MdOutlineMenuOpen aria-hidden="true" />
          ) : (
            <MdOutlineMenu aria-hidden="true" />
          )}
          <span className="sr-only">Toggle navbar menu</span>
        </button>
        <Link to="/" className="flex items-center font-medium">
          <SiRedux className="h-8 w-8 mr-2" aria-hidden="true" />
          BD.MANGAS
          <span className="sr-only">Home page</span>
        </Link>
      </div>
      <div className="flex grow justify-end space-x-3">
        <Menu as="div" className="relative inline-flex">
          <Menu.Button className="text-2xl rounded-full h-8 w-8 flex items-center justify-center">
            <RiMoonClearLine aria-hidden="true" />
            <span className="sr-only">Open theme menu</span>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-50"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-50"
          >
            <Menu.Items className="absolute right-0 w-40 top-10 origin-top-right bg-ovh-400 dark:bg-ovh-dark rounded-md dark:border dark:border-ovh-400 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1">
                {themes.map(({ Icon, ...theme }) => (
                  <Menu.Item key={theme.id}>
                    {({ active }) => (
                      <button
                        onClick={theme.handleClick}
                        className={classNames(
                          "group flex rounded-md items-center w-full px-2 py-2 text-sm font-semibold",
                          {
                            "bg-ovh-300 text-ovh-dark dark:bg-ovh-lightdark dark:text-white":
                              active,
                          }
                        )}
                      >
                        <Icon className="mr-4" />
                        {theme.label}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <button className="h-8 w-8 rounded-full text-2xl flex items-center justify-center">
          <FaRegUserCircle aria-hidden="true" />
          <span className="sr-only">Open user menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
