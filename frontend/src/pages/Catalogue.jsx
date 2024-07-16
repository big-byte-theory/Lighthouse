import { useState, useEffect } from "react";
import { getLlms, addLlm, updateLlm, deleteLlm } from "../services/llmService";

const Catalogue = () => {
	const [llms, setLlms] = useState([]);
	const [llm, setLlm] = useState({
		type_id: "",
		name: "",
		organisation_id: "",
		description: "",
		date_id: "",
		url_id: "",
		datasheet: "",
		modality_id: "",
		size_id: "",
		sample: "",
		analysis: "",
		dependencies_id: "",
		included: "",
		excluded: "",
		quality_control: "",
		access_id: "",
		license: "",
		intended_use: "",
		prohibited_uses: "",
		monitoring: "",
		feedback: "",
		model_type_id: "",
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

	useEffect(() => {
		const fetchLlms = async () => {
			const data = await getLlms();
			setLlms(data);
		};

		fetchLlms();
	}, []);

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
		<div>
			<h1>LLM Catalog</h1>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					name="type_id"
					placeholder="Type ID"
					onChange={onChange}
				/>
				<input type="text" name="name" placeholder="Name" onChange={onChange} />
				<input
					type="text"
					name="organisation_id"
					placeholder="Organisation ID"
					onChange={onChange}
				/>
				<input
					type="date"
					name="date_id"
					placeholder="Date"
					onChange={onChange}
				/>
				<input
					type="text"
					name="url_id"
					placeholder="URL ID"
					onChange={onChange}
				/>
				<input
					type="text"
					name="datasheet"
					placeholder="Datasheet"
					onChange={onChange}
				/>
				<input
					type="text"
					name="modality_id"
					placeholder="Modality ID"
					onChange={onChange}
				/>
				<input
					type="text"
					name="size_id"
					placeholder="Size ID"
					onChange={onChange}
				/>
				<input
					type="text"
					name="sample"
					placeholder="Sample"
					onChange={onChange}
				/>
				<input
					type="text"
					name="analysis"
					placeholder="Analysis"
					onChange={onChange}
				/>
				<input
					type="text"
					name="dependencies_id"
					placeholder="Dependencies ID"
					onChange={onChange}
				/>
				<input
					type="text"
					name="included"
					placeholder="Included"
					onChange={onChange}
				/>
				<input
					type="text"
					name="excluded"
					placeholder="Excluded"
					onChange={onChange}
				/>
				<input
					type="text"
					name="quality_control"
					placeholder="Quality Control"
					onChange={onChange}
				/>
				<input
					type="text"
					name="access_id"
					placeholder="Access ID"
					onChange={onChange}
				/>
				<input
					type="text"
					name="license"
					placeholder="License"
					onChange={onChange}
				/>
				<input
					type="text"
					name="intended_use"
					placeholder="Intended Use"
					onChange={onChange}
				/>
				<input
					type="text"
					name="prohibited_uses"
					placeholder="Prohibited Uses"
					onChange={onChange}
				/>
				<input
					type="text"
					name="monitoring"
					placeholder="Monitoring"
					onChange={onChange}
				/>
				<input
					type="text"
					name="feedback"
					placeholder="Feedback"
					onChange={onChange}
				/>
				<input
					type="text"
					name="model_type_id"
					placeholder="Model Type ID"
					onChange={onChange}
				/>
				<input
					type="text"
					name="training_emissions"
					placeholder="Training Emissions"
					onChange={onChange}
				/>
				<input
					type="text"
					name="training_time"
					placeholder="Training Time"
					onChange={onChange}
				/>
				<input
					type="text"
					name="training_hardware"
					placeholder="Training Hardware"
					onChange={onChange}
				/>
				<input
					type="text"
					name="adaptation"
					placeholder="Adaptation"
					onChange={onChange}
				/>
				<input
					type="text"
					name="output_space"
					placeholder="Output Space"
					onChange={onChange}
				/>
				<input
					type="text"
					name="terms_of_service"
					placeholder="Terms of Service"
					onChange={onChange}
				/>
				<input
					type="number"
					name="monthly_active_users"
					placeholder="Monthly Active Users"
					onChange={onChange}
				/>
				<input
					type="text"
					name="user_distribution"
					placeholder="User Distribution"
					onChange={onChange}
				/>
				<input
					type="text"
					name="failures"
					placeholder="Failures"
					onChange={onChange}
				/>
				<button type="submit">Add LLM</button>
			</form>
			<ul>
				{llms.map((llm) => (
					<li key={llm._id}>{llm.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Catalogue;