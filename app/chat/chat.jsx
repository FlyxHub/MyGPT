export function Chat() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0">

                <header className="flex flex-col items-center gap-9">
                    <div className="w-[500px] max-w-[100vw] p-4">
                        <h1 className="text-4xl font-bold text-center">This is the Chat Page</h1>
                    </div>
                </header>

                <div className="max-w-[500px] w-full space-y-6 px-4">

                    <div className="rounded-3xl bg-gray-700 w-full py-25">
                        {/* Chat items will go here... Eventually. */}
                    </div>

                    <form className="flex">
                        <input type="text" className="border-gray-700 border w-full rounded-3xl px-3 py-2"></input>
                        <a className="rounded-3xl border-gray-700 border hover:border-white p-5 mx-5">Submit</a>
                    </form>

                </div>

                <a
                    href="/"
                    className="p-5 rounded-3xl border border-gray-700 hover:border-blue-500 hover:shadow-[0_0_16px_4px_rgba(59,130,246,0.6)] transition-shadow inline-block text-center"
                >
                    Back to Home
                </a>
            </div>
        </main>
    );
}
