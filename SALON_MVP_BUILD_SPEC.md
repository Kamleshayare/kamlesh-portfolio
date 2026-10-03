# Salon Management Software — MVP Build Spec (MERN Stack)

> **Purpose of this document:** This is a self-contained engineering brief for an AI coding agent (Claude Code) to scaffold and build the first working MVP of a salon/spa management platform. It defines the tech stack, visual design system (reverse-engineered from reference product screenshots), data models, API surface, screen list, and a sequenced build plan. Read this entire document before writing any code. Where a decision isn't specified, prefer the simplest option that keeps the app runnable end-to-end at every phase.
>
> **Context:** This MVP scope is a deliberately narrowed slice of a much larger feature set researched for this product (invoice management, memberships, wallet, loyalty, WhatsApp/biometric/payment-gateway integrations, multi-location, etc.). Rather than building all of it at once, this spec sequences the true "walking skeleton" first (Sections 6–7) and defines everything else as fast-follow work so the agent always has a demoable product at the end of each phase.

---

## 1. Product Summary

A multi-staff appointment-based salon/spa management web app. Front-desk staff and owners can: manage a shared calendar across stylists, maintain a client profile with history/notes/forms, take payment at checkout (POS), track retail inventory, and view business reports. Think "operations cockpit for a salon," not a consumer marketplace — there is no public-facing marketplace in the MVP.

**Primary persona:** salon owner or front-desk staff, using this on a desktop/tablet at the front counter during business hours.

---

## 2. Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Database | MongoDB (Mongoose ODM) | Document model fits flexible client notes/forms well |
| Backend | Node.js + Express | REST API, JWT auth |
| Frontend | React (Vite) + React Router | No Next.js — plain SPA is sufficient for MVP |
| Styling | Tailwind CSS | Design tokens defined in Section 4 map directly to `tailwind.config.js` |
| State/data fetching | React Query (TanStack Query) + Axios | Keeps server state out of component state |
| Forms | React Hook Form + Zod | Validation shared conceptually with backend Zod/Joi schemas |
| Auth | JWT (access token) + bcrypt password hashing | Refresh tokens are out of scope for MVP; session length ~7 days |
| Dates/calendar math | `date-fns` | Avoid moment.js (deprecated) |
| Icons | `lucide-react` | Closest free icon set to the thin-line icons in the reference screenshots |
| Testing | Vitest (frontend), Jest + Supertest (backend) | Minimum: smoke tests for auth + appointment CRUD |

**Repo layout:** a single repo with two workspaces:

```
/salon-app
  /server        # Express API
  /client        # React app (Vite)
  /shared        # (optional) shared TS types/constants if using TypeScript
  README.md
  BUILD_SPEC.md  # this file
```

Use TypeScript on both client and server if the agent is comfortable doing so — it materially reduces bugs in a schema-heavy app like this. If not, plain JS with JSDoc types is acceptable. Do not mix — pick one for the whole repo.

---

## 3. Design Language (reverse-engineered from reference screenshots)

The reference screenshots are from GlossGenius's actual product (calendar view, client profile drawer, reports grid). Match this visual language closely — it is proven, uncluttered, and appropriate for a front-desk tool used quickly between clients.

### 3.1 Layout shell

- **Left icon rail**, fixed, ~64px wide, full viewport height. Vertical stack of outline icons only (no labels), evenly spaced: Calendar, Camera/Photos, Notebook, Book, Clients (people), Marketing (megaphone), Reports (line chart), Inventory (box), Payroll/Team (people-dollar), Flag, Gift/Packages, Settings (gear). The active icon is visually distinct (filled/darker + subtle background pill). Brand mark (small colored logo glyph) pinned to the bottom of the rail.
- **Top bar**: business/location switcher (avatar + name + chevron) at top-left of the content area. Page-specific controls live in the top bar too (e.g. on the calendar: date label, Today button, date stepper, view dropdown, staff-filter dropdown, secondary button, primary button).
- **Content area**: generous padding (24–32px), background is a very light warm off-white, not pure white — cards and panels are pure white on top of it to create depth without heavy shadows.
- **Right-side slide-over drawer** for contextual detail (e.g. client profile) — fixed width ~420–460px, full height, rounded left corners, dims the rest of the screen with a semi-transparent backdrop, closes via an `×` at the top-right.

