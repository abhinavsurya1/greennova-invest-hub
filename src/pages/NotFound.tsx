
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | GreenNova</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center bg-greennova-soft-blue dark:bg-gray-900 p-4">
        <div className="text-center">
          <h1 className="text-9xl font-extrabold text-greennova-purple">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been removed or doesn't exist.
          </p>
          <div className="mt-8">
            <Link to="/">
              <Button className="bg-greennova-purple hover:bg-greennova-secondary-purple">
                Back to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
