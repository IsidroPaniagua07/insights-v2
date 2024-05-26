import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const testData = [

    {employeeID: 3066, userName: 'testuser1', firstName: 'Arthur', lastName: 'Melo', dateCreated: 'Jan 6, 2022', lastModified: 'Jan 6, 2022', active: true},
    {employeeID: 3067, userName: 'testuser2', firstName: 'Emily', lastName: 'Clark', dateCreated: 'Feb 15, 2022', lastModified: 'Feb 15, 2022', active: true},
    {employeeID: 3068, userName: 'testuser3', firstName: 'John', lastName: 'Doe', dateCreated: 'Mar 10, 2022', lastModified: 'Mar 10, 2022', active: true},
    {employeeID: 3069, userName: 'testuser4', firstName: 'Jane', lastName: 'Smith', dateCreated: 'Apr 22, 2022', lastModified: 'Apr 22, 2022', active: true},
    {employeeID: 3070, userName: 'testuser5', firstName: 'Michael', lastName: 'Johnson', dateCreated: 'May 18, 2022', lastModified: 'May 18, 2022', active: false},
    {employeeID: 3071, userName: 'testuser6', firstName: 'Sarah', lastName: 'Brown', dateCreated: 'Jun 3, 2022', lastModified: 'Jun 3, 2022', active: true},
    {employeeID: 3072, userName: 'testuser7', firstName: 'David', lastName: 'Williams', dateCreated: 'Jul 25, 2022', lastModified: 'Jul 25, 2022', active: false},
    {employeeID: 3073, userName: 'testuser8', firstName: 'Laura', lastName: 'Jones', dateCreated: 'Aug 30, 2022', lastModified: 'Aug 30, 2022', active: true},
    {employeeID: 3074, userName: 'testuser9', firstName: 'Robert', lastName: 'Garcia', dateCreated: 'Sep 14, 2022', lastModified: 'Sep 14, 2022', active: true},
    {employeeID: 3075, userName: 'testuser10', firstName: 'Linda', lastName: 'Martinez', dateCreated: 'Oct 9, 2022', lastModified: 'Oct 9, 2022', active: true},
    {employeeID: 3076, userName: 'testuser11', firstName: 'James', lastName: 'Davis', dateCreated: 'Nov 27, 2022', lastModified: 'Nov 27, 2022', active: true},
    {employeeID: 3077, userName: 'testuser12', firstName: 'Patricia', lastName: 'Lopez', dateCreated: 'Dec 5, 2022', lastModified: 'Dec 5, 2022', active: false},
    {employeeID: 3078, userName: 'testuser13', firstName: 'Charles', lastName: 'Gonzalez', dateCreated: 'Jan 18, 2023', lastModified: 'Jan 18, 2023', active: true},
    {employeeID: 3079, userName: 'testuser14', firstName: 'Mary', lastName: 'Wilson', dateCreated: 'Feb 22, 2023', lastModified: 'Feb 22, 2023', active: true},
    {employeeID: 3080, userName: 'testuser15', firstName: 'Christopher', lastName: 'Anderson', dateCreated: 'Mar 12, 2023', lastModified: 'Mar 12, 2023', active: true},
    {employeeID: 3081, userName: 'testuser16', firstName: 'Jessica', lastName: 'Thomas', dateCreated: 'Apr 17, 2023', lastModified: 'Apr 17, 2023', active: true},
    {employeeID: 3082, userName: 'testuser17', firstName: 'Daniel', lastName: 'Taylor', dateCreated: 'May 26, 2023', lastModified: 'May 26, 2023', active: false},
    {employeeID: 3083, userName: 'testuser18', firstName: 'Barbara', lastName: 'Moore', dateCreated: 'Jun 19, 2023', lastModified: 'Jun 19, 2023', active: true},
    {employeeID: 3084, userName: 'testuser19', firstName: 'Matthew', lastName: 'Jackson', dateCreated: 'Jul 23, 2023', lastModified: 'Jul 23, 2023', active: true},
    {employeeID: 3085, userName: 'testuser20', firstName: 'Susan', lastName: 'Martin', dateCreated: 'Aug 5, 2023', lastModified: 'Aug 5, 2023', active: true},
];


const Users = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    console.log(searchOpen)
    return (
    <div>
        <div className="flex justify-between items-center h-[8%] w-full px-4">
            <div className='btn'>
                Create
            </div>
            <div className="flex">
                <input className='bg-gray-400 input'
                style={{width: `${searchOpen ? '20rem' : '0px'}`,
                borderWidth: `${searchOpen ? '1px' : '0px'}`}
                }/>
                <span className="ml-2 cursor-pointer" onClick={() => setSearchOpen(!searchOpen)}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="2x"/>
                </span>
            </div>

        </div>

        <div className="flex h-[90%] w-full rounded-md">
            <section className="flex flex-col w-full  px-4 mx-auto">
                <div className="flex flex-col h-full overflow-x-hidden">
                    <div className="-mx-4 -my-2  sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <div className="flex items-center gap-x-3">
                                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />
                                                    <button className="flex items-center gap-x-2">
                                                        <span>Employee ID</span>

                                                        <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" strokeWidth="0.1" />
                                                            <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" strokeWidth="0.1" />
                                                            <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" strokeWidth="0.3" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                userName
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Name
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Date Created
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Last Modified
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Actions
                                            </th>
                                        </tr>

                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {testData? testData.map((data, index) => {
                                            return (
                                        <>
                                        <tr key={index}>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                                <div className="inline-flex items-center gap-x-3">
                                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />

                                                    <span>{data.employeeID}</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{data.userName}</td>
                                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                <div className="flex items-center gap-x-2">
                                                    <div>
                                                        <h2 className="text-sm font-medium text-gray-800 dark:text-white ">{data.firstName} {data.lastName}</h2>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{data.dateCreated}</td>
                                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{data.lastModified}</td>

                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                <div className="flex items-center gap-x-6">
                                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                                                        Edit
                                                    </button>

                                                    <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                                                        Deactivate or Activate
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        </>
                                        )}) : null}


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between my-2">
                    <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>

                        <span>
                            previous
                        </span>
                    </a>

                    <div className="items-center hidden md:flex gap-x-3">
                        <a href="#" className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60">1</a>
                        <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">2</a>
                        <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">3</a>
                        <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">...</a>
                        <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">12</a>
                        <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">13</a>
                        <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">14</a>
                    </div>

                    <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                        <span>
                            Next
                        </span>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    </div>
    )
}

export default Users;