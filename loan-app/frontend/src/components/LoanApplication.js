import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoanApplication = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    loanType: '',
    amount: '',
    purpose: '',
    term: '',
    employmentStatus: '',
    monthlyIncome: '',
    otherLoans: 'no',
    collateral: 'no',
    collateralType: '',
    collateralValue: '',
    preferredBank: '',
    bankBranch: '',
    existingCustomer: 'no',
    accountNumber: '',
  });

  const banks = [
    { name: 'HDFC Bank', branches: ['Mumbai Main', 'Delhi Central', 'Bangalore Tech Park'] },
    { name: 'State Bank of India', branches: ['Mumbai HQ', 'Delhi CP', 'Bangalore MG Road'] },
    { name: 'ICICI Bank', branches: ['Mumbai BKC', 'Delhi Nehru Place', 'Bangalore Whitefield'] },
    { name: 'Axis Bank', branches: ['Mumbai Andheri', 'Delhi Connaught Place', 'Bangalore Indiranagar'] }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      // Reset branch if bank changes
      ...(name === 'preferredBank' && { bankBranch: '' })
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement actual submission logic
    console.log('Loan application submitted:', formData);
    navigate('/customer/dashboard');
  };

  const selectedBank = banks.find(bank => bank.name === formData.preferredBank);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/customer/dashboard" className="flex-shrink-0 flex items-center">
                <i className="fas fa-landmark text-blue-600 text-2xl mr-2"></i>
                <span className="text-xl font-semibold text-gray-800">LoanEase</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center relative">
              {[1, 2, 3].map((step) => (
                <React.Fragment key={step}>
                  {step > 1 && (
                    <div className={`flex-1 h-1 w-24 ${currentStep >= step ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                  )}
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-sm text-gray-600">Loan Details</span>
            <span className="text-sm text-gray-600">Financial Info</span>
            <span className="text-sm text-gray-600">Review & Submit</span>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Loan Details */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Loan Details</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Loan Type</label>
                  <select
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    required
                  >
                    <option value="">Select a loan type</option>
                    <option value="personal">Personal Loan</option>
                    <option value="business">Business Loan</option>
                    <option value="home">Home Loan</option>
                    <option value="education">Education Loan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Loan Amount (₹)</label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Purpose of Loan</label>
                  <textarea
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    rows="3"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Loan Term (months)</label>
                  <select
                    name="term"
                    value={formData.term}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    required
                  >
                    <option value="">Select loan term</option>
                    <option value="12">12 months</option>
                    <option value="24">24 months</option>
                    <option value="36">36 months</option>
                    <option value="48">48 months</option>
                    <option value="60">60 months</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Preferred Bank</label>
                  <select
                    name="preferredBank"
                    value={formData.preferredBank}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    required
                  >
                    <option value="">Select a bank</option>
                    {banks.map(bank => (
                      <option key={bank.name} value={bank.name}>{bank.name}</option>
                    ))}
                  </select>
                </div>

                {formData.preferredBank && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Bank Branch</label>
                    <select
                      name="bankBranch"
                      value={formData.bankBranch}
                      onChange={handleChange}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      required
                    >
                      <option value="">Select a branch</option>
                      {selectedBank.branches.map(branch => (
                        <option key={branch} value={branch}>{branch}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700">Are you an existing customer?</label>
                  <select
                    name="existingCustomer"
                    value={formData.existingCustomer}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    required
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>

                {formData.existingCustomer === 'yes' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Account Number</label>
                    <input
                      type="text"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      required
                    />
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Financial Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Financial Information</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employment Status</label>
                  <select
                    name="employmentStatus"
                    value={formData.employmentStatus}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    required
                  >
                    <option value="">Select status</option>
                    <option value="employed">Employed</option>
                    <option value="self-employed">Self-employed</option>
                    <option value="business-owner">Business Owner</option>
                    <option value="retired">Retired</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Monthly Income (₹)</label>
                  <input
                    type="number"
                    name="monthlyIncome"
                    value={formData.monthlyIncome}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Do you have any other active loans?</label>
                  <select
                    name="otherLoans"
                    value={formData.otherLoans}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    required
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Would you like to provide collateral?</label>
                  <select
                    name="collateral"
                    value={formData.collateral}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    required
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>

                {formData.collateral === 'yes' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Collateral Type</label>
                      <input
                        type="text"
                        name="collateralType"
                        value={formData.collateralType}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Collateral Value (₹)</label>
                      <input
                        type="number"
                        name="collateralValue"
                        value={formData.collateralValue}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                      />
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Step 3: Review & Submit */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Review Your Application</h2>
                
                <div className="bg-gray-50 p-4 rounded-md">
                  <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Loan Type</dt>
                      <dd className="mt-1 text-sm text-gray-900">{formData.loanType}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Amount</dt>
                      <dd className="mt-1 text-sm text-gray-900">₹{formData.amount}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Term</dt>
                      <dd className="mt-1 text-sm text-gray-900">{formData.term} months</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Preferred Bank</dt>
                      <dd className="mt-1 text-sm text-gray-900">{formData.preferredBank}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Bank Branch</dt>
                      <dd className="mt-1 text-sm text-gray-900">{formData.bankBranch}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Employment Status</dt>
                      <dd className="mt-1 text-sm text-gray-900">{formData.employmentStatus}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Monthly Income</dt>
                      <dd className="mt-1 text-sm text-gray-900">₹{formData.monthlyIncome}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Other Loans</dt>
                      <dd className="mt-1 text-sm text-gray-900">{formData.otherLoans}</dd>
                    </div>
                  </dl>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <i className="fas fa-exclamation-triangle text-yellow-400"></i>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        Please review your information carefully before submitting. Once submitted, you cannot modify your application.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                    I confirm that all the information provided is accurate and complete
                  </label>
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-between">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Previous
                </button>
              )}
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoanApplication;