import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { submitAuthForm } from "../services/AuthFormService.js";
import { isFormValid } from "../utils/isFormValid.js";

const AuthForm = ({ path }) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const [success, setSuccess] = useState("");
	const navigate = useNavigate();
	const location = useLocation();
	const { state } = useLocation();
	const isLogin = location.pathname === "/login";

	useEffect(() => {
		setFirstName("");
		setLastName("");
		setEmailAddress("");
		setPassword("");
		setErrors("");
		setSuccess("");
		state?.signUpMessage && setSuccess(state.signUpMessage);
	}, [location]);

	const handleSubmit = async (e) => {
		let body;
		let errorMessages = [];
		e.preventDefault();
		setErrors("");
		setSuccess("");

		const formValid = isFormValid({
			path: path,
			firstName,
			emailAddress,
			password,
		});
		if (formValid.length > 0) {
			return setErrors(formValid);
		}
		if (path === "/login") {
			body = { email: emailAddress, password: password };
		} else {
			body = {
				firstName: firstName,
				lastName: lastName,
				email: emailAddress,
				password: password,
			};
		}
		const result = await submitAuthForm(body, path);
		if (!result) {
			errorMessages.push("Something went wrong. Please try again later.");
			return setErrors(errorMessages);
		}
		switch (result.status) {
			case 200:
				//Logged In. Set token in cookies with 7 day expiry
				Cookies.set("token", `${result.data?.token}`, {
					expires: 7,
					SameSite: "None",
					Secure: true,
				});
				localStorage.setItem("user", JSON.stringify(result.data));
				setErrors("");
				//redirect to dashboard
				window.location.href = "/dashboard";
				break;
			case 201:
				//User added. Return them to login page
				setErrors("");
				navigate(`/login`, {
					state: {
						signUpMessage: "Account successfully created. Please log in.",
					},
				});
				break;
			case 401:
				//Invalid password
				errorMessages.push(result.data);
				setErrors(errorMessages);
				break;
			case 400:
				//Bad request
				Object.keys(result.data).forEach((key) => {
					const errorMessage = result.data.errors[key];
					errorMessages.push(errorMessage.msg);
				});
				setErrors(errorMessages);
				break;
			case 404:
				//User not found
				errorMessages.push(result.data.message);
				setErrors(errorMessages);
				// setErrors(result.message);
				break;
			case 500:
				//Invalid credentials
				errorMessages.push(result.data.message);
				setErrors(errorMessages);
				break;
			default:
				errorMessages.push("Something went wrong. Please try again later.");
				setErrors(errorMessages);
		}
	};

	return (
		<>
			{success !== "" && (
				<div className="bg-teal-100 border-l-4 border-teal-500 text-teal-700 p-4 rounded mb-4">
					<p className="font-bold">Success</p>
					<p>{success}</p>
				</div>
			)}
			{errors && (
				<div
					className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded mb-4"
					role="alert"
				>
					<p className="font-bold">Error</p>
					{errors.map((error, index) => {
						return <p key={index}>{error}</p>;
					})}
				</div>
			)}
			<form
				name="authForm"
				className="flex flex-col gap-5 text-left"
				action={path === "/login" ? "/login" : "/sign-up"}
				onSubmit={handleSubmit}
			>
				{location.pathname === "/sign-up" && (
					<>
						<fieldset>
							<label
								htmlFor="firstName"
								className="text-md font-medium leading-6 text-gray-900 mb-2"
							>
								First Name
							</label>
							<input
								type="text"
								id="firstName"
								placeholder="Enter your first name"
								className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								tabIndex={1}
							/>
						</fieldset>
						<fieldset>
							<label
								htmlFor="lastName"
								className="text-md font-medium leading-6 text-gray-900 mb-2"
							>
								Last Name
							</label>
							<input
								type="text"
								id="lastName"
								placeholder="Enter your last name"
								className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
								tabIndex={2}
							/>
						</fieldset>
					</>
				)}
				<fieldset>
					<label
						htmlFor="email"
						className="text-md font-medium leading-6 text-gray-900 mb-2"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						placeholder="Enter your email address"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						value={emailAddress}
						onChange={(e) => setEmailAddress(e.target.value)}
						tabIndex={3}
					/>
				</fieldset>
				<fieldset>
					<div className="flex items-center justify-between">
						<label
							htmlFor="password"
							className="text-md font-medium leading-6 text-gray-900 mb-2"
						>
							Password
						</label>
					</div>
					<input
						type="password"
						id="password"
						placeholder="Enter your password"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						tabIndex={5}
					/>
				</fieldset>
				<button type="submit" className="btn btn-primary" tabIndex={7}>
					{isLogin ? "Login" : "Sign Up"}
				</button>
			</form>
			{isLogin && (
				<div className="mt-5 text-center">
					<p>
						Don&apos;t have an account?
						<Link to="/sign-up" className="ml-2">
							Sign up
						</Link>
					</p>
				</div>
			)}
		</>
	);
};
export default AuthForm;
