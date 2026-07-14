# Nexora Frontend Documentation

This document describes the current frontend implementation in `nexora-frontend` as it exists today. It is intended as a working reference while the app evolves, so it focuses on the real code paths, current UI shells, and where each responsibility lives.

## 1. What The Frontend Is

Nexora is a marketplace frontend built with React, Vite, React Router, and Tailwind CSS. The current implementation provides:

- A public landing page with a marketplace-focused hero
- Authentication screens for login and registration
- Protected buyer and seller dashboard shells
- Shared navigation, footer, search, category, empty-state, spinner, and button components
- Centralized auth state, token storage, and API access through axios

The codebase is organized to keep presentation, routing, data access, and reusable UI components separated.

## 2. Tech Stack

- React 19
- Vite
- React Router DOM
- Tailwind CSS v4
- Axios

## 3. App Bootstrap

### Entry flow

1. `src/main.jsx` mounts the app into the root DOM node.
2. `BrowserRouter` wraps the application for routing.
3. `AuthProvider` wraps the application so auth state is available everywhere.
4. `App.jsx` renders `AppRoutes`.

### Files involved

- `src/main.jsx` - application bootstrap and providers
- `src/App.jsx` - app shell that renders routes
- `src/routes/AppRoutes.jsx` - route definitions

## 4. Routing

Routing is centralized in `src/routes/AppRoutes.jsx` and route paths are stored in `src/constants/routes.js`.

### Current routes

- `/` - Home
- `/login` - Login page
- `/register` - Buyer registration page
- `/register/seller` - Seller registration page, currently reuses the same register page
- `/buyer/dashboard` - Buyer dashboard shell
- `/seller/dashboard` - Seller dashboard shell
- `/categories` - Categories page
- `/products` - Products page
- `/about` - About page
- `/contact` - Contact page

### Route guards

- `PublicRoute` blocks authenticated users from public auth pages and redirects them to home
- `ProtectedRoute` blocks unauthenticated users from protected dashboard routes and redirects them to login

### Files involved

- `src/routes/PublicRoute.jsx`
- `src/routes/ProtectedRoute.jsx`
- `src/constants/routes.js`

## 5. Authentication Architecture

Authentication is built around a small, centralized context and a token-based axios client.

### Auth context

`src/context/AuthContext.jsx` provides:

- `user` - the current authenticated user object
- `loading` - initial auth bootstrap state
- `login(credentials)` - logs in, stores tokens, and sets the user
- `register(userData)` - registers the user and then logs them in
- `logout()` - clears tokens and user state
- `updateUser(updates)` - merges local user updates
- `isAuthenticated` - derived boolean state

### Initialization behavior

On app load, the provider:

1. Reads the access token from local storage
2. If a token exists, requests the current profile
3. Stores the profile in state
4. Clears tokens if profile loading fails

### Token storage

`src/utils/tokenStorage.js` handles:

- saving access and refresh tokens
- reading the access token
- reading the refresh token
- removing both tokens

Tokens are stored under the keys defined in `src/constants/storageKeys.js`.

### API client

`src/api/axios.js` creates a shared axios instance with:

- `baseURL` from `import.meta.env.VITE_API_URL`
- JSON content headers
- a request interceptor that automatically adds `Authorization: Bearer <token>` when an access token exists

### Auth service

`src/services/authService.js` currently exposes:

- `register(userData)`
- `login(credentials)`
- `logout()`
- `getProfile()`

These methods call backend endpoints defined in `src/constants/apiEndpoints.js`.

## 6. Current API Contract In Code

The frontend currently expects these auth endpoints:

- `POST /accounts/register/`
- `POST /accounts/login/`
- `POST /accounts/logout/`
- `POST /accounts/token/refresh/`
- `GET /accounts/profile/`

This is the contract currently used by the frontend service layer.

## 7. Shared Components

### Button

The Button component now follows a folder-based architecture under `src/components/common/Button/`.

#### Responsibilities

