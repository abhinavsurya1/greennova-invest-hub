
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TokenizedInvestment from "@/components/investment/TokenizedInvestment";

const TokenizedInvestmentsPage = () => {
  return (
    <>
      <Helmet>
        <title>Tokenized Investments | GreenNova</title>
        <meta
          name="description"
          content="Invest in renewable energy projects using cryptocurrency and receive GNC tokens representing ownership."
        />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <TokenizedInvestment />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TokenizedInvestmentsPage;
