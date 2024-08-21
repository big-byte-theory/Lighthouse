import { useEffect, useState } from "react";
import { getLlms, addLlm, updateLlm, deleteLlm } from "../services/llmService";

const LlmForm = () => {
	const [llm, setLlm] = useState({
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
		monthly_active_users: 0,
		user_distribution: "",
		failures: "",
	});

	const onChange = (e) => {
		setLlm({ ...llm, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		await addLlm(llm);
		const data = await getLlms();
		setLlms(data);
	};

	return (
		<section className="container wrapper pb-14">
			<div className="col-span-12">
				<form onSubmit={onSubmit}>
					<fieldset className="flex gap-x-2.5">
						<input
							type="text"
							name="type"
							placeholder="Type ID"
							className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-1/2 focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
							onChange={onChange}
						/>
						<input
							type="date"
							name="created_date"
							placeholder="Created Date"
							className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-1/2 focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
							onChange={onChange}
						/>
					</fieldset>
					<input
						type="text"
						name="name"
						placeholder="Name"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
					<input
						type="text"
						name="organization"
						placeholder="Organization ID"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
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
					<input
						type="text"
						name="access"
						placeholder="Access"
						className="bg-white border border-gray-300 rounded-lg text-gray-dark text-sm md:text-base px-5 py-3 lg:px-4 lg:py-2 mt-1 w-full focus-visible:outline-none focus:ring-2 focus:ring-teal-600"
						onChange={onChange}
					/>
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
						type="number"
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
