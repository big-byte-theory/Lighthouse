import { useCallback, useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getLlms } from "../services/llmService";
import { isAdmin } from "../services/AuthUserService";
import { formatDate } from "../utils/formatDate";
import Layout from "../components/Layout";

const Catalogue = ({ user }) => {
	const [llms, setLlms] = useState([]);
	const [filteredLlms, setFilteredLlms] = useState([]);
	const [isAdminUser, setIsAdminUser] = useState(false);
	const [sortMenuOpen, setSortMenuOpen] = useState(false);
	const [filterMenuOpen, setFilterMenuOpen] = useState(false);
	const [filterByType, setFilterByType] = useState([
		"application",
		"dataset",
		"model",
	]);
	const [filterByAccess, setFilterByAccess] = useState([
		"open",
		"limited",
		"closed",
	]);
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
		filterLlms(data);
	}, []);

	const sortCatalogue = (e, column, direction) => {
		e.preventDefault();
		setSortConfig({ key: column, direction: direction });
	};

	const filterLlms = (data) => {
		let filteredLlmsData = data;
		if (filterByType.length > 0) {
			filteredLlmsData = filteredLlmsData.filter((llm) =>
				filterByType.includes(llm.type_id.type)
			);
		}
		if (filterByAccess.length > 0) {
			filteredLlmsData = filteredLlmsData.filter((llm) =>
				filterByAccess.includes(llm.access_id.access)
			);
		}
		setFilteredLlms(filteredLlmsData);
	};

	const updateTypes = (value) => {
		if (filterByType.includes(value)) {
			setFilterByType(filterByType.filter((item) => item !== value));
		} else {
			setFilterByType([...filterByType, value]);
		}
	};

	const updateAccess = (value) => {
		if (filterByAccess.includes(value)) {
			setFilterByAccess(filterByAccess.filter((item) => item !== value));
		} else {
			setFilterByAccess([...filterByAccess, value]);
		}
	};

	const handleFilterMenu = () => {
		setFilterMenuOpen(!filterMenuOpen);
		if (sortMenuOpen) {
			setSortMenuOpen(false);
		}
	};
	
	const handleSortMenu = () => {
		setSortMenuOpen(!sortMenuOpen);
		if (filterMenuOpen) {
			setFilterMenuOpen(false);
		}
	};

	const sortedLlms = useMemo(() => {
		let sortableItems = [...filteredLlms];
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
	}, [filteredLlms, sortConfig]);

	useEffect(() => {
		adminUser();
		fetchLlms();
	}, [user]);

	useEffect(() => {
		filterLlms(llms);
	}, [filterByType, filterByAccess, llms]);
	
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
					<div className="col-span-12 flex flex-row space-x-5 last:mr-0 justify-end items-center">
						<div className="relative inline-block text-left">
							<div>
								<button
									type="button"
									className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
									id="menu-button"
									aria-expanded={filterMenuOpen}
									aria-haspopup="true"
									onClick={() => handleFilterMenu()}
								>
									Filter
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
							{/* Filter Menu */}
							<div
								className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-transform ease-out duration-100 ${
									filterMenuOpen
										? "transform visible opacity-100 scale-100"
										: "transform invisible opacity-0 scale-95"
								}`}
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="menu-button"
								tabIndex="-1"
							>
								<div className="px-4 py-2" role="none">
									<p className="font-semibold text-sm">Type:</p>
									<div className="flex items-center py-2">
										<input
											id="type-application"
											type="checkbox"
											checked={filterByType.includes("application")}
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
											// onClick={() => filterBy({ type: "application" })}
											onChange={() => updateTypes("application")}
										/>
										<label
											htmlFor="type-application"
											className="ms-2 text-sm font-medium text-black"
										>
											Application
										</label>
									</div>
									<div className="flex items-center py-2">
										<input
											id="type-dataset"
											type="checkbox"
											checked={filterByType.includes("dataset")}
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
											// onClick={() => filterBy({ type: "dataset" })}
											onChange={() => updateTypes("dataset")}
										/>
										<label
											htmlFor="type-dataset"
											className="ms-2 text-sm font-medium text-black"
										>
											Dataset
										</label>
									</div>
									<div className="flex items-center py-2">
										<input
											id="type-model"
											type="checkbox"
											checked={filterByType.includes("model")}
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
											// onClick={() => filterBy({ type: "model" })}
											onChange={() => updateTypes("model")}
										/>
										<label
											htmlFor="type-model"
											className="ms-2 text-sm font-medium text-black"
										>
											Model
										</label>
									</div>
									<p className="font-semibold text-sm mt-2">Access:</p>
									<div className="flex items-center py-2">
										<input
											id="type-open"
											type="checkbox"
											checked={filterByAccess.includes("open")}
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
											// onClick={() => filterBy({ access: "open" })}
											onChange={() => updateAccess("open")}
										/>
										<label
											htmlFor="type-open"
											className="ms-2 text-sm font-medium text-black"
										>
											Open
										</label>
									</div>
									<div className="flex items-center py-2">
										<input
											id="type-limited"
											type="checkbox"
											checked={filterByAccess.includes("limited")}
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
											// onClick={() => filterBy({ access: "limited" })}
											onChange={() => updateAccess("limited")}
										/>
										<label
											htmlFor="type-limited"
											className="ms-2 text-sm font-medium text-black"
										>
											Limited
										</label>
									</div>
									<div className="flex items-center py-2">
										<input
											id="type-closed"
											type="checkbox"
											checked={filterByAccess.includes("closed") ? true : false}
											value=""
											className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
											// onClick={() => filterBy({ access: "closed" })}
											onChange={() => updateAccess("closed")}
										/>
										<label
											htmlFor="type-closed"
											className="ms-2 text-sm font-medium text-black"
										>
											closed
										</label>
									</div>
								</div>
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
									onClick={() => handleSortMenu()}
								>
									Sort
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
										? "transform visible opacity-100 scale-100"
										: "transform invisible opacity-0 scale-95"
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
										id="menu-item-1"
										onClick={(e) => sortCatalogue(e, "name", "descending")}
									>
										Name DESC
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-black"
										role="menuitem"
										tabIndex="-1"
										id="menu-item-2"
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
										id="menu-item-3"
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
										id="menu-item-4"
										onClick={(e) =>
											sortCatalogue(
												e,
												"organization_id.organization",
												"ascending"
											)
										}
									>
										Organization ASC
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-black"
										role="menuitem"
										tabIndex="-1"
										id="menu-item-5"
										onClick={(e) =>
											sortCatalogue(
												e,
												"organization_id.organization",
												"descending"
											)
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
