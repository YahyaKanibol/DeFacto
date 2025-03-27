@anasayfa @footer
Feature: DeFacto Prod Testleri - Ana Sayfa

@anasayfa1
  Scenario: (TC-0049) Header kismi kontrolu [GUEST][ANASAYFA]
  Given Ana sayfa acilir
  Then "YARDIM" butonunun gorunur oldugu kontrol edilir
  And "İLETİŞİM" butonunun gorunur oldugu kontrol edilir
  And "Giriş" butonunun gorunur oldugu kontrol edilir
  And "Favorilerim" butonunun gorunur oldugu kontrol edilir
  And "Favorilerim" butonuna tiklanir
  And Acilan sayfanin URL adresinin "https://www.defacto.com.tr/Customer/Wishlist" oldugu kontrol edilir
  And "İLETİŞİM" butonuna tiklanir
  And Acilan sayfanin URL adresinin "https://www.defacto.com.tr/kurumsal/iletisim" oldugu kontrol edilir
  And "YARDIM" butonuna tiklanir
  And Acilan sayfanin URL adresinin "https://www.defacto.com.tr/statik/sikca-sorulan-sorular" oldugu kontrol edilir

@anasayfa2
  Scenario Outline: (TC-0055) Abone Ol fonksiyonu [GUEST][ANASAYFA]
  Given Ana sayfa acilir
  Then Sayfanin en altina inilir
  And "ABONE_OL_INPUT" alanina "<mail>" yazilir
  And "ABONE_OL_CHECKBOX" elementine tiklanir
  And "ABONE_OL_BUTTON" elementine tiklanir
  And "SUBSCRIBE_SUCCESS_TEXT" elementinin gorunur oldugu kontrol edilir
   Examples:
     |mail          |
     |test@test.com |

@footer1
  Scenario Outline: (TC-0058) Abone Olma cinsiyet secimi [GUEST][FOOTER]
  Given Ana sayfa acilir
  Then Sayfanin en altina inilir
  And Footer alaninda "<yas-cinsiyet>" secimi yapilir
  And "SUBSCRIBE_EMAIL_TEXTBOX" alanina "<mail>" yazilir
  And "SUBSCRIBE_CONTRACT_BUTTON" elementine tiklanir
  And "SUBSCRIBE_BUTTON" elementine tiklanir
  And "SUBSCRIBE_SUCCESS_TEXT" elementinin gorunur oldugu kontrol edilir
  Examples:
      | yas-cinsiyet     |mail          |
      | erkek            |test@test.com |
  

  @footer2
  Scenario: (TC-0059) Footer sosyal medya kontrolu [GUEST][FOOTER]
  Given Ana sayfa acilir
  Then "WHATSAPP_BUTTON" elementi goruntulenene kadar kaydir
  And "WHATSAPP_BUTTON" elementinin gorunur oldugu kontrol edilir
  And "FACEBOOK_BUTTON" elementinin gorunur oldugu kontrol edilir
  And "TWITTER_BUTTON" elementinin gorunur oldugu kontrol edilir
  And "INSTAGRAM_BUTTON" elementinin gorunur oldugu kontrol edilir
  And "TIKTOK_BUTTON" elementinin gorunur oldugu kontrol edilir

  @footer3
  Scenario: (TC-0060) Footer DeFactoBlog kontrolu [GUEST][FOOTER]
  Given Ana sayfa acilir
  Then "DEFACTO_BLOG" elementi goruntulenene kadar kaydir
  And "DEFACTO_BLOG" elementinin gorunur oldugu kontrol edilir
  And "DEFACTO_BLOG" elementine tiklanir
  And Acilan sayfanin URL adresinin "https://www.defacto.com.tr/blog" oldugu kontrol edilir

  @footer4
  Scenario: (TC-0083) Kampanyalar alani [GUEST][FOOTER]
  Given Ana sayfa acilir
  Then "KAMPANYALAR_BUTTON" elementi goruntulenene kadar kaydir
  And "KAMPANYALAR_BUTTON" elementinin gorunur oldugu kontrol edilir
  And "KAMPANYALAR_BUTTON" elementine tiklanir
  And "DEFACTO_GIFT_CLUB_CAMPAIGN" elementinin gorunur oldugu kontrol edilir

  @footer5
  Scenario Outline: (TC-0084) Magazalarimiz alani [GUEST][FOOTER]
  Given Ana sayfa acilir
  Then "MAGAZALARIMIZ_BUTONU" elementinin gorunur oldugu kontrol edilir
  And "MAGAZALARIMIZ_BUTONU" elementine tiklanir
  And "STORES_TITLE" elementinin gorunur oldugu kontrol edilir
  And "STORES_PAGE" elementinin gorunur oldugu kontrol edilir
  And "STORES_MAPS" elementinin gorunur oldugu kontrol edilir
  And "STORES_LIST" elementinin gorunur oldugu kontrol edilir
  And Butonlardan "<Sehir>" secilir ve kontrol edilir
  And Combo kismindan "<Sehir>" secilir ve "<Ilce>" secilerek kontrol yapilir
  And "HARITA" elementinin gorunur oldugu kontrol edilir
  Examples:
      | Sehir    | Ilce      |
      | İstanbul | Arnavutköy|
  
  @footer6
  Scenario: (TC-0085) Islem Rehberi alani [GUEST][FOOTER]
  Given Ana sayfa acilir
  Then "ISLEM_REHBERI_BUTONU" elementi goruntulenene kadar kaydir
  And "ISLEM_REHBERI_BUTONU" elementinin gorunur oldugu kontrol edilir
  And "ISLEM_REHBERI_BUTONU" elementine tiklanir
  And "TRANSACTION_GUIDE_PICTURE" elementinin gorunur oldugu kontrol edilir
  And "TRANSACTION_HELP_BAR" elementinin gorunur oldugu kontrol edilir
  And "TRANSACTION_GUIDE_TITLE" elementinin gorunur oldugu kontrol edilir

  @footer7
  Scenario: (TC-0086) Iletisim Formu alani [GUEST][FOOTER]
  Given Ana sayfa acilir
  Then "ILETISIM_FORMU_BUTONU" elementi goruntulenene kadar kaydir
  And "ILETISIM_FORMU_BUTONU" elementinin gorunur oldugu kontrol edilir
  And "ILETISIM_FORMU_BUTONU" elementine tiklanir
  And Sayfa yuklenene kadar bekle
  And "CONTACT_FORM_NAME" alanina "<ad>" yazilir
  And "CONTACT_FORM_SEND_BUTTON" elementine tiklanir
  And "SURNAME_ERROR_MESSAGE" elementinin gorunur oldugu kontrol edilir
  And "EMAIL_ERROR_MESSAGE" elementinin gorunur oldugu kontrol edilir
  And "PHONE_ERROR_MESSAGE" elementinin gorunur oldugu kontrol edilir
  And "DETAIL_ERROR_MESSAGE" elementinin gorunur oldugu kontrol edilir
  And "MESSAGE_ERROR_MESSAGE" elementinin gorunur oldugu kontrol edilir
  Examples:
      | ad                |
      | TestAutomationUser|
  
  @footer8
  Scenario: (TC-0087) Hakkimizda alani [GUEST][FOOTER]
  Given Ana sayfa acilir
  Then "HAKKIMIZDA_BUTONU" elementi goruntulenene kadar kaydir
  And "HAKKIMIZDA_BUTONU" elementinin gorunur oldugu kontrol edilir
  And "HAKKIMIZDA_BUTONU" elementine tiklanir
  And "HAKKIMIZDA_BASLIK" elementinin gorunur oldugu kontrol edilir
  And "SIRKET_BUTONU" elementinin gorunur oldugu kontrol edilir
  And "SURDURULEBILIRLIK_BUTONU" elementinin gorunur oldugu kontrol edilir
  And "URUNLER_HK_BUTONU" elementinin gorunur oldugu kontrol edilir
  And "FRANCHISE_BUTONU" elementinin gorunur oldugu kontrol edilir

  @footer9
  Scenario: (TC-0088) DeFacto Teknoloji alani [GUEST][FOOTER]
    Given Ana sayfa acilir
    Then "DEFACTO_TEKNOLOJI_BUTONU" elementi goruntulenene kadar kaydir
    And "DEFACTO_TEKNOLOJI_BUTONU" elementinin gorunur oldugu kontrol edilir
    And "DEFACTO_TEKNOLOJI_BUTONU" elementine tiklanir
    And Sayfa yuklenene kadar bekle
    And "DEFACTO_TEKNOLOJI_LOGO" elementinin gorunur oldugu kontrol edilir
    And "DEFACTO_TEKNOLOJI_HIZMETLER_BASLIGI" elementinin gorunur oldugu kontrol edilir
    And "DEFACTO_TEKNOLOJI_SAHA_YONETIMI_BUTONU" elementinin gorunur oldugu kontrol edilir
    And "DEFACTO_TEKNOLOJI_SAHA_YONETIMI_BUTONU" elementine tiklanir
    And Sayfa yuklenene kadar bekle
    And "Saha Yönetimi" textinin gorunur oldugu kontrol edilir
    And Bir onceki sayfaya geri donulur
    And "DEFACTO_TEKNOLOJI_YAZILIM_GELISTIRME" elementinin gorunur oldugu kontrol edilir
    And "DEFACTO_TEKNOLOJI_YAZILIM_GELISTIRME" elementine tiklanir
    And Sayfa yuklenene kadar bekle
    And "Yazılım Geliştirme" textinin gorunur oldugu kontrol edilir
    And Bir onceki sayfaya geri donulur
    And "DEFACTO_TEKNOLOJI_BT_DENETIM_PROJE_YONETIMI" elementinin gorunur oldugu kontrol edilir
    And "DEFACTO_TEKNOLOJI_BT_DENETIM_PROJE_YONETIMI" elementine tiklanir
    And Sayfa yuklenene kadar bekle
    And "BT Denetim & Proje Yönetimi" textinin gorunur oldugu kontrol edilir
    And Bir onceki sayfaya geri donulur
    And "DEFACTO_TEKNOLOJI_IS_ZEKASI_VERI_AMBARI" elementinin gorunur oldugu kontrol edilir
    And "DEFACTO_TEKNOLOJI_IS_ZEKASI_VERI_AMBARI" elementine tiklanir
    And Sayfa yuklenene kadar bekle
    And "İş Zekası & Veri Ambarı" textinin gorunur oldugu kontrol edilir
    And Bir onceki sayfaya geri donulur
    And "DEFACTO_TEKNOLOJI_BT_ALTYAPI_YAZILIM_MIMARISI" elementinin gorunur oldugu kontrol edilir
    And "DEFACTO_TEKNOLOJI_BT_ALTYAPI_YAZILIM_MIMARISI" elementine tiklanir
    And Sayfa yuklenene kadar bekle
    And "BT Altyapı & Yazılım Mimarisi" textinin gorunur oldugu kontrol edilir
    And Bir onceki sayfaya geri donulur
    And "DEFACTO_TEKNOLOJI_VERI_TABANI_YONETIMI" elementinin gorunur oldugu kontrol edilir
    And "DEFACTO_TEKNOLOJI_VERI_TABANI_YONETIMI" elementine tiklanir
    And Sayfa yuklenene kadar bekle
    And "Veri Tabanı Yönetimi" textinin gorunur oldugu kontrol edilir
    And Bir onceki sayfaya geri donulur
    And "DEFACTO_TEKNOLOJI_BT_SISTEM_YONETIMI" elementinin gorunur oldugu kontrol edilir
    And "DEFACTO_TEKNOLOJI_BT_SISTEM_YONETIMI" elementine tiklanir
    And Sayfa yuklenene kadar bekle
    And "BT Sistem Yönetimi" textinin gorunur oldugu kontrol edilir
    And Bir onceki sayfaya geri donulur
    And Sayfa yuklenene kadar bekle
    And "DEFACTO_TEKNOLOJI_AG_GUVENLIK" elementinin gorunur oldugu kontrol edilir
    And "DEFACTO_TEKNOLOJI_AG_GUVENLIK" elementine tiklanir
    And Sayfa yuklenene kadar bekle
    And "Ağ & Güvenlik" textinin gorunur oldugu kontrol edilir
    And Bir onceki sayfaya geri donulur
    And Sayfa yuklenene kadar bekle
    And "DEFACTO_TEKNOLOJI_YARDIM_MASASI" elementinin gorunur oldugu kontrol edilir
    And "DEFACTO_TEKNOLOJI_YARDIM_MASASI" elementine tiklanir
    And Sayfa yuklenene kadar bekle
    And "Yardım Masası" textinin gorunur oldugu kontrol edilir
    

     @footer10
  Scenario: (TC-0089) Gizlilik ve KVKK alani [GUEST][FOOTER]
    Given Ana sayfa acilir
    Then "KISISEL_VERILERIN_KORUNMASI_VE_GIZLILIK" elementi goruntulenene kadar kaydir
    And "KISISEL_VERILERIN_KORUNMASI_VE_GIZLILIK" elementinin gorunur oldugu kontrol edilir
    And "KISISEL_VERILERIN_KORUNMASI_VE_GIZLILIK" elementine tiklanir
    And "KISISEL_VERILER_BILGILENDIRME" elementinin gorunur oldugu kontrol edilir
    And "KISISEL_VERILER_BILGILENDIRME" elementine tiklanir
    And "DeFacto, müşterilerine daha iyi hizmet verebilmek amacıyla bazı kişisel bilgilerinizi (isim, yaş, ilgi alanlarınız, e-posta vb.) sizlerden talep etmektedir." textinin gorunur oldugu kontrol edilir
    And "ELEKTRONIK_TUCARI_ILETI_KURALLARI" elementi goruntulenene kadar kaydir
    And "ELEKTRONIK_TUCARI_ILETI_KURALLARI" elementinin gorunur oldugu kontrol edilir
    And "ELEKTRONIK_TUCARI_ILETI_KURALLARI" elementine tiklanir
    And "Elektronik Ticari İleti Kuralları ve Bilgilendirme Metni" textinin gorunur oldugu kontrol edilir
    And "KVKK_BASVURU_TALEPLERI" elementi goruntulenene kadar kaydir
    And "KVKK_BASVURU_TALEPLERI" elementinin gorunur oldugu kontrol edilir
    And "KVKK_BASVURU_TALEPLERI" elementine tiklanir
    And "Kişisel verilerinizin işlenip işlenmediğini öğrenme," textinin gorunur oldugu kontrol edilir

    
    
    
    
