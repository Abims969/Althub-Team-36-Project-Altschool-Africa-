import Header from "../Header"
import SectionFour from "../SectionFour"
import Footer from "../Footer"
import WorldMap from "./WorldMap"

function MajorRoutes() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-1">
        <WorldMap />
      </main>
      <SectionFour />
      <Footer />
    </div>
  )
}

export default MajorRoutes
