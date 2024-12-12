import Heading from "../components/Heading";
import Button from "../components/Button";

const Registration = () => {
  return (
    <div>
      <main>
        <Heading level={1}>Registrati e scopri i nostri prezzi</Heading>
        <Button label="Registrati" className="py-5 mt-4 font-bold px-11 text-grey-50 hover:bg-flamingo-400 bg-flamingo-300"/>
      </main>
    </div>
  );
};

export default Registration;