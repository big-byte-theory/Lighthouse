import { useLocation } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import Layout from "../components/Layout";

const Login = () => {
  const location = useLocation();

  return (
		<Layout>
			<section className="container wrapper pb-14">
				<div className="col-span-12 flex flex-col justify-evenly items-center gap-3 text-center z-1">
					<h1>
						{location.pathname === "/login" ? "Log In" : "Create Account"}
					</h1>
					<AuthForm path={location.pathname} />
				</div>
			</section>
		</Layout>
	);
}
export default Login