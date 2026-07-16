import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../common/Logo";
import SearchBar from "../common/SearchBar";
import Button from "../common/Button";
import Avatar from "../common/Avatar";
import Dropdown from "../common/dropdown";

import { ROUTES } from "../../constants/routes";
import { navIconBtn, notifBadge, notifBadgeSm } from "../../styles";

import Icon, {
  Bell,
  MessageCircle,
  CirclePlus,
  ChevronDown,
  User,
  LogOut,
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
    avatar: "",
    unreadMessages: 3,
    unreadNotifications: 5,
  };

  function handleSearch(query) {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;
    console.log("Searching for:", trimmedQuery);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur shadow-navbar">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">

        {/* ================= Desktop ================= */}
        <div className="hidden md:flex items-center gap-4 py-2">
          <Link to={ROUTES.HOME} aria-label="Go to homepage" className="shrink-0 select-none">
            <Logo />
          </Link>

          <SearchBar
            className="min-w-0 flex-1"
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={handleSearch}
            size="small"
          />

          {isAuthenticated ? (
            <div className="flex shrink-0 items-center gap-3">
              <Button variant="success" shape="pill" size="small">
                <Icon icon={CirclePlus} size={14} strokeWidth={1.75} />
                <span className="text-sm font-medium">Sell</span>
              </Button>

              <button className={navIconBtn} aria-label="Messages">
                <Icon icon={MessageCircle} />
                {user.unreadMessages > 0 && (
                  <span className={notifBadge}>{user.unreadMessages}</span>
                )}
              </button>

              <button className={navIconBtn} aria-label="Notifications">
                <Icon icon={Bell} />
                {user.unreadNotifications > 0 && (
                  <span className={notifBadge}>{user.unreadNotifications}</span>
                )}
              </button>

              <Dropdown align="right">
                <Dropdown.Trigger>
                  <button className="flex items-center gap-2 rounded-pill px-2 py-1 transition-colors hover:bg-brand-muted">
                    <Avatar src={user.avatar} name={`${user.firstName} ${user.lastName}`} size="small" />
                    <span className="font-medium text-secondary">{user.firstName}</span>
                    <Icon icon={ChevronDown} size={18} />
                  </button>
                </Dropdown.Trigger>

                <Dropdown.Menu>
                  <Dropdown.Header>
                    <div className="flex items-center gap-3">
                      <Avatar src={user.avatar} name={`${user.firstName} ${user.lastName}`} size="medium" />
                      <div>
                        <p className="font-semibold text-body">{user.firstName} {user.lastName}</p>
                        <p className="text-sm text-muted">emmanuel@nexora.com</p>
                      </div>
                    </div>
                  </Dropdown.Header>

                  <Dropdown.Item icon={User} to={ROUTES.PROFILE}>Dashboard</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item icon={LogOut} danger onClick={() => console.log("Logout")}>
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ) : (
            <div className="flex shrink-0 items-center gap-3">
              <Link to={ROUTES.ABOUT} className="text-sm font-medium text-secondary transition-colors hover:text-body">
                About
              </Link>
              <Link to={ROUTES.AUTH.LOGIN}>
                <Button variant="outline" size="medium">Sign In</Button>
              </Link>
              <Link to={ROUTES.AUTH.REGISTER}>
                <Button variant="primary" size="medium">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>

        {/* ================= Mobile ================= */}
        <div className="md:hidden py-1">
          <div className="flex items-center justify-between">
            <Link to={ROUTES.HOME} aria-label="Go to homepage" className="shrink-0 select-none">
              <Logo />
            </Link>

            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <Button variant="success" shape="pill" size="small">
                  <Icon icon={CirclePlus} size={14} strokeWidth={1.75} />
                  <span className="text-sm font-medium">Sell</span>
                </Button>

                <button className={navIconBtn} aria-label="Messages">
                  <Icon icon={MessageCircle} size={20} />
                  {user.unreadMessages > 0 && (
                    <span className={notifBadgeSm}>{user.unreadMessages}</span>
                  )}
                </button>

                <button className={navIconBtn} aria-label="Notifications">
                  <Icon icon={Bell} size={20} />
                  {user.unreadNotifications > 0 && (
                    <span className={notifBadgeSm}>{user.unreadNotifications}</span>
                  )}
                </button>

                <Dropdown align="right">
                  <Dropdown.Trigger>
                    <button className="rounded-pill p-1 transition-colors hover:bg-brand-muted">
                      <Avatar src={user.avatar} name={`${user.firstName} ${user.lastName}`} size="small" />
                    </button>
                  </Dropdown.Trigger>
                  <Dropdown.Menu width="w-48 sm:w-72">
                    <Dropdown.Header>
                      <div className="flex w-full items-center gap-3">
                        <Avatar src={user.avatar} name={`${user.firstName} ${user.lastName}`} size="small" />
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-semibold text-body">{user.firstName} {user.lastName}</p>
                          <p className="truncate text-sm text-muted">emmanuel@nexora.com</p>
                        </div>
                      </div>
                    </Dropdown.Header>

                    <Dropdown.Item icon={User} to={ROUTES.PROFILE}>Dashboard</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item icon={LogOut} danger onClick={() => console.log("Logout")}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to={ROUTES.ABOUT} className="text-sm font-medium text-secondary transition-colors hover:text-body">
                  About
                </Link>
                <Link to={ROUTES.AUTH.LOGIN}>
                  <Button variant="outline" size="small">Sign In</Button>
                </Link>
              </div>
            )}
          </div>

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
