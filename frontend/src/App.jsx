import AdminLayout from "./layouts/AdminLayout.jsx"

function App() {
  return (
    <AdminLayout>
      <div className="p-8">
        <h1 className="text-3xl font-semibold text-gray-900">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Overview of library activity
        </p>
      </div>
    </AdminLayout>
  )
}

export default App