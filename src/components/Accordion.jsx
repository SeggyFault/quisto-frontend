import Heading from "./Heading";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  
  const accordionData = [
    {
      title: "Cos’è Quisto?",
      content: "Quisto è un grossista online che rifornisce bar, ristoranti, tabaccherie, panifici e uffici di bevande, alimentari e tutto il necessario per un’ attività commerciale. Si può ordinare in pochi minuti direttamente sul sito www.quisto.it, la consegna avviene entro due giorni e si può anche pagare l’ordine alla consegna!",
    },
     {
      title: "Quali sono i vostri principali vantaggi?",
      content: (
        <>
          Ecco alcuni dei motivi per cui i nostri clienti ci apprezzano: 
          <ul className="mt-4 ml-12 list-disc">
            <li>Prezzi competitivi sempre e offerte ogni mese</li>
            <li>Consegnamo la merce entro sole 48h</li>
            <li>La consegna è gratuita e il minimo d’ordine di soli 100€</li>
            <li>{"Offriamo la possibilità di pagare alla consegna (in contanti o con carta)"}</li>
            <li>Si può ordinare online 24/7 ma anche su Whatsapp e via telefono</li>
          </ul>
        </>
      ),
        
    },
      {
      title: "Come ordino su Quisto?",
      content: (
        <>
          Ordinare su Quisto è semplicissimo, veloce e puoi farlo quando è comodo a te! Basta registrarsi al sito <a href="/" className="hover:underline">CLICCANDO QUI:</a> potrai accedere immediatamente ad assortimento e prezzi, riempire il tuo carrello, confermare l’ordine e pagarlo anche alla consegna, che arriverà entro due giorni.
        </> 
      ),
    },
     {
      title: "Perché fidarmi di Quisto?",
      content: "I fondatori di Quisto hanno oltre 20 anni di esperienza nel settore Ho.re.ca: questo ci permette di avere un assortimento completo (e in costante crescita) ai migliori prezzi sul mercato. Il nostro obiettivo è offrire una piattaforma comoda e conveniente dove acquistare TUTTO il necessario per la propria attività, con la comodità di gestire un’unica fattura invece che decine di fornitori diversi. Siamo poi attenti ad offrire un servizio preciso ed affidabile, fatto di consegne puntuali, prodotti sempre disponibili, assistenza clienti veloce e ascolto costante delle richieste dei clienti.",
    },
  ];

  

  return (
    <section className="py-20 min-w-[560px] max-w-[660px] mx-auto px-5 md:px-10">
      <Heading level={2} className="mb-8 text-4xl text-center text-midnight-400 md:text-[64px]">FAQs</Heading>
      
      <div>
        {accordionData.map((item, index) => (
          <AccordionItem key={index} title={item.title} content={item.content}/>
        ))}
      </div>

    </section>
  )
};

export default Accordion;