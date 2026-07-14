import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../common/Logo";
import SearchBar from "../../common/SearchBar";
import Button from "../../common/Button";
import { ROUTES } from "../../../constants/routes";

function Navbar() {
  // Current search text
  const [searchQuery, setSearchQuery] = useState("");

  /**
   * Handles search submissions.
   * Later this function will call the search API
   * or navigate to the search results page.
   */
  function handleSearch(query) {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) return;

    console.log("Searching for:", trimmedQuery);

    // Example:
    // navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);

    // OR
    // const products = await searchProducts(trimmedQuery);

    // OR
    // dispatch(searchProducts(trimmedQuery));
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to={ROUTES.HOME}
          aria-label="Go to homepage"
          className="shrink-0 select-none"
        >
          <Logo />
        </Link>

        {/* Search */}
        <SearchBar
          className="min-w-0 flex-1"
          value={searchQuery}
          onChange={setSearchQuery}
          onSearch={handleSearch}
          size="medium"
        />

        {/* Authentication Buttons */}
        <div className="flex shrink-0 items-center gap-3">
          <Link to={ROUTES.AUTH.LOGIN}>
            <Button variant="outline" size="medium">
              Sign In
            </Button>
          </Link>

          <Link to={ROUTES.AUTH.REGISTER}>
            <Button variant="primary" size="medium">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
