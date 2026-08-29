import { useNavigate } from 'react-router-dom'


function ReportPage() {
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
      <main className="mx-auto max-w-2xl px-5 py-10">

        <div className="mb-8">

          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Report a Pothole
          </h2>

          <p className="mt-2 text-slate-600">
            Help us identify dangerous road conditions.
          </p>

        </div>


        {/* Photo section */}
        <section className="mb-6">

          <h3 className="mb-2 text-sm font-semibold text-slate-900">
            Pothole Photo
          </h3>

          <div className="flex min-h-48 items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-white">

            <div className="text-center">

              <p className="text-3xl">
                📷
              </p>

              <p className="mt-2 font-medium text-slate-800">
                Add a Photo
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Take a photo or upload one from your device
              </p>

            </div>

          </div>

        </section>


        {/* Location section */}
        <section className="mb-6">

          <h3 className="mb-2 text-sm font-semibold text-slate-900">
            Location
          </h3>

          <button
            type="button"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-left font-medium text-slate-800 transition hover:border-slate-400"
          >
            📍 Use My Current Location
          </button>

        </section>


        {/* Description */}
        <section className="mb-6">

          <label
            htmlFor="description"
            className="mb-2 block text-sm font-semibold text-slate-900"
          >
            Description
          </label>

          <textarea
            id="description"
            rows="4"
            placeholder="Describe the pothole..."
            className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-500"
          />

        </section>


        {/* Severity */}
        <section className="mb-8">

          <h3 className="mb-3 text-sm font-semibold text-slate-900">
            Severity
          </h3>

          <div className="grid grid-cols-3 gap-3">

            <button
              type="button"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 font-medium text-slate-700"
            >
              Low
            </button>

            <button
              type="button"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 font-medium text-slate-700"
            >
              Medium
            </button>

            <button
              type="button"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 font-medium text-slate-700"
            >
              High
            </button>

          </div>

        </section>


        {/* Submit */}
        <button
          type="button"
          onClick={() => navigate('/success')}
          className="w-full rounded-xl bg-slate-900 px-5 py-4 font-semibold text-white transition hover:bg-slate-800"
        >
          Submit Pothole Report
        </button>


      </main>

    </div>
  )
}


export default ReportPage