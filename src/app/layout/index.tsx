import classNames from "classnames";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeSidebar } from "../../store/ui/actions";
import { selectIsSidebarOpen } from "../../store/ui/selectors";
import { clickWhenPressEnter } from "../shared/utils/callbacks";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector(selectIsSidebarOpen);

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-10 shadow-sm shadow-ovh-900 dark:shadow-lg dark:shadow-ovh-900">
        <Navbar />
      </header>
      <div className="absolute top-16 right-0 left-0 bottom-0 lg:flex">
        <div
          // backdrop
          className={classNames(
            "absolute top-0 bottom-0 left-0 right-0 bg-black dark:bg-opacity-20 bg-opacity-30 lg:hidden",
            { hidden: !isSidebarOpen }
          )}
          tabIndex={0}
          onKeyPress={clickWhenPressEnter}
          onClick={() => dispatch(closeSidebar())}
        />
        <Sidebar />
        <main className="h-full p-4 lg:grow bg-ovh-50 text-ovh-dark dark:bg-gradient-to-br dark:from-ovh-lightdark dark:to-ovh-dark dark:bg-ovh-dark dark:text-ovh-75">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
