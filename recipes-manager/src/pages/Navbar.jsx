const Navbar = () => (
  <nav className="p-4 bg-gradient-to-r from-beige-200 to-beige-300 text-brown-800 shadow-md">
    <ul className="flex space-x-6 justify-center">
      <li>
        <a href="/" className="hover:text-brown-600 transition duration-200">
          Home
        </a>
      </li>
      <li>
        <a href="/recipes" className="hover:text-brown-600 transition duration-200">
          Recipes
        </a>
      </li>
      <li>
        <a href="/create" className="hover:text-brown-600 transition duration-200">
          Create Recipe
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
