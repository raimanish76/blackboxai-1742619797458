import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  // Mock data - replace with actual API calls
  const [loanApplications, setLoanApplications] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      type: 'Personal Loan',
      amount: 250000,
      status: 'Pending',
      date: '2024-01-28',
      risk: 'Low',
      bankStatus: 'Sent to HDFC Bank',
      bankReview: 'Under Review',
      documents: ['Income Proof', 'Aadhar Card', 'PAN Card']
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      type: 'Home Loan',
      amount: 1500000,
      status: 'Under Review',
      date: '2024-01-27',
      risk: 'Medium',
      bankStatus: 'Sent to SBI',
      bankReview: 'Additional Documents Required',
      documents: ['Property Papers', 'Income Proof', 'Bank Statements']
    },
    {
      id: 3,
      customerName: 'Mike Johnson',
      type: 'Business Loan',
      amount: 750000,
      status: 'Pending',
      date: '2024-01-26',
      risk: 'High',
      bankStatus: 'Not Sent',
      bankReview: 'Pending Internal Review',
      documents: ['Business Plan', 'Financial Statements', 'GST Returns']
    },
  ]);

  const [statistics] = useState({
    totalApplications: 156,
    pendingReview: 23,
    approvedToday: 12,
    totalActiveLoans: 89,
    bankPendingReview: 15
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Under Review':
        return 'bg-blue-100 text-blue-800';
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low':
        return 'text-green-600';
      case 'Medium':
        return 'text-yellow-600';
      case 'High':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const handleBankAction = (id, action) => {
    setLoanApplications(prevApplications =>
      prevApplications.map(app =>
        app.id === id
          ? {
              ...app,
              bankStatus: action === 'approve'
                ? 'Approved by Bank'
                : action === 'reject'
                ? 'Rejected by Bank'
                : 'Additional Documents Required',
              status: action === 'approve'
                ? 'Approved'
                : action === 'reject'
                ? 'Rejected'
                : 'Under Review'
            }
          : app
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <i className="fas fa-landmark text-white text-2xl mr-2"></i>
                <span className="text-white text-xl font-semibold">LoanEase Admin</span>
              </Link>
            </div>
            <div className="flex items-center">
              <button className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
                <span className="sr-only">View notifications</span>
                <i className="fas fa-bell text-xl"></i>
              </button>
              <div className="ml-4 relative flex items-center">
                <span className="text-white mr-2">Admin User</span>
                <i className="fas fa-user-circle text-white text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <i className="fas fa-file-alt text-blue-600 text-3xl"></i>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Applications</dt>
                    <dd className="text-2xl font-semibold text-gray-900">{statistics.totalApplications}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <i className="fas fa-clock text-yellow-600 text-3xl"></i>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Pending Review</dt>
                    <dd className="text-2xl font-semibold text-gray-900">{statistics.pendingReview}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <i className="fas fa-check-circle text-green-600 text-3xl"></i>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Approved Today</dt>
                    <dd className="text-2xl font-semibold text-gray-900">{statistics.approvedToday}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <i className="fas fa-money-check-alt text-purple-600 text-3xl"></i>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Active Loans</dt>
                    <dd className="text-2xl font-semibold text-gray-900">{statistics.totalActiveLoans}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <i className="fas fa-university text-indigo-600 text-3xl"></i>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Bank Review Pending</dt>
                    <dd className="text-2xl font-semibold text-gray-900">{statistics.bankPendingReview}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Applications */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Recent Loan Applications</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              View All Applications
            </button>
          </div>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Loan Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Risk Level
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bank Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loanApplications.map((application) => (
                  <tr key={application.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{application.customerName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{application.type}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">₹{application.amount.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(application.status)}`}>
                        {application.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-medium ${getRiskColor(application.risk)}`}>
                        {application.risk}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{application.bankStatus}</div>
                      <div className="text-xs text-gray-500">{application.bankReview}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {application.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button 
                        onClick={() => handleBankAction(application.id, 'approve')}
                        className="text-green-600 hover:text-green-900 mr-4"
                      >
                        Approve
                      </button>
                      <button 
                        onClick={() => handleBankAction(application.id, 'reject')}
                        className="text-red-600 hover:text-red-900 mr-4"
                      >
                        Reject
                      </button>
                      <button 
                        onClick={() => handleBankAction(application.id, 'documents')}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        Request Docs
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Documents Section */}
        <div className="mt-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Recent Document Submissions
              </h3>
            </div>
            <div className="border-t border-gray-200">
              <ul className="divide-y divide-gray-200">
                {loanApplications.map((application) => (
                  <li key={application.id} className="px-4 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{application.customerName}</p>
                        <p className="text-sm text-gray-500">{application.type}</p>
                      </div>
                      <div className="flex space-x-2">
                        {application.documents.map((doc, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            {doc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;