import Button from '../components/Button';
import Heading from '../components/Heading';
import Feature from '../components/Feature';
import CallToAction from '../components/CallToAction';
import Accordion from '../components/Accordion';
import { BiCartAlt } from "react-icons/bi";

function Home() {
  const featuresData = [
  {
    image: "./src/assets/images/icons/icon-bolt.png",
    heading: { 
      children: 'Velocità', 
      className: 'text-2xl text-center text-midnight-400', 
      level: 3,
    },
    description: 'Ordina entro le 14 e saremo da te in 48h con la merce',
  },
  {
    image: "./src/assets/images/icons/icon-relax.png",
    heading: { 
      children: 'Zero stress', 
      className: 'text-2xl text-center text-midnight-400', 
      level: 3, 
    },
    description: 'Gestire 6 fornitori diversi o andare tu a fare la spesa? Addio!',
  },
  {
    image: "./src/assets/images/icons/icon-24-7.png",
    heading: { 
      children: 'Flessibilità', 
      className: 'text-2xl text-center text-midnight-400', 
      level: 3
    },
    description: 'Puoi ordinare online 24/7 o su Whatsapp o al telefono',
  },
  {
    image: "./src/assets/images/icons/icon-truck.png",
    heading: { 
      children: 'Affidabilità', 
      className: 'text-2xl text-center text-midnight-400', 
      level: 3, 
    },
    description: 'Siamo ossessionati dalla qualità del servizio: per questo i clienti tornano',
  },
];
 
  return (
    <div>
      <main>
        
        {/*Come Funziona*/}
        <section className='grid gap-4 md:grid-cols-2 py-14'>
          <div>
            <Heading level={2} className="text-midnight-400 text-[64px] mb-8">Come Funziona</Heading>
            <ol className='flex flex-col gap-10'>
              <li className='flex items-center gap-6'>
                <div className='flex justify-center items-center min-w-12 min-h-12 border-[0.5px] rounded-full text-midnight-300 bg-flamingo-100 border-flamingo-200'>
                  <span className='text-2xl'>1</span>
                </div>
                <p className='text-xl text-grey-300'>{"Ti registri al sito (bastano 20 secondi!!) e consulti subito"} <span className='font-bold'>assortimento</span> di prodotti e <span className='font-bold'>prezzi</span></p>
              </li>
              <li className='flex items-center gap-6'>
                <div className='flex justify-center items-center min-w-12 min-h-12 border-[0.5px] rounded-full text-midnight-300 bg-flamingo-100  border-flamingo-200'>
                  <span className='text-2xl'>2</span>
                </div>
                <p className='text-xl text-grey-300'>Ordini online 24/7, <span className='font-bold'>quando ti è comodo</span>, senza andare fisicamente all’ingrosso o aspettare un agente</p>
              </li>
              <li className='flex items-center gap-6'>
                <div className='flex justify-center items-center min-w-12 min-h-12 border-[0.5px] rounded-full text-midnight-300 bg-flamingo-100  border-flamingo-200'>
                  <span className='text-2xl'>3</span>
                </div>
                <p className='text-xl text-grey-300'>Ricevi l’ordine al tuo locale <span className='font-bold'>entro due giorni</span> e puoi anche<span className='uppercase'> Pagare alla consegna!!</span></p>
              </li>
            </ol>
          </div>
          <div>
            <img src="./src/assets/images/backgrounds/how-it-works.png" alt="" />
          </div>
        </section>
        
        <section className='grid gap-5 py-16 rounded-[48px] md:grid-cols-3 bg-flamingo-100'>
          <div className='flex flex-col items-center gap-5'>
            <p className='text-3xl font-light font-urbanist text-midnight-400'><span className='font-bold'>Consegna</span> gratis in</p>
            <span className='text-6xl font-inter text-flamingo-300'>48H</span>
          </div>
          
          <div className='flex flex-col items-center gap-5'>
            <p className='text-3xl font-light font-urbanist text-midnight-400'><span className='font-bold'>Ordine</span> minimo solo</p>
            <span className='text-6xl font-inter text-flamingo-300'>100€</span>
          </div>

          <div className='flex flex-col items-center gap-5'>
            <p className='text-3xl font-bold font-urbanist text-midnight-400'>Ordina online</p>
            <span className='text-6xl font-inter text-flamingo-300'>24/7</span>
          </div>
        </section>

        <section className='flex gap-10 mx-8 mt-16 mb-8 place-content-center'>
          <Button label="Ingrosso bevande e alimentare" href="#" className="px-8 py-4 font-normal border-2 bg-flamingo-200 hover:bg-grey-50 text-grey-400 border-grey-400" />
          <Button label="Prodotti in assortimento" href="#" className="px-8 py-4 font-normal border-2 bg-flamingo-200 hover:bg-grey-50 text-grey-400 border-grey-400" />
        </section>
        
      </main>

      {/*In offerta questo mese*/}
      <section className='py-14'>
        <Heading level={2} className="text-midnight-400 text-center text-[64px]">In offerta questo mese</Heading>
        <Button label="Aggiungi" href="#"  icon={BiCartAlt} className="px-8 py-2 font-bold text-grey-50 hover:bg-flamingo-400 bg-flamingo-300" />
      </section>
      
      {/*Perché Quisto?*/}
      <section className='py-14'>
        <Heading level={2} className="text-midnight-400 text-center text-[64px] mb-10">Perché Quisto?</Heading>
        <div className="container grid gap-16 md:gap-8 md:grid-cols-2 xl:grid-cols-4 features-grid">
            {featuresData.map((feature, index) => (
              <Feature
                key={index}
                image={feature.image}
                heading={feature.heading}
                description={feature.description}
              />
            ))}
        </div>
      </section>
      
      {/*Provaci e ci amerai!*/}
      <CallToAction/>

      {/*FAQ*/}
      {console.log(<Accordion />)}
      <Accordion />
      
    </div>
  )
}

export default Home
