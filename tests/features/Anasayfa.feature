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
    
    
    
    
    

  
  


  
  
  


















 
   
 

