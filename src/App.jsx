import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar - Fixed at top */}
        <Navbar />

        <div className="flex">
          {/* Sidebar - Fixed at left */}
          <Sidebar />

          {/* Main Content Area */}
          <main className="flex-1 p-6 lg:p-8 ml-[280px] mt-16">
            <AppRoutes />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
