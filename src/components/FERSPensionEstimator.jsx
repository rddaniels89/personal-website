import React, { useState, useEffect } from 'react';

const FERSPensionEstimator = () => {
  const [inputs, setInputs] = useState({
    currentAge: 35,
    retirementAge: 62,
    yearsOfService: 20,
    highThreeAverage: 85000,
    supplementSalary: 85000,
    supplementYearsOfService: 20,
    retirementType: 'immediate', // immediate, deferred, disability
    hasSpecialProvisions: false // law enforcement, firefighter, etc.
  });
  
  const [results, setResults] = useState({
    annualPension: 0,
    monthlyPension: 0,
    specialSupplement: 0,
    totalMonthlyBenefit: 0,
    eligibilityStatus: '',
    pensionMultiplier: 0
  });

  const calculateFERSPension = () => {
    const { yearsOfService, highThreeAverage, currentAge, retirementAge, hasSpecialProvisions } = inputs;
    
    // Determine eligibility
    let eligibilityStatus = '';
    let canRetireImmediately = false;
    
    if (retirementAge >= 62 && yearsOfService >= 5) {
      eligibilityStatus = 'Eligible for immediate retirement';
      canRetireImmediately = true;
    } else if (retirementAge >= 60 && yearsOfService >= 20) {
      eligibilityStatus = 'Eligible for immediate retirement (20+ years)';
      canRetireImmediately = true;
    } else if (retirementAge >= 57 && yearsOfService >= 30) {
      eligibilityStatus = 'Eligible for immediate retirement (30+ years)';
      canRetireImmediately = true;
    } else if (hasSpecialProvisions && retirementAge >= 50 && yearsOfService >= 20) {
      eligibilityStatus = 'Eligible for immediate retirement (special provisions)';
      canRetireImmediately = true;
    } else if (retirementAge >= 62 && yearsOfService >= 5) {
      eligibilityStatus = 'Eligible for deferred retirement';
    } else {
      eligibilityStatus = 'Not eligible for retirement';
    }
    
    // Calculate pension multiplier
    let pensionMultiplier = 0;
    if (canRetireImmediately) {
      if (retirementAge >= 62 || yearsOfService >= 20) {
        pensionMultiplier = 0.01; // 1% per year
      } else {
        pensionMultiplier = 0.01; // 1% per year with potential reduction
      }
    }
    
    // Calculate annual pension
    const annualPension = highThreeAverage * pensionMultiplier * yearsOfService;
    const monthlyPension = annualPension / 12;
    
    // Calculate FERS Supplement (if applicable)
    let specialSupplement = 0;
    if (canRetireImmediately && retirementAge < 62 && yearsOfService >= 30) {
      // Approximate FERS supplement calculation
      const socialSecurityEstimate = inputs.supplementSalary * 0.4; // rough estimate
      const supplementYears = Math.min(inputs.supplementYearsOfService, 40);
      specialSupplement = (socialSecurityEstimate * supplementYears) / 40 / 12;
    }
    
    const totalMonthlyBenefit = monthlyPension + specialSupplement;
    
    setResults({
      annualPension,
      monthlyPension,
      specialSupplement,
      totalMonthlyBenefit,
      eligibilityStatus,
      pensionMultiplier
    });
  };

  useEffect(() => {
    calculateFERSPension();
  }, [inputs]);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: field === 'hasSpecialProvisions' ? value : (parseFloat(value) || 0)
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

  const getEligibilityColor = () => {
    if (results.eligibilityStatus.includes('Eligible for immediate')) {
      return 'text-green-600 bg-green-50';
    } else if (results.eligibilityStatus.includes('Eligible for deferred')) {
      return 'text-yellow-600 bg-yellow-50';
    } else {
      return 'text-red-600 bg-red-50';
    }
  };

  const getRetirementScenarios = () => {
    const scenarios = [];
    
    // Scenario 1: Minimum Retirement Age (MRA) + 30 years
    if (inputs.yearsOfService >= 30) {
      scenarios.push({
        name: 'MRA + 30 Years',
        age: 57,
        description: 'Retire at 57 with 30+ years of service'
      });
    }
    
    // Scenario 2: Age 60 + 20 years
    if (inputs.yearsOfService >= 20) {
      scenarios.push({
        name: 'Age 60 + 20 Years',
        age: 60,
        description: 'Retire at 60 with 20+ years of service'
      });
    }
    
    // Scenario 3: Age 62 + 5 years
    if (inputs.yearsOfService >= 5) {
      scenarios.push({
        name: 'Age 62 + 5 Years',
        age: 62,
        description: 'Retire at 62 with 5+ years of service'
      });
    }
    
    return scenarios;
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        FERS Pension Estimator
      </h2>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Employee Information</h3>
          
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
                max="70"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Planned Retirement Age
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
                Years of Federal Service
              </label>
              <input
                type="number"
                className="input"
                value={inputs.yearsOfService}
                onChange={(e) => handleInputChange('yearsOfService', e.target.value)}
                min="0"
                max="45"
                step="0.5"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                High-3 Average Salary ($)
              </label>
              <input
                type="number"
                className="input"
                value={inputs.highThreeAverage}
                onChange={(e) => handleInputChange('highThreeAverage', e.target.value)}
                min="0"
                step="1000"
              />
              <p className="text-xs text-gray-500 mt-1">
                Average of highest 3 consecutive years of salary
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Supplement Calculation Salary ($)
              </label>
              <input
                type="number"
                className="input"
                value={inputs.supplementSalary}
                onChange={(e) => handleInputChange('supplementSalary', e.target.value)}
                min="0"
                step="1000"
              />
              <p className="text-xs text-gray-500 mt-1">
                Used for FERS supplement calculation
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Supplement Years of Service
              </label>
              <input
                type="number"
                className="input"
                value={inputs.supplementYearsOfService}
                onChange={(e) => handleInputChange('supplementYearsOfService', e.target.value)}
                min="0"
                max="40"
                step="0.5"
              />
            </div>
            
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={inputs.hasSpecialProvisions}
                  onChange={(e) => handleInputChange('hasSpecialProvisions', e.target.checked)}
                />
                <span className="text-sm font-medium text-gray-600">
                  Special Provisions (Law Enforcement, Firefighter, etc.)
                </span>
              </label>
            </div>
          </div>
        </div>
        
        {/* Results Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Pension Calculation</h3>
          
          {/* Eligibility Status */}
          <div className={`p-4 rounded-lg ${getEligibilityColor()}`}>
            <h4 className="font-semibold mb-2">Eligibility Status</h4>
            <p className="text-sm">{results.eligibilityStatus}</p>
          </div>
          
          {/* Pension Results */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600">Annual FERS Pension</p>
              <p className="text-4xl font-bold text-blue-600">
                {formatCurrency(results.annualPension)}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-600">Monthly Pension</p>
                <p className="text-2xl font-semibold text-blue-600">
                  {formatCurrency(results.monthlyPension)}
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-600">Pension Multiplier</p>
                <p className="text-2xl font-semibold text-gray-800">
                  {(results.pensionMultiplier * 100).toFixed(1)}%
                </p>
              </div>
            </div>
          </div>
          
          {/* FERS Supplement */}
          {results.specialSupplement > 0 && (
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-center mb-2">
                <p className="text-sm text-gray-600">FERS Supplement (Monthly)</p>
                <p className="text-2xl font-bold text-green-600">
                  {formatCurrency(results.specialSupplement)}
                </p>
              </div>
              <p className="text-xs text-gray-600 text-center">
                Paid until age 62 (when eligible for Social Security)
              </p>
            </div>
          )}
          
          {/* Total Monthly Benefit */}
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-center">
              <p className="text-sm text-gray-600">Total Monthly Benefit</p>
              <p className="text-3xl font-bold text-purple-600">
                {formatCurrency(results.totalMonthlyBenefit)}
              </p>
            </div>
          </div>
        </div>
        
        {/* Information Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Retirement Scenarios</h3>
          
          <div className="space-y-4">
            {getRetirementScenarios().map((scenario, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-700">{scenario.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{scenario.description}</p>
                <p className="text-sm font-medium text-blue-600 mt-2">
                  Eligible at age {scenario.age}
                </p>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-700 mb-2">FERS Components</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• <strong>Basic Benefit:</strong> Pension based on years of service</li>
              <li>• <strong>Social Security:</strong> Standard Social Security benefits</li>
              <li>• <strong>TSP:</strong> Thrift Savings Plan (401k equivalent)</li>
              <li>• <strong>FERS Supplement:</strong> Bridge to Social Security</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-700 mb-2">Important Notes</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• This is an estimate - actual benefits may vary</li>
              <li>• COLA adjustments not included</li>
              <li>• Survivor benefits available</li>
              <li>• Health insurance continues in retirement</li>
              <li>• Consult HR for official calculations</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-700 mb-2">Calculation Formula</h4>
            <p className="text-sm text-gray-600">
              <strong>Annual Pension =</strong><br/>
              High-3 Average × Years of Service × Multiplier
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Standard multiplier: 1.0% per year of service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FERSPensionEstimator; 