@footer11
  Scenario: (TC-0090) DeFacto Gift Club alani [GUEST][FOOTER]
    Given Ana sayfa acilir
    Then "GIFT_CARD_IMAGE_2" elementi goruntulenene kadar kaydir 
    And "GIFT_CARD_IMAGE_2" elementinin gorunur oldugu kontrol edilir
    And "GIFT_CARD_IMAGE_2" elementine tiklanir
    And "GIFT_CLUB_UYE_OL_BUTTON" elementi goruntulenene kadar kaydir
    And "GIFT_CLUB_UYE_OL_BUTTON" elementinin gorunur oldugu kontrol edilir
    And "GIFT_CLUB_UYE_OL_BUTTON" elementine tiklanir
    And "GIFT_CLUB_UYE_OL_LOGIN_PAGE" elementinin gorunur oldugu kontrol edilir


@footer12
Scenario: (TC-0091) SSS alani [GUEST][FOOTER]
Given Ana sayfa acilir
Then "SIKCA_SORULAN_SORULAR" elementi goruntulenene kadar kaydir
And "SIKCA_SORULAN_SORULAR" elementinin gorunur oldugu kontrol edilir
And "SIKCA_SORULAN_SORULAR" elementine tiklanir
And "MAĞAZADAN TESLİM AL" textinin gorunur oldugu kontrol edilir
And "Teslimat bilgilerinde Mağazadan Teslim Al'ı tıkla ve teslim almak istediğin mağazayı seç" textinin gorunur oldugu kontrol edilir
And "Mağazadan teslim alınan siparişlerde kargo 19,99 TL'dir. 300 TL üzeri kargo bedava!" textinin gorunur oldugu kontrol edilir
And "Siparişin mağazaya teslim edildiğinde SMS ile kod göndereceğiz." textinin gorunur oldugu kontrol edilir
And "Siparişini teslim almak için kasada SMS ile ilettiğimiz kodu paylaşman yeterlidir." textinin gorunur oldugu kontrol edilir
And "SİPARİŞ TAKİP" textinin gorunur oldugu kontrol edilir
And "Hesabım’dan Siparişlerim bölümüne tıkla" textinin gorunur oldugu kontrol edilir
And "Sipariş Detayına Gir" textinin gorunur oldugu kontrol edilir
And "Kargom Nerede butonundan siparişini takip edebilirsin." textinin gorunur oldugu kontrol edilir
And "Ayrıca her süreçte sms ve email ile bilgilendirme yapacağız." textinin gorunur oldugu kontrol edilir
And "POPULER_SORULAR" elementi goruntulenene kadar kaydir
And "KOLAY İADE VE DEĞİŞİM İŞLEMLERİ" textinin gorunur oldugu kontrol edilir
And "Sipariş detay sayfasından iade talebini tıkla" textinin gorunur oldugu kontrol edilir
And "İade etmek istediğin ürünü ve iade nedenini seç iade kodunu not al." textinin gorunur oldugu kontrol edilir
And "Ürünlerini paketle ve iade kodu ile PTT Kargo’ya ücretsiz iade et." textinin gorunur oldugu kontrol edilir
And "İaden tamamlandığında SMS ve mail ile bilgilendirme yapılacaktır." textinin gorunur oldugu kontrol edilir
And "POPULER_SORULAR_LISTE_DIV" elementinin gorunur oldugu kontrol edilir


  @footer13
  Scenario: (TC-0092) Ucretsiz Iade alani [GUEST][FOOTER]
  Given Ana sayfa acilir
  Then "UCRETSIZ_IADE" elementi goruntulenene kadar kaydir
  And "UCRETSIZ_IADE" elementinin gorunur oldugu kontrol edilir
  And "UCRETSIZ_IADE" elementine tiklanir
  And "RETURN_EXCHANGE_PROCEDURES" elementinin gorunur oldugu kontrol edilir
  And "RETURN_EXCHANGE_PROCEDURES" elementine tiklanir
  And "IADE_DEGISIM_VIDEO" elementinin gorunur oldugu kontrol edilir
  And "IADE_DEGISIM_VIDEO_UL" elementinin gorunur oldugu kontrol edilir
  And "IADE_DEGISIM_ISLEMLER_LISTE" elementi goruntulenene kadar kaydir
  And "IADE_DEGISIM_ISLEMLER_LISTE" elementinin gorunur oldugu kontrol edilir



  @footer14
  Scenario: (TC-0093) Kurumsal Satis alani [GUEST][FOOTER]
  Given Ana sayfa acilir
  Then "KURUMSAL_SATIŞ" elementi goruntulenene kadar kaydir
  And "KURUMSAL_SATIŞ" elementinin gorunur oldugu kontrol edilir
  And "KURUMSAL_SATIŞ" elementine tiklanir
  And "KURUMSAL_SATIS_FOTO_METIN" elementinin gorunur oldugu kontrol edilir
  And "ILETISIM_FORMU_GONDER" elementi goruntulenene kadar kaydir
  And "KURUMSAL_SATIS_ILETISIM_FORMU_AD" alanina "<ad>" yazilir
  And "KURUMSAL_SATIS_ILETISIM_FORMU_SOYAD" alanina "<soyad>" yazilir
  And "KURUMSAL_SATIS_ILETISIM_FORMU_EMAIL" alanina "<eposta>" yazilir
  And "KURUMSAL_SATIS_ILETISIM_FORMU_TELEFON" alanina "<telefon>" yazilir
  And "KURUMSAL_SATIS_ILETISIM_FORMU_FIRMAAD" alanina "<firmaad>" yazilir
  And "KURUMSAL_SATIS_ILETISIM_FORMU_DEPARTMAN" alanina "<departman>" yazilir
  And "KURUMSAL_SATIS_ILETISIM_FORMU_MESAJ" alanina "<mesaj>" yazilir
  

  Examples:
      | ad   |soyad     |eposta       |telefon      |firmaad |departman |mesaj|
      | test | testsoyad|test@test.com|5555555555   |firmaad |departman |mesaj|



  @footer15
  Scenario: (TC-0097) Kurumsal alani [GUEST][FOOTER]
  Given Ana sayfa acilir
  Then "KURUMSAL" elementi goruntulenene kadar kaydir
  And "KURUMSAL" elementinin gorunur oldugu kontrol edilir
  And "KURUMSAL" elementine tiklanir

     ###kurumsal alanında kontrol edilebilecek olan elementlere ulaşılamıyor
  #And "KURUMSAL_SLIDER_ILK_VIDEO" elementinin gorunur oldugu kontrol edilir
  #And "KURUMSAL_SLIDER_IKINCI_FOTO" elementi goruntulenene kadar bekle
  #And "KURUMSAL_SLIDER_IKINCI_FOTO" elementinin gorunur oldugu kontrol edilir
  #And "KURUMSAL_SLIDER_UCUNCU_FOTO" elementi goruntulenene kadar bekle
  #And "KURUMSAL_SLIDER_UCUNCU_FOTO" elementinin gorunur oldugu kontrol edilir
  #And "KURUMSAL_SLIDER_DORDUNCU_FOTO" elementi goruntulenene kadar bekle
  #And "KURUMSAL_SLIDER_DORDUNCU_FOTO" elementinin gorunur oldugu kontrol edilir
  #And "SIRKET_BUTONU" elementine tiklanir 
  #And "Hakkımızda" textinin gorunur oldugu kontrol edilir
  #And "KURUMSAL_ANAMENU_LINK_SURDURULEBILIRLIK" elementine tiklanir
  #And "Global moda markası olma vizyonuyla" textinin gorunur oldugu kontrol edilir
  #And "KURUMSAL_ANAMENU_LINK_URUNLER" elementine tiklanir
  #And "Kadın Modası" textinin gorunur oldugu kontrol edilir



  @header1
  Scenario: (TC-0011) Arama fonksiyonu [GUEST][HEADER]
    Given Ana sayfa acilir
    Then "ANASAYFA_HEADER_SEARCH_INPUT" elementine tiklanir
    And "GENISLETILMIS_HEADER_SEARCH_INPUT" alanina "<urun>" yazilir
    And "GENISLETILMIS_HEADER_SEARCH_ICON" elementine tiklanir
    And "ARAMA_LISTELELENEN_ILK_URUN" elementinin gorunur oldugu kontrol edilir

     Examples:
      | urun   |
      | ceket   |

    @header2
  Scenario: (TC-0047) Aramada autocomplete fonksiyonu kontrolu [GUEST][HEADER]
    Given Ana sayfa acilir
    Then "ANASAYFA_HEADER_SEARCH_INPUT" elementine tiklanir
    And "GENISLETILMIS_HEADER_SEARCH_INPUT" alanina "<urun>" yazilir
    And "Ceket" textinin gorunur oldugu kontrol edilir

Examples:
      | urun   |
      | ceke   |

@header3
  Scenario: (TC-0048) Arama yapildiktan sonra filtreleme kontrolu [GUEST][HEADER]
    Given Ana sayfa acilir
    Then "ANASAYFA_HEADER_SEARCH_INPUT" elementine tiklanir
    And "GENISLETILMIS_HEADER_SEARCH_INPUT" alanina "<urun>" yazilir
    And "GENISLETILMIS_HEADER_SEARCH_ICON" elementine tiklanir
    And "FILTRELER_ERKEK" elementine tiklanir
    And "FILTRELER_CINSIYET" elementine tiklanir
    And "FILTRELER_KATEGORI_ILK_KATEGORI" elementine tiklanir
    And "FILTRELER_KATEGORI" elementine tiklanir
    And "FILTRELER_CINSIYET" elementine tiklanir
    And "FILTRELER_BEDEN" elementine tiklanir
    And "FILTRELER_BEDEN_XL" elementine tiklanir
    And "ARAMA_LISTELELENEN_ILK_URUN" elementinin gorunur oldugu kontrol edilir
    Examples:
      | urun   |
      | ceket   |











  


  


















 
   
 

