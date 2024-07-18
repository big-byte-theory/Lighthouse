import Layout from '../components/Layout.jsx';

const Dashboard = () => {
  return (
		<>
			<Layout>
				<section className="container wrapper pb-14">
					<div className="col-span-12 flex flex-col justify-evenly items-center gap-3 text-center z-1">
						<h1>Dashboard</h1>
						<div className="bg-blue-light rounded-lg p-5">Widget 1/3</div>
						<div className="bg-blue-light rounded-lg p-5">Widget 1/3</div>
						<div className="bg-blue-light rounded-lg p-5">Widget 1/3</div>
						<div className="bg-blue-light rounded-lg p-5">Widget 1/2</div>
            <div className="bg-blue-light rounded-lg p-5">Widget 1/2</div>
            <div className="bg-blue-light rounded-lg p-5">Widget Full</div>
					</div>
				</section>
			</Layout>
		</>
	);
}
export default Dashboard