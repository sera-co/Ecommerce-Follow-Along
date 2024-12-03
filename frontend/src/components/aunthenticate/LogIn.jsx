function LogInPage() {
    
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="border border-black bg-white p-8 rounded-lg shadow-lg w-96">
                    <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Login Page</h1>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="xyz@example.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="******"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LogInPage;