### 3.2 Color tokens

Define these as CSS variables / Tailwind theme colors. Hex values are close approximations of the reference UI — keep them, they're deliberately calm and desaturated.

```js
// tailwind.config.js — theme.extend.colors
colors: {
  bg: {
    page: '#F7F6F2',      // app background
    surface: '#FFFFFF',   // cards, panels, drawer
    sidebar: '#F7F6F2',
  },
  ink: {
    900: '#1A1A1A',        // primary text / headings
    600: '#5B5B5E',        // secondary text
    400: '#9A9A9E',        // placeholder / disabled
  },
  border: {
    DEFAULT: '#E7E5E0',
  },
  brand: {
    // primary accent — used sparingly: primary CTA, active/selected states
    DEFAULT: '#96233F',
    hover: '#7E1E36',
    tint: '#F7E9EC',
  },
  ink900Btn: '#171717',    // black pill buttons (secondary actions)
  success: {
    DEFAULT: '#1E8E5A',
    bg: '#E3F5EA',
  },
  logo: '#E8622C',         // brand mark accent (orange)
  // pastel appointment/category tints — rotate across staff columns / service categories
  tint: {
    peach:   { bg: '#F7E4D6', border: '#EFCBAF' },
    blue:    { bg: '#DCEBF7', border: '#B9D8ED' },
    mint:    { bg: '#D9EEE9', border: '#B3DDD2' },
    lavender:{ bg: '#EBE1F5', border: '#D3BFEC' },
    rose:    { bg: '#F5DFE4', border: '#E8BEC8' },
  },
}
```

### 3.3 Typography

- Font family: `Inter` (Google Fonts) as the practical default — geometric, rounded-leaning sans-serif close to the reference. Load via `@fontsource/inter` or a Google Fonts `<link>`.
- Page titles ("Feb", "Reports"): 32–40px, bold (700), tight line-height, `text-ink-900`.
- Card/list titles: 15–16px, semibold (600).
- Body/secondary text: 13–14px, regular (400), `text-ink-600`.
- All-caps is **not** used anywhere in the reference UI — avoid it.

### 3.4 Components (build these as reusable React components first)

- **PillButton** — fully rounded (`rounded-full`), horizontal padding ~20px, three variants:
  - `primary`: `bg-brand text-white` (e.g. "Add" on the calendar)
  - `dark`: `bg-ink900Btn text-white` (e.g. "Book appointment", "Waitlist")
  - `outline`: `bg-white border border-border text-ink-900` (e.g. "Quick sale")
- **StatusBadge** — small rounded pill, `bg-success-bg text-success` for "Completed"-style states.
- **IconRailNav** — the left sidebar described in 3.1, with an `active` prop per item.
- **AvatarCircle** — circular image with graceful initials fallback (used for staff, clients, business logo).
- **SlideOverDrawer** — right-side panel with backdrop, used for the client profile and any other contextual detail view.
- **Card** — white surface, `rounded-2xl`, 1px `border-border`, `p-5`, optional hover/selected state using `border-brand` (see the highlighted "Timesheets" card in the reports screenshot).
- **StaffCalendarColumn** — a single day's column for one staff member: avatar+name header, hour gridlines, appointment blocks positioned by time, using the pastel tint system from 3.2. Appointment blocks show time range, client name, service (if space allows), and two small icon affordances (recur/refresh, confirm/check).
- **TabBar** — underline-style tabs (e.g. "Notes (3) / SOAP notes (14) / Forms (4)"), active tab bold + underlined in `ink-900`, inactive tabs `ink-600`.

Keep the whole system minimal-chrome: thin borders over heavy shadows, generous whitespace, pastel color used only for categorization (staff/service), never for large background fills.

---

## 4. Information Architecture — Screens

Build in this order (matches Section 7 build phases):

