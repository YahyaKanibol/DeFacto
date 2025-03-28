#language: en
Feature: DeFacto Prod Testleri - Sepet LOGIN

  @sepet1
  Scenario Outline: (TC-0098) Loginli kullanici ile urun sepete eklenir ve on adetten fazla eklenmeme kurali test edilir [LOGIN][SEPET]
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
    And "KADIN_GIYIM_TISORT" elementine tiklanir
    And "ARAMA_LISTELELENEN_ILK_URUN" elementi goruntulenene kadar bekle
    And "ARAMA_LISTELELENEN_ILK_URUN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementi goruntulenene kadar bekle
    And "PDP_ILK_BEDEN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementine tiklanir
    And "SEPETIM" elementine tiklanir
    And 3 saniye beklenir
    And "SEPETTE_URUN_ARTTIR" elementine tiklanir
    And 3 saniye beklenir
    And "SEPETTE_URUN_ARTTIR" elementine tiklanir
    And 3 saniye beklenir
    And "SEPETTE_URUN_ARTTIR" elementine tiklanir
    And 3 saniye beklenir
    And "SEPETTE_URUN_ARTTIR" elementine tiklanir
    And 3 saniye beklenir
    And "SEPETTE_URUN_ARTTIR" elementine tiklanir
    And 3 saniye beklenir
    And "SEPETTE_URUN_ARTTIR" elementine tiklanir
    And 3 saniye beklenir
    And "SEPETTE_URUN_ARTTIR" elementine tiklanir
    And 3 saniye beklenir
    And "SEPETTE_URUN_ARTTIR" elementine tiklanir
    And 3 saniye beklenir
    And "SEPETTE_URUN_ARTTIR" elementine tiklanir
    And 3 saniye beklenir
    And "SEPETTE_URUN_ARTTIR" elementine tiklanir
    And 5 saniye beklenir
    And "ÜRÜN ADET LIMITINE ULAŞILMIŞTIR !" textinin gorunur oldugu kontrol edilir
    And "URUN_ADET_LIMIT_CARPI" elementine tiklanir
    And 3 saniye beklenir
    And "SEPET_URUN_ADET" alaninin text degerinin "10" oldugu kontrol edilir
    And "SEPETTE_URUN_AZALT" elementine tiklanir
    And 3 saniye beklenir
      And "SEPETTE_URUN_AZALT" elementine tiklanir
    And 3 saniye beklenir
      And "SEPETTE_URUN_AZALT" elementine tiklanir
    And 3 saniye beklenir
      And "SEPETTE_URUN_AZALT" elementine tiklanir
    And 3 saniye beklenir
      And "SEPETTE_URUN_AZALT" elementine tiklanir
    And 3 saniye beklenir
      And "SEPETTE_URUN_AZALT" elementine tiklanir
    And 3 saniye beklenir
      And "SEPETTE_URUN_AZALT" elementine tiklanir
    And 3 saniye beklenir
      And "SEPETTE_URUN_AZALT" elementine tiklanir
    And 3 saniye beklenir
      And "SEPETTE_URUN_AZALT" elementine tiklanir
    And 3 saniye beklenir
      And "SEPETTE_URUN_AZALTIRKEN_SIL" elementine tiklanir
    And 3 saniye beklenir
    And "Bu işlemle ürün sepetinizden kaldırılacaktır. Onaylıyor musunuz?" textinin gorunur oldugu kontrol edilir
    And "SEPETTEN_URUN_SIL" elementine tiklanir
    And "Sepetinizde ürün yok." textinin gorunur oldugu kontrol edilir

   Examples:
      | mail              |password     |
      | testerik@gmail.com| Test1234* |


