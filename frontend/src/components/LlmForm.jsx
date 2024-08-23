import { useState } from "react";
import { addLlm, updateLlm } from "../services/llmService";

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
		model_type: "",
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

	const onChange = (e) => {
		setNewLlm({...newLlm,  [e.target.name]: e.target.value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const llmForm = document.getElementById("newLlmForm");
		const result = await addLlm(newLlm);
		switch (result.status) {
			case 201:
				console.log(result.msg);
				setNewLlm(initialState);
				llmForm.reset();
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
							<label className="block mt-3">LLM Type</label>
							<select
								className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
								name="type"
								onChange={onChange}
								required
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
							<label className="block mt-3">Created Date</label>
							<input
								type="date"
								name="created_date"
								placeholder="Created Date"
								className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
								onChange={onChange}
								required
							/>
						</div>
					</fieldset>
					<label className="block mt-3">Name</label>
					<input
						type="text"
						name="name"
						placeholder="Name"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
						required
					/>
					<input
						type="text"
						name="organization"
						placeholder="Organization ID"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
						required
					/>
					<input
						type="text"
						name="url"
						placeholder="URL ID"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<input
						type="text"
						name="datasheet"
						placeholder="Datasheet"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<input
						type="text"
						name="modality"
						placeholder="Modality ID"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<input
						type="text"
						name="size"
						placeholder="Size ID"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<input
						type="text"
						name="sample"
						placeholder="Sample"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<input
						type="text"
						name="analysis"
						placeholder="Analysis"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<input
						type="text"
						name="dependencies"
						placeholder="Dependencies ID"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<input
						type="text"
						name="included"
						placeholder="Included"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<input
						type="text"
						name="excluded"
						placeholder="Excluded"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<input
						type="text"
						name="quality_control"
						placeholder="Quality Control"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<label className="block mt-3" htmlFor="access">
						Access
					</label>
					<select
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						name="access"
						onChange={onChange}
						required
					>
						<option value="" disabled>
							Select Access
						</option>
						<option value="closed">Closed</option>
						<option value="open">Open</option>
						<option value="limited">Limited</option>
					</select>
					<input
						type="text"
						name="license"
						placeholder="License"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<input
						type="text"
						name="intended_use"
						placeholder="Intended Use"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<input
						type="text"
						name="prohibited_uses"
						placeholder="Prohibited Uses"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<input
						type="text"
						name="monitoring"
						placeholder="Monitoring"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<input
						type="text"
						name="feedback"
						placeholder="Feedback"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<input
						type="text"
						name="model_type"
						placeholder="Model Type"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<input
						type="text"
						name="training_emissions"
						placeholder="Training Emissions"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<input
						type="text"
						name="training_time"
						placeholder="Training Time"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<input
						type="text"
						name="training_hardware"
						placeholder="Training Hardware"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<input
						type="text"
						name="adaptation"
						placeholder="Adaptation"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<input
						type="text"
						name="output_space"
						placeholder="Output Space"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<input
						type="text"
						name="terms_of_service"
						placeholder="Terms of Service"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<input
						type="text"
						name="monthly_active_users"
						placeholder="Monthly Active Users"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<input
						type="text"
						name="user_distribution"
						placeholder="User Distribution"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<input
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
