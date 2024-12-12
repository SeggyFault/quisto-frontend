import Heading from "../components/Heading";
import Button from "../components/Button";

const LostPassword = () => {
  return (
    <div>
      <main>
        <Heading level={1}>Password dimenticata?</Heading>
        <Heading level={2}>Inserisci la tua email e segui le istruzioni che riceverai via emai</Heading>
        <Button label="Resetta la password" />
      </main>
    </div>
  );
};

export default LostPassword;