import { useCallback, useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getLlms } from "../services/llmService";
import { isAdmin } from "../services/AuthUserService";
import { formatDate } from "../utils/formatDate";
import Layout from "../components/Layout";

const Catalogue = ({ user }) => {
	const [llms, setLlms] = useState([]);
	const [isAdminUser, setIsAdminUser] = useState(false);
	const [sortMenuOpen, setSortMenuOpen] = useState(false);
	// const [checklistSelections, setChecklistSelections] = useState({});
	const [sortConfig, setSortConfig] = useState({
		key: null,
		direction: "ascending",
	});

	const adminUser = useCallback(async () => {
		const result = await isAdmin(user);
		setIsAdminUser(result);
	}, []);

	const fetchLlms = useCallback(async () => {
		const data = await getLlms();
		setLlms(data);
	}, []);

	const sortCatalogue = (e, column, direction) => {
		e.preventDefault();
		setSortConfig({ key: column, direction: direction });
	};

	useEffect(() => {
		adminUser();
		fetchLlms();
	}, [user]);

	// const handleCheckboxChange = (event) => {
	// 	const { name, checked } = event.target;
	// 	setChecklistSelections((prev) => ({ ...prev, [name]: checked }));
	// };

	const sortedLlms = useMemo(() => {
		let sortableItems = [...llms];
		if (sortConfig.key !== null) {
			if (sortConfig.key === "created_date") {
				sortableItems = sortableItems.map((item) => ({
					...item,
					created_date: new Date(item.created_date_id.created_date),
				}));
			}
			const prop = sortConfig.key.split(".");
			const len = prop.length;

			sortableItems.sort((a, b) => {
				let i = 0;
				while (i < len) {
					a = a[prop[i]];
					b = b[prop[i]];
					i++;
				}
				if (a < b) {
					return sortConfig.direction === "ascending" ? -1 : 1;
				} else if (a > b) {
					return sortConfig.direction === "ascending" ? 1 : -1;
				} else {
					return 0;
				}
			});			
		}
		return sortableItems;
	}, [llms, sortConfig]);

	return (
		<>
			<Layout>
				<section className="container wrapper pb-14">
					{isAdminUser && (
						<div className="col-span-12 flex flex-row justify-end">
							<Link to="/llm/add" className="btn btn-primary !mt-0">
								Add LLM
							</Link>
						</div>
					)}
					<div className="col-span-12 flex flex-row justify-between items-center">
						<div className="flex space-x-2.5">
							<p className="font-semibold">Filter by:</p>
							<div className="flex items-center">
								<input
									id="filter-type"
									name="type"
									value="Type"
									type="checkbox"
									className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
									// checked={checklistSelections["Access"] || false}
									// onChange={handleCheckboxChange}
								/>
								<label
									htmlFor="filter-type"
									className="ml-3 min-w-0 flex-1 text-black"
								>
									Type
								</label>
							</div>
							<div className="flex items-center">
								<input
									id="filter-access"
									name="type"
									value="Type"
									type="checkbox"
									className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
									// checked={checklistSelections["Access"] || false}
									// onChange={handleCheckboxChange}
								/>
								<label
									htmlFor="filter-access"
									className="ml-3 min-w-0 flex-1 text-black"
								>
									Access
								</label>
							</div>
						</div>
						<div className="relative inline-block text-left">
							<div>
								<button
									type="button"
									className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
									id="menu-button"
									aria-expanded={sortMenuOpen}
									aria-haspopup="true"
									onClick={() => setSortMenuOpen(!sortMenuOpen)}
								>
									Sort:
									<svg
										className="-mr-1 h-5 w-5 text-gray-400"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
											clipRule="evenodd"
										/>
									</svg>
								</button>
							</div>
							{/* Menu */}
							<div
								className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-transform ease-out duration-100 ${
									sortMenuOpen
										? "transform opacity-100 scale-100"
										: "transform opacity-0 scale-95"
								}`}
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="menu-button"
								tabIndex="-1"
							>
								<div className="py-1" role="none">
									<a
										href="#"
										className="block px-4 py-2 text-sm text-black"
										role="menuitem"
										tabIndex="-1"
										id="menu-item-0"
										onClick={(e) => sortCatalogue(e, "name", "ascending")}
									>
										Name ASC
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-black"
										role="menuitem"
										tabIndex="-1"
										id="menu-item-0"
										onClick={(e) => sortCatalogue(e, "name", "descending")}
									>
										Name DESC
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-black"
										role="menuitem"
										tabIndex="-1"
										id="menu-item-1"
										onClick={(e) =>
											sortCatalogue(e, "created_date", "ascending")
										}
									>
										Date Created ASC
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-black"
										role="menuitem"
										tabIndex="-1"
										id="menu-item-1"
										onClick={(e) =>
											sortCatalogue(e, "created_date", "descending")
										}
									>
										Date Created DESC
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-black"
										role="menuitem"
										tabIndex="-1"
										id="menu-item-2"
										onClick={(e) =>
											sortCatalogue(e, "organization_id.organization", "ascending")
										}
									>
										Organization ASC
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-black"
										role="menuitem"
										tabIndex="-1"
										id="menu-item-2"
										onClick={(e) =>
											sortCatalogue(e, "organization_id.organization", "descending")
										}
									>
										Organization DESC
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-12 overflow-x-auto">
						<table className="catalogue table-auto w-full">
							<thead>
								<tr>
									<th>Type</th>
									<th>Name</th>
									<th>Organization</th>
									<th>Created date</th>
									<th>Modality (In; Out)</th>
									<th>Access</th>
									<th>License</th>
									<th>Dependencies</th>
									<th>View</th>
								</tr>
							</thead>
							<tbody>
								{sortedLlms.length > 0 ? (
									sortedLlms.map((llm) => (
										<tr key={llm.llm_data_id}>
											<td>{llm.type_id.type}</td>
											<td>{llm.name}</td>
											<td>{llm.organization_id.organization}</td>
											<td>{formatDate(llm.created_date_id.created_date)}</td>
											<td>{llm.modality_id.modality}</td>
											<td>
												<div className={`label label-${llm.access_id.access}`}>
													{llm.access_id.access}
												</div>
											</td>
											<td>{llm.license_id.license}</td>
											<td>
												{llm.dependencies_id.dependencies.map(
													(dependency, index) => {
														return `${
															dependency +
															(index <
															llm.dependencies_id.dependencies.length - 1
																? ", "
																: "")
														}`;
													}
												)}
											</td>
											<td>
												<Link
													to={`/llm/${llm.llm_data_id}`}
													state={{ data: llm, adminUser: isAdminUser }}
												>
													View
												</Link>
											</td>
										</tr>
									))
								) : (
									<tr>
										<td className="text-center" colSpan="9">
											No LLMs found
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</section>
			</Layout>
		</>
	);
};

export default Catalogue;
