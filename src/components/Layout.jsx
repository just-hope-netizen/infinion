import SideBar from "./SideBar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <SideBar />
        <Header />
        <main className="py-3 pl-[85px]  pr-[72px] ml-[292px] my-[115px]  overflow-hidden">

        {children}
        </main>
    </>
  );
};

export default Layout;
