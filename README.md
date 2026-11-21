# Delight Paints Website

A responsive product and brand website for **Delight Paints**. The site presents the paint range, helps visitors explore products and colours, shares information about the brand, and provides a contact form for enquiries.

## Features

- **Responsive design** – layouts adapt to mobile, tablet, and desktop screens.
- **Product catalogue** – products are maintained as structured data and can be presented by category.
- **Product details** – individual product pages display descriptions, features, specifications, and usage information when available.
- **Category navigation** – visitors can open product listings filtered by a selected category.
- **Colours section** – a dedicated area for exploring colour options.
- **Brand and contact pages** – information about Delight Paints and a form for customer enquiries.
- **Testimonials** – customer feedback displayed in an animated, continuously moving marquee.
- **Reusable layout** – shared navigation and footer components are used across the main pages.
- **Scroll-to-top navigation** – main pages return to the top when the route changes.
- **Email enquiries without a custom backend** – the contact form uses EmailJS to send submissions to the configured recipient email address.

## Tech Stack

- **React** – component-based user interface
- **React Router** – client-side routing
- **Tailwind CSS** – responsive styling and UI design
- **EmailJS** (`@emailjs/browser`) – client-side contact form email delivery
- **React Icons** – interface icons

The project uses Vite-style environment variables (`import.meta.env`).

## Pages and Routes

| Page | Route |
|---|---|
| Home | `/` |
| About Us | `/about` |
| Products | `/products` |
| Colours | `/colors` |
| Contact | `/contact` |
| Product Details | `/product/:slug` |

Unknown routes display the Not Found page.

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd <project-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure EmailJS

The contact form sends emails through EmailJS, so a custom backend is not required for this feature.

1. Create an account at [EmailJS](https://www.emailjs.com/).
2. Add and connect an email service in the EmailJS dashboard.
3. Create an email template. Set **To Email** to the inbox that should receive enquiries.
4. Configure the template variables to match the form fields:

   - `{{name}}`
   - `{{email}}`
   - `{{phone}}`
   - `{{subject}}`
   - `{{message}}`

5. Copy the Service ID, Template ID, and Public Key.
6. Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

7. Restart the Vite development server after changing environment variables.

**EmailJS security note:** Use only the EmailJS **Public Key** in the frontend. Never expose the EmailJS Private Key in React code, frontend environment variables, or a committed file. Configure the allowed website origins and available anti-spam protections in the EmailJS dashboard. The recipient address is configured in the EmailJS template's **To Email** field; the visitor's email should be used as the reply-to address.

### 4. Start the development server

```bash
npm run dev
```

Vite will print the local development URL in the terminal, usually `http://localhost:5173`.

### 5. Create a production build

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Product Data

Product information is stored in JavaScript data rather than fetched from a backend. Product entries follow a common structure so the catalogue and product detail page can render information consistently.

A product entry can contain:

```js
{
  id: 1,
  name: "Product Name",
  slug: "product-name",
  category: "Product Category",
  specialType: null,
  image: "/images/product/product-name.png",
  tagline: "A short product statement.",
  description: "A concise product description.",
  features: [],
  warranty: null,
  specifications: [],
  howToUse: []
}
```

Keep each `slug` unique because it is used by the product details route (`/product/:slug`). Product image paths should match the actual files in the project's public image directory. Add technical specifications, warranty details, dilution ratios, drying times, and application instructions only when they are confirmed by the relevant product information.

## Contact Form

The contact form uses EmailJS directly from the browser:

1. A visitor completes the contact form.
2. The React application sends the form values to the configured EmailJS service and template.
3. EmailJS delivers the enquiry to the recipient configured in the template.
4. The business can reply using the visitor's email address configured as the reply-to value.

This setup avoids maintaining a custom mail-sending backend. Email delivery still depends on the EmailJS account, service connection, template configuration, and plan limits. Client-side validation and anti-spam protections should be enabled before publishing the site.

## Assets and Content

- Keep product images in the product image directory used by the product data.
- Keep category images in the category image directory referenced by the category data.
- Use consistent product slugs and image paths when adding or updating products.
- Optimise large images and videos before deploying to keep page loading responsive.

## Deployment

The site can be deployed to a static hosting platform that supports React/Vite applications. Configure the three `VITE_EMAILJS_*` environment variables in the hosting provider's project settings before building the production version.

After deployment, add the production website origin to the allowed domains/origins in EmailJS and test the contact form using the deployed site.

## Important Notes

- This is a frontend website; the contact form does not require a custom application backend.
- Product data is maintained in the frontend project. Updating product information requires updating the corresponding data entry and any related image assets.
- Do not commit `.env` files or private credentials to source control.
- Verify all product claims and technical application instructions against approved product documentation before publishing.