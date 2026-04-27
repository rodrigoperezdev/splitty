export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#283D3B] text-[#44B0B8] flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-3xl rounded-3xl border border-[#1F4E59] bg-[#1F4E59]/80 p-10 shadow-2xl shadow-black/30 backdrop-blur-lg">
        <div className="space-y-6 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-[#1B4440] px-4 py-2 text-sm font-medium text-[#A8D9DC] ring-1 ring-[#44B0B8]/40">
            <span className="h-2 w-2 rounded-full bg-[#44B0B8]" />
            Splitty version 0.0.1
          </div>
          <h1 className="title-font text-4xl font-medium tracking-tight text-[#44B0B8] sm:text-5xl">
            Splitty
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-[#A8D9DC]">
            A simple frontend boilerplate for calculating shared costs with friends. Start here and build the app flow for groups, expenses, and split totals.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#1F4E59] bg-[#1B4440]/90 p-6 text-left">
              <h2 className="title-font text-xl font-medium text-[#44B0B8]">What’s next?</h2>
              <p className="mt-3 text-[#A8D9DC]">
                Add pages for groups, expenses, and settlement details. This scaffold is ready for a monorepo backend later.
              </p>
            </div>
            <div className="rounded-2xl border border-[#1F4E59] bg-[#1B4440]/90 p-6 text-left">
              <h2 className="title-font text-xl font-medium text-[#44B0B8]">Tech stack</h2>
              <p className="mt-3 text-[#A8D9DC]">
                Next.js, React, TypeScript, Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
