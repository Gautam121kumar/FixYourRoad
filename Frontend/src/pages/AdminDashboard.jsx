import { useNavigate } from 'react-router-dom'


function AdminDashboard() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="border-b border-slate-200 bg-white">

        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">

          <h1 className="text-xl font-bold text-slate-900">
            FixYourRoad
          </h1>

          <p className="text-sm font-medium text-slate-600">
            Admin Dashboard
          </p>

        </div>

      </header>


      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-5 py-10">

        {/* Page Heading */}
        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Dashboard
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Manage and review reported potholes.
          </p>

        </div>


        {/* Summary Cards */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">

          <div className="rounded-xl border border-slate-200 bg-white p-5">

            <p className="text-sm font-medium text-slate-500">
              Total Reports
            </p>

            <p className="mt-2 text-2xl font-bold text-slate-900">
              12
            </p>

          </div>


          <div className="rounded-xl border border-slate-200 bg-white p-5">

            <p className="text-sm font-medium text-slate-500">
              Pending
            </p>

            <p className="mt-2 text-2xl font-bold text-slate-900">
              5
            </p>

          </div>


          <div className="rounded-xl border border-slate-200 bg-white p-5">

            <p className="text-sm font-medium text-slate-500">
              Verified
            </p>

            <p className="mt-2 text-2xl font-bold text-slate-900">
              4
            </p>

          </div>


          <div className="rounded-xl border border-slate-200 bg-white p-5">

            <p className="text-sm font-medium text-slate-500">
              Resolved
            </p>

            <p className="mt-2 text-2xl font-bold text-slate-900">
              2
            </p>

          </div>

        </div>


        {/* Reports Section */}
        <section className="mt-10">

          <h3 className="text-lg font-bold text-slate-900">
            Reports
          </h3>


          {/* Filters */}
          <div className="mt-4 flex flex-wrap gap-2">

            <button
              type="button"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white"
            >
              All
            </button>

            <button
              type="button"
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Pending
            </button>

            <button
              type="button"
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Verified
            </button>

            <button
              type="button"
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Rejected
            </button>

            <button
              type="button"
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Resolved
            </button>

          </div>


          {/* Reports Table */}
          <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white">

            <div className="overflow-x-auto">

              <table className="w-full min-w-[700px] text-left">

                <thead className="border-b border-slate-200 bg-slate-50">

                  <tr>

                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Photo
                    </th>

                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Report ID
                    </th>

                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Severity
                    </th>

                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Location
                    </th>

                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Status
                    </th>

                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Action
                    </th>

                  </tr>

                </thead>


                <tbody className="divide-y divide-slate-200">

                  {/* Report 1 */}
                  <tr>

                    <td className="px-5 py-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-xs text-slate-500">
                        Photo
                      </div>

                    </td>

                    <td className="px-5 py-4 text-sm font-semibold text-slate-900">
                      RW-1024
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-700">
                      High
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600">
                      28.6139, 77.2090
                    </td>

                    <td className="px-5 py-4">

                      <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                        Pending
                      </span>

                    </td>

                    <td className="px-5 py-4">

                      <button
                        type="button"
                        onClick={() => navigate('/admin/report')}
                        className="text-sm font-semibold text-slate-900 hover:underline"
                      >
                        View
                      </button>

                    </td>

                  </tr>


                  {/* Report 2 */}
                  <tr>

                    <td className="px-5 py-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-xs text-slate-500">
                        Photo
                      </div>

                    </td>

                    <td className="px-5 py-4 text-sm font-semibold text-slate-900">
                      RW-1025
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-700">
                      Medium
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600">
                      28.6200, 77.2150
                    </td>

                    <td className="px-5 py-4">

                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                        Verified
                      </span>

                    </td>

                    <td className="px-5 py-4">

                      <button
                        type="button"
                        onClick={() => navigate('/admin/report')}
                        className="text-sm font-semibold text-slate-900 hover:underline"
                      >
                        View
                      </button>

                    </td>

                  </tr>


                  {/* Report 3 */}
                  <tr>

                    <td className="px-5 py-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-xs text-slate-500">
                        Photo
                      </div>

                    </td>

                    <td className="px-5 py-4 text-sm font-semibold text-slate-900">
                      RW-1026
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-700">
                      Low
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600">
                      28.6300, 77.2200
                    </td>

                    <td className="px-5 py-4">

                      <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                        Rejected
                      </span>

                    </td>

                    <td className="px-5 py-4">

                      <button
                        type="button"
                        onClick={() => navigate('/admin/report')}
                        className="text-sm font-semibold text-slate-900 hover:underline"
                      >
                        View
                      </button>

                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>

        </section>

      </main>

    </div>
  )
}


export default AdminDashboard