- `Button.jsx` - component behavior, props, loading state, disabled state, accessibility, class composition, spinner rendering
- `ButtonVariants.js` - style-only definitions for base, variants, sizes, and width modes
- `index.js` - default export so the component can be imported from the folder root

#### Supported props

- `children`
- `variant`
- `size`
- `width`
- `type`
- `loading`
- `disabled`
- `onClick`
- `className`

#### Supported variants

- `primary`
- `secondary`
- `outline`
- `ghost`
- `danger`
- `success`

#### Supported sizes

- `small`
- `medium`
- `large`

#### Supported width modes

- `auto`
- `full`

#### Loading behavior

- Disables the button
- Prevents duplicate submissions
- Renders the spinner
- Preserves layout with invisible text and absolute spinner overlay
- Sets accessibility attributes such as `aria-disabled` and `aria-busy`

### EmptyState

`src/components/common/EmptyState.jsx` is a reusable empty-state shell used by multiple scaffold pages. It displays:

- an icon block
- a title
- a description
- an optional action button

### Spinner

`src/components/common/Spinner.jsx` is the reusable loading indicator. It supports:

- size variants
- color variants
- inline mode
- full-screen overlay mode

### SearchBar

`src/components/common/SearchBar.jsx` is the marketplace search form used in the navbar. It supports:

- a category selector
- a search field
- optional `onSearch` submission handling
- controlled category selection through `selectedCategory` and `onCategoryChange`

### CategoryMenu

`src/components/common/CategoryMenu.jsx` renders the category chip row used in the header and mobile navigation.

## 8. Layout Components

### Navbar

`src/components/layout/Navbar.jsx` is the main top navigation. It currently handles:

- brand link to the homepage
- desktop search bar
- desktop and mobile navigation states
- authenticated vs unauthenticated navigation
- seller detection from `user.role`, `user.account_type`, `user.user_type`, or `user.type`
- profile menu state
- logout action
- links to buyer and seller dashboards

It also renders the shared `CategoryMenu` and `SearchBar` components.

### Footer

`src/components/layout/Footer.jsx` provides the public footer with company, marketplace, support, and social link groups.

## 9. Pages

### Public pages

#### HomePage

`src/pages/public/HomePage.jsx` is the main landing page. It currently shows:

- a large marketplace hero
- a short description of the frontend architecture
- four architecture summary cards for presentation, routing, application, and business layers
- the shared navbar and footer

#### CategoriesPage

`src/pages/public/CategoriesPage.jsx` is currently a scaffold page built with `EmptyState`.

#### ProductsPage

`src/pages/public/ProductsPage.jsx` is currently a scaffold page built with `EmptyState`.

#### AboutPage

`src/pages/public/AboutPage.jsx` is currently a scaffold page built with `EmptyState`.

#### ContactPage

`src/pages/public/ContactPage.jsx` is currently a scaffold page built with `EmptyState`.

### Auth pages

#### LoginPage

`src/pages/auth/LoginPage.jsx` uses a two-column layout:

- a marketing/info panel on the left
- the `LoginForm` on the right

#### RegisterPage

`src/pages/auth/RegisterPage.jsx` also uses a two-column layout:

- a feature summary panel on the left
- the `RegisterForm` on the right

### Protected pages

#### BuyerDashboardPage

`src/pages/buyer/BuyerDashboardPage.jsx` is currently a dashboard shell using `EmptyState`.

#### SellerDashboardPage

`src/pages/seller/SellerDashboardPage.jsx` is currently a dashboard shell using `EmptyState`.

## 10. Form Components

### LoginForm

`src/components/auth/LoginForm.jsx` manages:

- local form state for identifier and password
- client-side validation messages
- submit loading state
- calling the `onSubmit` callback

It renders the shared `Button` with loading protection.

### RegisterForm

`src/components/auth/RegisterForm.jsx` manages:

- username
- first name
- last name
- email
- password
- confirm password
- account type

It also performs basic client-side validation and uses the shared `Button` for submission.

## 11. Styling System

The current styling approach is Tailwind-first, with a small amount of global CSS.

### Global CSS

`src/index.css` defines:

- Tailwind import
- base body styling
- smooth scroll behavior
- default font stack
- selection styling

