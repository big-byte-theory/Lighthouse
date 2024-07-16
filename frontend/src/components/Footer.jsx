const Footer = () => {
  return (
    <footer className="bg-black-slate py-10">
      <div className="container wrapper">
        
        <div className="col-span-12 text-white text-sm">
          <p>&copy; {new Date().getFullYear()} Lighthouse by HorizonX Consulting, All rights reserved.</p>
          <p>Designed and made by Big Byte Theory.</p>
        </div>
      </div>
		</footer>
	);
}
export default Footer