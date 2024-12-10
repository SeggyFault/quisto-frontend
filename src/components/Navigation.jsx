import Button from "./Button";

const Navigation = ({ className, href }) => {
  return (
    <nav className={className}>
      <div className="container flex justify-between py-4">

        <div className="flex gap-1">
          <a href={href}>
            <img src="./src/assets/images/logos/logo.svg" width="135" height="45" alt="quisto logo" />
          </a>
          <Button label="FAQs" href="#" className="py-2.5 px-12 bg-transparent text-grey-50 hover:text-flamingo-300" />
        </div>

        <ul className="flex gap-2.5">
          <li>
            <Button label="Accedi" href="#" className="py-2.5 px-12 font-bold text-grey-50 bg-transparent hover:bg-grey-50 hover:text-flamingo-300" />
          </li>
          <li>
            <Button label="Registrati" href="#" className="py-2.5 px-12 font-bold text-grey-50 hover:bg-flamingo-400 bg-flamingo-300" />
          </li>
        </ul>

      </div>
      
    </nav>
  )
}

export default Navigation;