import { useState } from "react";
import { addLlm, updateLlm } from "../services/llmService";
import { llmFormValidity } from "../utils/isLlmFormValid";
import { scrollToTop } from "../utils/scrollToTop";
import { toast } from "react-toastify";

const LlmForm = () => {
	const initialState = {
		type: "",
		name: "",
		organization: "",
		description: "",
		created_date: "",
		url: "",
		datasheet: "",
		modality: "",
		size: "",
		sample: "",
		analysis: "",
		dependencies: "",
		included: "",
		excluded: "",
		quality_control: "",
		access: "",
		license: "",
		intended_use: "",
		prohibited_uses: "",
		monitoring: "",
		feedback: "",
		model_card: "",
		training_emissions: "",
		training_time: "",
		training_hardware: "",
		adaptation: "",
		output_space: "",
		terms_of_service: "",
		monthly_active_users: "",
		user_distribution: "",
		failures: "",
	};

	const [newLlm, setNewLlm] = useState(initialState);

	const notifySuccess = (message) => toast.success(message);
	const notifyError = (errors) => toast.error(errors);
	const clearForm = () => {
		const llmForm = document.getElementById("newLlmForm");

		llmForm.reset();
		setNewLlm(initialState);
		console.log("form cleared");
	};

	const onChange = (e) => {
		setNewLlm({ ...newLlm, [e.target.name]: e.target.value });

		if (document.querySelector(`[name=${e.target.name}]`).classList?.contains("border-red-500")) {
			e.target.classList.remove("border", "border-solid", "border-red-500");
		}
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		toast.dismiss();
		const llmFormValidation = llmFormValidity({
			name: newLlm.name,
			organization: newLlm.organization,
			created_date: newLlm.created_date,
			access: newLlm.access,
			type: newLlm.type,
		});

		if (llmFormValidation.length > 0) {
			const formatErrors = llmFormValidation
				.map((error) => error.msg)
				.join('\n');
			const formatFields = llmFormValidation.map((error) => error.field);

			formatFields.forEach((field) => {
				const inputField = document.querySelector(`#${field}`);
				inputField.classList.add("border", "border-solid", "border-red-500");
			});
			return notifyError(formatErrors);
		}

		const result = await addLlm(newLlm);

		if (!result.status) {
			console.log("ERROR", result.message);
			return notifyError("Something went wrong. Please try again later.");
		}

		switch (result.status) {
			case 201:
				notifySuccess(result.msg);
				// setNewLlm(initialState);
				scrollToTop();
				clearForm();
				break;
			case 400:
				console.log("Error adding LLM", result.msg);
				break;
			case 500:
				console.log("Error adding LLM", result.msg);
				break;
		}
		return;
	};

	return (
		<section className="container wrapper pb-14">
			<div className="col-span-12 text-left">
				<form id="newLlmForm" onSubmit={onSubmit}>
					<fieldset className="flex gap-x-2.5">
						<div className="w-full">
							<label className="block mt-3">LLM Type*</label>
							<select
								id="type"
								className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
								name="type"
								onChange={onChange}
								defaultValue=""
							>
								<option value="" disabled>
									Select Type
								</option>
								<option value="application">Application</option>
								<option value="model">Model</option>
								<option value="limited">Limited</option>
							</select>
						</div>
						<div className="w-full">
							<label className="block mt-3">Created Date*</label>
							<input
								id="created_date"
								type="date"
								name="created_date"
								placeholder="Created Date"
								className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
								onChange={onChange}
							/>
						</div>
					</fieldset>
					<label className="block mt-3">Name*</label>
					<input
						id="name"
						type="text"
						name="name"
						placeholder="Name"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3">LLM Organization*</label>
					<input
						id="organization"
						type="text"
						name="organization"
						placeholder="Organization ID"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3">LLM URL</label>
					<input
						id="url"
						type="text"
						name="url"
						placeholder="URL ID"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3" htmlFor="access">
						Access*
					</label>
					<select
						id="access"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						name="access"
						onChange={onChange}
						defaultValue=""
					>
						<option value="" disabled>
							Select Access
						</option>
						<option value="closed">Closed</option>
						<option value="open">Open</option>
						<option value="limited">Limited</option>
					</select>
					<label className="block mt-3">Datasheet</label>
					<input
						id="datasheet"
						type="text"
						name="datasheet"
						placeholder="Datasheet"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3">Modality</label>
					<input
						id="modality"
						type="text"
						name="modality"
						placeholder="Modality ID"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3">LLM Size</label>
					<input
						id="size"
						type="text"
						name="size"
						placeholder="Size ID"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3">Sample</label>
					<input
						id="sample"
						type="text"
						name="sample"
						placeholder="Sample"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3">Analysis</label>
					<input
						id="analysis"
						type="text"
						name="analysis"
						placeholder="Analysis"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3">Dependencies</label>
					<input
						id="dependencies"
						type="text"
						name="dependencies"
						placeholder="Dependencies ID"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3">Included</label>
					<input
						id="included"
						type="text"
						name="included"
						placeholder="Included"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3">Excluded</label>
					<input
						id="excluded"
						type="text"
						name="excluded"
						placeholder="Excluded"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3">Quality Control</label>
					<input
						id="quality_control"
						type="text"
						name="quality_control"
						placeholder="Quality Control"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3">License</label>
					<input
						id="license"
						type="text"
						name="license"
						placeholder="License"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3">Intended Use</label>
					<input
						id="intended_use"
						type="text"
						name="intended_use"
						placeholder="Intended Use"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3">Prohibited Uses</label>
					<input
						id="prohibited_uses"
						type="text"
						name="prohibited_uses"
						placeholder="Prohibited Uses"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3">Monitoring</label>
					<input
						id="monitoring"
						type="text"
						name="monitoring"
						placeholder="Monitoring"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3">Feedback</label>
					<input
						id="feedback"
						type="text"
						name="feedback"
						placeholder="Feedback"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3">Model Card</label>
					<input
						id="model_card"
						type="text"
						name="model_card"
						placeholder="Model Card"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3">Training Emissions</label>
					<input
						id="training_emissions"
						type="text"
						name="training_emissions"
						placeholder="Training Emissions"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3">Training Time</label>
					<input
						id="training_time"
						type="text"
						name="training_time"
						placeholder="Training Time"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3">Training Hardware</label>
					<input
						id="training_hardware"
						type="text"
						name="training_hardware"
						placeholder="Training Hardware"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3">Adaptation</label>
					<input
						id="adaptation"
						type="text"
						name="adaptation"
						placeholder="Adaptation"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3">Output Space</label>
					<input
						id="output_space"
						type="text"
						name="output_space"
						placeholder="Output Space"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3">Terms of Service</label>
					<input
						id="terms_of_service"
						type="text"
						name="terms_of_service"
						placeholder="Terms of Service"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3">Monthly Active Users</label>
					<input
						id="monthly_active_users"
						type="text"
						name="monthly_active_users"
						placeholder="Monthly Active Users"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3">User Distribution</label>
					<input
						id="user_distribution"
						type="text"
						name="user_distribution"
						placeholder="User Distribution"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3">Failures</label>
					<input
						id="failures"
						type="text"
						name="failures"
						placeholder="Failures"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<button className="btn btn-primary" type="submit">
						Add LLM
					</button>
				</form>
			</div>
		</section>
	);
};
export default LlmForm;
