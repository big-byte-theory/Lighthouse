import Layout from '../components/Layout';
import LlmForm from '../components/LlmForm';

const NewLlm = () => {
  return (
		<Layout>
			<section className="container wrapper pb-14">
				<div className="col-span-12 flex flex-col justify-evenly items-center gap-3 text-center z-1">
					<h1>
						Add New Large Language Model (LLM)
					</h1>
					<LlmForm />
				</div>
			</section>
		</Layout>
	);
}
export default NewLlm