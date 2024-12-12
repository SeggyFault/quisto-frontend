import Heading from "./Heading"
import Button from "./Button"

const Hero = ({ className }) => {
  return (
    <header className={className}>
      <div className="max-w-[1140px] mx-auto flex flex-col items-start gap-4 pt-20 pb-12">
        <Heading level={1} className="mb-12 text-3xl text-left capitalize text-grey-200">Il grossista online di bevande <br/>E alimentari, in 48h al tuo</Heading>
        <span className="font-normal text-grey-50 text-8xl font-urbanist">Ristorante</span>
        <Button label="Registrati" href="#" className="py-5 mt-8 font-bold px-11 text-grey-50 hover:bg-flamingo-400 bg-flamingo-300" />
        <img className="w-[120px]" src="./src/assets/images/icons/trustpilot.png" alt="trustpilot 5 stars" />
      </div>
      <div className="relative overflow-hidden">
        <div className="z-0 absolute -bottom-1/3 bg-flamingo-400 min-w-[640px] min-h-[640px] rounded-full"></div>
        <img className="relative -bottom-12 z-10 max-w-[620px]" src="./src/assets/images/backgrounds/new-landing-hero.webp" alt="" />
      </div>
    </header>
  )
}

export default Hero