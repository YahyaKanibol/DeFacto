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
  # And "ABONE_OL_INPUT" elementine tiklanir
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
  Then Sayfanin en altina inilir
  And "WHATSAPP_BUTTON" elementinin gorunur oldugu kontrol edilir
  And "FACEBOOK_BUTTON" elementinin gorunur oldugu kontrol edilir
  And "TWITTER_BUTTON" elementinin gorunur oldugu kontrol edilir
  And "INSTAGRAM_BUTTON" elementinin gorunur oldugu kontrol edilir
  And "TIKTOK_BUTTON" elementinin gorunur oldugu kontrol edilir

  @footer3
  Scenario: (TC-0060) Footer DeFactoBlog kontrolu [GUEST][FOOTER]
  Given Ana sayfa acilir
  Then Sayfanin en altina inilir
  And "DEFACTO_BLOG" elementinin gorunur oldugu kontrol edilir
  And "DEFACTO_BLOG" elementine tiklanir
  And Acilan sayfanin URL adresinin "https://www.defacto.com.tr/blog" oldugu kontrol edilir

  @footer4
  Scenario: (TC-0083) Kampanyalar alani [GUEST][FOOTER]
  Given Ana sayfa acilir
  Then Sayfanin en altina inilir
  And "KAMPANYALAR_BUTTON" elementinin gorunur oldugu kontrol edilir
  And "KAMPANYALAR_BUTTON" elementine tiklanir
  And "DEFACTO_GIFT_CLUB_CAMPAIGN" elementinin gorunur oldugu kontrol edilir

  @footer5
  Scenario Outline: (TC-0084) Magazalarimiz alani [GUEST][FOOTER]
  Given Ana sayfa acilir
  Then "MAGAZALARIMIZ_BUTTON" elementinin gorunur oldugu kontrol edilir
  And 2 saniye beklenir
  And "MAGAZALARIMIZ_BUTTON" elementine tiklanir
  And 2 saniye beklenir
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
   









 
   
 