### App CSS

`src/App.css` is effectively a placeholder at the moment and indicates that global styling is intended to live in `index.css` and utility classes.

### Component styling style

The codebase favors:

- utility classes for layout and spacing
- isolated class definitions for reusable primitives
- no extra styling libraries

## 12. Constants And Utilities

### Route constants

`src/constants/routes.js` centralizes route paths and keeps them out of the components.

### API endpoints

`src/constants/apiEndpoints.js` centralizes backend routes used by the service layer.

### Storage keys

`src/constants/storageKeys.js` defines the local storage keys for auth tokens.

### HTTP status constants

`src/constants/httpStatus.js` contains commonly used HTTP codes.

### Token helpers

`src/utils/tokenStorage.js` is the current token helper module.

## 13. What Is Implemented vs What Is Still A Shell

### Implemented today

- app bootstrap and routing
- public homepage
- auth screens and forms
- auth context and token persistence
- shared button system
- reusable empty-state, search, category, spinner, navbar, and footer components

### Currently scaffolded or placeholder-driven

- category browsing screen
- products listing screen
- about screen content
- contact screen content
- buyer dashboard content
- seller dashboard content

These pages exist in the route map, but their current implementation is intentionally minimal and ready for later feature work.

## 14. How To Edit The App Safely

### If you want to change navigation

- Edit `src/components/layout/Navbar.jsx`
- Update route paths in `src/constants/routes.js`
- Adjust protected/public guards if access rules change

### If you want to change auth behavior

- Edit `src/context/AuthContext.jsx`
- Edit `src/services/authService.js`
- Edit `src/api/axios.js` for token/header changes

### If you want to add a new button style

- Add the style definition in `src/components/common/Button/ButtonVariants.js`
- Keep behavior changes inside `src/components/common/Button/Button.jsx`

### If you want to create a new page

- Add the page under `src/pages/...`
- Register it in `src/routes/AppRoutes.jsx`
- Add the path to `src/constants/routes.js` if it should be reused

### If you want to build a new shared component

- Put it under `src/components/common/` if it is reusable
- Keep logic and styling split when the component has both behavior and appearance concerns

## 15. File Map

### Core

- `src/main.jsx`
- `src/App.jsx`
- `src/App.css`
- `src/index.css`

### API

- `src/api/axios.js`
- `src/services/authService.js`

### Context

- `src/context/AuthContext.jsx`

### Constants

- `src/constants/routes.js`
- `src/constants/apiEndpoints.js`
- `src/constants/storageKeys.js`
- `src/constants/httpStatus.js`

### Shared UI

- `src/components/common/Button/`
- `src/components/common/EmptyState.jsx`
- `src/components/common/SearchBar.jsx`
- `src/components/common/CategoryMenu.jsx`
- `src/components/common/Spinner.jsx`

### Layout

- `src/components/layout/Navbar.jsx`
- `src/components/layout/Footer.jsx`

### Auth

- `src/components/auth/LoginForm.jsx`
- `src/components/auth/RegisterForm.jsx`
- `src/pages/auth/LoginPage.jsx`
- `src/pages/auth/RegisterPage.jsx`

### Pages

- `src/pages/public/HomePage.jsx`
- `src/pages/public/CategoriesPage.jsx`
- `src/pages/public/ProductsPage.jsx`
- `src/pages/public/AboutPage.jsx`
- `src/pages/public/ContactPage.jsx`
- `src/pages/buyer/BuyerDashboardPage.jsx`
- `src/pages/seller/SellerDashboardPage.jsx`

### Routing

- `src/routes/AppRoutes.jsx`
- `src/routes/PublicRoute.jsx`
- `src/routes/ProtectedRoute.jsx`

## 16. Practical Editing Notes

- Keep authentication changes aligned between `AuthContext`, `authService`, and `axios`.
- Keep shared component props stable when possible, because multiple screens already consume them.
- Prefer adding new route paths to `src/constants/routes.js` instead of hardcoding strings.
- Keep style-only values in variant or constants files when a component has a clear style system.
