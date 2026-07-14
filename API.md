# Nexora Marketplace API Contract

This document defines all planned REST API endpoints for the Nexora Marketplace backend.

**Base URL**

```
/api/
```

---

# Authentication

| Method | Endpoint                     | Authentication | Description               | Service     |
| ------ | ---------------------------- | -------------- | ------------------------- | ----------- |
| POST   | `/auth/register/`            | No             | Register a new user       | authService |
| POST   | `/auth/login/`               | No             | Login user                | authService |
| POST   | `/auth/logout/`              | Yes            | Logout current user       | authService |
| POST   | `/auth/token/refresh/`       | No             | Refresh JWT access token  | authService |
| GET    | `/auth/profile/`             | Yes            | Get current user profile  | authService |
| PUT    | `/auth/profile/`             | Yes            | Update profile            | userService |
| POST   | `/auth/change-password/`     | Yes            | Change password           | authService |
| POST   | `/auth/forgot-password/`     | No             | Request password reset    | authService |
| POST   | `/auth/reset-password/`      | No             | Reset forgotten password  | authService |
| POST   | `/auth/verify-email/`        | No             | Verify email address      | authService |
| POST   | `/auth/resend-verification/` | Yes            | Resend verification email | authService |

---

# Seller Verification

| Method | Endpoint                             | Authentication | Description                   |
| ------ | ------------------------------------ | -------------- | ----------------------------- |
| POST   | `/verification/submit/`              | Yes            | Submit seller verification    |
| GET    | `/verification/status/`              | Yes            | View verification status      |
| PUT    | `/verification/update/`              | Yes            | Update verification documents |
| GET    | `/admin/verifications/`              | Admin          | List verification requests    |
| PATCH  | `/admin/verifications/{id}/approve/` | Admin          | Approve seller                |
| PATCH  | `/admin/verifications/{id}/reject/`  | Admin          | Reject seller                 |

---

# Categories

| Method | Endpoint            | Authentication | Description          |
| ------ | ------------------- | -------------- | -------------------- |
| GET    | `/categories/`      | No             | List all categories  |
| GET    | `/categories/{id}/` | No             | Get category details |
| POST   | `/categories/`      | Admin          | Create category      |
| PUT    | `/categories/{id}/` | Admin          | Update category      |
| DELETE | `/categories/{id}/` | Admin          | Delete category      |

---

# Products

| Method | Endpoint                    | Authentication | Description                  |
| ------ | --------------------------- | -------------- | ---------------------------- |
| GET    | `/products/`                | No             | List products                |
| GET    | `/products/{id}/`           | No             | Product details              |
| POST   | `/products/`                | Seller         | Create product               |
| PUT    | `/products/{id}/`           | Seller         | Update product               |
| PATCH  | `/products/{id}/`           | Seller         | Partially update product     |
| DELETE | `/products/{id}/`           | Seller         | Delete product               |
| GET    | `/products/search/`         | No             | Search products              |
| GET    | `/products/my-products/`    | Seller         | Seller's products            |
| PATCH  | `/products/{id}/mark-sold/` | Seller         | Mark product sold            |
| GET    | `/products/featured/`       | No             | Featured products            |
| GET    | `/products/latest/`         | No             | Latest products              |
| GET    | `/products/recommended/`    | Yes            | Personalized recommendations |

---

# Product Images

| Method | Endpoint                              | Authentication | Description          |
| ------ | ------------------------------------- | -------------- | -------------------- |
| POST   | `/products/{id}/images/`              | Seller         | Upload product image |
| DELETE | `/products/images/{imageId}/`         | Seller         | Delete image         |
| PATCH  | `/products/images/{imageId}/primary/` | Seller         | Set primary image    |

---

# Wishlist

| Method | Endpoint                 | Authentication | Description    |
| ------ | ------------------------ | -------------- | -------------- |
| GET    | `/wishlist/`             | Yes            | View wishlist  |
| POST   | `/wishlist/{productId}/` | Yes            | Add product    |
| DELETE | `/wishlist/{productId}/` | Yes            | Remove product |

---

# Search

| Method | Endpoint               | Authentication | Description        |
| ------ | ---------------------- | -------------- | ------------------ |
| GET    | `/search/`             | No             | Global search      |
| GET    | `/search/suggestions/` | No             | Search suggestions |

---

# Messaging

