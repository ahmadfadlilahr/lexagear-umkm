# Contact Form Documentation

## Overview
Fitur contact form LexaGear dirancang untuk memberikan pengalaman pengguna yang optimal dengan integrasi langsung ke Gmail, dilengkapi dengan beberapa alternatif email lainnya.

## Cara Kerja

### 1. Pengisian Form
- **Nama**: Minimal 2 karakter
- **Email**: Harus berformat email yang valid
- **Pesan**: Minimal 10 karakter, maksimal 500 karakter

### 2. Validasi Real-time
- ✅ **Visual Feedback**: Ikon validasi muncul saat user mengetik
- ✅ **Character Counter**: Menampilkan jumlah karakter untuk pesan
- ✅ **Error Messages**: Pesan error yang jelas dan informatif
- ✅ **Auto-resize**: Textarea menyesuaikan tinggi otomatis

### 3. Proses Pengiriman
1. **Form Submission**: User mengklik "Kirim Pesan via Gmail"
2. **Validation Check**: Sistem memvalidasi semua field
3. **Gmail Integration**: Jika valid, browser membuka Gmail dengan pesan terisi otomatis
4. **Success Feedback**: Notifikasi berhasil ditampilkan
5. **Form Reset**: Form dibersihkan setelah berhasil

### 4. Email Alternatives
Jika Gmail tidak terbuka dalam 3 detik, sistem akan menampilkan pilihan alternatif:
- **Outlook Web**: Membuka Outlook.com
- **Default Email**: Membuka aplikasi email default
- **Copy to Clipboard**: Menyalin email ke clipboard

## Fitur Unggulan

### 🎯 User-Friendly
- **Instruksi Jelas**: Panduan step-by-step yang mudah dipahami
- **Visual Feedback**: Indikator loading dan status yang informatif
- **Responsive Design**: Bekerja optimal di semua perangkat

### 🔧 Technical Excellence
- **No Backend Required**: Semua berjalan di frontend
- **Cross-browser Compatible**: Mendukung semua browser modern
- **Fallback Mechanisms**: Alternatif untuk berbagai skenario

### 🛡️ Robust Validation
- **Real-time Validation**: Feedback instan saat mengetik
- **Accessibility**: Support untuk screen readers
- **Error Handling**: Penanganan error yang komprehensif

## Format Email yang Dikirim

```
To: info@lexagear.com
Subject: Pesan dari [Nama] - Website LexaGear

Halo Tim LexaGear,

Saya [Nama] ingin menghubungi Anda melalui website LexaGear.

Detail Kontak:
• Nama: [Nama]
• Email: [Email User]
• Tanggal: [Tanggal Lengkap]
• Waktu: [Waktu]

Pesan:
[Pesan User]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Pesan ini dikirim melalui form kontak di website LexaGear.
Mohon balas ke email: [Email User]

Terima kasih!

Best regards,
[Nama]
```

## Troubleshooting

### Gmail Tidak Terbuka?
1. **Popup Blocked**: Pastikan popup blocker dimatikan
2. **Browser Settings**: Cek pengaturan browser untuk Gmail
3. **Use Alternatives**: Gunakan tombol alternatif yang muncul

### Form Tidak Terkirim?
1. **Check Validation**: Pastikan semua field terisi dengan benar
2. **Internet Connection**: Pastikan koneksi internet stabil
3. **Browser Compatibility**: Gunakan browser yang didukung

### Email Tidak Terformat?
1. **Copy Manual**: Gunakan opsi "Copy to Clipboard"
2. **Alternative Email**: Coba Outlook atau email default
3. **Contact Direct**: Hubungi info@lexagear.com secara langsung

## Browser Support
- ✅ Chrome 70+
- ✅ Firefox 65+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Security & Privacy
- **No Data Storage**: Tidak ada data yang disimpan di server
- **Client-side Only**: Semua proses berjalan di browser user
- **No Third-party Tracking**: Tidak ada pelacakan data pengguna

## Future Enhancements
- 📧 WhatsApp integration
- 📞 Phone call integration
- 📅 Meeting scheduler
- 🤖 Chatbot integration
- 📊 Analytics dashboard (admin only)
