import { Link } from 'react-router-dom'

import Layout from '../components/Layout'

const NotFound = () => {
  return (
		<Layout>
			<section className="container wrapper pb-14">
				<div className="col-span-12 flex flex-col justify-evenly items-center gap-3 text-center z-1">
					<h1>Page Not Found!</h1>
					<p className="h4">
						Sorry, it looks like the connection was lost and we couldn&apos;t
						find what you were looking for. Please try again.
					</p>
					<Link className="btn btn-primary" to="/">
						Return to home
					</Link>
				</div>
			</section>
		</Layout>
	);
}
export default NotFound