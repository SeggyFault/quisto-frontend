import Heading from "../components/Heading";
import Button from "../components/Button";

const Login = () => {
  return (
    <div>
      <main>
        <Heading level={1}>Accedi al tuo account</Heading>
        <Button label="Accedi" />
        <Button label="Registrati"/>
        <Button label="Hai dimenticato la password?" href="/lost-password" />
      </main>
    </div>
  );
};

export default Login;