import { Outlet } from "react-router-dom"
import PublicHeader from "./Header/PublicHeader"
import Footer from "./Footer/Footer"

const PublicLayout = () => {
  return (
    <>
      <PublicHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default PublicLayout
