function Navbar() {
  return (
    <>
      <nav className="flex justify-between h-16 max-w-screen-xl items-center m-auto">
        <div className="logo">
          <img src="/images/brand_logo.png" />
        </div>

        <ul className="flex list-none gap-6">
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button className="py-1.5 px-4 text-white h-8 bg-rose-600 font-medium">
          Login
        </button>
      </nav>
    </>
  );
}

export default Navbar;
