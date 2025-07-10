'use client';

import { useState } from 'react';

export default function VietQRPage() {
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [bankId, setBankId] = useState('970436'); // Vietcombank
  const [amount, setAmount] = useState('50000');
  const [addInfo, setAddInfo] = useState('CHUYEN KHOAN');
  const [qrUrl, setQrUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const banks = [
    { id: '970436', name: 'Vietcombank', logo: '🏦' },
    { id: '970422', name: 'MB Bank (Quân đội)', logo: '🪖' },
    { id: '970418', name: 'BIDV', logo: '🏛️' },
    { id: '970415', name: 'VietinBank', logo: '🏦' },
    { id: '970416', name: 'ACB', logo: '🏪' },
    { id: '970407', name: 'Techcombank', logo: '💻' },
    { id: '970423', name: 'TPBank', logo: '🏦' },
    { id: '970403', name: 'Sacombank', logo: '🏦' },
    { id: '970405', name: 'Agribank', logo: '🌾' },
    { id: '970432', name: 'VPBank', logo: '🏦' },
    { id: '970443', name: 'SHB', logo: '🏦' },
    { id: '970431', name: 'Eximbank', logo: '🏦' },
    { id: '970429', name: 'SCB (Sài Gòn)', logo: '🏦' },
    { id: '970437', name: 'HDBank', logo: '🏦' },
    { id: '970441', name: 'VIB', logo: '🏦' },
    { id: '970440', name: 'SeABank', logo: '🌊' },
    { id: '970428', name: 'Nam A Bank', logo: '🏦' },
    { id: '970438', name: 'BaoViet Bank', logo: '🛡️' },
    { id: '970425', name: 'ABBank', logo: '🏦' },
    { id: '970414', name: 'OceanBank', logo: '🌊' },
    { id: '970412', name: 'PVcomBank', logo: '⛽' },
    { id: '970409', name: 'Bac A Bank', logo: '🏦' },
    { id: '970426', name: 'MSB (Maritime Bank)', logo: '⚓' },
    { id: '970448', name: 'OCB (Phương Đông)', logo: '🏦' },
    { id: '970430', name: 'PG Bank', logo: '🏦' },
  ];

  const handleGenerate = async () => {
    setLoading(true);
    setQrUrl(null);
    const params = new URLSearchParams({
      accountNumber,
      accountName,
      bankId,
      amount,
      addInfo,
    });

    try {
      const res = await fetch(`/api/vietqr?${params.toString()}`);
      if (!res.ok) throw new Error('Không thể tạo QR');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setQrUrl(url);
    } catch {
      alert('Tạo QR thất bại');
    } finally {
      setLoading(false);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const formatCurrency = (value: string) => {
    const num = parseInt(value.replace(/[^0-9]/g, ''));
    if (isNaN(num)) return '';
    return num.toLocaleString('vi-VN');
  };

  const selectedBank = banks.find(bank => bank.id === bankId);

  return (
    <div className={`min-h-screen transition-all duration-300 ${isDarkMode
        ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-900'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
      }`}>
      {/* Header */}
      <div className={`border-b backdrop-blur-sm sticky top-0 z-50 ${isDarkMode
          ? 'bg-gray-900/80 border-gray-700'
          : 'bg-white/80 border-gray-200'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDarkMode
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                }`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V6a1 1 0 00-1-1H5a1 1 0 00-1 1v1a1 1 0 001 1zm12 0h2a1 1 0 001-1V6a1 1 0 00-1-1h-2a1 1 0 00-1 1v1a1 1 0 001 1zM5 20h2a1 1 0 001-1v-1a1 1 0 00-1-1H5a1 1 0 00-1 1v1a1 1 0 001 1z" />
                </svg>
              </div>
              <div>
                <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Tạo QR thanh toán</h1>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>Tạo mã QR thanh toán chuyên nghiệp</p>
              </div>
            </div>

            <button
              onClick={toggleTheme}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDarkMode
                  ? 'bg-blue-600 focus:ring-blue-500'
                  : 'bg-gray-200 focus:ring-blue-500'
                }`}
            >
              <span className="sr-only">Toggle theme</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isDarkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
              />
              <div className="absolute inset-0 flex items-center justify-between px-1">
                <svg className="h-3 w-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
                <svg className="h-3 w-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form Section */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Thông tin thanh toán</h2>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Nhập thông tin để tạo mã QR VietQR</p>
            </div>

            <div className={`rounded-2xl shadow-xl p-8 backdrop-blur-sm ${isDarkMode
                ? 'bg-gray-800/50 border border-gray-700'
                : 'bg-white/70 border border-white/20'
              }`}>
              <div className="space-y-6">
                {/* Bank Selection - Featured */}
                <div>
                  <label className={`block text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                    Chọn ngân hàng
                  </label>
                  <div className="relative">
                    <select
                      className={`w-full border-2 p-4 rounded-xl transition-all duration-200 outline-none appearance-none text-lg ${isDarkMode
                          ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20'
                          : 'border-gray-200 bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                        }`}
                      value={bankId}
                      onChange={(e) => setBankId(e.target.value)}
                    >
                      {banks.map((bank) => (
                        <option key={bank.id} value={bank.id} className={isDarkMode ? 'bg-gray-700' : 'bg-white'}>
                          {bank.logo} {bank.name}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <svg className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {selectedBank && (
                    <div className={`mt-3 p-3 rounded-lg ${isDarkMode ? 'bg-gray-700/50' : 'bg-blue-50'
                      }`}>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{selectedBank.logo}</span>
                        <div>
                          <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}>{selectedBank.name}</p>
                          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                            }`}>Mã ngân hàng: {selectedBank.id}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Account Number */}
                <div>
                  <label className={`block text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                    Số tài khoản
                  </label>
                  <div className="relative">
                    <input
                      className={`w-full border-2 p-4 rounded-xl transition-all duration-200 outline-none ${isDarkMode
                          ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20'
                          : 'border-gray-200 bg-white text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                        }`}
                      placeholder="Nhập số tài khoản"
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <svg className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Account Name */}
                <div>
                  <label className={`block text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                    Tên chủ tài khoản
                  </label>
                  <div className="relative">
                    <input
                      className={`w-full border-2 p-4 rounded-xl transition-all duration-200 outline-none ${isDarkMode
                          ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20'
                          : 'border-gray-200 bg-white text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                        }`}
                      placeholder="Tên chủ tài khoản (IN HOA)"
                      value={accountName}
                      onChange={(e) => setAccountName(e.target.value.toUpperCase())}
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <svg className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Amount */}
                <div>
                  <label className={`block text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                    Số tiền
                  </label>
                  <div className="relative">
                    <input
                      className={`w-full border-2 p-4 rounded-xl transition-all duration-200 outline-none text-lg font-semibold ${isDarkMode
                          ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20'
                          : 'border-gray-200 bg-white text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                        }`}
                      placeholder="Số tiền (VD: 50,000)"
                      value={formatCurrency(amount)}
                      onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ''))}
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <span className={`text-lg font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'
                        }`}>VNĐ</span>
                    </div>
                  </div>
                  {amount && (
                    <p className={`mt-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                      Số tiền: {formatCurrency(amount)} VNĐ
                    </p>
                  )}
                </div>

                {/* Additional Info */}
                <div>
                  <label className={`block text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                    Nội dung thanh toán
                  </label>
                  <div className="relative">
                    <input
                      className={`w-full border-2 p-4 rounded-xl transition-all duration-200 outline-none ${isDarkMode
                          ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20'
                          : 'border-gray-200 bg-white text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                        }`}
                      placeholder="Nội dung thanh toán"
                      value={addInfo}
                      onChange={(e) => setAddInfo(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <svg className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={handleGenerate}
                disabled={loading || !accountNumber || !accountName}
                className={`w-full mt-8 font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 shadow-lg hover:shadow-xl disabled:shadow-md flex items-center justify-center space-x-3 text-lg ${isDarkMode
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 disabled:from-gray-600 disabled:to-gray-700 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white'
                  }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Đang tạo mã QR...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V6a1 1 0 00-1-1H5a1 1 0 00-1 1v1a1 1 0 001 1zm12 0h2a1 1 0 001-1V6a1 1 0 00-1-1h-2a1 1 0 00-1 1v1a1 1 0 001 1zM5 20h2a1 1 0 001-1v-1a1 1 0 00-1-1H5a1 1 0 00-1 1v1a1 1 0 001 1z" />
                    </svg>
                    <span>Tạo mã QR</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Result Section */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Kết quả</h2>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Mã QR sẽ hiển thị ở đây</p>
            </div>

            {qrUrl ? (
              <div className={`rounded-2xl shadow-xl p-8 text-center animate-fade-in backdrop-blur-sm ${isDarkMode
                  ? 'bg-gray-800/50 border border-gray-700'
                  : 'bg-white/70 border border-white/20'
                }`}>
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${isDarkMode ? 'bg-green-900/50' : 'bg-green-100'
                    }`}>
                    <svg className={`w-8 h-8 ${isDarkMode ? 'text-green-400' : 'text-green-600'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>Mã QR đã sẵn sàng!</h3>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>Quét mã QR bên dưới để thực hiện thanh toán</p>
                </div>

                <div className={`rounded-2xl p-4 inline-block ${isDarkMode ? 'bg-white' : 'bg-white'
                  }`}>
                  <img
                    src={qrUrl}
                    alt="VietQR Code"
                    className="mx-auto rounded-xl shadow-lg max-w-full h-auto"
                    style={{ maxWidth: '260px' }}
                  />
                </div>

                {/* Payment Info Summary */}
                <div className={`mt-6 p-4 rounded-xl ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                  }`}>
                  <div className="grid grid-cols-1 gap-3 text-left">
                    <div className="flex justify-between">
                      <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>Ngân hàng:</span>
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>{selectedBank?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>Số tài khoản:</span>
                      <span className={`font-semibold font-mono ${isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>{accountNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>Tên tài khoản:</span>
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>{accountName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>Số tiền:</span>
                      <span className={`font-bold text-lg ${isDarkMode ? 'text-blue-400' : 'text-blue-600'
                        }`}>{formatCurrency(amount)} VNĐ</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>Nội dung:</span>
                      <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>{addInfo}</span>
                    </div>
                  </div>
                </div>

                <div className={`mt-6 pt-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'
                  }`}>
                  <p className={`text-sm flex items-center justify-center space-x-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Mã QR tương thích với tất cả ứng dụng ngân hàng hỗ trợ VietQR</span>
                  </p>
                </div>
              </div>
            ) : (
              <div className={`rounded-2xl shadow-xl p-8 text-center backdrop-blur-sm ${isDarkMode
                  ? 'bg-gray-800/30 border border-gray-700/50'
                  : 'bg-white/50 border border-white/30'
                }`}>
                <div className={`w-32 h-32 mx-auto rounded-2xl flex items-center justify-center mb-6 ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'
                  }`}>
                  <svg className={`w-16 h-16 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V6a1 1 0 00-1-1H5a1 1 0 00-1 1v1a1 1 0 001 1zm12 0h2a1 1 0 001-1V6a1 1 0 00-1-1h-2a1 1 0 00-1 1v1a1 1 0 001 1zM5 20h2a1 1 0 001-1v-1a1 1 0 00-1-1H5a1 1 0 00-1 1v1a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Chưa có mã QR</h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>Vui lòng điền đầy đủ thông tin và nhấn &ldquo;Tạo mã QR&rdquo;</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
