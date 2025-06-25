import { NextRequest, NextResponse } from 'next/server';

const VIETQR_API = 'https://api.vietqr.io/v2/generate';
// const CLIENT_ID = process.env.VIETQR_CLIENT_ID || ''; // Nhập Client ID nếu cần
// const API_KEY = process.env.VIETQR_API_KEY || '';     // Nhập API Key nếu cần

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const accountNumber = searchParams.get('accountNumber') || '';
  const accountName = searchParams.get('accountName') || '';
  const bankId = searchParams.get('bankId') || '970436';
  const amount = searchParams.get('amount') ? parseFloat(searchParams.get('amount')!) : 0;
  const addInfo = searchParams.get('addInfo') || '';

  if (!accountNumber || !accountName) {
    return NextResponse.json({ error: 'Thiếu thông tin tài khoản hoặc tên' }, { status: 400 });
  }

  try {
    const res = await fetch(VIETQR_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // ...(CLIENT_ID && API_KEY ? {
        //   'x-client-id': CLIENT_ID,
        //   'x-api-key': API_KEY,
        // } : {})
      },
      body: JSON.stringify({
        accountNo: accountNumber,
        accountName: accountName,
        acqId: bankId,
        amount,
        addInfo,
        format: 'png'
      })
    });

    const data = await res.json();

    if (!data || !data.data || !data.data.qrDataURL) {
      return NextResponse.json({ error: 'Không thể tạo mã QR từ VietQR' }, { status: 500 });
    }

    const imageBuffer = Buffer.from(data.data.qrDataURL.split(',')[1], 'base64');

    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': 'inline; filename="vietqr.png"'
      }
    });
  } catch {
    return NextResponse.json({ error: 'Lỗi kết nối VietQR API' }, { status: 500 });
  }
}
