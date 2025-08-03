import React, { useState, useEffect } from 'react';

const RothVsTraditional = () => {
  const [inputs, setInputs] = useState({
    currentAge: 35,
    retirementAge: 60,
    annualContribution: 12000,
    currentIncome: 80000,
    retirementIncome: 60000,
    currentTaxRate: 22,
    retirementTaxRate: 18,
    annualReturn: 7,
    yearsInRetirement: 25
  });
  
  const [results, setResults] = useState({
    traditional: {
      accountBalance: 0,
      afterTaxBalance: 0,
      totalTaxesPaid: 0,
      netValue: 0
    },
    roth: {
      accountBalance: 0,
      afterTaxBalance: 0,
      totalTaxesPaid: 0,
      netValue: 0
    },
    difference: 0
  });

  const calculateComparison = () => {
    const yearsToRetirement = inputs.retirementAge - inputs.currentAge;
    const annualReturnDecimal = inputs.annualReturn / 100;
    const currentTaxRateDecimal = inputs.currentTaxRate / 100;
    const retirementTaxRateDecimal = inputs.retirementTaxRate / 100;
    
    // Traditional calculation
    let traditionalBalance = 0;
    let traditionalTaxesPaid = 0;
    
    // Accumulation phase - no taxes paid upfront
    for (let year = 0; year < yearsToRetirement; year++) {
      traditionalBalance += inputs.annualContribution;
      traditionalBalance *= (1 + annualReturnDecimal);
    }
    
    // Withdrawal phase - taxes paid at retirement rate
    const traditionalAfterTaxBalance = traditionalBalance * (1 - retirementTaxRateDecimal);
    traditionalTaxesPaid = traditionalBalance - traditionalAfterTaxBalance;
    
    // Roth calculation
    let rothBalance = 0;
    let rothTaxesPaid = 0;
    
    // Accumulation phase - taxes paid upfront
    const rothAfterTaxContribution = inputs.annualContribution * (1 - currentTaxRateDecimal);
    rothTaxesPaid = inputs.annualContribution * currentTaxRateDecimal * yearsToRetirement;
    
    for (let year = 0; year < yearsToRetirement; year++) {
      rothBalance += rothAfterTaxContribution;
      rothBalance *= (1 + annualReturnDecimal);
    }
    
    // Roth withdrawals are tax-free
    const rothAfterTaxBalance = rothBalance;
    
    const difference = rothAfterTaxBalance - traditionalAfterTaxBalance;
    
    setResults({
      traditional: {
        accountBalance: traditionalBalance,
        afterTaxBalance: traditionalAfterTaxBalance,
        totalTaxesPaid: traditionalTaxesPaid,
        netValue: traditionalAfterTaxBalance
      },
      roth: {
        accountBalance: rothBalance,
        afterTaxBalance: rothAfterTaxBalance,
        totalTaxesPaid: rothTaxesPaid,
        netValue: rothAfterTaxBalance
      },
      difference
    });
  };

  useEffect(() => {
    calculateComparison();
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

  const getRecommendation = () => {
    if (results.difference > 10000) {
      return {
        text: "Roth appears to be the better choice for your situation",
        color: "text-green-600",
        bg: "bg-green-50"
      };
    } else if (results.difference < -10000) {
      return {
        text: "Traditional appears to be the better choice for your situation",
        color: "text-blue-600",
        bg: "bg-blue-50"
      };
    } else {
      return {
        text: "Both options are similar - consider diversifying with both",
        color: "text-yellow-600",
        bg: "bg-yellow-50"
      };
    }
  };

  const recommendation = getRecommendation();

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Roth vs Traditional Retirement Account Calculator
      </h2>
      
      <div className="grid lg:grid-cols-3 gap-8">
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
                Current Income ($)
              </label>
              <input
                type="number"
                className="input"
                value={inputs.currentIncome}
                onChange={(e) => handleInputChange('currentIncome', e.target.value)}
                min="0"
                step="1000"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Current Tax Rate (%)
              </label>
              <input
                type="number"
                className="input"
                value={inputs.currentTaxRate}
                onChange={(e) => handleInputChange('currentTaxRate', e.target.value)}
                min="0"
                max="50"
                step="1"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Retirement Tax Rate (%)
              </label>
              <input
                type="number"
                className="input"
                value={inputs.retirementTaxRate}
                onChange={(e) => handleInputChange('retirementTaxRate', e.target.value)}
                min="0"
                max="50"
                step="1"
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
        
        {/* Traditional Results */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Traditional Account</h3>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600">Account Balance at Retirement</p>
              <p className="text-3xl font-bold text-blue-600">
                {formatCurrency(results.traditional.accountBalance)}
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <span className="text-gray-700 text-sm">Pre-tax Balance</span>
                <span className="font-semibold text-blue-600">
                  {formatCurrency(results.traditional.accountBalance)}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <span className="text-gray-700 text-sm">Taxes Owed</span>
                <span className="font-semibold text-red-600">
                  -{formatCurrency(results.traditional.totalTaxesPaid)}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-blue-100 rounded-lg border-2 border-blue-200">
                <span className="text-gray-700 font-medium">After-tax Value</span>
                <span className="font-bold text-blue-700">
                  {formatCurrency(results.traditional.afterTaxBalance)}
                </span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-700 mb-2">Traditional Benefits</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Immediate tax deduction</li>
              <li>• Lower current tax burden</li>
              <li>• Good if tax rate drops in retirement</li>
              <li>• Required minimum distributions</li>
            </ul>
          </div>
        </div>
        
        {/* Roth Results */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-green-700 mb-4">Roth Account</h3>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600">Account Balance at Retirement</p>
              <p className="text-3xl font-bold text-green-600">
                {formatCurrency(results.roth.accountBalance)}
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <span className="text-gray-700 text-sm">Tax-free Balance</span>
                <span className="font-semibold text-green-600">
                  {formatCurrency(results.roth.accountBalance)}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <span className="text-gray-700 text-sm">Taxes Already Paid</span>
                <span className="font-semibold text-red-600">
                  -{formatCurrency(results.roth.totalTaxesPaid)}
                </span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-green-100 rounded-lg border-2 border-green-200">
                <span className="text-gray-700 font-medium">After-tax Value</span>
                <span className="font-bold text-green-700">
                  {formatCurrency(results.roth.afterTaxBalance)}
                </span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-700 mb-2">Roth Benefits</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Tax-free growth and withdrawals</li>
              <li>• No required minimum distributions</li>
              <li>• Good if tax rate increases</li>
              <li>• More flexibility in retirement</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Recommendation Section */}
      <div className={`mt-8 p-6 rounded-lg ${recommendation.bg}`}>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recommendation</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className={`text-lg font-medium ${recommendation.color} mb-2`}>
              {recommendation.text}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Net difference: {results.difference >= 0 ? '+' : ''}{formatCurrency(results.difference)} in favor of {results.difference >= 0 ? 'Roth' : 'Traditional'}
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-semibold text-gray-700 mb-2">Key Factors to Consider</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Your current vs. expected retirement tax bracket</li>
              <li>• Time horizon until retirement</li>
              <li>• Income limits for Roth contributions</li>
              <li>• Estate planning considerations</li>
              <li>• Diversification of tax treatments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RothVsTraditional; 