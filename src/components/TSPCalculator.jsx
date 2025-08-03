import React, { useState, useEffect } from 'react';

const TSPCalculator = () => {
  const [inputs, setInputs] = useState({
    currentAge: 35,
    retirementAge: 60,
    currentBalance: 50000,
    annualContribution: 12000,
    annualReturn: 7,
    matchPercentage: 5,
    annualSalary: 80000
  });
  
  const [results, setResults] = useState({
    finalBalance: 0,
    totalContributions: 0,
    totalMatch: 0,
    totalGrowth: 0
  });

  const calculateTSP = () => {
    const yearsToRetirement = inputs.retirementAge - inputs.currentAge;
    const annualReturnDecimal = inputs.annualReturn / 100;
    const annualMatch = (inputs.annualSalary * inputs.matchPercentage) / 100;
    
    let balance = inputs.currentBalance;
    let totalContributions = 0;
    let totalMatch = 0;
    
    for (let year = 0; year < yearsToRetirement; year++) {
      // Add annual contribution and match
      balance += inputs.annualContribution + annualMatch;
      totalContributions += inputs.annualContribution;
      totalMatch += annualMatch;
      
      // Apply annual return
      balance *= (1 + annualReturnDecimal);
    }
    
    const totalGrowth = balance - inputs.currentBalance - totalContributions - totalMatch;
    
    setResults({
      finalBalance: balance,
      totalContributions,
      totalMatch,
      totalGrowth
    });
  };

  useEffect(() => {
    calculateTSP();
  }, [inputs]);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        TSP Calculator
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Input Parameters</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Current Age
              </label>
              <input
                type="number"
                className="input"
                value={inputs.currentAge}
                onChange={(e) => handleInputChange('currentAge', e.target.value)}
                min="18"
                max="65"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Retirement Age
              </label>
              <input
                type="number"
                className="input"
                value={inputs.retirementAge}
                onChange={(e) => handleInputChange('retirementAge', e.target.value)}
                min="50"
                max="70"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Current TSP Balance ($)
              </label>
              <input
                type="number"
                className="input"
                value={inputs.currentBalance}
                onChange={(e) => handleInputChange('currentBalance', e.target.value)}
                min="0"
                step="1000"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Annual Contribution ($)
              </label>
              <input
                type="number"
                className="input"
                value={inputs.annualContribution}
                onChange={(e) => handleInputChange('annualContribution', e.target.value)}
                min="0"
                max="23000"
                step="500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Annual Salary ($)
              </label>
              <input
                type="number"
                className="input"
                value={inputs.annualSalary}
                onChange={(e) => handleInputChange('annualSalary', e.target.value)}
                min="0"
                step="1000"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Agency Match (%)
              </label>
              <input
                type="number"
                className="input"
                value={inputs.matchPercentage}
                onChange={(e) => handleInputChange('matchPercentage', e.target.value)}
                min="0"
                max="10"
                step="0.5"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Expected Annual Return (%)
              </label>
              <input
                type="number"
                className="input"
                value={inputs.annualReturn}
                onChange={(e) => handleInputChange('annualReturn', e.target.value)}
                min="0"
                max="20"
                step="0.1"
              />
            </div>
          </div>
        </div>
        
        {/* Results Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Projection Results</h3>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600">Projected TSP Balance at Retirement</p>
              <p className="text-4xl font-bold text-blue-600">
                {formatCurrency(results.finalBalance)}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-600">Years to Retirement</p>
                <p className="text-2xl font-semibold text-gray-800">
                  {inputs.retirementAge - inputs.currentAge}
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-600">Monthly Contribution</p>
                <p className="text-2xl font-semibold text-gray-800">
                  {formatCurrency(inputs.annualContribution / 12)}
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
              <span className="text-gray-700">Total Contributions</span>
              <span className="font-semibold text-green-600">
                {formatCurrency(results.totalContributions)}
              </span>
            </div>
            
            <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
              <span className="text-gray-700">Total Agency Match</span>
              <span className="font-semibold text-purple-600">
                {formatCurrency(results.totalMatch)}
              </span>
            </div>
            
            <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
              <span className="text-gray-700">Investment Growth</span>
              <span className="font-semibold text-orange-600">
                {formatCurrency(results.totalGrowth)}
              </span>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-700 mb-2">Key Insights</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• TSP contribution limit for 2024: $23,000</li>
              <li>• Catch-up contributions (50+): Additional $7,500</li>
              <li>• Agency match is typically up to 5% of salary</li>
              <li>• Consider increasing contributions annually</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TSPCalculator; 