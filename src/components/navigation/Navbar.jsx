import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../common/Logo";
import SearchBar from "../common/SearchBar";
import Button from "../common/Button";
import Avatar from "../common/Avatar";

import { ROUTES } from "../../constants/routes";

import Icon, {
  Bell,
  MessageCircle,
  CirclePlus,
  ChevronDown,
} from "../common/icons";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  // ===========================================
  // MOCK AUTH DATA (Replace with useAuth later)
  // ===========================================
  const isAuthenticated = true;

  const user = {
    firstName: "Emmanuel",
    lastName: "Kirui",
    avatar: "", // Add image URL later
    unreadMessages: 3,
    unreadNotifications: 5,
  };

  function handleSearch(query) {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) return;

    console.log("Searching for:", trimmedQuery);
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

          {/* Right Side */}
          {isAuthenticated ? (
            <div className="flex shrink-0 items-center gap-3">
              {/* Sell */}
              <Button variant="primary" shape="pill" size="small">
                <span className="text-sm font-bold leading-none">
                  <Icon icon={CirclePlus} size={14} strokeWidth={1.75} />
                </span>
                <span className="text-sm font-medium">Sell</span>
              </Button>

              {/* Messages */}
              <button className="relative rounded-full p-2 transition hover:bg-slate-100">
                <Icon icon={MessageCircle} />

                {user.unreadMessages > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-semibold text-white">
                    {user.unreadMessages}
                  </span>
                )}
              </button>

              {/* Notifications */}
              <button className="relative rounded-full p-2 transition hover:bg-slate-100">
                <Icon icon={Bell} />

                {user.unreadNotifications > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-semibold text-white">
                    {user.unreadNotifications}
                  </span>
                )}
              </button>

              {/* Profile */}
              <button className="flex items-center gap-2 rounded-full px-2 py-1 transition hover:bg-slate-100">
                <Avatar
                  src={user.avatar}
                  name={`${user.firstName} ${user.lastName}`}
                  size="small"
                />

                <span className="font-medium text-slate-700">
                  {user.firstName}
                </span>

                <Icon icon={ChevronDown} size={18} />
              </button>
            </div>
          ) : (
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
          )}
        </div>

        {/* ================= Mobile ================= */}
        <div className="md:hidden py-1">
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
            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <Button variant="primary" shape="pill" size="small">
                  <span className="text-sm font-bold leading-none">
                    <Icon icon={CirclePlus} size={14} strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-medium">Sell</span>
                </Button>
                <button className="relative rounded-full p-2 hover:bg-slate-100">
                  <Icon icon={MessageCircle} size={20} />

                  {user.unreadMessages > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] text-white">
                      {user.unreadMessages}
                    </span>
                  )}
                </button>

                <button className="relative rounded-full p-2 hover:bg-slate-100">
                  <Icon icon={Bell} size={20} />

                  {user.unreadNotifications > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] text-white">
                      {user.unreadNotifications}
                    </span>
                  )}
                </button>

                <Avatar
                  src={user.avatar}
                  name={`${user.firstName} ${user.lastName}`}
                  size="small"
                />
              </div>
            ) : (
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
            )}
          </div>

          {/* Search */}
          <div className="mt-1">
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
