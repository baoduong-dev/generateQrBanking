# 🇻🇳 VietQR Dynamic QR Generator

Ứng dụng tạo mã QR thanh toán động theo tiêu chuẩn VietQR (Napas) sử dụng Next.js 15 (App Router), API route và giao diện đơn giản thân thiện.

![GenerateQR demo](https://generate-qr-banking.vercel.app/demo.png)

---

## 🚀 Tính năng

- ✅ Nhập số tài khoản, tên, ngân hàng, số tiền, nội dung
- ✅ Gửi request đến API VietQR
- ✅ Hiển thị ảnh QR có thể quét được bằng các app banking (Vietcombank, MB, ACB, TPBank,...)
- ✅ Không cần API key (có thể nâng cấp)

---

## 🧩 Công nghệ sử dụng

- [Next.js 15 (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [VietQR API](https://api.vietqr.io)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📦 Cài đặt

```bash
git clone https://github.com/baoduong-dev/generateQrBanking.git
cd my-app
npm install
npm run dev
```

---

## 📱 Sử dụng
1. Truy cập http://localhost:3000/vietqr

2. Nhập các trường thông tin:

- Số tài khoản

- Tên tài khoản (IN HOA, không dấu)

- Mã ngân hàng (VD: Vietcombank là 970436)

- Số tiền (tuỳ chọn)

- Nội dung thanh toán (tuỳ chọn)

3. Bấm Tạo mã QR

4. Kết quả: ảnh QR có thể quét để chuyển khoản qua mobile banking.

---

## 🏦 Mã ngân hàng (Bank ID) phổ biến
| Ngân hàng | Mã Bank ID |
| -------- | ---------- |
| Vietcombank | 970436 |
| MB Bank | 970422 |
| BIDV | 970418 |
| ACB | 970416 |
| TPBank | 970423 |
| Sacombank | 970403 |
| Techcombank | 970407 |

Bạn có thể dùng dropdown hoặc form nhập tay mã bank.

---

## 🛠 Cấu trúc dự án
```bash
my-app/
├── app/
│   └── vietqr/
│       └── page.tsx       # Giao diện tạo QR
├── app/api/
│   └── vietqr/route.ts    # API Route gọi tới VietQR API
├── public/
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
```

---

## 🔐 Bảo mật & API key (nâng cao)
VietQR API hỗ trợ x-client-id và x-api-key nếu bạn có nhu cầu tích hợp quy mô lớn. Bạn có thể đăng ký tại [VietQR API](https://vietqr.io) hoặc liên hệ Napas/ngân hàng.

---

## 📄 License
MIT License © 2025 - Dương Thuần Bảo [(@baoduong-dev)](https://github.com/baoduong-dev)

---

## ✨ Liên hệ & hỗ trợ
- Website: [baoduong.vercel.app](https://baoduong.vercel.app)
- Email: [duongthuanbao@gmail.com](mailto:duongthuanbao@gmail.com)
- Facebook: [fb.com/duongthuanbao](https://facebook.com/duongthuanbao)