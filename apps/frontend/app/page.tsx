export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-3xl rounded-3xl border border-slate-800 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/50 backdrop-blur-lg">
        <div className="space-y-6 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 ring-1 ring-slate-700/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Splitty version 0.0.1
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Splitty
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300">
            A simple frontend boilerplate for calculating shared costs with friends. Start here and build the app flow for groups, expenses, and split totals.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-6 text-left">
              <h2 className="text-xl font-semibold text-white">What’s next?</h2>
              <p className="mt-3 text-slate-400">
                Add pages for groups, expenses, and settlement details. This scaffold is ready for a monorepo backend later.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-6 text-left">
              <h2 className="text-xl font-semibold text-white">Tech stack</h2>
              <p className="mt-3 text-slate-400">
                Next.js, React, TypeScript, Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
