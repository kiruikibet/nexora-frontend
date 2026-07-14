# Nexora Frontend

This package contains the React + Vite frontend for the Nexora marketplace.

The living technical reference is [FRONTEND_DOCUMENTATION.md](FRONTEND_DOCUMENTATION.md). It explains the current architecture, pages, shared components, routing, auth flow, API layer, styling, and editing guidance.

## Quick Start

1. Install dependencies.
2. Set `VITE_API_URL` in your environment.
3. Run `npm run dev` from `nexora-frontend`.

## Current Scope

- Public pages: Home, Categories, Products, About, Contact
- Authentication pages: Login, Register
- Protected shells: Buyer dashboard, Seller dashboard
- Shared UI: Navbar, Footer, SearchBar, CategoryMenu, EmptyState, Spinner, Button
- State and data: Auth context, token storage, axios client, auth service

## Notes

- The frontend currently has a clean shell and shared component foundation.
- Some routes are scaffolded placeholders and are documented in the full guide.
- The Button component uses a folder-based structure with separated style definitions.

## Editing Flow

If you want to extend the app as you go, start from the full reference in [FRONTEND_DOCUMENTATION.md](FRONTEND_DOCUMENTATION.md), then edit the matching component, page, route, or service file.
