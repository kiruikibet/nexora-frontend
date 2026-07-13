import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useAuth } from "../../context/AuthContext";
import SearchBar from "../common/SearchBar";
import CategoryMenu from "../common/CategoryMenu";

const searchCategories = [
  "All Categories",
  "Electronics",
  "Phones",
  "Computers",
  "Vehicles",
  "Fashion",
  "Furniture",
  "Property",
  "Services",
  "Jobs",
];

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const accountType = String(
    user?.role ||
      user?.account_type ||
      user?.user_type ||
      user?.type ||
      "buyer",
  ).toLowerCase();
  const isSeller = isAuthenticated && accountType === "seller";

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to={ROUTES.HOME}
          className="shrink-0 text-lg font-semibold tracking-tight text-slate-950"
        >
          Nexora <span className="text-slate-500">Marketplace</span>
        </Link>

        <SearchBar
          className="hidden min-w-0 flex-1 lg:block"
          categories={searchCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="hidden items-center gap-3 lg:flex">
          {isAuthenticated ? (
            <>
              {isSeller ? (
                <Link
                  to={ROUTES.SELLER.DASHBOARD}
                  className="inline-flex h-9 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  to={ROUTES.BUYER.DASHBOARD}
                  className="inline-flex h-9 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
                >
                  Dashboard
                </Link>
              )}

              {isSeller ? (
                <Link
                  to={ROUTES.SELLER.DASHBOARD}
                  className="inline-flex h-9 items-center justify-center rounded-lg bg-slate-900 px-3 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Add Product
                </Link>
              ) : (
                <button
                  type="button"
                  className="inline-flex h-9 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
                >
                  Wishlist
                </button>
              )}

              <NavIconButton label="Notifications" icon={<BellIcon />} />
              <NavIconButton label="Messages" icon={<MessageIcon />} />
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setProfileOpen((current) => !current)}
                  className="inline-flex items-center gap-3 rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                  aria-haspopup="menu"
                  aria-expanded={profileOpen}
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                    {(user?.first_name || user?.username || "N")
                      .slice(0, 1)
                      .toUpperCase()}
                  </span>
                  Profile
                </button>

                {profileOpen ? (
                  <div className="absolute right-0 mt-2 w-52 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
                    <Link
                      to={
                        isSeller
                          ? ROUTES.SELLER.DASHBOARD
                          : ROUTES.BUYER.DASHBOARD
                      }
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to={ROUTES.BUYER.PROFILE}
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      Profile
                    </Link>
                    <button
                      type="button"
                      onClick={logout}
                      className="block w-full px-4 py-3 text-left text-sm text-rose-600 hover:bg-rose-50"
                    >
                      Sign out
                    </button>
                  </div>
                ) : null}
              </div>
            </>
          ) : (
            <>
              <Link
                to={ROUTES.AUTH.LOGIN}
                className="inline-flex h-9 items-center justify-center rounded-lg px-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
              >
                Login
              </Link>
              <Link
                to={ROUTES.AUTH.REGISTER}
                className="inline-flex h-9 items-center justify-center rounded-lg bg-slate-900 px-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Register
              </Link>
              <Link
                to={ROUTES.AUTH.SELLER_REGISTER}
                className="inline-flex h-9 items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50"
              >
                <span className="mr-1" aria-hidden="true">
                  +
                </span>
                Sell
              </Link>
            </>
          )}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-100"
            aria-label="Open search"
          >
            <SearchIcon />
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-100"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      <CategoryMenu />

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ease-out lg:hidden ${
          mobileOpen
            ? "max-h-[32rem] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <nav
          className="mx-auto max-w-7xl space-y-4 px-4 py-4 sm:px-6 lg:px-8"
          aria-label="Mobile primary"
        >
          <SearchBar
            categories={searchCategories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <CategoryMenu onSelect={closeMobileMenu} />

          <div className="grid gap-3 pt-1">
            {isAuthenticated ? (
              <>
                {isSeller ? (
                  <Link
                    to={ROUTES.SELLER.DASHBOARD}
                    onClick={closeMobileMenu}
                    className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-slate-900 px-4 text-sm font-medium text-white transition hover:bg-slate-800"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    to={ROUTES.BUYER.DASHBOARD}
                    onClick={closeMobileMenu}
                    className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-slate-900 px-4 text-sm font-medium text-white transition hover:bg-slate-800"
                  >
                    Dashboard
                  </Link>
                )}

                {isSeller ? (
                  <Link
                    to={ROUTES.SELLER.DASHBOARD}
                    onClick={closeMobileMenu}
                    className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-4 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
                  >
                    Add Product
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-4 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
                  >
                    Wishlist
                  </button>
                )}

                <button
                  type="button"
                  onClick={logout}
                  className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-4 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  to={ROUTES.AUTH.LOGIN}
                  onClick={closeMobileMenu}
                  className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-4 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
                >
                  Login
                </Link>
                <Link
                  to={ROUTES.AUTH.REGISTER}
                  onClick={closeMobileMenu}
                  className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-slate-900 px-4 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Register
                </Link>
                <Link
                  to={ROUTES.AUTH.SELLER_REGISTER}
                  onClick={closeMobileMenu}
                  className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-4 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
                >
                  <span className="mr-1" aria-hidden="true">
                    +
                  </span>
                  Sell
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

function NavIconButton({ label, icon }) {
  return (
    <button
      type="button"
      className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
      aria-label={label}
    >
      {icon}
    </button>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4 shrink-0"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.3-4.3" />
      <circle cx="11" cy="11" r="6.5" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.5 17a2.5 2.5 0 0 0 5 0"
      />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"
      />
    </svg>
  );
}

export default Navbar;
