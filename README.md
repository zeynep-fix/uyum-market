# Uyum Market – tek sayfalık site

Statik, bağımlılıksız tek bir `index.html`.

## Yayından önce
1. **Fotoğraf:** Hero şu an fotoğrafı doğrudan Google'dan çekiyor (yedek). Kalıcı olması için `img/dukkan.jpg` olarak kaydet; varsa o öncelikli kullanılır. og:image için de gerekli.
   Kaynak (senin 2017'de yüklediğin dükkan önü fotoğrafı):
   https://lh3.googleusercontent.com/SJF4Izf2J5Y9c9Bb5k1-EOu10scIC_Maq-SgQky4bMbPXuQFsd6qFOgxIdIXGyY9=w1600-h900-k-no
2. **Alan adı:** uyummarket.com.tr olarak ayarlandı (canonical, OG, JSON-LD, CNAME, robots.txt, sitemap.xml).
3. **Teslimat bölgesi (opsiyonel):** "Eve teslimat" kartındaki yorum satırını aç.

## Yayın (ücretsiz)
- Cloudflare Pages / GitHub Pages / Netlify: klasörü yükle, özel alan adını bağla.

## Yayından sonra
- Google İşletme Profili → Profili düzenle → **Web sitesi** alanına adresi ekle.
- Google Search Console'a ekle, ana sayfayı dizine eklenmesi için gönder.
- JSON-LD kontrolü: https://search.google.com/test/rich-results

## Notlar
- JSON-LD tipi `GroceryStore`; saatler ve adres Google profiliyle birebir aynı tutuldu.
  Saat değişirse **hem profili hem bu dosyayı** güncelle (NAP tutarlılığı).
- Üstteki "Şu an açık/kapalı" rozeti Europe/Istanbul saatine göre istemci tarafında hesaplanıyor.

## Gelecek fikirler
- Antre Gourmet tarzı online sipariş: fiyatlı ürünler + sepet (Shopify vb.). Şimdilik yok; sipariş telefon/WhatsApp ile.
- Reyon kartlarına gerçek reyon fotoğrafları.
- "Bu hafta manavda" mevsimlik şerit.

## Ürün listesi
- Ürünler `urunler.js` dosyasında (Sahadi tarzı fotoğraflı kartlar). Ürün eklemek: `{ ad, reyon, foto }` satırı ekle; silmek: satırı sil.
- `foto`: Unsplash kimliği ya da kendi görselin (ör. `img/urun/domates.jpg`). Boşsa fotoğrafsız sade kart çıkar.
- Fiyat yok (bilerek). Dükkanda olmayan ürünleri sil.
- Ana sayfada ilk 10 ürün görünür, "Tüm ürünleri göster" ile hepsi açılır.
