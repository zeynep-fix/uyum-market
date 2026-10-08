/*
  Uyum Market ürünleri
  --------------------
  Ürün eklemek:  { ad: "Ürün adı", reyon: "manav", foto: "" }
    - reyon: aşağıdaki REYONLAR listesindeki id'lerden biri
    - foto:  tam görsel adresi (ör. "img/urun/domates.jpg") ya da Unsplash kimliği (ör. "1582284540020-8acbe03f4924").
             Boş bırakılırsa kart fotoğrafsız, sade bir kartla gösterilir.
  Ürün silmek:   satırı sil.
  Fiyat yok (bilerek).
*/
window.REYONLAR = [
  { id: "manav",        ad: "Manav" },
  { id: "kahvalti",     ad: "Süt ve Kahvaltılık" },
  { id: "sarkuteri",    ad: "Şarküteri" },
  { id: "ekmek",        ad: "Ekmek ve Fırın" },
  { id: "kurugida",     ad: "Temel Gıda" },
  { id: "icecek",       ad: "İçecek ve Su" },
  { id: "atistirmalik", ad: "Atıştırmalık" },
  { id: "temizlik",     ad: "Temizlik ve Bakım" }
];

window.URUNLER = [
  // Manav
  { ad: "Domates",       reyon: "manav", foto: "1582284540020-8acbe03f4924" },
  { ad: "Salatalık",     reyon: "manav", foto: "1449300079323-02e209d9d3a6" },
  { ad: "Biber",         reyon: "manav", foto: "1776722203818-bff2665eba64" },
  { ad: "Patlıcan",      reyon: "manav", foto: "1615484477201-9f4953340fab" },
  { ad: "Patates",       reyon: "manav", foto: "1518977676601-b53f82aba655" },
  { ad: "Kuru soğan",    reyon: "manav", foto: "1618512496248-a07fe83aa8cb" },
  { ad: "Havuç",         reyon: "manav", foto: "1598170845058-32b9d6a5da37" },
  { ad: "Marul",         reyon: "manav", foto: "1640958904159-51ae08bd3412" },
  { ad: "Maydanoz",      reyon: "manav", foto: "1721117090894-029c81cf0758" },
  { ad: "Limon",         reyon: "manav", foto: "1590502593747-42a996133562" },
  { ad: "Elma",          reyon: "manav", foto: "1560806887-1e4cd0b6cbd6" },
  { ad: "Muz",           reyon: "manav", foto: "1587132137056-bfbf0166836e" },
  { ad: "Portakal",      reyon: "manav", foto: "1611080626919-7cf5a9dbab5b" },
  { ad: "Mandalina",     reyon: "manav", foto: "1611329646571-689ddf8bfee9" },
  { ad: "Üzüm",          reyon: "manav", foto: "1596363505729-4190a9506133" },
  { ad: "Nar",           reyon: "manav", foto: "1574709755254-fcd942d09d5a" },
  { ad: "Kırmızı biber", reyon: "manav", foto: "1760361571885-b6b2dee1d25a" },
  { ad: "Kabak",         reyon: "manav", foto: "1691480291894-75229c2bfd44" },
  { ad: "Taze fasulye",  reyon: "manav", foto: "1574963835594-61eede2070dc" },
  { ad: "Ispanak",       reyon: "manav", foto: "1576045057995-568f588f82fb" },
  { ad: "Pırasa",        reyon: "manav", foto: "1753445657216-349e0740f941" },
  { ad: "Lahana",        reyon: "manav", foto: "1611105637889-3afd7295bdbf" },
  { ad: "Karnabahar",    reyon: "manav", foto: "1566842600175-97dca489844f" },
  { ad: "Brokoli",       reyon: "manav", foto: "1685504445355-0e7bdf90d415" },
  { ad: "Mantar",        reyon: "manav", foto: "1783578871902-911e7dd10e66" },
  { ad: "Sarımsak",      reyon: "manav", foto: "1636210589096-a53d5dacd702" },
  { ad: "Taze soğan",    reyon: "manav", foto: "1682865780612-ffefb79ad54b" },
  { ad: "Dereotu",       reyon: "manav", foto: "1691134913808-4f815951be83" },
  { ad: "Nane",          reyon: "manav", foto: "1618130070080-91f4d55a2383" },
  { ad: "Mısır",         reyon: "manav", foto: "1634467524884-897d0af5e104" },
  { ad: "Armut",         reyon: "manav", foto: "1615484477778-ca3b77940c25" },
  { ad: "Ayva",          reyon: "manav", foto: "1758451432818-24d47384a8c5" },
  { ad: "Kivi",          reyon: "manav", foto: "1618897996318-5a901fa6ca71" },
  { ad: "Greyfurt",      reyon: "manav", foto: "1577234286642-fc512a5f8f11" },
  { ad: "Kestane",       reyon: "manav", foto: "1574174230054-0e45305df25f" },
  { ad: "Çilek (mevsiminde)",  reyon: "manav", foto: "1601004890684-d8cbf643f5f2" },
  { ad: "Karpuz (mevsiminde)", reyon: "manav", foto: "1587049352846-4a222e784d38" },

  // Süt ve kahvaltılık
  { ad: "Süt",           reyon: "kahvalti", foto: "1550583724-b2692b85b150" },
  { ad: "Yoğurt",        reyon: "kahvalti", foto: "1571212515416-fef01fc43637" },
  { ad: "Ayran",         reyon: "kahvalti", foto: "1690789627129-6c537f70b8d5" },
  { ad: "Beyaz peynir",  reyon: "kahvalti", foto: "1661349008073-136bed6e6788" },
  { ad: "Kaşar peyniri", reyon: "kahvalti", foto: "1683314573422-649a3c6ad784" },
  { ad: "Yumurta",       reyon: "kahvalti", foto: "1498654077810-12c21d4d6dc3" },
  { ad: "Zeytin",        reyon: "kahvalti", foto: "1706378398576-57a21244ef7a" },
  { ad: "Bal",           reyon: "kahvalti", foto: "1587049352851-8d4e89133924" },
  { ad: "Reçel",         reyon: "kahvalti", foto: "1630960125584-5d4562a44390" },
  { ad: "Tahin",         reyon: "kahvalti", foto: "1747932984398-dd52d84886d6" },

  // Şarküteri
  { ad: "Sucuk",         reyon: "sarkuteri", foto: "1691480241974-92481cef09ff" },
  { ad: "Salam",         reyon: "sarkuteri", foto: "1769772619357-216a3085f718" },

  // Ekmek ve fırın
  { ad: "Ekmek",         reyon: "ekmek", foto: "1534620808146-d33bb39128b2" },
  { ad: "Lavaş ve yufka",reyon: "ekmek", foto: "1640625314547-aee9a7696589" },

  // Temel gıda
  { ad: "Pirinç",        reyon: "kurugida", foto: "1705147289789-6df2593f1b1e" },
  { ad: "Bulgur",        reyon: "kurugida", foto: "1574323347407-f5e1ad6d020b" },
  { ad: "Kırmızı mercimek", reyon: "kurugida", foto: "1730591857303-0fa44be3f677" },
  { ad: "Nohut",         reyon: "kurugida", foto: "1644432757699-bb5a01e8fb0e" },
  { ad: "Un",            reyon: "kurugida", foto: "1549590143-d5855148a9d5" },
  { ad: "Şeker",         reyon: "kurugida", foto: "1709651808265-977ed7ef78c6" },
  { ad: "Ayçiçek yağı",  reyon: "kurugida", foto: "1552592074-ea7a91b851b3" },
  { ad: "Zeytinyağı",    reyon: "kurugida", foto: "1474979266404-7eaacbcd87c5" },
  { ad: "Salça",         reyon: "kurugida", foto: "1472476443507-c7a5948772fc" },
  { ad: "Baharatlar",    reyon: "kurugida", foto: "1592457711340-2412dc07b733" },
  { ad: "Çay",           reyon: "kurugida", foto: "1715017245420-9638115138a4" },

  // İçecek ve su
  { ad: "Maden suyu",    reyon: "icecek", foto: "1561041695-d2fadf9f318c" },
  { ad: "Meyve suyu",    reyon: "icecek", foto: "1640213505284-21352ee0d76b" },
  { ad: "Gazlı içecekler", reyon: "icecek", foto: "1674176508097-463b009c6004" },

  // Atıştırmalık
  { ad: "Çikolata",      reyon: "atistirmalik", foto: "1623660053975-cf75a8be0908" },
  { ad: "Bisküvi",       reyon: "atistirmalik", foto: "1558961363-fa8fdf82db35" },
  { ad: "Cips",          reyon: "atistirmalik", foto: "1613919113640-25732ec5e61f" },
  { ad: "Fındık",        reyon: "atistirmalik", foto: "1635843130314-c0b5cc832b79" },
  { ad: "Kuruyemiş ve kuru meyve", reyon: "atistirmalik", foto: "1710857397974-f0617001c39e" },
  { ad: "Dondurma",      reyon: "atistirmalik", foto: "1629385701021-fcd568a743e8" },

  // Temizlik ve bakım
  { ad: "Bulaşık süngeri ve deterjanı", reyon: "temizlik", foto: "1646209624081-a1e99efeaea1" },
  { ad: "Tuvalet kâğıdı", reyon: "temizlik", foto: "1631524254770-03abe3f42a0d" },
  { ad: "Kâğıt havlu",   reyon: "temizlik", foto: "1598046937985-11c320dfd379" },
  { ad: "Şampuan",       reyon: "temizlik", foto: "1602143407151-7111542de6e8" },
  { ad: "Sıvı sabun",    reyon: "temizlik", foto: "1616622236995-cb00e537365e" },
  { ad: "Diş macunu ve fırçası", reyon: "temizlik", foto: "1676897288522-e8a081e71430" }
];
