import { Bell, Search } from "lucide-react"

function Header() {
    return (
        <header className="h-24 bg-white border-b border-gray-200 flex items-center px-8">

            {/* Title */}
            <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                    Dashboard
                </h1>

                <p className="text-gray-500 mt-1">
                    Overview of library activity
                </p>
            </div>

            {/* Right Section */}
            <div className="ml-auto flex items-center gap-5">

                {/* Search */}
                <div className="w-80 h-11 flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 shadow-sm">
                    <Search
                        size={20}
                        className="text-gray-500"
                    />

                    <input
                        tyoe="text"
                        placeholder="Search..."
                        className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-500"
                    />
                </div>

                {/* Notification */}
                <button className="relative w-11 h-11 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50">
                    <Bell
                        size={21}
                        className="text-gray-600"
                    />

                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* Divider */}
                <div className="h-10 w-px bg-gray-200"></div>

                {/* Profile */}
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-indigo-50 text-indigo-700 rounded-full flex items-center justify-center font-medium">
                        AD
                    </div>

                    <div>
                        <p className="font-semibold text-gray-900">
                            Admin Library
                        </p>

                        <p className="text-sm text-gray-500">
                            Administrator
                        </p>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header