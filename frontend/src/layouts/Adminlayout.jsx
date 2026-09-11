import Sidebar from "../components/Sidebar.jsx"

function AdminLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            <Sidebar />

            <main className="flex-1">
                {children}
            </main>
        </div>
    )
}

export default AdminLayout