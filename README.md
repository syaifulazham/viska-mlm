# **MLM Application Blueprint**

## **Technology Stack**
- **Frontend:** Svelte 5 with SvelteKit 2 and ShadCN-Svelte for UI components
- **UI Framework:** Tailwind CSS for styling and responsiveness
- **Backend:** Supabase (PostgreSQL, Authentication, Storage, and Functions)
- **Deployment:** Vercel (Frontend) + Supabase Cloud
- **Authentication:** Supabase Auth (Magic Link, OTP, OAuth, MyKad Verification)
- **Payment Processing:** Stripe, FPX, Manual Bank Transfers
- **Security:** SSL (Full HTTPS), Role-Based Access Control (RBAC), TAC Authentication
- **External Integrations:** EasyParcel, SMS API, WhatsApp API, **Xero API (Inventory & Accounting), Shopify API (E-Commerce Integration)**
- **Data Visualization:** D3.js (https://d3js.org/), Layerchart (https://www.layerchart.com/)

## **System Architecture**
### **1. User Roles & Access Control**
- **HQ Admin:** Full access (manage agents, view reports, configure commission structure)
- **Agent:** Limited access (track sales, recruit sub-agents, withdraw earnings)
- **Reseller:** Manages orders, sales, and downline tracking
- **Stockist:** Manages stock distribution and warehouse orders
- **Customer:** Can buy products & refer others

### **2. Authentication & Security**
- **Use Supabase Authentication**
- **Implement OAuth (Google, Facebook, Apple login)**
- **Allow email/password authentication with password reset & verification**
- **Multi-Factor Authentication (MFA) via email OTP**
- **Secure JWT-based authentication for API requests**
- **Role-Based Access Control (RBAC)**

### **3. Commission Structure Configuration (Admin Panel)**
- **Unilevel:** Direct commissions based on hierarchical levels
- **Binary:** Two-legged system, balancing required for commission payout
- **Matrix:** Fixed width and depth, spillover logic
- **Breakaway:** Resellers breaking out at a certain sales threshold
- **Custom Settings:** Percentage configuration for each level, override commission rules

### **4. Regional Configuration & Multi-Region Support**
- **Hierarchical Region Model:**
  - **HQ (Top Tier)**
  - **Regional HQ:** (Malaysia, Singapore, Philippines, Indonesia)
  - **Level 1 Agent**
  - **Level 2 Agent**
  - **Level N Agent** (Agents can register their lower-tier agents)
- **Important Regional Profile Details:**
  - **Agent Name**
  - **Agent Code (e.g., MY, SG, PH, ID)**
  - **Agent HQ Assignment**
  - **Regional Tax Rules**
  - **Regional Commission Structure**
  - **Payment Gateway Preferences**
  - **Shipping & Courier Integrations**
  - **Localized Content & Language Settings**

### **5. Dedicated Regional Endpoints:**
  - **Main Page (Malaysia):** `https://fefet.com/my`
  - **Login Page (Malaysia):** `https://fefet.com/my/auth/login`
  - **Dashboard (Malaysia):** `https://fefet.com/my/dashboard`
  - **Main Page (Singapore):** `https://fefet.com/sg`
  - **Main Page (Philippines):** `https://fefet.com/ph`
  - **Main Page (Indonesia):** `https://fefet.com/id`
  - **Custom Regional Subdomains (Optional):** `my.fefet.com`, `sg.fefet.com`, `ph.fefet.com`, `id.fefet.com`

### **6. AI-Powered Business Insights**
- **Predictive Sales Analytics**
- **Use AI to forecast sales trends & distributor retention risks**
- **Show real-time business intelligence dashboards**
- **Fraud Detection & Compliance Monitoring**
- **AI-powered MLM plan violation monitoring**
- **Identify suspicious transactions & prevent illegal pyramid-like activities**

### **7. Seamless E-Commerce Integration**
- **Shopify API Integration for Direct Product Sales**
- **Sync product inventory between MLM platform & Shopify**
- **Allow customers to purchase directly via Shopify while tracking sales for commission calculations**
- **Enable agents & resellers to promote Shopify products with affiliate tracking**

### **8. Reports & Analytics**
- Reseller Orders & Registrations
- Customer Purchases & Stock Reports
- Bonus Statements & Group Sales
- Profit & Loss Reports
- Sales by Region & Hierarchy
- Cancelled Orders & Daily Sales
- Inactive & Frozen Resellers
- Warehouse & eTunai Transactions
- **Xero API Integration for Financial Reports & Accounting**
- **Data Visualization using D3.js & Layerchart**

## **System Architecture & Development Plan**
### **Phase 1: Core System Development**
- Set up Supabase backend (PostgreSQL, Authentication, Storage)
- Implement authentication (OAuth, email/password, MFA, JWT)
- Develop core user roles & access control (HQ Admin, Agent, Reseller, Stockist, Customer)
- Design and build commission structures (Unilevel, Binary, Matrix, Breakaway)
- Develop regional configuration & endpoints
- Deploy MVP on Vercel & Supabase Cloud

### **Phase 2: Product & Sales Management**
- Implement product catalog with hierarchical pricing
- Develop order processing (shopping cart, invoices, delivery management)
- Integrate payment gateways (Stripe, FPX, bank transfers)
- Implement warehouse & stock management
- Develop customer loyalty & referral program
- **Integrate Shopify for e-commerce sales & inventory syncing**

### **Phase 3: AI & Analytics Integration**
- Implement AI-driven predictive sales analytics
- Develop real-time business intelligence dashboards using D3.js & Layerchart
- Integrate Xero API for financial reports & accounting
- Build fraud detection & compliance monitoring system

### **Phase 4: Multi-Region Expansion & Enhancements**
- Expand platform to multiple regions with dedicated endpoints
- Implement language localization & regional tax compliance
- Integrate courier & logistics APIs for automated shipping
- Optimize performance & security enhancements

### **Phase 5: Advanced Features & Scaling**
- Introduce mobile app (Svelte Native or PWA)
- Develop API endpoints for third-party integrations
- Implement advanced AI features for deeper business insights
- Optimize infrastructure for high scalability

## **Development Guidelines**
- Ensure all components are compatible with **Cloudflare Workers**
- Follow best practices for **Supabase authentication & role management**
- Prioritize **performance & scalability** for a large agent network
- Keep UI **responsive & mobile-friendly** (using **TailwindCSS & ShadCN UI**)

## **Deployment Strategy**
- **Frontend:** Deployed on Vercel (Svelte 5 with SvelteKit 2, ShadCN-Svelte UI, Tailwind CSS)
- **Backend:** Supabase (PostgreSQL, Authentication, Storage)
- **CDN:** Cloudflare for asset delivery
- **Security:** Full SSL/TLS, Role-Based Access, Secure API Calls

---

### **Conclusion**
This blueprint now includes a structured agent-based configuration, ensuring tailored regional tax, commission, and operational settings. The hierarchical model supports HQ, Regional HQs, and multiple agent sub-levels, allowing agents to register their lower-tier agents. Tailwind CSS enhances the UI for a modern, responsive experience. The integration of **Xero API** allows seamless inventory and accounting synchronization, making financial tracking more efficient. **D3.js and Layerchart** provide advanced data visualization for reports and analytics. Additionally, **AI-powered business insights** offer predictive analytics, fraud detection, and compliance monitoring. The **Shopify integration** ensures seamless e-commerce functionality for direct product sales.

