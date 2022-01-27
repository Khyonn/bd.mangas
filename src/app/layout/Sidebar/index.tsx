import classNames from "classnames";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { closeSidebar } from "../../../store/ui/actions";
import { selectIsSidebarOpen } from "../../../store/ui/selectors";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector(selectIsSidebarOpen);
  const { pathname, search } = useLocation();

  useEffect(() => {
    dispatch(closeSidebar());
  }, [pathname, search, dispatch]);

  return (
    <nav
      className={classNames(
        "px-2 pt-4 w-64 h-full fixed transition duration-300 -translate-x-full lg:transition-none lg:translate-x-0 lg:relative bg-ovh-500 dark:bg-ovh-dark text-ovh-50 dark:text-ovh-75 dark:border-r dark:border-r-ovh-100 dark:lg:border-r-0",
        { "translate-x-0": isSidebarOpen }
      )}
      id="sidebar"
      role="menu"
      aria-labelledby="sidebar_toggler"
    >
      <ul role="none" className="flex flex-col space-y-1 font-medium">
        <li role="none" className="flex">
          <Link
            role="menuitem"
            to="/mangas"
            className="p-2 grow rounded hover:bg-ovh-400 hover:text-white dark:hover:bg-ovh-lightdark"
          >
            Mangas
          </Link>
        </li>
        <li role="none" className="flex">
          <Link
            role="menuitem"
            to="/mangas"
            className="p-2 grow rounded hover:bg-ovh-400 hover:text-white dark:hover:bg-ovh-lightdark"
          >
            Auteurs
          </Link>
        </li>
        <li role="none" className="flex">
          <Link
            role="menuitem"
            to="/mangas"
            className="p-2 grow rounded hover:bg-ovh-400 hover:text-white dark:hover:bg-ovh-lightdark"
          >
            Jeux vidéos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
