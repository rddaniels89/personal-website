import { useState } from 'react'
import TSPCalculator from './components/TSPCalculator'
import RothVsTraditional from './components/RothVsTraditional'
import FERSPensionEstimator from './components/FERSPensionEstimator'

function App() {
  const [activeTab, setActiveTab] = useState('tsp')

  const tabs = [
    { id: 'tsp', label: 'TSP Calculator', component: TSPCalculator },
    { id: 'roth', label: 'Roth vs Traditional', component: RothVsTraditional },
    { id: 'fers', label: 'FERS Pension', component: FERSPensionEstimator }
  ]

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Fed Finance Lab
              </h1>
              <span className="ml-2 text-sm text-gray-500">
                Federal Employee Financial Tools
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Plan • Calculate • Retire
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {ActiveComponent && <ActiveComponent />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Fed Finance Lab</h3>
              <p className="text-gray-300 text-sm">
                Comprehensive financial planning tools specifically designed for federal employees.
                Plan your retirement with confidence using our TSP, FERS, and investment calculators.
              </p>
            </div>
            
            <div>
              <h4 className="text-md font-semibold mb-4">Tools</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>TSP Calculator - Plan your thrift savings</li>
                <li>Roth vs Traditional - Compare tax strategies</li>
                <li>FERS Pension - Estimate your pension</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-md font-semibold mb-4">Important Notes</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• All calculations are estimates</li>
                <li>• Consult HR for official numbers</li>
                <li>• Tax laws may change</li>
                <li>• Consider professional advice</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Fed Finance Lab. Educational purposes only. Not financial advice.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App 