'use client';

import { useState } from 'react';

export default function VietQRPage() {
  const [accountNumber, setAccountNumber] = useState('0061000961702');
  const [accountName, setAccountName] = useState('DUONG THUAN BAO');
  const [bankId, setBankId] = useState('970436'); // Vietcombank
  const [amount, setAmount] = useState('50000');
  const [addInfo, setAddInfo] = useState('THANH TOAN TIEN MAT');
  const [qrUrl, setQrUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const banks = [
    { id: '970436', name: 'Vietcombank' },
    { id: '970422', name: 'MB Bank (Quân đội)' },
    { id: '970418', name: 'BIDV' },
    { id: '970415', name: 'VietinBank' },
    { id: '970416', name: 'ACB' },
    { id: '970407', name: 'Techcombank' },
    { id: '970423', name: 'TPBank' },
    { id: '970403', name: 'Sacombank' }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-4 px-4 sm:py-8">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V6a1 1 0 00-1-1H5a1 1 0 00-1 1v1a1 1 0 001 1zm12 0h2a1 1 0 001-1V6a1 1 0 00-1-1h-2a1 1 0 00-1 1v1a1 1 0 001 1zM5 20h2a1 1 0 001-1v-1a1 1 0 00-1-1H5a1 1 0 00-1 1v1a1 1 0 001 1z" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">VietQR Generator</h1>
          <p className="text-gray-600 text-sm sm:text-base">Tạo mã QR thanh toán nhanh chóng và an toàn</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
          <div className="space-y-5">
            {/* Account Number */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Số tài khoản
              </label>
              <div className="relative">
                <input
                  className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
                  placeholder="Nhập số tài khoản"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Account Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tên chủ tài khoản
              </label>
              <div className="relative">
                <input
                  className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
                  placeholder="Tên chủ tài khoản (IN HOA)"
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bank Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Ngân hàng
              </label>
              <div className="relative">
                <select
                  className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none appearance-none bg-white"
                  value={bankId}
                  onChange={(e) => setBankId(e.target.value)}
                >
                  {banks.map((bank) => (
                    <option key={bank.id} value={bank.id}>
                      {bank.name} ({bank.id})
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Số tiền
              </label>
              <div className="relative">
                <input
                  className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
                  placeholder="Số tiền (VD: 50000)"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  type="number"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-400 text-sm font-medium">VNĐ</span>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nội dung thanh toán
              </label>
              <div className="relative">
                <input
                  className="w-full border-2 border-gray-200 p-3 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
                  placeholder="Nội dung thanh toán"
                  value={addInfo}
                  onChange={(e) => setAddInfo(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 shadow-lg hover:shadow-xl disabled:shadow-md flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Đang tạo mã QR...</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V6a1 1 0 00-1-1H5a1 1 0 00-1 1v1a1 1 0 001 1zm12 0h2a1 1 0 001-1V6a1 1 0 00-1-1h-2a1 1 0 00-1 1v1a1 1 0 001 1zM5 20h2a1 1 0 001-1v-1a1 1 0 00-1-1H5a1 1 0 00-1 1v1a1 1 0 001 1z" />
                </svg>
                <span>Tạo mã QR</span>
              </>
            )}
          </button>
        </div>

        {/* QR Result */}
        {qrUrl && (
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center animate-fade-in">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Mã QR đã được tạo thành công!</h3>
              <p className="text-gray-600 text-sm">Quét mã QR bên dưới để thực hiện thanh toán</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 inline-block">
              <img 
                src={qrUrl} 
                alt="VietQR Code" 
                className="mx-auto rounded-lg shadow-md max-w-full h-auto" 
                style={{ maxWidth: '280px' }}
              />
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500">
                💡 Mã QR có thể được quét bởi các ứng dụng ngân hàng hỗ trợ VietQR
              </p>
            </div>
          </div>
        )}
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
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
