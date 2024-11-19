import { HelmetProvider, Helmet } from "react-helmet-async";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

type BaseLayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

const BaseLayout: React.FC<BaseLayoutProps> = ({ children, title, description }) => {
  return (
    <HelmetProvider>
      <div id="page-container" className="flex flex-col gap-6 p-6 w-full max-w-3xl mx-auto">
        <Helmet>
          <title>{title + " - Diego Costa" || "Diego Costa"}</title>
          <meta name="description" content={description || "Web developer, audiovisual editor and surfer"} />
        </Helmet>

        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </div>
    </HelmetProvider>
  );
};

export default BaseLayout;
