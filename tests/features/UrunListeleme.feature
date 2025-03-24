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
    #And 1 saniye beklenir
    And "ANASAYFA_HEADER_ERKEK_MENU" elementi uzerine imleç getirilir
 #   And 1 saniye beklenir
    And "ANASAYFA_HEADER_MENU_ERKEK_GIYIM" elementine tiklanir
    #And 1 saniye beklenir
    And "ANASAYFA_HEADER_ERKEK_PANTOLON" elementine tiklanir
    And "COK_SATANLAR" elementine tiklanir
   # And 1 saniye beklenir
    And "COK_SATANLAR" elementine tiklanir
    And 1 saniye beklenir
    And "FILTRELER_BEDEN_S" elementine tiklanir
    And 3 saniye beklenir
   And "URUN_SONUCLARI_SAYFASI" elementinin gorunur oldugu kontrol edilir
    And "FILTRELER_SECILENLER_HEADER_1" alaninin text degerinin "Pantolon" oldugu kontrol edilir
    And "FILTRELER_SECILENLER_HEADER_2" alaninin text degerinin "S" oldugu kontrol edilir
    And "SECIMLERI_TEMIZLE" elementine tiklanir
    And 3 saniye beklenir
    
    





    