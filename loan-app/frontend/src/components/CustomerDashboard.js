import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CustomerDashboard = () => {
  // Mock data - replace with actual API calls
  const [loans] = useState([
    {
      id: 1,
      type: 'Personal Loan',
      amount: 250000,
      status: 'Active',
      nextPayment: '2024-02-15',
      remainingAmount: 200000,
      bankStatus: 'Approved by HDFC Bank',
    },
    {
      id: 2,
      type: 'Home Loan',
      amount: 1500000,
      status: 'Pending Bank Approval',
      nextPayment: '-',
      remainingAmount: 1500000,
      bankStatus: 'Under Review by SBI',
    },
  ]);

  const [notifications] = useState([
    {
      id: 1,
      message: 'Your recent loan payment was successful',
      date: '2024-01-28',
      type: 'success',
    },
    {
      id: 2,
      message: 'Upcoming payment due in 5 days',
      date: '2024-01-27',
      type: 'warning',
    },
    {
      id: 3,
      message: 'HDFC Bank has approved your loan application',
      date: '2024-01-26',
      type: 'success',
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <i className="fas fa-landmark text-blue-600 text-2xl mr-2"></i>
                <span className="text-xl font-semibold text-gray-800">LoanEase</span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
                  <span className="sr-only">View notifications</span>
                  <i className="fas fa-bell text-xl"></i>
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
                </button>
              </div>
              <div className="ml-4 relative">
                <button className="flex items-center text-gray-500 hover:text-gray-600">
                  <i className="fas fa-user-circle text-2xl"></i>
                  <i className="fas fa-chevron-down ml-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-semibold text-gray-900">Welcome back, John!</h1>
            <p className="mt-1 text-gray-600">Here's an overview of your loans and recent activities.</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 px-4 sm:px-0">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              to="/loan/apply"
              className="bg-white overflow-hidden shadow rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <i className="fas fa-plus text-white"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Apply for Loan</h3>
                  <p className="text-sm text-gray-500">Start a new application</p>
                </div>
              </div>
            </Link>

            <button className="bg-white overflow-hidden shadow rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <i className="fas fa-money-bill-wave text-white"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Make Payment</h3>
                  <p className="text-sm text-gray-500">Pay your EMI</p>
                </div>
              </div>
            </button>

            <button className="bg-white overflow-hidden shadow rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                  <i className="fas fa-file-alt text-white"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Documents</h3>
                  <p className="text-sm text-gray-500">View & upload documents</p>
                </div>
              </div>
            </button>

            <button className="bg-white overflow-hidden shadow rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                  <i className="fas fa-headset text-white"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Support</h3>
                  <p className="text-sm text-gray-500">Get help & support</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Loans Overview */}
        <div className="mt-8 px-4 sm:px-0">
          <h2 className="text-lg font-medium text-gray-900">Your Loans</h2>
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {loans.map((loan) => (
                <li key={loan.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <i className={`fas fa-money-check-alt text-2xl ${
                            loan.status === 'Active' ? 'text-green-500' : 'text-yellow-500'
                          }`}></i>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">{loan.type}</h3>
                          <p className="text-sm text-gray-500">Amount: ₹{loan.amount.toLocaleString()}</p>
                          <p className="text-sm text-gray-500 mt-1">{loan.bankStatus}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          loan.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {loan.status}
                        </span>
                        <p className="mt-1 text-sm text-gray-500">Next Payment: {loan.nextPayment}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                          <div>
                            <span className="text-xs font-semibold inline-block text-blue-600">
                              Progress
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-semibold inline-block text-blue-600">
                              {Math.round((1 - loan.remainingAmount / loan.amount) * 100)}%
                            </span>
                          </div>
                        </div>
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                          <div
                            style={{ width: `${(1 - loan.remainingAmount / loan.amount) * 100}%` }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 px-4 sm:px-0">
          <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
          <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {notifications.map((notification) => (
                <li key={notification.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <i className={`fas fa-${notification.type === 'success' ? 'check-circle text-green-500' : 'exclamation-circle text-yellow-500'} text-lg`}></i>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-900">{notification.message}</p>
                        <p className="text-sm text-gray-500">{notification.date}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;