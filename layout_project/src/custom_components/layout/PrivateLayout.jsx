import { Outlet, Link } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <header className="border py-5">
        <nav className="flex justify-between mx-5">
          <p className="text-xl">Logo</p>
          <div className="flex gap-6">
            <Link to="/dashboard">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
      </header>
      <div className="flex flex-1">
        <div className="flex-none w-1/6 bg-slate-200">
          <aside>
            <ul className="text-center">
              <li className="py-3 border bg-white">
                <Link to="/dashboard">Menu 1</Link>
              </li>
              <li className="py-3 border bg-white">
                <Link to="/about">Menu 2</Link>
              </li>
              <li className="py-3 border bg-white">
                <Link to="/contact">Menu 3</Link>
              </li>
            </ul>
          </aside>
        </div>
        <main className="flex-1 flex flex-col gap-4 pt-0">
          {/* ส่วนนี้จะเป็น content ของแต่ละหน้า */}
          <Outlet />
        </main>
      </div>
      <footer className="border text-center py-6">
        <p>&copy; Footer</p>
      </footer>
    </div>
  );
};

export default PrivateLayout;