@sepet2
  Scenario Outline: (TC-0100) Urunler sepete eklenir, sepete gidilerek "Sil ve Favorilere Ekle" butonuna tiklanir, Favorilerim ekrani kontrol edilir [LOGIN][SEPET]
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
    And "KADIN_GIYIM_TISORT" elementine tiklanir
    And "ARAMA_LISTELELENEN_ILK_URUN" elementi goruntulenene kadar bekle
    And "ARAMA_LISTELELENEN_ILK_URUN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementi goruntulenene kadar bekle
    And "PDP_ILK_BEDEN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementine tiklanir
    And 2 saniye beklenir
     And "ANASAYFA_HEADER_KADIN_MENU" elementi uzerine imleç getirilir
    And 1 saniye beklenir
    And "ANASAYFA_HEADER_KADIN_MENU_GIYIM" elementine tiklanir
    And "KADIN_GIYIM_TISORT" elementine tiklanir
    And "ARAMA_LISTELENEN_IKINCI_URUN" elementi goruntulenene kadar bekle
    And "ARAMA_LISTELENEN_IKINCI_URUN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementi goruntulenene kadar bekle
    And "PDP_ILK_BEDEN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementine tiklanir
    And "SEPETIM" elementine tiklanir
    And 3 saniye beklenir
    And "SEPETTE_URUN_AZALTIRKEN_SIL" elementine tiklanir
    And 3 saniye beklenir
    And "Bu işlemle ürün sepetinizden kaldırılacaktır. Onaylıyor musunuz?" textinin gorunur oldugu kontrol edilir
    And "SEPETTE_SIL_VE_FAVORILERE_EKLE" elementine tiklanir
    And 3 saniye beklenir
    And "SEPETTE_URUN_AZALTIRKEN_SIL" elementine tiklanir
    And 3 saniye beklenir
    And "Bu işlemle ürün sepetinizden kaldırılacaktır. Onaylıyor musunuz?" textinin gorunur oldugu kontrol edilir
    And "SEPETTE_SIL_VE_FAVORILERE_EKLE" elementine tiklanir
    And "Sepetinizde ürün yok." textinin gorunur oldugu kontrol edilir
    And "FAVORILER" elementine tiklanir
    And "FAVORILER_ILK_URUN" elementinin gorunur oldugu kontrol edilir
    And "FAVORILER_IKINCI_URUN" elementinin gorunur oldugu kontrol edilir
    And "FAVORILER_FAVORILERDEN_KALDIR_IKON" elementine tiklanir
    And "Ürün favori listenizden kaldırılacaktır. Onaylıyor musunuz?" textinin gorunur oldugu kontrol edilir
    And "FAVORILER_FAVORILERDEN_KALDIR_EN_SON" elementine tiklanir
    And 3 saniye beklenir
    And "FAVORILER_FAVORILERDEN_KALDIR_IKON" elementine tiklanir
    And "Ürün favori listenizden kaldırılacaktır. Onaylıyor musunuz?" textinin gorunur oldugu kontrol edilir
    And "FAVORILER_FAVORILERDEN_KALDIR_EN_SON" elementine tiklanir


       Examples:
      | mail              |password     |
      | testerik@gmail.com| Test1234* |



  @sepet3
  Scenario Outline: (TC-0101) Urunler sepete eklenir, sepete gidilerek "Sil ve Favorilere Ekle" butonuna tiklanir, Favoriler Tab'i kontrol edilir [LOGIN][SEPET]
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
    And "KADIN_GIYIM_TISORT" elementine tiklanir
    And "ARAMA_LISTELELENEN_ILK_URUN" elementi goruntulenene kadar bekle
    And "ARAMA_LISTELELENEN_ILK_URUN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementi goruntulenene kadar bekle
    And "PDP_ILK_BEDEN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementine tiklanir
    And 2 saniye beklenir
     And "ANASAYFA_HEADER_KADIN_MENU" elementi uzerine imleç getirilir
    And 1 saniye beklenir
    And "ANASAYFA_HEADER_KADIN_MENU_GIYIM" elementine tiklanir
    And "KADIN_GIYIM_TISORT" elementine tiklanir
    And "ARAMA_LISTELENEN_IKINCI_URUN" elementi goruntulenene kadar bekle
    And "ARAMA_LISTELENEN_IKINCI_URUN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementi goruntulenene kadar bekle
    And "PDP_ILK_BEDEN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementine tiklanir
    And "SEPETIM" elementine tiklanir
    And 3 saniye beklenir
    And "SEPETTE_URUN_AZALTIRKEN_SIL" elementine tiklanir
    And 3 saniye beklenir
    And "Bu işlemle ürün sepetinizden kaldırılacaktır. Onaylıyor musunuz?" textinin gorunur oldugu kontrol edilir
    And "SEPETTE_SIL_VE_FAVORILERE_EKLE" elementine tiklanir
    And 3 saniye beklenir
    And 2 kez aşağı kaydırılır
    And 1 saniye beklenir
    And "FAVORILER_TAB" elementine tiklanir
    And "FAVORILER_TAB_ILK_URUN" elementinin gorunur oldugu kontrol edilir
    And 3 saniye beklenir
    And Sayfa yukarı kaydırılır
    And 1 saniye beklenir
    And "SEPETTE_URUN_AZALTIRKEN_SIL" elementine tiklanir
    And 3 saniye beklenir
    And "Bu işlemle ürün sepetinizden kaldırılacaktır. Onaylıyor musunuz?" textinin gorunur oldugu kontrol edilir
    And "SEPETTEN_URUN_SIL" elementine tiklanir
    And "Sepetinizde ürün yok." textinin gorunur oldugu kontrol edilir
    And "FAVORILER" elementine tiklanir
    And "FAVORILER_ILK_URUN" elementinin gorunur oldugu kontrol edilir
    And "FAVORILER_FAVORILERDEN_KALDIR_IKON" elementine tiklanir
    And "Ürün favori listenizden kaldırılacaktır. Onaylıyor musunuz?" textinin gorunur oldugu kontrol edilir
    And "FAVORILER_FAVORILERDEN_KALDIR_EN_SON" elementine tiklanir
    And "Favorilerinizde Ürün Bulunmamaktadır." textinin gorunur oldugu kontrol edilir


      Examples:
      | mail              |password     |
      | testerik@gmail.com| Test1234* |



  @sepet4
  Scenario Outline: (TC-0102) Sepete Urun eklenir, sepete gidilir, kontroller yapilir ve urun silinir [LOGIN][SEPET]
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
    And "ANASAYFA_HEADER_ERKEK_MENU" elementi uzerine imleç getirilir
    #And 1 saniye beklenir
    And "ANASAYFA_HEADER_MENU_ERKEK_GIYIM" elementine tiklanir
    #And 1 saniye beklenir
    And "ERKEK_GIYIM_HEPSINI_GOSTER" elementine tiklanir
    And "ARAMA_LISTELELENEN_ILK_URUN" elementi goruntulenene kadar bekle
    And "ARAMA_LISTELELENEN_ILK_URUN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementi goruntulenene kadar bekle
    And "PDP_ILK_BEDEN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementine tiklanir
    And 2 saniye beklenir
    And "ANASAYFA_HEADER_KADIN_MENU" elementi uzerine imleç getirilir
    And 1 saniye beklenir
    And "ANASAYFA_HEADER_KADIN_MENU_GIYIM" elementine tiklanir
    And "KADIN_GIYIM_TISORT" elementine tiklanir
    And "ARAMA_LISTELENEN_IKINCI_URUN" elementi goruntulenene kadar bekle
    And "ARAMA_LISTELENEN_IKINCI_URUN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementi goruntulenene kadar bekle
    And "PDP_ILK_BEDEN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementine tiklanir
    And "SEPETIM" elementine tiklanir
    And "SEPETIM_ILK_URUN" elementinin gorunur oldugu kontrol edilir
    And "SEPETIM_IKINCI_URUN" elementinin gorunur oldugu kontrol edilir
    And 1 saniye beklenir
    And "SEPETTE_URUN_AZALTIRKEN_SIL" elementine tiklanir
    And 3 saniye beklenir
    And "Bu işlemle ürün sepetinizden kaldırılacaktır. Onaylıyor musunuz?" textinin gorunur oldugu kontrol edilir
    And "SEPETTEN_URUN_SIL" elementine tiklanir
    And "SEPETIM_ONCEDEN_EKLEDIKLERIM" elementi goruntulenene kadar kaydir
    And "SEPETIM_ONCEDEN_EKLEDIKLERIM" elementine tiklanir
    And "SEPETIM_ONCEDEN_EKLEDIKLERIM_TAB_ILK_URUN" elementinin gorunur oldugu kontrol edilir
    And 5 kez yukari kaydırılır
    And 1 saniye beklenir
    And "SEPETTE_URUN_AZALTIRKEN_SIL" elementine tiklanir
    And 3 saniye beklenir
    And "Bu işlemle ürün sepetinizden kaldırılacaktır. Onaylıyor musunuz?" textinin gorunur oldugu kontrol edilir
    And "SEPETTEN_URUN_SIL" elementine tiklanir
    And "Sepetinizde ürün yok." textinin gorunur oldugu kontrol edilir

    
     Examples:
      | mail              |password     |
      | testerik@gmail.com| Test1234* |


  @sepet5
  Scenario Outline: (TC-0104) Sepete urun eklenir ve sepette urun duzenlenerek farkli renkle degistirilir [LOGIN][SEPET]
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
    And "ANASAYFA_HEADER_ERKEK_MENU" elementi uzerine imleç getirilir
    #And 1 saniye beklenir
    And "ANASAYFA_HEADER_MENU_ERKEK_GIYIM" elementine tiklanir
    #And 1 saniye beklenir
    And "ERKEK_GIYIM_HEPSINI_GOSTER" elementine tiklanir
    And "ARAMA_LISTELELENEN_ILK_URUN" elementi goruntulenene kadar bekle
    And "ARAMA_LISTELELENEN_ILK_URUN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementi goruntulenene kadar bekle
    And "PDP_ILK_BEDEN" elementine tiklanir
    And 1 saniye beklenir
    And "PDP_SEPETE_EKLE" elementine tiklanir
    And "SEPETIM" elementine tiklanir
    And 2 saniye beklenir
    And "SEPETTE_DUZENLE" elementine tiklanir
    And "SEPETTE_DUZENLE_SECENEKLER" elementinin gorunur oldugu kontrol edilir
    And "SEPETTE_DUZENLE_SECENEKLER_IKINCI_RENK" elementine tiklanir
    And 2 saniye beklenir
    And "SEPETTE_DUZENLE_SECENEKLER_IKINCI_BEDEN" elementine tiklanir
    And 2 saniye beklenir
    And "SEPETTE_DUZENLE_SECENEKLER_DUZENLE_VE_SEPETE_DON" elementine tiklanir
    And "SEPETIM_ILK_URUN" elementinin gorunur oldugu kontrol edilir
    And 1 saniye beklenir
    And "SEPETTE_URUN_AZALTIRKEN_SIL" elementine tiklanir
    And 3 saniye beklenir
    And "Bu işlemle ürün sepetinizden kaldırılacaktır. Onaylıyor musunuz?" textinin gorunur oldugu kontrol edilir
    And "SEPETTEN_URUN_SIL" elementine tiklanir
    And "Sepetinizde ürün yok." textinin gorunur oldugu kontrol edilir



  Examples:
      | mail              |password     |
      | testerik@gmail.com| Test1234* |


      @sepet6
  Scenario Outline: (TC-0106) Sepet ekraninda Gelince Haber Ver fonksiyonu kontrol edilir [LOGIN][SEPET]
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
    And "ANASAYFA_HEADER_ERKEK_MENU" elementi uzerine imleç getirilir
    #And 1 saniye beklenir
    And "ANASAYFA_HEADER_MENU_ERKEK_GIYIM" elementine tiklanir
    #And 1 saniye beklenir
    And "ERKEK_GIYIM_HEPSINI_GOSTER" elementine tiklanir
    And "ARAMA_LISTELENEN_IKINCI_URUN" elementine tiklanir
    And "PDP_SEPET_IKINCI_BEDEN" elementine tiklanir
     And 1 saniye beklenir
    And "PDP_SEPETE_EKLE" elementine tiklanir
    And "SEPETIM" elementine tiklanir
    And 2 saniye beklenir
    And "SEPETTE_DUZENLE" elementi goruntulenene kadar bekle
    And "SEPETTE_DUZENLE" elementine tiklanir
    And 2 saniye beklenir
    And "GELINCE_HABER_VER_ILK_BEDEN" elementine tiklanir
    And "GELINCE_HABER_VER_SON_BUTTON" elementinin gorunur oldugu kontrol edilir
    And "GELINCE_HABER_VER_SON_BUTTON" elementine tiklanir
    And "TALEBİNİZ BAŞARI İLE ALINDI" textinin gorunur oldugu kontrol edilir
    And "GELINCE_HABER_VER_ONAY_ALISVERISE_DEVAM_ET" elementine tiklanir
    And "SEPETIM_ILK_URUN" elementinin gorunur oldugu kontrol edilir
    And 1 saniye beklenir
    And "SEPETTE_URUN_AZALTIRKEN_SIL" elementine tiklanir
    And 3 saniye beklenir
    And "Bu işlemle ürün sepetinizden kaldırılacaktır. Onaylıyor musunuz?" textinin gorunur oldugu kontrol edilir
    And "SEPETTEN_URUN_SIL" elementine tiklanir
    And "Sepetinizde ürün yok." textinin gorunur oldugu kontrol edilir






      Examples:
      | mail              |password     |
      | testerik@gmail.com| Test1234* |


      @sepet7
  Scenario Outline: (TC-0108) Sepete eklenen urunun ismi, gorseli ve fiyati kontrol edilir [LOGIN][SEPET]
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
    And "ANASAYFA_HEADER_ERKEK_MENU" elementi uzerine imleç getirilir
    #And 1 saniye beklenir
    And "ANASAYFA_HEADER_MENU_ERKEK_GIYIM" elementine tiklanir
    #And 1 saniye beklenir
    And "ERKEK_GIYIM_HEPSINI_GOSTER" elementine tiklanir
    And "ARAMA_LISTELELENEN_ILK_URUN" elementi goruntulenene kadar bekle
    And "ARAMA_LISTELELENEN_ILK_URUN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementi goruntulenene kadar bekle
    And "PDP_ILK_BEDEN" elementine tiklanir
    And 1 saniye beklenir
    And "PDP_SEPETE_EKLE" elementine tiklanir
    And "SEPETIM" elementine tiklanir
    And 2 saniye beklenir
    And "SEPET_GENEL_SAYFA" elementinin gorunur oldugu kontrol edilir 
    #bu element Sepetin genel container yapısıdır
    And "SEPETIM_ILK_URUN" elementinin gorunur oldugu kontrol edilir 
    And 1 saniye beklenir
    And "SEPETTE_URUN_AZALTIRKEN_SIL" elementine tiklanir
    And 3 saniye beklenir
    And "Bu işlemle ürün sepetinizden kaldırılacaktır. Onaylıyor musunuz?" textinin gorunur oldugu kontrol edilir
    And "SEPETTEN_URUN_SIL" elementine tiklanir
    And "Sepetinizde ürün yok." textinin gorunur oldugu kontrol edilir



  Examples:
      | mail              |password     |
      | testerik@gmail.com| Test1234* |



  @sepet8
  Scenario Outline: (TC-0110) Sepete eklenen urunun checkbox'i kaldirildiginde sepet alaninin kontrolu [LOGIN][SEPET]
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
    And "ANASAYFA_HEADER_ERKEK_MENU" elementi uzerine imleç getirilir
    #And 1 saniye beklenir
    And "ANASAYFA_HEADER_MENU_ERKEK_GIYIM" elementine tiklanir
    #And 1 saniye beklenir
    And "ERKEK_GIYIM_HEPSINI_GOSTER" elementine tiklanir
    And "ARAMA_LISTELELENEN_ILK_URUN" elementi goruntulenene kadar bekle
    And "ARAMA_LISTELELENEN_ILK_URUN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementi goruntulenene kadar bekle
    And "PDP_ILK_BEDEN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementine tiklanir
    And 2 saniye beklenir
    And "ANASAYFA_HEADER_KADIN_MENU" elementi uzerine imleç getirilir
    And 1 saniye beklenir
    And "ANASAYFA_HEADER_KADIN_MENU_GIYIM" elementine tiklanir
    And "KADIN_GIYIM_TISORT" elementine tiklanir
    And "ARAMA_LISTELENEN_IKINCI_URUN" elementi goruntulenene kadar bekle
    And "ARAMA_LISTELENEN_IKINCI_URUN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementi goruntulenene kadar bekle
    And "PDP_ILK_BEDEN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementine tiklanir
    And "SEPETIM" elementine tiklanir
    And "SEPETIM_ILK_URUN" elementinin gorunur oldugu kontrol edilir
    And "SEPETIM_IKINCI_URUN" elementinin gorunur oldugu kontrol edilir
    And 1 saniye beklenir
    And "SEPET_ILK_URUN_CHECKBOX" elementine tiklanir
    And 3 saniye beklenir
   # And "SEPET_ILK_URUN_CHECKBOX" elementine tiklanir
   # And 3 saniye beklenir
    And " Sepetim (0 Ürün) " textinin gorunur oldugu kontrol edilir
    And 1 saniye beklenir
    And "SEPET_ILK_URUN_CHECKBOX" elementine tiklanir
    And 3 saniye beklenir
    And "SEPET_ILK_URUN_CHECKBOX" elementine tiklanir
    And 3 saniye beklenir
    And "SEPET_TOPLAM_FIYAT_ALANI" elementinin gorunur oldugu kontrol edilir
    And 1 saniye beklenir
    And "SEPETTE_URUN_AZALTIRKEN_SIL" elementine tiklanir
    And 3 saniye beklenir
    And "Bu işlemle ürün sepetinizden kaldırılacaktır. Onaylıyor musunuz?" textinin gorunur oldugu kontrol edilir
    And 3 saniye beklenir
    And "SEPETTEN_URUN_SIL" elementine tiklanir
    And 3 saniye beklenir
    And "SEPETTE_URUN_AZALTIRKEN_SIL" elementine tiklanir
    And 3 saniye beklenir
    And "Bu işlemle ürün sepetinizden kaldırılacaktır. Onaylıyor musunuz?" textinin gorunur oldugu kontrol edilir
    And "SEPETTEN_URUN_SIL" elementine tiklanir
    And "Sepetinizde ürün yok." textinin gorunur oldugu kontrol edilir

  Examples:
      | mail              |password     |
      | testerik@gmail.com| Test1234* |


