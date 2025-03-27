@urundetay @footer
Feature: DeFacto Prod Testleri - Urun Detay

@urun_detay1
  Scenario: (TC-0020) Urun sayfasi icinden urunu favorilere ekleme [GUEST][URUN_DETAY]
  Given Ana sayfa acilir
  When "Erkek" menusunden "Tişört" alt kategorisine gidilir
  Then Sayfadaki "ilk urune" tikla ve ismini "urun_adi" olarak kaydet
  And "FAVORILERE_EKLE_IKONU" elementine tiklanir
  And "FAVORILERE_GIT" elementine tiklanir
  And Sayfa yuklenene kadar bekle
  And "Temp Data" icerisinden "urun_adi" degerinin gorunur oldugu kontrol edilir

@urun_detay2
  Scenario: (TC-0021) Urun bilgileri kismi kontrolu [GUEST][URUN_DETAY]
    Given Ana sayfa acilir
    When "Erkek" menusunden "Tişört" alt kategorisine gidilir
    Then Sayfadaki "herhangi bir urune" tikla ve ismini "urun_adi" olarak kaydet
    And Sayfa yuklenene kadar bekle
    And "Temp Data" icerisinden "urun_adi" degerinin gorunur oldugu kontrol edilir

@urun_detay3
  Scenario: (TC-0022) Urun paylasma butonunun kontrolu [GUEST][URUN_DETAY]
    Given Ana sayfa acilir
    When "Erkek" menusunden "Tişört" alt kategorisine gidilir
    Then Sayfadaki "ilk urune" tiklanir
    And "URUN_PAYLASIM_BUTONU" elementinin gorunur oldugu kontrol edilir

@urun_detay4
  Scenario: (TC-0053) Beden kontrolu [GUEST][URUN_DETAY]
    Given Ana sayfa acilir
    When "Erkek" menusunden "Tişört" alt kategorisine gidilir
    Then Sayfadaki "ilk urune" tiklanir
    And "URUN_BEDEN" elementinin gorunur oldugu kontrol edilir

@urun_detay5
  Scenario: (TC-0062) Urun ismi, gorseli ve fiyatinin kontrolu [GUEST][URUN_DETAY]
    Given Ana sayfa acilir
    When "Erkek" menusunden "Tişört" alt kategorisine gidilir
    Then Sayfadaki "ilk urune" tiklanir
    And "URUN_DETAY_ISIM_BASLIGI" elementinin gorunur oldugu kontrol edilir
    And "URUN_DETAY_RESMI" elementinin gorunur oldugu kontrol edilir
    And "URUN_DETAY_FIYAT_BASLIGI" elementinin gorunur oldugu kontrol edilir

  @urun_detay6
  Scenario: (TC-0063) Urun renk secenekleri kontrolu [GUEST][URUN_DETAY]
    Given Ana sayfa acilir
    When "Erkek" menusunden "Tişört" alt kategorisine gidilir
    Then Sayfadaki "ilk urune" tiklanir
    And "URUN_RENK_SECENEKLERI" elementinin gorunur oldugu kontrol edilir

@urun_detay7
  Scenario Outline: (TC-0094) Urun detay footerdan sepete ekleme [GUEST][URUN_DETAY]
    Given Ana sayfa acilir
    When "Erkek" menusunden "Tişört" alt kategorisine gidilir
    Then Sayfadaki "ilk urune" tikla ve ismini "urun_adi" olarak kaydet
    And Sayfa yuklenene kadar bekle
    And "ARAMA_ALANI" elementine tiklanir
    And "HEADER_ARAMA_ALANI" alanina "<urun>" yazilir
    And Sayfa yuklenene kadar bekle
    And "Enter" klavye aksiyonu girilir
    And Sayfa yuklenene kadar bekle
    And Sayfadaki "ilk urune" tiklanir
    And "Temp Data" icerisinden "urun_adi" degerinin gorunur oldugu kontrol edilir
Examples:
  | urun |
  | ceket |

@urun_detay8
  Scenario: (TC-0096) Urun detay kismindan Gelince Haber Ver [GUEST][URUN_DETAY]
  Given Ana sayfa acilir
  When Stokta olmayan bir urune gidilir
  Then "URUN_STOKTA_YOK_BEDEN" elementinin gorunur oldugu kontrol edilir
  And "URUN_STOKTA_YOK_BEDEN" elementine tiklanir
  And "BANA_HABER_VER_BUTONU" elementinin gorunur oldugu kontrol edilir
  And "BANA_HABER_VER_BUTONU" elementine tiklanir
  And "STOKLAR_TUKENDI_ALANI_EPOSTA_ALANI" elementinin gorunur oldugu kontrol edilir
  And "STOKLAR_TUKENDI_ALANI_CHECKBOX" elementinin gorunur oldugu kontrol edilir
  And "STOKLAR_TUKENDI_ALANI_BENI_HABERDAR_ET_BUTONU" elementine tiklanir
  And "E-posta alanı boş olamaz" textinin gorunur oldugu kontrol edilir
  And "STOKLAR_TUKENDI_ALANI_EPOSTA_ALANI" alanina "test@defacto2.com" yazilir
  And "STOKLAR_TUKENDI_ALANI_CHECKBOX" elementine tiklanir
  And "STOKLAR_TUKENDI_ALANI_BENI_HABERDAR_ET_BUTONU" elementine tiklanir
  And "BANA_HABER_VER_BASARILI" elementinin gorunur oldugu kontrol edilir





















