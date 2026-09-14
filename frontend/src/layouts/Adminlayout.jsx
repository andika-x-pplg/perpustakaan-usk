import Sidebar from "../components/Sidebar.jsx"
import Header from "../components/Header.jsx"

function AdminLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            <Sidebar />

            <div className="flex-1">
                <Header />

                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default AdminLayout