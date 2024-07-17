import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Details = () => {
	return (
		<>
			<Layout>
				<section className="container wrapper pb-14">
					<div className="col-span-12">
						<h1>LLM Name</h1>
						<div className="catalogue flex flex-col px-2.5">
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Field</p>
								<p>Field info</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Field</p>
								<p>Field info</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Field</p>
								<p>Field info</p>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Field</p>
								<Link to="#">Field info</Link>
							</div>
							<div className="flex space-x-5 py-2 border-b last:border-b-0 border-light-grey items-center">
								<p className="font-bold">Field</p>
								<div className="label label-open">Open</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
};
export default Details;
