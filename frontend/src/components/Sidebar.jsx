import {
    LayoutDashboard,
    BookOpen,
    Users,
    Library,
    Undo2,
    History,
    ChartNoAxesColumnIncreasing,
    LogOut
} from "lucide-react"

function Sidebar() {
    const menuItems = [
        {
            name: "Dashboard",
            icon: LayoutDashboard,
            active: true,
        },
        {
            name: "Books",
            icon: BookOpen,
        },
        {
            name: "Members",
            icon: Users,
        },
        {
            name: "Borrowing",
            icon: Library,
        },
        {
            name: "Returns",
            icon: Undo2,
        },
        {
            name: "Transaction History",
            icon: History,
        },
        {
            name: "Reports",
            icon: ChartNoAxesColumnIncreasing,
        },
    ]

    return (
        <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
            {/* Logo */}
            <div className="h-24 flex items-center px-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center">
                    <Library className="text-white" size={25} />
                </div>

                <div className="ml-3">
                    <h1 className="font-semibold text-gray-900">
                        Library System
                    </h1>

                    <p className="text-sm text-gray-500">
                        SMKN 7 SAMARINDA
                    </p>
                </div>
            </div>

            {/* Menu */}
            <nav className="flex-1 px-3">
                <ul className="space-y-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon

                        return (
                            <li key={item.name}>
                                <button
                                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-left transition 
                                        ${item.active
                                            ? "bg-indigo-50 text-indigo-700 font-medium"
                                            : "text-gray-600 hover:bg-gray-100"

                                        }`}
                                >
                                    <Icon size={21} />

                                    <span>
                                        {item.name}
                                    </span>
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            {/* Logout */}
            <div className="border-t border-gray-200 p-4">
                <button className="w-full flex items-center gap-4 px-4 py-3 text-gray-600 rounded-xl hover:bg-gray-100 transition">
                    <LogOut size={21} />

                    <span>
                        Logout
                    </span>
                </button>
            </div>
        </aside>
    )
}

export default Sidebar