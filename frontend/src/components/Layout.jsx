import Footer from "./Footer"

const layout = (props) => {
  return (
    <>
      {/* Add in header and footer */}
      {props.children}
      <Footer />
    </>
  )
}
export default layout