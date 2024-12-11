import Navigation from "../components/Navigation"
import Footer from "./Footer"

const MainLayout = ({ children }) => {
  return (
      <div>
        <Navigation href="/" className="sticky top-0 bg-midnight-400"/>
        <div className="max-w-[1140px] mx-auto">{children}</div>
        <Footer />
      </div>
    )
}

export default MainLayout