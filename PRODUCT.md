# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + Vite + TypeScript + Tailwind CSS + Express backend

## Users

Primary users are customers in the La Plata/Buenos Aires area seeking personalized products for:
- **Empresas**: Corporate branding, uniforms, promotional items
- **Regalos**: Personal gifts for special occasions
- **Eventos**: Concerts, brand activations, trade shows, product launches
- **Equipos**: Sports teams, clubs, competitive squads
- **Colegios**: School events, graduation promotions, field trip shirts

All users contact via WhatsApp to place orders; no checkout cart exists in the current build.

## Product Purpose

A digital catalog and conversion surface for Raíces Personalizaciones' customization services. The site showcases product lines, customization techniques, portfolio work, and volume pricing to drive WhatsApp contact and order placement.

## Positioning

Raíces Personalizaciones es un proyecto familiar de La Plata que combina impresión 3D, sublimación, DTF textil, bordado 3D y grabado láser. A diferencia de otros talleres, no hacemos lo que todos hacen: cada producto se concibe como vehículo de significado, no como decoración genérica.

Lo que nos diferencia:

- Acompañamos al bolsillo de las personas sin sacrificar calidad
- Producción con propósito y conciencia, no por hacer
- Productos únicos porque pensamos cada pieza desde la intención del cliente

## Operating Context

- **Order workflow**: Customer browses → contacts via WhatsApp → receives quote → confirms order → production → shipping via Vía Cargo
- **Physical location**: La Plata area (221 area code)
- **Production constraints**:
  - Sublimation always at 180°C (ceramic: 180s, polymer: 120s)
  - PLA and PETG are distinct materials - never assumed interchangeably
  - Orders tracked in `pedidos.md` (not yet created)
- **Business hours**: Not documented
- **Payment methods**: Not documented
- **Pricing**: Argentine pesos (ARS), tiered by quantity

## Capabilities and Constraints

**Confirmed capabilities:**

- 9 product lines with detailed customization options
- Volume discounts (12-45% depending on product and quantity)
- Multiple personalization techniques per product category
- Color selection for applicable products
- Size charts for apparel
- Portfolio gallery with real examples
- Dark/light theme toggle (dark default)
- WhatsApp integration for inquiries
- National shipping via Vía Cargo (insured)

**Technical constraints:**

- Single-page application with hash-based routing for detail pages
- Gemini API for potential AI features (see .env.example)
- No server-side rendering (Vite SPA)

**Undecided/Open:**

- Payment methods accepted
- Physical store hours
- Return/refund policy
- Production lead times (stated as "varies by product and quantity")
- Warranty or quality guarantee specifics

## Brand Commitments

**Name**: Raíces Personalizaciones
**Origin**: Proyecto familiar. El nombre refleja la filosofía central: conectar con los orígenes, ser el conductor de lo que el cliente quiere transmitir a través de su proyecto (sublimación, impresión 3D, etc.). No es poner un logo cualquiera — es ayudar a que cada pieza refleje quién es esa persona y qué significa para ella.
**Meaning**: Dedicar pensamiento y proyectarlo en un regalo que refleje lo que esa cosa significa para esa persona. No se trata de gastar en lujo, sino de que algo pequeño transmita un gran mensaje.
**Voice**: Cercano, con propósito, consciente. Español argentino. Habla del proceso como acompañamiento, no como transacción.
**Contact**:
- WhatsApp: +54 9 221 626 8594
- Display: 221 626 8594
**Tagline**: "Crea • Imprime • Impacta"

## Differentiators

- **Trabajar con propósito y conciencia** — no hacer por hacer
- **No hacemos lo que todos hacen** — productos únicos, diferenciación real
- **Calidad en producción** sin encarecer innecesariamente
- **Acompañar al bolsillo de las personas** — accesibilidad sin sacrificar calidad

## Evidence on Hand

**Real assets in repo:**

- Product photography in `src/assets/images/`
- SVG brand icons (impresion_3d.svg, neoprene_sublimable.svg, puzzle_sublimable.svg)
- Portfolio images with client testimonials
- Size chart images for apparel

**Absent evidence:**

- Testimonials section content (portfolio items imply satisfaction but no quotes)
- Customer case studies
- Business certifications or partnerships
- Awards or press mentions
- Actual customer photos of finished products

## Product Principles

1. **Show the mechanism, don't just claim quality** - Demonstrate customization techniques through portfolio examples and technical explanations
2. **Lower the barrier to start** - MOQ of 1, clear pricing, easy WhatsApp contact
3. **Respect the craft** - Explain technique differences (DTF vs sublimación vs bordado) so customers choose correctly
4. **Scale with the customer** - Volume discounts reward bulk orders without penaltying individuals
5. **Local trust** - Emphasize local Buenos Aires presence for accountability and faster communication
6. **Purpose-driven, not transactional** - Every piece carries meaning; we accompany the client's intent, not just fulfill an order
7. **Accessible excellence** - Quality production at prices that respect people's budgets
