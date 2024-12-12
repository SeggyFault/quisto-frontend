import Heading from "./Heading";
import Button from "./Button";

const CallToAction = () => {
  return (
    <section className='my-14 mx-5 md:mx-10 p-14 rounded-[48px] bg-flamingo-100 flex flex-col gap-2 items-center md:items-start'>
        <Heading level={2} className="text-midnight-400 text-center md:text-left text-4xl md:text-[64px] md:pb-4">Provaci e ci amerai!</Heading>
        <p className="text-grey-300 max-w-[400px] text-center md:text-left">{"Ordine minimo solo 100€, consegna GRATUITA e puoi pagare alla consegna (sia in contanti che con carta)."}</p>
        <Button label="Ordina su Quisto" href="/registrati" className="py-5 mt-4 font-bold px-11 text-grey-50 hover:bg-flamingo-400 bg-flamingo-300" />
    </section>
  );
};

export default CallToAction;