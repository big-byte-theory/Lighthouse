import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";

const Home = () => {
	return (
		<>
			<Layout>
				<section className="container wrapper pb-14">
					<div className="col-span-12 flex flex-col justify-evenly items-center gap-3 text-center z-1">
						<div className="flex container">
							<h1 className="col-span-full">Welcome</h1>
							<div className="col-span-4">
								<img
									src="/assets/images/horizon.png"
									alt="AI"
									className="rounded-lg"
								/>
							</div>
							<div className="col-span-8 text-left">
								<p>
									Introducing the ultimate resource for navigating the rapidly
									evolving landscape of Large Language Models (LLMs) - the
									Lighthouse App!
								</p>
								<p className="py-3">
									This innovative application is your one-stop destination for a
									comprehensive catalogue of the latest and most advanced LLMs
									available in the market. With our exclusive Gartner Matrix of
									LLM data, users gain unparalleled insights into the
									performance, capabilities, and market position of each model,
									making it easier than ever to compare and choose the right LLM
									for your needs. Whether you're a developer, researcher, or
									tech enthusiast, the Lighthouse App empowers you with the
									knowledge and tools to stay ahead in the world of artificial
									intelligence. Dive into a world of possibilities and make
									informed decisions with the Lighthouse App today!
								</p>
								<div className="mt-5"><Link to="/catalogue" className="btn btn-primary">View the Catalogue of LLMs</Link></div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
};
export default Home;
