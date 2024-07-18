import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-black-slate py-10">
			<div className="container wrapper">
				<div className="col-span-12 md:col-span-4 md:order-2 overflow-hidden">
					<ul className="social-icons flex space-x-2.5 justify-end">
						<li className="social-icon">
							<Link to="#">
								<svg className="icon" role="img" width="34" height="34">
									<use xlinkHref="/assets/images/symbols.svg#facebook"></use>
								</svg>
							</Link>
						</li>
						<li className="social-icon">
							<Link to="#">
								<svg className="icon" role="img" width="34" height="34">
									<use xlinkHref="/assets/images/symbols.svg#twitter-x"></use>
								</svg>
							</Link>
						</li>
						<li className="social-icon">
							<Link to="#">
								<svg className="icon" role="img" width="34" height="34">
									<use xlinkHref="/assets/images/symbols.svg#linkedin"></use>
								</svg>
							</Link>
						</li>
						<li className="social-icon">
							<Link to="#">
								<svg className="icon" role="img" width="34" height="34">
									<use xlinkHref="/assets/images/symbols.svg#instagram"></use>
								</svg>
							</Link>
						</li>
					</ul>
				</div>
				<div className="col-span-12 md:col-span-8 text-white text-sm md:order-1">
					<p>
						&copy; {new Date().getFullYear()} Lighthouse by HorizonX Consulting,
						All rights reserved.
					</p>
					<p>Designed and made by Big Byte Theory.</p>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
