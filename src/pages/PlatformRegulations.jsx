const PlatformRegulations = () => {
  return (
    <div className="px-5 py-10 md:px-10">
      <main className="font-inter">
        <div className="flex flex-col gap-4 md:gap-7">
          <h1 className="text-3xl font-extrabold text-center md:text-left md:text-5xl text-flamingo-300 font-inter">Regolamento d’uso della piattaforma eoreka.it</h1>
          <span className="mb-10 text-base text-center md:text-sm md:text-left font-inter text-grey-400">Disponibile solo in italiano</span>
        </div>
        <div className="flex flex-col text-sm md:text-xs">
          <p>Gentile Cliente,</p>
          <p>
            prima di procedere alla registrazione e utilizzare le funzionalità della Piattaforma 
            di Eoreka La invitiamo a leggere attentamente le condizioni e i termini riportati nel 
            presente Regolamento.
          </p>
          <p>
            Il completamento della procedura di registrazione alla Piattaforma 
            determina l’accettazione del Regolamento e della sua comunicazione in formato esclusivamente 
            digitale.
          </p>
          <p>
            Il presente Regolamento può essere stampato o salvato su altro supporto duraturo e accessibile.
          </p>
        </div>

        {/* FUNZIONALITÀ */}
        <section className="flex flex-col gap-2 my-4">
          <span className="text-base underline uppercase md:text-sm">1. Funzionalità della piattaforma</span>
          <ol className="text-sm md:text-xs">
            <li>
              <p><span className="font-bold">1.1</span> La Piattaforma offre al Cliente il servizio di compilazione e trasmissione, per via telematica, di ordini a Eoreka per l’acquisto dei Prodotti selezionati e inseriti nel Carrello.</p>
            </li>
            <li>
              <p><span className="font-bold">1.2</span> L’iscrizione alla Piattaforma è gratuita e non comporta obbligo di acquisto.</p>
            </li>
            <li>
              <p><span className="font-bold">1.3</span> La conclusione del contratto avente a oggetto l’acquisto, da parte del Cliente, dei Prodotti offerti da Eoreka avviene attraverso il completamento delle seguenti fasi:</p>
              <ol className="py-4 pl-6 list-decimal list-outside">
                <li>registrazione e accesso alla Piattaforma (articolo 3);</li>
                <li>compilazione dell’Ordine di Acquisto (articolo 4);</li>
                <li>trasmissione dell’Ordine di Acquisto e pagamento attraverso la Piattaforma (articolo 5);</li>
                <li>accettazione dell’Ordine di Acquisto da parte di Eoreka (articolo 6).</li>
              </ol>
            </li>
            <li>
              <p><span className="font-bold">1.4</span> Il contratto tra il Cliente ed Eoreka avente a oggetto l’Acquisto si intende concluso al momento della conferma dell’accettazione dell’Ordine di Acquisto da parte della Piattaforma.</p>
            </li>
          </ol>
        </section>

        {/* DEFINIZIONI */}
        <section className="flex flex-col gap-2 my-4">
          <span className="text-base underline uppercase md:text-sm">2. Definizioni</span>
          <p className="text-sm md:text-xs">
	          Salva ogni ulteriore o diversa definizione contenuta nel presente Regolamento, i termini e le espressioni contraddistinti con le iniziali maiuscole avranno, nel medesimo, il significato di seguito indicato, restando inteso che i termini definiti al plurale si intendono definiti anche al singolare e viceversa:
	        </p>
          <ol className="py-4 pl-6 text-sm list-none list-outside md:text-xs">
            <li>{'a).'}<span className="font-bold">Acquisto</span>: l’attività di acquisto dei Prodotti da parte del Cliente attraverso la Piattaforma;</li>
            <li>{'b).'}<span className="font-bold">Carrello</span>: la pagina del profilo del Cliente nella quale sono riepilogati i Prodotti selezionati dal Cliente;</li>
            <li>{'c).'}<span className="font-bold">Cliente</span>: il soggetto economico che agisce nell’ambito di un’attività imprenditoriale e che si registra alla Piattaforma al fine di concludere uno o più Contratti di Acquisto;</li>
            <li>{'d).'}<span className="font-bold">Consegna</span>: l’attività di consegna dei Prodotti all’indirizzo indicato dal Cliente;</li>
            <li>{'e).'}<span className="font-bold">Contratto di Acquisto</span>: il contratto tra il Cliente ed Eoreka avente a oggetto l’Acquisto dei Prodotti;</li>
            <li>{'f).'}<span className="font-bold">Grossista</span>: il soggetto economico scelto dal Cliente presso il quale Eoreka acquista i Prodotti selezionati dal Cliente;</li>
            <li>{'g).'}<span className="font-bold">Indirizzo E-Mail</span>: l’indirizzo di posta elettronica indicato dal Cliente al momento della registrazione sulla Piattaforma;</li>
            <li>{'h).'}<span className="font-bold">Ordine di Acquisto</span>: l’ordine costituente la proposta di Acquisto del Cliente;</li>
            <li>{'i).'}<span className="font-bold">Parti</span>: Eoreka e il Cliente.</li>
            <li>{'j).'}<span className="font-bold">Piattaforma</span>: il sistema informatico implementato da Eoreka raggiungibile all’indirizzo www.eoreka.it sul quale i Clienti possono registrarsi per fruire delle relative funzionalità;</li>
            <li>{'k).'}<span className="font-bold">Prodotti</span>: i prodotti selezionati dal Cliente tra quelli esposti sulla Piattaforma e inseriti nel Carrello che formano l’oggetto dell’Ordine di Acquisto;</li>
            <li>{'l).'}<span className="font-bold">Regolamento</span>: il presente regolamento d’uso della Piattaforma; </li>
            <li>{'m).'}<span className="font-bold">Società</span> o <span className="font-bold">Eoreka</span>: Eoreka S.r.l., con sede in 20126 Milano, via Privata Turro n. 6, codice fiscale, partita Iva e numero di iscrizione al Registro delle Imprese di Milano 12030360965, REA MI-2635486, indirizzo di posta elettronica support@eoreka.it , pec eorekasrl@legalmail.it.</li>
          </ol>
        </section>

        {/* REGISTRAZIONE */}
        <section className="flex flex-col gap-2 my-4">
          <span className="text-base underline uppercase md:text-sm">3. Registrazione alla piattaforma</span>
          <ol className="text-sm md:text-xs">
            <li>
              <p><span className="font-bold">3.1</span> Per poter accedere e utilizzare le funzionalità della Piattaforma il Cliente è tenuto a completare la procedura di registrazione.</p>
            </li>
            <li>
              <p><span className="font-bold">3.2</span> Per registrarsi al Cliente è richiesto di:</p>
              <ol className="py-4 pl-6 text-sm list-decimal list-outside md:text-xs">
                <li>selezionare la zona geografica di interesse;</li>
                <li>indicare l’Indirizzo E-Mail;</li>
                <li>inserire e confermare una password di accesso;</li>
                <li>selezionare la categoria di utenza cui appartiene;</li>
                <li>prestare il consenso al trattamento dei dati personali per le finalità indicate e alla cessione dei dati al Grossista per la Consegna dei Prodotti;</li>
                <li>accettare espressamente il presente Regolamento e</li>
                <li>inserire almeno un recapito di consegna.</li>
              </ol>
            </li>
            <li>
              <p><span className="font-bold">3.4</span> A seguito della registrazione, la Piattaforma trasmette all’Indirizzo E-Mail del Cliente un messaggio di benvenuto contenente il nome utente e la nuova password generata automaticamente dalla Piattaforma. Il Cliente si impegna a conservare in modo sicuro lo username e la password e a non permetterne l'utilizzo da parte di terzi.</p>
            </li>
            <li>
              <p><span className="font-bold">3.5</span> In fase di registrazione il Cliente è tenuto a fornire alla Società dati e informazioni veritieri, aggiornati e completi.</p>
            </li>
            <li>
              <p><span className="font-bold">3.6</span> Il Cliente è il solo e unico responsabile della conservazione, della riservatezza e dell’utilizzo del profilo registrato sulla Piattaforma. Il Cliente è responsabile di tutti gli Ordini di Acquisto generati attraverso il suo profilo.</p>
            </li>
            <li>
              <p><span className="font-bold">3.7</span> Il Cliente può in ogni momento visualizzare gli ordini, modificare le impostazioni dell’account, gestire i metodi di pagamento e gli indirizzi di spedizione attraverso il cruscotto di controllo associato al proprio profilo.</p>
            </li>
            <li>
              <p><span className="font-bold">3.8</span> Il Cliente può chiedere in qualsiasi momento la cancellazione del proprio profilo dalla Piattaforma inviando una comunicazione alla Società all’indirizzo di posta elettronica support@eoreka.it.</p>
            </li>
          </ol>
        </section>

        {/* COMPILAZIONE */}
        <section className="flex flex-col gap-2 my-4">
          <span className="text-base underline uppercase md:text-sm">4. Compilazione degli ordini</span>
          <ol className="text-sm md:text-xs">
            <li>
              <span className="font-bold">4.1</span> Per effettuare un Ordine di Acquisto, il Cliente deve:
              <ol className="py-4 pl-6 text-sm md:text-xs">
                <li>{'a).'}accedere alla Piattaforma effettuando il login con i propri username e password;</li>
                <li>{'b).'}selezionare il Grossista desiderato fra quelli proposti in base all’area geografica dell’indirizzo di spedizione;</li>
                <li>{'c).'}selezionare i Prodotti desiderati inserendoli nel Carrello;</li>
                <li>{'d).'}confermare l’Ordine di Acquisto.</li>
              </ol>
            </li>
            <li><span className="font-bold">4.2</span> Le immagini riprodotte nella pagina di presentazione dei Prodotti sono puramente indicative e non costituiscono fedele rappresentazione degli stessi. Il prezzo indicato accanto a ciascun prodotto è al netto di Iva.</li>
            <li><span className="font-bold">4.3</span> Il puntamento e la selezione di un Prodotto determinano il suo inserimento nel Carrello per la quantità impostata. Il Carrello può essere controllato e modificato dal Cliente mediante la selezione del relativo pulsante presente sulla pagina del profilo.</li>
            <li><span className="font-bold">4.4</span> Al termine della scelta, la selezione del link “Visualizza Carrello” determina la visualizzazione di una pagina con (i) il riepilogo dei Prodotti selezionati, (ii) l’importo complessivo dell’Acquisto e (iii) l’area di inserimento dell’eventuale codice sconto.</li>
            <li><span className="font-bold">4.5</span> La selezione del tasto “Checkout” determina l’apertura di una pagina con (i) i dati di fatturazione, (ii) il riepilogo dell’Acquisto (con il dettaglio del relativo costo di spedizione) e (iii) l’area di scelta del metodo di pagamento.</li>
            <li><span className="font-bold">4.6</span> Prima dell’invio dell’Ordine di Acquisto, la Piattaforma richiede l’inserimento di codice fiscale, partita Iva e codice SDI, nonché di un valido metodo di pagamento tra quelli disponibili (carta di credito, Sepa, PayPal).</li>
            <li><span className="font-bold">4.7</span> Il costo di consegna relativo a ciascun Ordine di Acquisto è stabilito dal Grossista selezionato dal Cliente ed è specificato nel riepilogo che precede la scelta del metodo di pagamento.</li>
          </ol>
        </section>

        {/* TRASMISSIONE */}
        <section className="flex flex-col gap-2 my-4">
          <span className="text-base underline uppercase md:text-sm">5. Trasmissione degli ordini</span>
          <ol className="text-sm md:text-xs">
            <li><span className="font-bold">5.1</span> A seguito della conferma da parte del Cliente, la Piattaforma genera l’Ordine di Acquisto.</li>
            <li><span className="font-bold">5.2</span> L’Ordine di Acquisto costituisce la proposta del Cliente di acquistare da Eoreka i Prodotti inseriti nel Carrello.</li>
          </ol>
        </section>

        {/* ACCETTAZIONE */}
        <section className="flex flex-col gap-2 my-4">
          <span className="text-base underline uppercase md:text-sm">6. Accettazione e conferma degli ordini</span>
          <ol className="text-sm md:text-xs">
            <li><span className="font-bold">6.1</span> A seguito della verifica della disponibilità dei Prodotti presso il Grossista, la Piattaforma conferma al Cliente l’accettazione dell’Ordine di Acquisto tramite messaggio di posta inviato all’Indirizzo E-Mail.</li>
            <li>
              <span className="font-bold">6.2</span> In caso di indisponibilità di un Prodotto presso il Grossista, la Piattaforma è impostata per:
              <ol className="py-4 pl-6 text-sm list-decimal list-outside md:text-xs">
                <li>sostituire il Prodotto mancante con altro Prodotto similare commercializzato dallo stesso Grossista;</li>
                <li>accettare l’Ordine di Acquisto senza il Prodotto mancante.</li>
              </ol>
            </li>
            <li><span className="font-bold">6.3</span> L’accettazione dell’Ordine di Acquisto da parte di Eoreka determina la conclusione del Contratto di Acquisto e il trasferimento della proprietà dei soli Prodotti indicati nella conferma in favore del Cliente ai sensi dell’articolo 1478, secondo comma, c.c..</li>
            <li><span className="font-bold">6.4</span> La mancata conferma determina l’inefficacia dell’Ordine di Acquisto e la mancata conclusione del Contratto di Acquisto.</li>
          </ol>
        </section>

        {/* CONSEGNA */}
        <section className="flex flex-col gap-2 my-4">
          <span className="text-base underline uppercase md:text-sm">7. Consegna e fatturazione</span>
          <ol className="text-sm md:text-xs">
            <li><span className="font-bold">7.1</span> La Consegna dei Prodotti presso l’indirizzo impostato dal Cliente avviene a cura del Grossista, per conto di Eoreka, con autonoma organizzazione di mezzi e di personale.</li>
            <li><span className="font-bold">7.2</span> In assenza di contestazioni formulate per iscritto entro 3 (tre) giorni dalla consegna dei Prodotti, questa si intende accettata senza alcuna riserva.</li>
            <li><span className="font-bold">7.3</span> A fronte dell’accettazione dell’Ordine di Acquisto, Eoreka emette fattura fiscale elettronica e la trasmette ad Agenzia delle Entrate tramite il Sistema di Interscambio. Copia della fattura elettronica è disponibile sul profilo del Cliente e trasmessa da Eoreka all’Indirizzo E-Mail.</li>
            <li><span className="font-bold">7.4</span> Il pagamento della fattura dovrà avvenire entro il termine e con le modalità indicati sulla stessa.</li>
          </ol>
        </section>

        {/* CANCELLAZIONE */}
        <section className="flex flex-col gap-2 my-4">
          <span className="text-base underline uppercase md:text-sm">8. Cancellazione del profilo</span>
          <p className="text-sm md:text-xs">
	          Il Cliente ha diritto di chiedere in qualsiasi momento la cancellazione del profilo dalla Piattaforma mediante invio di comunicazione scritta a mezzo posta elettronica certificata all’indirizzo eorekasrl@legalmail.it.
	        </p>
        </section>

        {/* DISPOSIZIONI */}
        <section className="flex flex-col gap-2 my-4">
          <span className="text-base underline uppercase md:text-sm">9. Disposizioni finali</span>
          <ol className="text-sm md:text-xs">
            <li><span className="font-bold">7.1</span> Il presente Regolamento e le successive modificazioni e integrazioni si applicano e regolano in modo esclusivo il rapporto tra la Società e il Cliente. Esso è soggetto, in via esclusiva, alla legge italiana.</li>
            <li><span className="font-bold">7.1</span> Eventuali variazioni o deroghe al Regolamento sono valide solo in quanto pubblicate e accettate dal Cliente.</li>
            <li><span className="font-bold">7.1</span> La nullità, anche sopravvenuta, di una o più clausole del Regolamento non pregiudica la validità delle rimanenti, né la validità degli altri rapporti instaurati tra le Parti.</li>
            <li><span className="font-bold">7.1</span> Qualunque controversia relativa alla validità, efficacia, esecuzione, interpretazione o risoluzione del Contratto sarà devoluta alla competenza esclusiva del foro di Verona.</li>
          </ol>
        </section>

      </main>
    </div>
  )
}

export default PlatformRegulations