| Method | Endpoint                    | Authentication | Description          |
| ------ | --------------------------- | -------------- | -------------------- |
| GET    | `/chats/`                   | Yes            | List conversations   |
| POST   | `/chats/`                   | Yes            | Start conversation   |
| GET    | `/chats/{chatId}/`          | Yes            | Conversation details |
| GET    | `/chats/{chatId}/messages/` | Yes            | Get messages         |
| POST   | `/chats/{chatId}/messages/` | Yes            | Send message         |
| PATCH  | `/chats/{chatId}/read/`     | Yes            | Mark messages read   |

---

# Purchase Requests

| Method | Endpoint                  | Authentication | Description              |
| ------ | ------------------------- | -------------- | ------------------------ |
| POST   | `/purchases/request/`     | Yes            | Create purchase request  |
| GET    | `/purchases/{id}/`        | Yes            | Purchase request details |
| PATCH  | `/purchases/{id}/accept/` | Seller         | Accept purchase          |
| PATCH  | `/purchases/{id}/reject/` | Seller         | Reject purchase          |
| PATCH  | `/purchases/{id}/cancel/` | Buyer          | Cancel purchase          |

---

# Orders

| Method | Endpoint                         | Authentication | Description      |
| ------ | -------------------------------- | -------------- | ---------------- |
| GET    | `/orders/`                       | Yes            | List orders      |
| GET    | `/orders/{id}/`                  | Yes            | Order details    |
| PATCH  | `/orders/{id}/confirm-delivery/` | Buyer          | Confirm delivery |
| PATCH  | `/orders/{id}/report-problem/`   | Buyer          | Report issue     |
| PATCH  | `/orders/{id}/cancel/`           | Buyer          | Cancel order     |

---

# Reviews

| Method | Endpoint                  | Authentication | Description     |
| ------ | ------------------------- | -------------- | --------------- |
| GET    | `/products/{id}/reviews/` | No             | Product reviews |
| POST   | `/products/{id}/reviews/` | Buyer          | Create review   |
| PATCH  | `/reviews/{id}/`          | Buyer          | Update review   |
| DELETE | `/reviews/{id}/`          | Buyer          | Delete review   |

---

# Notifications

| Method | Endpoint                    | Authentication | Description            |
| ------ | --------------------------- | -------------- | ---------------------- |
| GET    | `/notifications/`           | Yes            | List notifications     |
| PATCH  | `/notifications/{id}/read/` | Yes            | Mark notification read |
| PATCH  | `/notifications/read-all/`  | Yes            | Mark all as read       |
| DELETE | `/notifications/{id}/`      | Yes            | Delete notification    |

---

# Reports

| Method | Endpoint                       | Authentication | Description            |
| ------ | ------------------------------ | -------------- | ---------------------- |
| POST   | `/reports/`                    | Yes            | Report user or product |
| GET    | `/admin/reports/`              | Admin          | View reports           |
| PATCH  | `/admin/reports/{id}/resolve/` | Admin          | Resolve report         |

---

# Administration

| Method | Endpoint                      | Authentication | Description          |
| ------ | ----------------------------- | -------------- | -------------------- |
| GET    | `/admin/dashboard/`           | Admin          | Dashboard statistics |
| GET    | `/admin/users/`               | Admin          | List users           |
| GET    | `/admin/products/`            | Admin          | List products        |
| GET    | `/admin/orders/`              | Admin          | List orders          |
| GET    | `/admin/reviews/`             | Admin          | List reviews         |
| PATCH  | `/admin/users/{id}/suspend/`  | Admin          | Suspend account      |
| PATCH  | `/admin/users/{id}/activate/` | Admin          | Activate account     |

---

# Uploads

| Method | Endpoint             | Authentication | Description     |
| ------ | -------------------- | -------------- | --------------- |
| POST   | `/uploads/image/`    | Yes            | Upload image    |
| POST   | `/uploads/document/` | Yes            | Upload document |

---

# Analytics

| Method | Endpoint             | Authentication | Description        |
| ------ | -------------------- | -------------- | ------------------ |
| GET    | `/analytics/seller/` | Seller         | Seller analytics   |
| GET    | `/analytics/admin/`  | Admin          | Platform analytics |

---

# Planned Future Endpoints

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| GET    | `/wallet/`           | User wallet         |
| POST   | `/wallet/deposit/`   | Deposit funds       |
| POST   | `/wallet/withdraw/`  | Withdraw funds      |
| GET    | `/transactions/`     | Transaction history |
| POST   | `/payments/`         | Process payment     |
| GET    | `/escrow/`           | Escrow information  |
| GET    | `/recommendations/`  | AI recommendations  |
| GET    | `/products/similar/` | Similar products    |
| GET    | `/coupons/`          | Available coupons   |
| POST   | `/subscriptions/`    | Seller subscription |
