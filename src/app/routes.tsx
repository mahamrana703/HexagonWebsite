import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/home";
import { FeaturesPage } from "./pages/features";
import { PricingPage } from "./pages/pricing";
import { UseCasesPage } from "./pages/use-cases";
import { IntegrationsPage } from "./pages/integrations";
import { DocumentationPage } from "./pages/documentation";
import { APIReferencePage } from "./pages/api-reference";
import { BlogPage } from "./pages/blog";
import { SupportPage } from "./pages/support";
import { AboutPage } from "./pages/about";
import { CareersPage } from "./pages/careers";
import { ContactPage } from "./pages/contact";
import { PartnersPage } from "./pages/partners";
import { PrivacyPolicy } from "./pages/privacy-policy";
import { TermsOfService } from "./pages/terms-of-service";
import { CookiePolicy } from "./pages/cookie-policy";
import { SignInPage } from "./pages/sign-in";
import { GetStartedPage } from "./pages/get-started";
import { RootLayout } from "./components/root-layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
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
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms-of-service", Component: TermsOfService },
      { path: "cookie-policy", Component: CookiePolicy },
      { path: "sign-in", Component: SignInPage },
      { path: "get-started", Component: GetStartedPage },
    ],
  },
]);