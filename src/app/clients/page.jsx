import React from 'react'

async function page() {
    let res = await fetch("http://localhost:3000/api/clients/allclients")
    let allClients = await res.json()
    return (
        <>
            <section>
                <div className="client-table mt-24">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        First name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Last Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Mobile
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Company
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {allClients.map((client) => {
                                    return (
                                        <>
                                            <tr key={client._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <th scope="row" className="px-6 py-4">
                                                    {client.firstName}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {client.lastName}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {client.email}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {client.mobile}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {client.company}
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>
        </>
    )
}

export default page