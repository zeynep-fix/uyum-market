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
