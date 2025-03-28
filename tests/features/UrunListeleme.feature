@urunlistleme @footer
Feature: DeFacto Prod Testleri - Urun Listeleme


 @urun_listeleme1
  Scenario: (TC-0013) Kategori sayfasindan gelen ilk urunu favorilere ekleme [GUEST][URUN_LISTELEME]
    Given Ana sayfa acilir
    Then "ANASAYFA_HEADER_KADIN_MENU" elementi uzerine imleç getirilir
    And "ANASAYFA_HEADER_KADIN_MENU_GIYIM" elementine tiklanir
    And "ANASAYFA_HEADER_KADIN_GIYIM_HEPSINI_GOSTER" elementine tiklanir
    And "ARAMA_LISTELELENEN_ILK_URUN" elementinin gorunur oldugu kontrol edilir
    And "PLP_FAVORILERE_EKLE" elementine tiklanir
    And "FAVORILER" elementine tiklanir
    #OTOMASYON TAMAMLANDI ANCAK FAVORILER ELEMENTI OTOMASYONDA BIR ETKI YARATMIYOR VE URUNU FAVORILERE EKLEMIYOR
   # And "ARAMA_LISTELELENEN_ILK_URUN" elementinin gorunur oldugu kontrol edilir

@urun_listeleme2
  Scenario: (TC-0015) Kategori sayfasindan gelen ilk urunu favorilere ekleme [GUEST][URUN_LISTELEME]
    Given Ana sayfa acilir
    Then "ANASAYFA_HEADER_KADIN_MENU" elementi uzerine imleç getirilir
    And 2 saniye beklenir
    And "ANASAYFA_HEADER_KADIN_MENU_GIYIM" elementine tiklanir
    And "ANASAYFA_HEADER_KADIN_GIYIM_HEPSINI_GOSTER" elementine tiklanir
    And "FILTRELER_GIZLE_GOSTER" elementine tiklanir
    And "FILTRELER_GIZLE_GOSTER" elementine tiklanir
    And "Filtreleri Göster" textinin gorunur oldugu kontrol edilir
    And 3 saniye beklenir
    And "FILTRELER_GIZLE_GOSTER" elementine tiklanir
    And "Filtreleri Gizle" textinin gorunur oldugu kontrol edilir


  @urun_listeleme3
  Scenario: (TC-0016) Kategoriler ekraninda filtre kontrolu [GUEST][URUN_LISTELEME]
    Given Ana sayfa acilir
    Then "ANASAYFA_HEADER_KADIN_MENU" elementi uzerine imleç getirilir
    And 1 saniye beklenir
    And "ANASAYFA_HEADER_KADIN_MENU_GIYIM" elementine tiklanir
    And "ANASAYFA_HEADER_KADIN_GIYIM_HEPSINI_GOSTER" elementine tiklanir
    And "KATEGORI_UL" elementinin gorunur oldugu kontrol edilir
    And "KATEGORI_SEARCHBOX" elementinin gorunur oldugu kontrol edilir
    And 2 saniye beklenir



    @urun_listeleme4
  Scenario: (TC-0017) Kategoriler ekranindaki filtrede beden kontrolleri [GUEST][URUN_LISTELEME]
    Given Ana sayfa acilir
    Then "ANASAYFA_HEADER_KADIN_MENU" elementi uzerine imleç getirilir
    And 1 saniye beklenir
    And "ANASAYFA_HEADER_KADIN_MENU_GIYIM" elementine tiklanir
    And "ANASAYFA_HEADER_KADIN_GIYIM_HEPSINI_GOSTER" elementine tiklanir
    And "FILTRELER_BEDEN" elementinin gorunur oldugu kontrol edilir
    And 5 saniye beklenir

      @urun_listeleme5
  Scenario: (TC-0044) Urunu sepete hizli ekleme [GUEST][URUN_LISTELEME]
    Given Ana sayfa acilir
    Then "ANASAYFA_HEADER_KADIN_MENU" elementi uzerine imleç getirilir
    And 1 saniye beklenir
    And "ANASAYFA_HEADER_KADIN_MENU_GIYIM" elementine tiklanir
    And "ANASAYFA_HEADER_KADIN_GIYIM_HEPSINI_GOSTER" elementine tiklanir
    And "SEPETE_HIZLI_EKLE_ILK_URUN" elementine tiklanir
    And "SEPETE_HIZLI_EKLE_ILK_URUN" elementine tiklanir
    And "SEPETE_HIZLI_EKLE_ILK_URUN_BEDEN" elementinin gorunur oldugu kontrol edilir
    And "SEPETE_HIZLI_EKLE_ILK_URUN__BEDEN_ILK_BEDEN" elementine tiklanir
    And "SEPETE_HIZLI_EKLE_SEPETE_EKLE" elementine tiklanir
    And 7 saniye beklenir
    And "SEPETIM" elementine tiklanir
    And "SEPETIM_ILK_URUN" elementinin gorunur oldugu kontrol edilir


    @urun_listeleme6
  Scenario: (TC-0045) Kategori icinde filtrelerin kontrolu [GUEST][URUN_LISTELEME]
    Given Ana sayfa acilir
    Then "KVKK_TUMUNE_IZIN_VER" elementine tiklanir
    And 1 saniye beklenir
    And "ANASAYFA_HEADER_KADIN_MENU" elementi uzerine imleç getirilir
    And 1 saniye beklenir
    And "ANASAYFA_HEADER_KADIN_MENU_GIYIM" elementine tiklanir
    And "ANASAYFA_HEADER_KADIN_GIYIM_HEPSINI_GOSTER" elementine tiklanir
    And "YENI_GELENLER" elementine tiklanir
    And "YENI_GELENLER" elementine tiklanir
    And 2 saniye beklenir
    And "KATEGORILER_DAHA_FAZLA_GOSTER" elementine tiklanir
    And 2 saniye beklenir
    #And "KATEGORILER_DAHA_FAZLA_GOSTER" elementine tiklanir
    And "KATEGORILER_TIŞORT" elementi goruntulenene kadar kaydir
    And "KATEGORILER_TIŞORT" elementine tiklanir
    And 2 saniye beklenir
    And "URUN_SONUCLARI_SAYFASI" elementinin gorunur oldugu kontrol edilir
    And "SECIMLERI_TEMIZLE" elementinin gorunur oldugu kontrol edilir





    @urun_listeleme7
  Scenario: (TC-0051) Secili filtreler kaldirip temizleme [GUEST][URUN_LISTELEME]
    Given Ana sayfa acilir
    Then "KVKK_TUMUNE_IZIN_VER" elementine tiklanir
    And "ANASAYFA_HEADER_ERKEK_MENU" elementi uzerine imleç getirilir
    And "ANASAYFA_HEADER_MENU_ERKEK_GIYIM" elementine tiklanir
    And "ANASAYFA_HEADER_ERKEK_PANTOLON" elementine tiklanir
    And "COK_SATANLAR" elementine tiklanir
    And "COK_SATANLAR" elementine tiklanir
    And 1 saniye beklenir
    And "FILTRELER_BEDEN_S" elementine tiklanir
    And 3 saniye beklenir
   And "URUN_SONUCLARI_SAYFASI" elementinin gorunur oldugu kontrol edilir
    And "FILTRELER_SECILENLER_HEADER_1" alaninin text degerinin "Pantolon" oldugu kontrol edilir
    And "FILTRELER_SECILENLER_HEADER_2" alaninin text degerinin "S" oldugu kontrol edilir
    And "SECIMLERI_TEMIZLE" elementine tiklanir
    And 3 saniye beklenir


    
    
  @urun_listeleme8
  Scenario: (TC-0052) Hizli filtreleme [GUEST][URUN_LISTELEME]
   Given Ana sayfa acilir
    Then "KVKK_TUMUNE_IZIN_VER" elementine tiklanir
    #And 1 saniye beklenir
    And "ANASAYFA_HEADER_ERKEK_MENU" elementi uzerine imleç getirilir
 #   And 1 saniye beklenir
    And "ANASAYFA_HEADER_MENU_ERKEK_GIYIM" elementine tiklanir
    #And 1 saniye beklenir
    And "ANASAYFA_HEADER_ERKEK_PANTOLON" elementine tiklanir
    And "YENI_GELENLER" elementinin gorunur oldugu kontrol edilir
    And "YENI_GELENLER" elementine tiklanir
    And "YENI_GELENLER" elementine tiklanir
    And 3 saniye beklenir
    And "HIZLI_FILTRELEME_SIRALAMA_SONUC" alaninin text degerinin "Yeni Gelenler" oldugu kontrol edilir
    And Sayfa yukarı kaydırılır
    And "COK_SATANLAR" elementinin gorunur oldugu kontrol edilir
    And "COK_SATANLAR" elementine tiklanir
    And 3 saniye beklenir
    And "HIZLI_FILTRELEME_SIRALAMA_SONUC" alaninin text degerinin "Çok Satanlar" oldugu kontrol edilir
    And Sayfa yukarı kaydırılır
    And "EN_COK_DEGERLENDIRILENLER" elementinin gorunur oldugu kontrol edilir
    And "EN_COK_DEGERLENDIRILENLER" elementine tiklanir
    And 3 saniye beklenir
    And "HIZLI_FILTRELEME_SIRALAMA_SONUC" alaninin text degerinin "En Çok Değerlendirilenler" oldugu kontrol edilir
    And Sayfa yukarı kaydırılır
    And "EN_FAVORILER" elementinin gorunur oldugu kontrol edilir
    And "EN_FAVORILER" elementine tiklanir
    And 3 saniye beklenir
    And "HIZLI_FILTRELEME_SIRALAMA_SONUC" alaninin text degerinin "En Favoriler" oldugu kontrol edilir




  @urun_listeleme9
  Scenario: (TC-0064) Bazi alt kategoriler icin urun sayisi kontrolu [GUEST][URUN_LISTELEME]
   Given Ana sayfa acilir
    Then "KVKK_TUMUNE_IZIN_VER" elementine tiklanir
    And 1 saniye beklenir
    And "ANASAYFA_HEADER_KADIN_MENU" elementi uzerine imleç getirilir
    And 1 saniye beklenir
    And "ANASAYFA_HEADER_KADIN_MENU_GIYIM" elementine tiklanir
    And "ANASAYFA_HEADER_KADIN_GIYIM_HEPSINI_GOSTER" elementine tiklanir
    And "FILTRELE_URUN_SAYISI" elementinin gorunur oldugu kontrol edilir
    And "ANASAYFA_HEADER_ERKEK_MENU" elementi uzerine imleç getirilir
 #   And 1 saniye beklenir
    And "ANASAYFA_HEADER_MENU_ERKEK_GIYIM" elementine tiklanir
    #And 1 saniye beklenir
    And "ERKEK_GIYIM_HEPSINI_GOSTER" elementine tiklanir
    And "FILTRELE_URUN_SAYISI" elementinin gorunur oldugu kontrol edilir

    And "COCUK_GIYIM" elementi uzerine imleç getirilir
 #   And 1 saniye beklenir
    And "KIZ_COCUK" elementine tiklanir
    #And 1 saniye beklenir
    And "COCUK_GIYIM_HEPSINI_GOSTER" elementine tiklanir
    And "FILTRELE_URUN_SAYISI" elementinin gorunur oldugu kontrol edilir



  

  @urun_listeleme10
  Scenario: (TC-0142) Urun listeleme ekraninda 2li ve 4lu gosterim kontrolu yapilir [LOGIN][URUN_LISTELEME]
  Given Ana sayfa acilir
    Then "KVKK_TUMUNE_IZIN_VER" elementine tiklanir
    And 1 saniye beklenir
    And "ANASAYFA_GIRIS_YAP" elementi uzerine imleç getirilir
    And 1 saniye beklenir
    And "GIRIS_YAP_BUTON" elementine tiklanir
    And "LOGIN_PAGE_EMAIL" alanina "<mail>" yazilir
    And "LOGIN_PAGE_PASS" alanina "<password>" yazilir
    And "LOGIN_PAGE_LOGIN_BUTTON" elementine tiklanir
    And "ANASAYFA_HESABIM" elementi goruntulenene kadar bekle
    And "ANASAYFA_HEADER_KADIN_MENU" elementi uzerine imleç getirilir
    And 3 saniye beklenir
    And "ANASAYFA_HEADER_KADIN_MENU_GIYIM" elementine tiklanir
    And "ANASAYFA_HEADER_KADIN_GIYIM_HEPSINI_GOSTER" elementine tiklanir
    And "IKILI_GOSTERIM" elementine tiklanir
    And "IKILI_GOSTERIM" elementine tiklanir
    And 3 saniye beklenir
    And "DORTLU_GOSTERIM" elementine tiklanir
    And "DORTLU_GOSTERIM" elementine tiklanir
    And 3 saniye beklenir
    #burada gösterim değişikliğini kontrol edecek bir alan bulamadım detaylı bakıalcak 

    
  Examples:
      | mail              |password     |
      | testerik@gmail.com| Test1234* |


       @urun_listeleme11
  Scenario: (TC-0143) Bazi alt kategoriler icin urun sayisi kontrolu [LOGIN][URUN_LISTELEME]
   Given Ana sayfa acilir
    Then "KVKK_TUMUNE_IZIN_VER" elementine tiklanir
    And 1 saniye beklenir
    And "ANASAYFA_GIRIS_YAP" elementi uzerine imleç getirilir
    And 1 saniye beklenir
    And "GIRIS_YAP_BUTON" elementine tiklanir
    And "LOGIN_PAGE_EMAIL" alanina "<mail>" yazilir
    And "LOGIN_PAGE_PASS" alanina "<password>" yazilir
    And "LOGIN_PAGE_LOGIN_BUTTON" elementine tiklanir
    And "ANASAYFA_HESABIM" elementi goruntulenene kadar bekle
    And "ANASAYFA_HEADER_KADIN_MENU" elementi uzerine imleç getirilir
    And 1 saniye beklenir
    And "ANASAYFA_HEADER_KADIN_MENU_GIYIM" elementine tiklanir
    And "ANASAYFA_HEADER_KADIN_GIYIM_HEPSINI_GOSTER" elementine tiklanir
    And "FILTRELE_URUN_SAYISI" elementinin gorunur oldugu kontrol edilir
    And "ANASAYFA_HEADER_ERKEK_MENU" elementi uzerine imleç getirilir
    And "ANASAYFA_HEADER_MENU_ERKEK_GIYIM" elementine tiklanir
    And "ERKEK_GIYIM_HEPSINI_GOSTER" elementine tiklanir
    And "FILTRELE_URUN_SAYISI" elementinin gorunur oldugu kontrol edilir
    And "COCUK_GIYIM" elementi uzerine imleç getirilir
    And "KIZ_COCUK" elementine tiklanir
    And "COCUK_GIYIM_HEPSINI_GOSTER" elementine tiklanir
    And "FILTRELE_URUN_SAYISI" elementinin gorunur oldugu kontrol edilir


    

      Examples:
      | mail              |password     |
      | testerik@gmail.com| Test1234* |



    @urun_listeleme12
  Scenario: (TC-0148) Listeleme ekraninda infinitiy scroll ozelliginin kontrolu [LOGIN][URUN_LISTELEME]
  Given Ana sayfa acilir
    Then "KVKK_TUMUNE_IZIN_VER" elementine tiklanir
    And 1 saniye beklenir
    And "ANASAYFA_GIRIS_YAP" elementi uzerine imleç getirilir
    And 1 saniye beklenir
    And "GIRIS_YAP_BUTON" elementine tiklanir
    And "LOGIN_PAGE_EMAIL" alanina "<mail>" yazilir
    And "LOGIN_PAGE_PASS" alanina "<password>" yazilir
    And "LOGIN_PAGE_LOGIN_BUTTON" elementine tiklanir
    And "ANASAYFA_HESABIM" elementi goruntulenene kadar bekle
    And "ANASAYFA_HEADER_KADIN_MENU" elementi uzerine imleç getirilir
    And 1 saniye beklenir
    And "ANASAYFA_HEADER_KADIN_MENU_GIYIM" elementine tiklanir
    And "ANASAYFA_HEADER_KADIN_GIYIM_HEPSINI_GOSTER" elementine tiklanir
    And 10 kez aşağı kaydırılır
    And "PLP_DAHA_FAZLA_URUN_GOSTER" elementi goruntulenene kadar bekle
    
          Examples:
      | mail              |password     |
      | testerik@gmail.com| Test1234* |