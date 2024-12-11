import { Outlet } from "react-router-dom"
import Header from "./Header/PublicHeader"
import Footer from "./Footer/Footer"

const PublicLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default PublicLayout