@sepet9
  Scenario Outline: (TC-0111) On tutar ve indirimlerin toplaminin, toplam tutara denk gelmesi kontrolu [LOGIN][SEPET]
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
    And "ANASAYFA_HEADER_ERKEK_MENU" elementi uzerine imleç getirilir
    #And 1 saniye beklenir
    And "ANASAYFA_HEADER_MENU_ERKEK_GIYIM" elementine tiklanir
    #And 1 saniye beklenir
    And "ERKEK_GIYIM_HEPSINI_GOSTER" elementine tiklanir
    And "ARAMA_LISTELELENEN_ILK_URUN" elementi goruntulenene kadar bekle
    And "ARAMA_LISTELELENEN_ILK_URUN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementi goruntulenene kadar bekle
    And "PDP_ILK_BEDEN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementine tiklanir
    And "SEPETIM" elementine tiklanir
    And "SEPETIM_ILK_URUN" elementinin gorunur oldugu kontrol edilir
    And Toplam ucretin dogru denk gelip gelmedigine bakilir
     And 3 saniye beklenir
    And "SEPETTE_URUN_AZALTIRKEN_SIL" elementine tiklanir
    And 3 saniye beklenir
    And "Bu işlemle ürün sepetinizden kaldırılacaktır. Onaylıyor musunuz?" textinin gorunur oldugu kontrol edilir
    And "SEPETTEN_URUN_SIL" elementine tiklanir
    And "Sepetinizde ürün yok." textinin gorunur oldugu kontrol edilir

    
    


     Examples:
      | mail              |password     |
      | yuktest3@gmail.com| YukTest3 |


