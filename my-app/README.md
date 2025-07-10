# 🇻🇳 VietQR Dynamic QR Generator

Ứng dụng tạo mã QR thanh toán động theo tiêu chuẩn VietQR (Napas) sử dụng Next.js 15 (App Router), API route và giao diện đơn giản thân thiện.

![GenerateQR demo](https://generate-qr-banking.vercel.app/demo.png)

---

## 🚀 Tính năng

✅ Nhập số tài khoản, tên, ngân hàng, số tiền, nội dung

✅ Gửi request đến API VietQR

✅ Hiển thị ảnh QR có thể quét được bằng các app banking (Vietcombank, MB, ACB, TPBank,...)

✅ Không cần API key (có thể nâng cấp)

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
1. Truy cập http://localhost:3000/

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
|----------|------------|
| Vietcombank | 970436 |
| MB Bank | 970422 |
| BIDV | 970418 |
| ACB | 970416 |
| TPBank | 970423 |
| Sacombank | 970403 |
| Techcombank | 970407 |
| Agribank | 970405 |
| VietinBank | 970415 |
| VPBank | 970432 |
| SHB | 970443 |
| Eximbank | 970431 |
| SCB (Sài Gòn) | 970429 |
| HDBank | 970437 |
| VIB | 970441 |
| SeABank | 970440 |
| Nam A Bank | 970428 |
| BaoViet Bank | 970438 |
| ABBank | 970425 |
| OceanBank | 970414 |
| PVcomBank | 970412 |
| Bac A Bank | 970409 |
| LienVietPostBank | 970449 |
| KienlongBank | 970452 |
| MSB (Maritime Bank) | 970426 |
| Viet Capital Bank (Bản Việt) | 970454 |
| NCB (Ngân hàng Quốc Dân) | 970419 |
| Saigonbank | 970400 |
| OCB (Phương Đông) | 970448 |
| VRB (Việt – Nga) | 970421 |
| CBBank (Xây dựng) | 970444 |
| PG Bank | 970430 |
| GPBank | 970408 |
| Hong Leong Bank Vietnam | 970442 |
| Shinhan Bank Vietnam | 970424 |
| Woori Bank Vietnam | 970457 |
| UOB Vietnam | 970458 |
| Standard Chartered Vietnam | 970410 |
| Public Bank Vietnam | 970439 |
| CIMB Vietnam | 970454 |
| Indovina Bank | 970434 |

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