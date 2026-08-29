import { useNavigate } from 'react-router-dom'


function ReportDetails() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="border-b border-slate-200 bg-white">

        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">

          <h1 className="text-xl font-bold text-slate-900">
            RoadWatch
          </h1>

          <p className="text-sm font-medium text-slate-600">
            Admin Dashboard
          </p>

        </div>

      </header>


      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-5 py-10">

        {/* Back Button */}
        <button
          type="button"
          onClick={() => navigate('/admin')}
          className="text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          ← Back to Reports
        </button>


        {/* Report Heading */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <h2 className="text-2xl font-bold text-slate-900">
            Report RW-1024
          </h2>

          <span className="w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            Verified
          </span>

        </div>


        {/* Report Information */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {/* Pothole Image */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5">

            <p className="mb-4 text-sm font-semibold text-slate-900">
              Pothole Image
            </p>

            <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-slate-100 text-sm text-slate-500">
              Pothole Photo
            </div>

          </div>


          {/* Report Details */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5">

            <div>

              <p className="text-sm font-medium text-slate-500">
                Severity
              </p>

              <p className="mt-1 text-base font-semibold text-slate-900">
                High
              </p>

            </div>


            <div className="mt-6">

              <p className="text-sm font-medium text-slate-500">
                Description
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-700">
                Large pothole reported near the main road intersection.
                It may be dangerous for vehicles and two-wheelers.
              </p>

            </div>


            <div className="mt-6">

              <p className="text-sm font-medium text-slate-500">
                Location
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-900">
                28.6139, 77.2090
              </p>

              <button
                type="button"
                className="mt-4 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Open in Google Maps
              </button>

            </div>

          </div>

        </div>


        {/* Admin Actions */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">

          <h3 className="text-base font-bold text-slate-900">
            Report Actions
          </h3>

          <div className="mt-4 flex flex-wrap gap-3">

            <button
              type="button"
              className="rounded-lg border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50"
            >
              Reject Report
            </button>

            <button
              type="button"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Verify Report
            </button>

            <button
              type="button"
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Mark as Resolved
            </button>

          </div>

        </section>


        {/* Social Media Section */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">

          <h3 className="text-base font-bold text-slate-900">
            Social Post
          </h3>

          <p className="mt-4 whitespace-pre-line rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
            ⚠️ Pothole reported at the following location.

            📍 28.6139, 77.2090

            @GovernmentHandle
          </p>


          <div className="mt-4 flex flex-wrap gap-3">

            <button
              type="button"
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Generate X Post
            </button>

            <button
              type="button"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Publish to X
            </button>

          </div>

        </section>

      </main>

    </div>
  )
}


export default ReportDetails