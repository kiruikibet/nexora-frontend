import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../common/Logo";
import SearchBar from "../common/SearchBar";
import Button from "../common/Button";

import { ROUTES } from "../../constants/routes";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(query) {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) return;

    console.log("Searching for:", trimmedQuery);

    // Later:
    // navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    // searchProducts(trimmedQuery);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= Desktop ================= */}
        <div className="hidden md:flex items-center gap-4 py-4">
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

          {/* Navigation */}
          <div className="flex shrink-0 items-center gap-3">
            <Link
              to={ROUTES.ABOUT}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              About
            </Link>

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

        {/* ================= Mobile ================= */}
        <div className="md:hidden py-2">
          {/* Top Row */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to={ROUTES.HOME}
              aria-label="Go to homepage"
              className="shrink-0 select-none"
            >
              <Logo />
            </Link>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <Link
                to={ROUTES.ABOUT}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                About
              </Link>

              <Link to={ROUTES.AUTH.LOGIN}>
                <Button variant="outline" size="small">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>

          {/* Search */}
          <div className="mt-2">
            <SearchBar
              className="w-full"
              value={searchQuery}
              onChange={setSearchQuery}
              onSearch={handleSearch}
              size="small"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
