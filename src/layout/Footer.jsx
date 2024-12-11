import Button from "../components/Button"

const Footer = () => {
  return (
    <footer className="p-8 mt-24">
      <div className="grid grid-cols-1 place-items-center md:place-items-start gap-4 pt-8 mt-8 text-xs border-t-[0.5px] md:grid-cols-3 border-grey-300 font-inter text-grey-400">
        <p className="text-center md:text-left">© 2021 Eoreka S.R.L. - Partita IVA: 12030360965 | Via Pagano 35, 20145, Milano</p>
        <div className="flex items-start gap-2 whitespace-nowrap">
          <Button label="Policy sulla privacy" href="#" className="text-xs text-grey-400 hover:underline" />
          <span>|</span>
          <Button label="Regolamento piattaforma" href="#" className="text-xs text-grey-400 hover:underline" />
        </div>
      </div>
    </footer>
  )
}

export default Footer