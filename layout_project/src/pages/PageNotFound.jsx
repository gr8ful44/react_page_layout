const PageNotFound = () => {
  return (
    <div className="h-screen grid place-items-center">
      <div className="grid place-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="240"
          height="240"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-search-x text-slate-300"
        >
          <path d="m13.5 8.5-5 5" />
          <path d="m8.5 8.5 5 5" />
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <p className="text-slate-400 text-3xl">Page not found</p>
      </div>
    </div>
  );
};

export default PageNotFound;
