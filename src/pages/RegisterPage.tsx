
import RegisterForm from "@/components/auth/RegisterForm";
import { Helmet } from "react-helmet";

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Create Account | GreenNova</title>
        <meta 
          name="description" 
          content="Create your GreenNova account to start investing in renewable energy projects." 
        />
      </Helmet>
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