@sepet10
  Scenario Outline: (TC-0113) Sepette Favorilere Ekle butonuna tiklanir, Sil ve Favorilere Ekle tiklanarak Favorilerim kontrol edilir [LOGIN][SEPET]
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
    And "ANASAYFA_HEADER_ERKEK_MENU" elementi uzerine imleç getirilir
    #And 1 saniye beklenir
    And "ANASAYFA_HEADER_MENU_ERKEK_GIYIM" elementine tiklanir
    #And 1 saniye beklenir
    And "ERKEK_GIYIM_HEPSINI_GOSTER" elementine tiklanir
    And "ARAMA_LISTELELENEN_ILK_URUN" elementi goruntulenene kadar bekle
    And "ARAMA_LISTELELENEN_ILK_URUN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementi goruntulenene kadar bekle
    And "PDP_SEPET_IKINCI_BEDEN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementine tiklanir
    And "SEPETIM" elementine tiklanir
    And "SEPETIM_ILK_URUN" elementinin gorunur oldugu kontrol edilir
    And "SEPETTE_FAVORILERE_EKLE" elementine tiklanir
    And 2 saniye beklenir
    And "SEPETTE_FAVORILERE_EKLE" elementine tiklanir
    And "Ürün favori listenize eklenmiştir" textinin gorunur oldugu kontrol edilir
    And 3 saniye beklenir
    And "SEPETTE_FAVORILERE_EKLE" elementine tiklanir
    And "Ürün favorilerim listesinden kaldırıldı" textinin gorunur oldugu kontrol edilir
    And 2 saniye beklenir
    And Sepetteki urun silinir ve detay sayfasinda dogrulanir
    And "FAVORILER_FAVORILERDEN_KALDIR_IKON" elementine tiklanir
    And "Ürün favori listenizden kaldırılacaktır. Onaylıyor musunuz?" textinin gorunur oldugu kontrol edilir
    And 2 saniye beklenir
    And "FAVORILER_FAVORILERDEN_KALDIR_EN_SON" elementine tiklanir
    And 3 saniye beklenir




    Examples:
      | mail              |password     |
      | yuktest3@gmail.com| YukTest3 |


     @sepet11
  Scenario Outline: (TC-0114) Sepette Indirim Kodu kullanma kontrolu yapilir [LOGIN][SEPET]
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
    And "ANASAYFA_HEADER_ERKEK_MENU" elementi uzerine imleç getirilir
    #And 1 saniye beklenir
    And "ANASAYFA_HEADER_MENU_ERKEK_GIYIM" elementine tiklanir
    #And 1 saniye beklenir
    And "ERKEK_GIYIM_HEPSINI_GOSTER" elementine tiklanir
    And "ARAMA_LISTELELENEN_ILK_URUN" elementi goruntulenene kadar bekle
    And "ARAMA_LISTELELENEN_ILK_URUN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementi goruntulenene kadar bekle
    And "PDP_SEPET_IKINCI_BEDEN" elementine tiklanir
    And "PDP_SEPETE_EKLE" elementine tiklanir
    And "SEPETIM" elementine tiklanir
    And "SEPETIM_ILK_URUN" elementinin gorunur oldugu kontrol edilir
    And "INDIRIM_KODU_ALANI" alanina "<yanliskod>" yazilir
    And "INDIRIM_KODU_KULLAN" elementine tiklanir
    And "INDIRIM_KODU_BILGILENDIRME" alaninin text degerinin "Üzgünüz, kupon kodunun süresi dolmuştur." oldugu kontrol edilir
    And "INDIRIM_KODU_ALANI" alanina "<dogrukod>" yazilir
    And "INDIRIM_KODU_KULLAN" elementine tiklanir



 Examples:
      | mail              |password     |yanliskod| dogrukod| 
      | yuktest3@gmail.com| YukTest3    | DENEME  |QATEST| 
      #BU SENARYODA KULLANILAN QATEST İÇİN EMAİL UYUŞMAZLIĞI HATASI ALINIYOR. YETKİNLİK VEYA KOD GELDİKTEN SONRA İŞLEMLERE DEVAM EDİLECEK ŞİMDİLİK DEVRE DIŞI KALMIŞ BİR SENARYO !!!!!!!!!!