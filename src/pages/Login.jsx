import Heading from "../components/Heading";
import Button from "../components/Button";

const Login = () => {
  return (
    <div>
      <main>
        <Heading level={1}>Accedi al tuo account</Heading>
        <Button label="Accedi" />
        <Button label="Registrati"/>
      </main>
    </div>
  );
};

export default Login;