1. **Login / Sign up** — simple email+password; sign-up also creates a Business + first Location + the signing-up user as `owner`.
2. **Calendar (Booking) — the home screen.** Multi-staff day view exactly like the reference screenshot: staff columns, hour rows, colored appointment blocks, top-bar date controls, staff filter, "Waitlist" (stub button — no real waitlist logic needed for MVP-core), "Add" opens a new-appointment modal.
3. **Client Profile Drawer** — opens from clicking an appointment or from the Clients list. Tabs: Appointments (this client's history), Notes/Forms, Portfolio (image gallery — MVP-core may stub this as upload+grid), Memberships & Packages (MVP-core: show "No memberships yet" empty state; full CRUD is Phase 8).
4. **Clients** — searchable list/table of all clients, "+ Add client" button, click a row to open the profile drawer.
5. **Staff** — list of staff members, add/edit (name, email, role, services offered, calendar color).
6. **Services** — CRUD list of bookable services (name, category, duration, price).
7. **Checkout / POS** — reachable from an appointment ("Quick sale" or "Check out") or standalone. Cart of services/products, discount field, tax calc, payment method (cash/card — card can be a stub, no real payment gateway in MVP-core), generates an Invoice.
8. **Inventory** — retail product list, stock level, low-stock indicator, manual stock adjustment.
9. **Reports** — grid of report cards matching the reference screenshot exactly: Sales, Appointments, Retail Sales, Sales Tax, Inventory, Transaction Detail, Most Valuable Clients, Commission Earnings, Expenses, Timesheets. Each card opens a simple table view backed by an aggregation endpoint.
10. **Settings** — business name/address, locations (single location fine for MVP-core), your account.

---

## 5. Data Models

MongoDB collections via Mongoose. Field lists below are MVP-core; Phase-8 fields are marked `(extended)` and can be added to the same schema now (nullable) so migrations aren't needed later — but do not build UI/logic for them until Phase 8.

```js
// Business
{
  name: String,
  timezone: String,           // e.g. "America/New_York"
  createdAt: Date,
}

// Location  (MVP-core: exactly one per business)
{
  businessId: ObjectId,
  name: String,
  address: String,
}

// User  (staff account, also used for login)
{
  businessId: ObjectId,
  locationIds: [ObjectId],
  name: String,
  email: String,               // unique
  passwordHash: String,
  role: { type: String, enum: ['owner','manager','front_desk','stylist'] },
  avatarUrl: String,
  calendarColor: String,       // key into the tint palette, e.g. 'peach'
  serviceIds: [ObjectId],      // services this staff member performs
  active: { type: Boolean, default: true },
  createdAt: Date,
}

// Service
{
  businessId: ObjectId,
  name: String,
  category: String,
  durationMinutes: Number,
  price: Number,
  active: { type: Boolean, default: true },
}

// Client
{
  businessId: ObjectId,
  name: String,
  email: String,
  phone: String,
  avatarUrl: String,
  tags: [String],
  walletBalance: { type: Number, default: 0 },   // (extended — field present, unused until Phase 8)
  loyaltyPoints: { type: Number, default: 0 },   // (extended)
  createdAt: Date,
}

// Appointment
{
  businessId: ObjectId,
  locationId: ObjectId,
  clientId: ObjectId,
  staffId: ObjectId,
  serviceIds: [ObjectId],
  startTime: Date,
  endTime: Date,
  status: { type: String, enum: ['booked','confirmed','completed','cancelled','no_show'], default: 'booked' },
  notes: String,
  createdAt: Date,
}

// ClientRecord  (covers Notes / SOAP notes / Forms — one schema, discriminated by `type`)
{
  businessId: ObjectId,
  clientId: ObjectId,
  type: { type: String, enum: ['note','soap_note','form'] },
  title: String,                 // e.g. "Genius forms & waivers"
  body: String,                  // free text for notes/SOAP notes
  status: { type: String, enum: ['completed','pending'], default: 'completed' }, // used by forms
  fileUrl: String,                // optional attachment (form/waiver PDF or image)
  createdBy: ObjectId,            // User
  createdAt: Date,
}

// Product  (retail inventory)
{
  businessId: ObjectId,
  name: String,
  sku: String,
  category: String,
  price: Number,
  costPrice: Number,
  stockQty: Number,
  lowStockThreshold: { type: Number, default: 5 },
  active: { type: Boolean, default: true },
}

// Invoice
{
  businessId: ObjectId,
  locationId: ObjectId,
  clientId: ObjectId,
  appointmentId: ObjectId,        // optional
  lineItems: [{
    kind: { type: String, enum: ['service','product'] },
    refId: ObjectId,              // Service or Product id
    name: String,                 // denormalized snapshot at time of sale
    quantity: Number,
    unitPrice: Number,
    staffId: ObjectId,            // for commission attribution
  }],
  discountAmount: { type: Number, default: 0 },
  taxAmount: { type: Number, default: 0 },
  tipAmount: { type: Number, default: 0 },
  total: Number,
  paymentMethod: { type: String, enum: ['cash','card','other'] },
  status: { type: String, enum: ['paid','refunded','void'], default: 'paid' },
  createdAt: Date,
}

// ExpenseEntry
{
  businessId: ObjectId,
  category: String,
  amount: Number,
  note: String,
  date: Date,
  createdBy: ObjectId,
}
```

**Phase-8 collections (do not build in MVP-core, just be aware they're coming so naming stays consistent):** `Membership`, `Package`, `WalletTransaction`, `LoyaltyTransaction`, `WhatsAppMessageLog`, `PaymentGatewayTransaction`.

---

## 6. API Endpoints (REST)

All routes prefixed `/api`. Auth via `Authorization: Bearer <jwt>` except `/auth/*`. Every list/read endpoint scopes by the authenticated user's `businessId` — never trust a client-supplied businessId.

| Resource | Method & Path | Notes |
|---|---|---|
| Auth | `POST /auth/signup` | creates Business + Location + owner User |
| | `POST /auth/login` | returns JWT |
| | `GET /auth/me` | current user + business |
| Staff | `GET/POST /staff` | list / create |
| | `GET/PUT/DELETE /staff/:id` | |
| Services | `GET/POST /services` | |
| | `PUT/DELETE /services/:id` | |
| Clients | `GET/POST /clients` | `GET` supports `?search=` |
| | `GET/PUT/DELETE /clients/:id` | |
| Client records | `GET/POST /clients/:id/records` | `?type=note\|soap_note\|form` |
| | `PUT/DELETE /records/:id` | |
| Appointments | `GET /appointments?date=&locationId=` | day-view fetch |
| | `POST /appointments` | |
| | `PUT/DELETE /appointments/:id` | |
| Products | `GET/POST /products` | |
| | `PUT/DELETE /products/:id` | |
| Invoices (POS) | `POST /invoices` | creates invoice, decrements product stock, marks appointment `completed` if linked |
| | `GET /invoices` | list, filters by date range |
| | `POST /invoices/:id/refund` | |
| Expenses | `GET/POST /expenses` | |
| Reports | `GET /reports/sales?from=&to=` | |
| | `GET /reports/appointments?from=&to=` | |
| | `GET /reports/retail-sales?from=&to=` | |
| | `GET /reports/most-valuable-clients` | top 10 by lifetime spend |
| | `GET /reports/commission-earnings?staffId=&from=&to=` | |
| | `GET /reports/expenses?from=&to=` | |
| | `GET /reports/timesheets?from=&to=` | stubbed if no time-clock feature yet — return empty/zeroed structure, not an error |

---

## 7. Build Phases (execute in order; each phase should end with a runnable, demoable app)

**Phase 0 — Scaffold**
Initialize `/server` (Express, Mongoose connection, dotenv, error-handling middleware, CORS) and `/client` (Vite React, Tailwind configured with tokens from Section 3.2, React Router, base layout with `IconRailNav` + top bar shell). Add a `.env.example` in `/server` (`MONGODB_URI`, `JWT_SECRET`, `PORT`) and a root `README.md` with setup instructions.

**Phase 1 — Auth & Business Setup**
Signup/login flow, JWT issuance + auth middleware, protected route wrapper on the frontend, "current business" context provider. Seed script (`server/scripts/seed.js`) that creates a demo business called **"Flow Studio Brooklyn"**, one location, four staff members (**Octavia Genevieve, Emily Hartman, Marcus Ellison, Rachel Kim**) each assigned a distinct `calendarColor`, a handful of services, and a demo client (**Jenny Kang**) — this lets the agent (and you) visually compare the running app against the reference screenshots.

**Phase 2 — Staff & Services CRUD**
Full CRUD screens for both. Staff form includes calendar color picker (swatches from the `tint` palette).

**Phase 3 — Calendar (the hero screen)**
Day view with one column per staff member, hour gridlines, appointment blocks positioned/sized by `startTime`/`endTime`, tinted by the staff's `calendarColor`. Click empty slot → new-appointment modal (client picker/create-inline, service picker which auto-fills duration, staff, time). Click existing block → edit/cancel. Date stepper + "Today" button + staff-filter dropdown in the top bar, matching the reference layout.

**Phase 4 — Client CRM**
Clients list with search. Client profile `SlideOverDrawer` with tabs (Appointments / Notes-Forms / Portfolio / Memberships & Packages). Notes/Forms tab has its own sub-tabs (Notes / SOAP notes / Forms) with counts, grouped by date, `StatusBadge` for form completion state, "+ Add" to create a note.

**Phase 5 — POS & Invoicing**
Checkout flow launchable from a completed appointment or standalone ("Quick sale"). Line-item cart (services + retail products), discount/tax/tip fields, payment method selector (cash/card — card is a UI stub, no live processor), submit creates an `Invoice`, decrements `Product.stockQty`, and marks the linked `Appointment.status = 'completed'`.

**Phase 6 — Inventory**
Product CRUD, stock level column, low-stock visual flag when `stockQty <= lowStockThreshold`.

**Phase 7 — Reports Dashboard**
Card grid exactly matching the reference screenshot's 10 cards (icon + title + one-line description). Each card navigates to a simple table view backed by its `/reports/*` endpoint, with a date-range picker. This is the last MVP-core phase — the app should now be a coherent, demoable product end-to-end.

**Phase 8 — Extended features (fast-follow, build only after Phase 7 is solid)**
In priority order: Memberships & Packages (sell/redeem against an appointment), Customer Wallet + Loyalty points + cashback, role-based permission enforcement beyond basic role checks, multi-location switcher + location-scoped data, WhatsApp notification integration (start with a provider-agnostic `NotificationService` interface so WhatsApp/SMS/email can be swapped in), real payment gateway integration (Razorpay/Stripe — behind the same stubbed interface used in Phase 5), Super Admin cross-business console (only relevant once there is more than one business/tenant), biometric attendance device integration.

---

## 8. Non-Functional Requirements

- **Security:** bcrypt for password hashing (cost factor 10+), JWT secret from env, never log passwords or tokens, validate all input server-side (don't rely on frontend validation alone) using Zod or Joi, scope every DB query by `businessId` from the authenticated token — not from request params/body.
- **Error handling:** consistent JSON error shape `{ error: { message, code } }`; centralized Express error middleware; frontend shows toast/inline errors, never a blank screen on failure.
- **Validation:** appointment `startTime < endTime`, no double-booking a staff member for overlapping times (check on create/edit), required fields enforced both client and server side.
- **Responsiveness:** desktop-first (this is a front-desk tool), but the layout must not break down to a ~1024px tablet width, since that's a common front-desk device.
- **Demo data parity:** the seed script (Phase 1) should produce data that visually resembles the reference screenshots closely enough to sanity-check the UI against them (same staff names, similar appointment density across a day).
- **Testing minimum:** backend — auth flow + appointment create/overlap-rejection + invoice creation (stock decrement); frontend — smoke test that the calendar renders staff columns and that the client drawer opens.

---

## 9. Definition of Done for MVP (end of Phase 7)

- [ ] A new user can sign up, which creates a business, location, and owner account.
- [ ] The calendar renders multiple staff columns with color-coded, correctly time-positioned appointments, and supports create/edit/cancel.
- [ ] Clicking an appointment or client opens the client profile drawer with working Appointments and Notes/Forms tabs.
- [ ] A checkout can be completed from an appointment, producing an invoice and decrementing retail stock when products are included.
- [ ] The Reports screen shows the full card grid, and at least Sales, Appointments, and Most Valuable Clients drill into real data from the seeded demo business.
- [ ] Staff, Services, and Inventory each have working CRUD screens.
- [ ] The UI visually matches the design tokens and component patterns in Section 3 — pill buttons, pastel calendar tints, the slide-over drawer pattern, and the report-card grid.
