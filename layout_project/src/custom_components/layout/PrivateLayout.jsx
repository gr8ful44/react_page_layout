import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <header className="border py-5">
        <nav className="flex justify-between mx-5">
          <p className="text-xl">Logo</p>
          <div className="flex gap-6">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </nav>
      </header>
      <div className="flex flex-1">
        <div className="flex-none w-1/6 bg-slate-200">
          <aside>
            <ul className="text-center">
              <li className="py-3 border bg-white">
                <a href="/">Menu 1</a>
              </li>
              <li className="py-3 border bg-white">
                <a href="/about">Menu 2</a>
              </li>
              <li className="py-3 border bg-white">
                <a href="/contact">Menu 3</a>
              </li>
            </ul>
          </aside>
        </div>
        <main className="flex-1 flex flex-col gap-4 p-4 pt-0">
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
