import Navigation from "../components/Navigation"
import Hero from "../components/Hero"
import Footer from "./Footer"

const MainLayout = ({ children }) => {
  return (
      <div>
        <Navigation href="/" className="sticky top-0 z-50 bg-midnight-400"/>
        <Hero className="flex gap-4 bg-midnight-400" />
        <div className="max-w-[1140px] mx-auto">{children}</div>
        <Footer />
      </div>
    )
}

export default MainLayout