import './App.css'
import Button from './components/Button'
import { BiCartAlt } from "react-icons/bi";

function App() {
 

  return (
    <div className='bg-midnight-400'>
      <div>
        {/*Navigation*/}
        <Button label="FAQs" href="#" className="bg-transparent text-grey-50 hover:text-flamingo-300" />
        <Button label="Accedi" href="#" className="py-2.5 px-12 font-bold text-grey-50 bg-transparent hover:bg-grey-50 hover:text-flamingo-300" />
        <Button label="Registrati" href="#" className="py-2.5 px-12 font-bold text-grey-50 hover:bg-flamingo-400 bg-flamingo-300" />
      </div>
      <div>
        {/*Hero*/}
        <Button label="Registrati" href="#" className="py-5 font-bold px-11 text-grey-50 hover:bg-flamingo-400 bg-flamingo-300" />
      </div>
      <div>
        {/*Come Funziona*/}
        <Button label="Ingrosso bevande e alimentare" href="#" className="px-8 py-4 mx-16 my-8 font-normal border-2 bg-flamingo-200 hover:bg-grey-50 text-grey-400 border-grey-400" />
        <Button label="Prodotti in assortimento" href="#" className="px-8 py-4 mx-16 my-8 font-normal border-2 bg-flamingo-200 hover:bg-grey-50 text-grey-400 border-grey-400" />
      </div>
      <div>
        {/*In offerta questo mese*/}
         <Button label="Aggiungi" href="#"  icon={BiCartAlt} className="px-8 py-2 font-bold text-grey-50 hover:bg-flamingo-400 bg-flamingo-300" />
      </div>
       <div>
        {/*Provaci e ci amerai!*/}
        <Button label="Ordina su Quisto" href="#" className="py-5 font-bold px-11 text-grey-50 hover:bg-flamingo-400 bg-flamingo-300" />
      </div>
      <div>
         {/*Footer*/}
         <Button label="Policy sulla privacy" href="#" className="text-xs text-grey-400 hover:underline" />
      </div>
    </div>
  )
}

export default App
