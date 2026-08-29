import { useNavigate } from 'react-router-dom'


function SuccessPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="border-b border-slate-200 bg-white">

        <div className="mx-auto flex max-w-5xl items-center px-5 py-4">

          <h1 className="text-xl font-bold text-slate-900">
             FixYourRoad
          </h1>

        </div>

      </header>


      {/* Main content */}
      <main className="flex min-h-[calc(100vh-73px)] items-center justify-center px-5 py-10">

        <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-sm">

          {/* Success icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">

            <span className="text-3xl text-green-600">
              ✓
            </span>

          </div>


          {/* Heading */}
          <h2 className="mt-6 text-2xl font-bold text-slate-900">
            Report Submitted!
          </h2>


          {/* Message */}
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Thank you for helping make our roads safer. Your report has been
            submitted for review.
          </p>


          {/* Report ID */}
          <div className="mt-7 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">

            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Report ID
            </p>

            <p className="mt-2 text-xl font-bold tracking-wide text-slate-900">
              RW-1024
            </p>

          </div>


          {/* Copy button */}
          <button
            type="button"
            className="mt-4 w-full rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium text-slate-800 transition hover:bg-slate-50"
          >
            Copy Report ID
          </button>


          {/* Report another button */}
          <button
            type="button"
            onClick={() => navigate('/')}
            className="mt-3 w-full rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            Report Another Pothole
          </button>

        </div>

      </main>

    </div>
  )
}


export default SuccessPage