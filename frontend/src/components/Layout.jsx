import Footer from "./Footer"
import Header from "./Header"

const layout = (props) => {
  return (
    <>
      <Header />
      <main className="flex-1">{props.children}</main>
      <Footer />
    </>
  )
}
export default layout