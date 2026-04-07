import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/root-layout";
import { AboutPage } from "./pages/about";
import { APIReferencePage } from "./pages/api-reference";
import { BlogPage } from "./pages/blog";
import { CareersPage } from "./pages/careers";
import { ContactPage } from "./pages/contact";
import { CookiePolicy } from "./pages/cookie-policy";
import { DemoPage } from "./pages/demo";
import { DocumentationPage } from "./pages/documentation";
import { FeaturesPage } from "./pages/features";
import { GetStartedPage } from "./pages/get-started";
import { HomePage } from "./pages/home";
import { IntegrationsPage } from "./pages/integrations";
import { PartnersPage } from "./pages/partners";
import { PartnershipForm } from "./pages/partnership-form";
import { PricingPage } from "./pages/pricing";
import { PrivacyPolicy } from "./pages/privacy-policy";
import { SignInPage } from "./pages/sign-in";
import { SupportPage } from "./pages/support";
import { TermsOfService } from "./pages/terms-of-service";
import { UseCasesPage } from "./pages/use-cases";
import { NotFoundPage } from "./pages/not-found"; // 

export const sitemapRoutes = [
  "/",
  "/features",
  "/pricing",
  "/use-cases",
  "/integrations",
  "/documentation",
  "/api-reference",
  "/blog",
  "/support",
  "/about",
  "/careers",
  "/contact",
  "/partners",
  "/demo",
  "/privacy-policy",
  "/terms-of-service",
  "/cookie-policy",
  "/sign-in",
  "/get-started",
  "/partnership-form",
];

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, Component: HomePage },
      { path: "features", Component: FeaturesPage },
      { path: "pricing", Component: PricingPage },
      { path: "use-cases", Component: UseCasesPage },
      { path: "integrations", Component: IntegrationsPage },
      { path: "documentation", Component: DocumentationPage },
      { path: "api-reference", Component: APIReferencePage },
      { path: "blog", Component: BlogPage },
      { path: "support", Component: SupportPage },
      { path: "about", Component: AboutPage },
      { path: "careers", Component: CareersPage },
      { path: "contact", Component: ContactPage },
      { path: "partners", Component: PartnersPage },
      { path: "demo", Component: DemoPage },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms-of-service", Component: TermsOfService },
      { path: "cookie-policy", Component: CookiePolicy },
      { path: "sign-in", Component: SignInPage },
      { path: "get-started", Component: GetStartedPage },
      { path: "partnership-form", Component: PartnershipForm },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);