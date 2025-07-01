export function Chat() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0">

                <header className="flex flex-col items-center gap-9">
                    <div className="w-[500px] max-w-[100vw] p-4">
                        <h1 className="text-4xl font-bold text-center">This is the About Page</h1>
                        <p className="text-center mt-5">Look at all this useful info!</p>
                    </div>
                </header>

                <div className="max-w-[500px] w-full space-y-6 px-4">
                    <nav className="rounded-3xl border border-gray-500 p-5 text-center">
                        <p>
                            Lots of useful info will maybe go in this box at some point.
                            Until then, this is all you get lol.
                        </p>
                    </nav>
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
