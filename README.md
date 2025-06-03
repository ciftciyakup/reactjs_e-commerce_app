# React.js E-Commerce App

Modern **React.js, Redux Toolkit ve TailwindCSS** teknolojileriyle geliştirilmiş, tam fonksiyonel e-ticaret web uygulaması.

---

## 🖥️ Kullanılan Teknolojiler

**Frontend:**

![reactjs](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![react-router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![tailwindcss](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Kütüphaneler:**

![redux-toolkit](https://img.shields.io/badge/Redux_Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white)
![react-icons](https://img.shields.io/badge/React_Icons-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![react-slick](https://img.shields.io/badge/React_Slick-FF6B6B?style=for-the-badge&logo=npm&logoColor=white)

---

## 🎯 Temel Özellikler

### E-Ticaret Özellikleri
- Ürün listeleme ve detay görüntüleme
- Kategori bazlı filtreleme
- Fiyat sıralama (artan/azalan)
- Alışveriş sepeti yönetimi

### Kullanıcı Arayüzü
- Modern tasarım (TailwindCSS)
- Ürün carousel/slider
- Sayfalama (pagination) desteği
- İnteraktif navigasyon

### State Management
- Redux Toolkit ile merkezi state yönetimi
- Sepet işlemleri (ekleme/çıkarma/silme)
- Kategori ve ürün durumu yönetimi
- Optimized re-rendering

---

## 📸 Proje Ekran Görüntüleri

### Anasayfa
<table>
  <tr>
    <td align="center">
      <img src="https://github.com/ciftciyakup/reactjs_e-commerce_app/blob/main/project-images/home.png" alt="Anasayfa" />
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/ciftciyakup/reactjs_e-commerce_app/blob/main/project-images/home-2.png" alt="Anasayfa 2" />
    </td>
  </tr>
</table>

### Kategori Filtreleme
<table>
  <tr>
    <td align="center">
      <img src="https://github.com/ciftciyakup/reactjs_e-commerce_app/blob/main/project-images/home-electronics.png" alt="Elektronik Kategori" />
      <br><em>Elektronik</em>
    </td>
  <tr>
  </tr>
    <td align="center">
      <img src="https://github.com/ciftciyakup/reactjs_e-commerce_app/blob/main/project-images/home-jewelery.png" alt="Mücevher Kategori" />
      <br><em>Mücevher</em>
    </td>
  </tr>
  </tr>
    <td align="center">
      <img src="https://github.com/ciftciyakup/reactjs_e-commerce_app/blob/main/project-images/home-mensclothing.png" alt="Erkek Giyim Kategori" />
      <br><em>Erkek Giyim</em>
    </td>
  </tr>
  </tr>
    <td align="center">
      <img src="https://github.com/ciftciyakup/reactjs_e-commerce_app/blob/main/project-images/home-womensclothing.png" alt="Kadın Giyim Kategori" />
      <br><em>Kadın Giyim</em>
    </td>
  </tr>
</table>

### Fiyat Sıralama
<table>
  <tr>
    <td align="center">
      <img src="https://github.com/ciftciyakup/reactjs_e-commerce_app/blob/main/project-images/home-artan-sirala.png" alt="Artan Sıralama" />
     <br><em>Artan</em>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/ciftciyakup/reactjs_e-commerce_app/blob/main/project-images/home-azalan-sirala.png" alt="Artan Sıralama" />
     <br><em>Azalan</em>
    </td>
  </tr>
</table>

### Ürün Detay Sayfası
<table>
  <tr>
    <td align="center">
      <img src="https://github.com/ciftciyakup/reactjs_e-commerce_app/blob/main/project-images/product-1.png" alt="Ürün Detay" />
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/ciftciyakup/reactjs_e-commerce_app/blob/main/project-images/product-2.png" alt="Ürün Detay" />
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/ciftciyakup/reactjs_e-commerce_app/blob/main/project-images/product-3.png" alt="Ürün Detay" />
    </td>
  </tr>
</table>

### Alışveriş Sepeti
<table>
  <tr>
    <td align="center">
      <img src="https://github.com/ciftciyakup/reactjs_e-commerce_app/blob/main/project-images/sepet.png" alt="Alışveriş Sepeti" />
    </td>
  </tr>
</table>

---

## 📁 Proje Yapısı

```
├── public/                 # Statik dosyalar
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/         # React bileşenleri
│   │   ├── cart/          # Sepet bileşenleri
│   │   ├── detail/        # Ürün detay bileşenleri
│   │   ├── home/          # Anasayfa bileşenleri
│   │   │   ├── Category.jsx
│   │   │   ├── Product.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── SliderComp.jsx
│   │   │   └── Sorting.jsx
│   │   ├── navbar/        # Navigasyon bileşenleri
│   │   │   ├── navbarItem/
│   │   │   └── Navbar.jsx
│   │   └── Loading.jsx
│   ├── containers/        # Layout bileşenleri
│   │   └── PageContainer.jsx
│   ├── pages/             # Sayfa bileşenleri
│   │   ├── Cart.jsx
│   │   ├── Detail.jsx
│   │   └── Home.jsx
│   ├── redux/             # State yönetimi
│   │   ├── cartSlice.js
│   │   ├── categorySlice.js
│   │   ├── productSlice.js
│   │   └── store.js
│   ├── utils/             # Yardımcı fonksiyonlar
│   │   └── status.js
│   ├── App.js             # Ana uygulama
│   ├── index.js           # React giriş noktası
│   └── index.css          # Global stiller
├── project-images/        # Proje ekran görüntüleri
├── tailwind.config.js     # TailwindCSS yapılandırması
└── package.json
```

---

## 🚀 Kurulum

### Ön Koşullar
- Node.js (v14 veya üzeri)
- npm veya yarn

### 1. Projeyi Klonlayın
```bash
git clone https://github.com/ciftciyakup/reactjs_e-commerce_app.git
cd reactjs_e-commerce_app
```

### 2. Bağımlılıkları Yükleyin
```bash
npm install
```

### 3. Uygulamayı Başlatın
```bash
npm start
```

Uygulama http://localhost:3000 adresinde çalışacak.

### 4. Production Build
```bash
npm run build
```

---

## 🔧 Kullanılan Paketler

### Ana Bağımlılıklar
- **React** (^18.2.0) - UI kütüphanesi
- **Redux Toolkit** (^1.9.5) - State yönetimi
- **React Redux** (^8.1.1) - React-Redux bağlantısı
- **React Router DOM** (^6.14.2) - Sayfa yönlendirme
- **React Icons** (^4.10.1) - İkon kütüphanesi
- **React Slick** (^0.29.0) - Carousel/Slider bileşeni
- **React Paginate** (^8.2.0) - Sayfalama bileşeni
- **TailwindCSS** (^3.3.3) - CSS framework

### Geliştirme Bağımlılıkları
- **React Scripts** (5.0.1) - Build araçları
- **Testing Library** - Test araçları

---

## 📱 Sayfalar ve Rotalar

- **Ana Sayfa** (`/`) - Ürün listeleme, kategori filtreleme, sıralama
- **Ürün Detayı** (`/products/:id`) - Ürün detay görüntüleme
- **Alışveriş Sepeti** (`/cart`) - Sepet yönetimi

---

## 🛍️ Özellikler Detayı

### Ürün Yönetimi
- Ürün listeleme ve görüntüleme
- Kategori bazlı filtreleme (Elektronik, Mücevher, Erkek Giyim, Kadın Giyim)
- Fiyat bazlı sıralama (Artan/Azalan)
- Ürün detay sayfası

### Sepet İşlemleri
- Sepete ürün ekleme
- Sepetten ürün çıkarma
- Ürün miktarı güncelleme
- Toplam fiyat hesaplama
- Sepeti temizleme

### Kullanıcı Deneyimi
- Modern UI/UX tasarımı
- Hızlı performans

---

## 🔄 Redux Store Yapısı

### Slice'lar
- **productSlice** - Ürün listesi ve detay yönetimi
- **categorySlice** - Kategori filtreleme
- **cartSlice** - Sepet işlemleri

### Actions
- Ürün yükleme ve filtreleme
- Kategori seçimi
- Sepet CRUD işlemleri

---

## 📝 Geliştirme Notları

### Mevcut Özellikler
- ✅ Ürün listeleme ve filtreleme
- ✅ Sepet yönetimi
- ✅ State yönetimi (Redux)
- ✅ Routing sistemi

---

## 🤝 Katkıda Bulunma

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

---

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

---

## 📞 İletişim

Proje hakkında sorularınız için:

[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yakup-ciftci)
[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ciftciyakup)

---

> Bu proje, modern React.js ekosistemi kullanılarak geliştirilmiş tam fonksiyonel bir e-ticaret uygulamasıdır.  
> Redux Toolkit ile güçlü state yönetimi ve TailwindCSS ile modern tasarım sunar.
