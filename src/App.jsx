import './App.css'
import Button from './components/Button'
import Navigation from './components/Navigation';
import Heading from './components/Heading';
import { BiCartAlt } from "react-icons/bi";

function App() {
 

  return (
    <div className='height-test'>
        <Navigation href="#" className="sticky top-0 bg-midnight-400"/>
      <div>
        {/*Hero*/}
        <Heading level={1} className="text-2xl text-left capitalize text-grey-200">Il grossista online di bevande e alimentari, in 48h al tuo</Heading>
        <Button label="Registrati" href="#" className="py-5 font-bold px-11 text-grey-50 hover:bg-flamingo-400 bg-flamingo-300" />
      </div>
      <div>
        {/*Come Funziona*/}
        <Heading level={2} className="text-midnight-400 text-center text-[64px]">Come Funziona</Heading>
        <Button label="Ingrosso bevande e alimentare" href="#" className="px-8 py-4 mx-16 my-8 font-normal border-2 bg-flamingo-200 hover:bg-grey-50 text-grey-400 border-grey-400" />
        <Button label="Prodotti in assortimento" href="#" className="px-8 py-4 mx-16 my-8 font-normal border-2 bg-flamingo-200 hover:bg-grey-50 text-grey-400 border-grey-400" />
      </div>
      <div>
        {/*In offerta questo mese*/}
        <Heading level={2} className="text-midnight-400 text-center text-[64px]">In offerta questo mese</Heading>
        <Button label="Aggiungi" href="#"  icon={BiCartAlt} className="px-8 py-2 font-bold text-grey-50 hover:bg-flamingo-400 bg-flamingo-300" />
      </div>
      <div>
        {/*Perché Quisto?*/}
        <Heading level={2} className="text-midnight-400 text-center text-[64px]">Perché Quisto?</Heading>
        <Heading level={3} className="text-2xl text-center text-midnight-400">Velocità</Heading>
        <Heading level={3} className="text-2xl text-center text-midnight-400">Zero stress</Heading>
        <Heading level={3} className="text-2xl text-center text-midnight-400">Flessibilità</Heading>
        <Heading level={3} className="text-2xl text-center text-midnight-400">Affidabilità</Heading>
      </div>
       <div>
        {/*Provaci e ci amerai!*/}
        <Heading level={2} className="text-midnight-400 text-center text-[64px]">Provaci e ci amerai!</Heading>
        <Button label="Ordina su Quisto" href="#" className="py-5 font-bold px-11 text-grey-50 hover:bg-flamingo-400 bg-flamingo-300" />
      </div>
      <div>
        {/*FAQ*/}
        <Heading level={2} className="text-midnight-400 text-center text-[64px]">FAQs</Heading>
        <Heading level={3} className="text-2xl text-center text-midnight-400">Cos’è Quisto?</Heading>
        <Heading level={3} className="text-2xl text-center text-midnight-400">Quali sono i vostri principali vantaggi?</Heading>
        <Heading level={3} className="text-2xl text-center text-midnight-400">Come ordino su Quisto?</Heading>
        <Heading level={3} className="text-2xl text-center text-midnight-400">Perché fidarmi di Quisto?</Heading>
      </div>
      <div>
         {/*Footer*/}
         <Button label="Policy sulla privacy" href="#" className="text-xs text-grey-400 hover:underline" />
      </div>
    </div>
  )
}

export default App
