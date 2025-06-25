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
    <div className="max-w-md mx-auto p-4 space-y-4">
      <h1 className="text-xl font-bold text-center">Tạo Mã QR VietQR</h1>

      <input
        className="w-full border p-2 rounded"
        placeholder="Số tài khoản"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="Tên chủ tài khoản (IN HOA)"
        value={accountName}
        onChange={(e) => setAccountName(e.target.value)}
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="Mã ngân hàng (Mặc định: 970436)"
        value={bankId}
        onChange={(e) => setBankId(e.target.value)}
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="Số tiền (VD: 50000)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="Nội dung thanh toán"
        value={addInfo}
        onChange={(e) => setAddInfo(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700"
      >
        {loading ? 'Đang tạo...' : 'Tạo mã QR'}
      </button>

      {qrUrl && (
        <div className="text-center mt-4">
          <p className="mb-2 font-medium">Mã QR của bạn:</p>
          <img src={qrUrl} alt="VietQR Code" className="mx-auto border rounded shadow-md" />
        </div>
      )}
    </div>
  );
}
