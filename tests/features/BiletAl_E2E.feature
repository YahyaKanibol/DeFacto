@test
Feature:Grup ile bilet alma
  Scenario Outline: Grup ile en düşük fiyatlı bileti satın alma
    Given Anasayfayi goruntuler
    Then Cookie kabul et
    # Giriş adımları burada başlıyor
    And "BOLBOL_UYE_GIRISI" elementine tiklanir
    And "Pegasus BolBol Numaranız" textinin gorunur oldugu kontrol edilir
    And "CEP_TELEFONU" alanina "<cepTelefonu>" girilir
    And "PAROLA" alanina "<parola>" girilir
    And Captcha'yi kabul et
    And 10 saniye beklenir
    And "GIRIS_YAP" elementine tiklanir
    And Yuklenene kadar bekle
    # Giriş adımları burada bitiyor
    # Hava alanı seçme adımları burada başlıyor
    And "NEREDEN" elementine tiklanir
    And "NEREDEN" alanina "SAW" girilir
    And 1 saniye beklenir
    And "<ilkHavaAlani>" textinin gorunur oldugu kontrol edilir
    And "<ilkHavaAlani>" textine tiklanir
    And "NEREYE" alanina "AMS" girilir
    And 1 saniye beklenir
    And "<ikinciHavaAlani>" textinin gorunur oldugu kontrol edilir
    And "<ikinciHavaAlani>" textine "2" indisi ile tiklanir
    # Hava alanı seçme adımları burada bitiyor
    # Tarih seçme adımları burada başlıyor
    And 1 saniye beklenir
    And Gidis ve donus tarihleri secilir
    # Tarih seçme adımları burada bitiyor
    # Yolcu seçme adımları burada başlıyor
    And "YOLCU" elementine tiklanir
    And Yolcu sayisini "<sayi>" olarak belirle
    # Yolcu seçme adımları burada bitiyor
    # Uçuş seçme adımları burada başlıyor
    And "UCUZ_UCUS_ARA" elementine tiklanir
    And Yuklenene kadar bekle
    And Sayfa dogru yuklenene kadar dene
    # Uçuş seçme adımları burada bitiyor
    # Paket seçme adımları burada başlıyor
    And "EN_UYGUN_GIDIS_BILET" elementine tiklanir
    And "<paket>" secimi yapilir
    And "EN_UYGUN_DONUS_BILET" elementine tiklanir
    And "<paket>" secimi yapilir
    And "DEVAM" elementine tiklanir
    And Yuklenene kadar bekle
    # Paket seçme adımları burada bitiyor
    # Yolcu bilgileri doldurma adımları burada başlıyor
    And "BU_YOLCU_ILE_ILETISIME_GECILSIN" elementine tiklanir
    And Toplam sayisi "<sayi>" adet olan tum yolcularin bilgilerini doldur
    And "DEVAM1" elementine tiklanir
    And Yuklenene kadar bekle
     And "DEVAM1" elementine tiklanir
    # Yolcu bilgileri doldurma adımları burada bitiyor
    # Koltuk seçme adımları burada başlıyor
    And Yuklenene kadar bekle
    And "Koltuk Seçimi" textinin gorunur oldugu kontrol edilir
    And Tum yolcular icin "<sayi>" adet koltuk secimi yapilir
    And "SIRADAKI_UCUSA_DEVAM" elementine tiklanir
    And "Koltukları Kendim Seçeceğim" texti varsa tiklanir
    And Tum yolcular icin "<sayi>" adet koltuk secimi yapilir
    # Koltuk seçme adımları burada bitiyor
    # Yemek seçimi adımları burada başlıyor
    And "YEMEK_SECIMINE_DEVAM" elementine tiklanir
    And Yuklenene kadar bekle
    And "Yemek Seçimi" textinin gorunur oldugu kontrol edilir
    And "UCRETSIZ_IKRAM" elementine tiklanir
    And "Tüm yolcular için seç" textine tiklanir
    And 1 saniye beklenir
    And "ONAYLA" elementine tiklanir
    And "SIRADAKI_UCUSA_DEVAM" elementine tiklanir
    And "Yemek Seçimi" textinin gorunur oldugu kontrol edilir
    And "UCRETSIZ_IKRAM" elementine tiklanir
    And 1 saniye beklenir
    And "Tüm yolcular için seç" textine tiklanir
    And "ONAYLA" elementine tiklanir
    And Yuklenene kadar bekle
    # Yemek seçimi adımları burada bitiyor
    # Bagaj hakki seçimi adımları burada başlıyor ve bitiyor
    And "BAGAJ_HAKKI_SECIMINE_DEVAM" elementine tiklanir
    And Yuklenene kadar bekle
    And "SIRADAKI_UCUSA_DEVAM1" elementine tiklanir
    And Yuklenene kadar bekle
    And "DIGER_HIZMETLER_SECIMINE_DEVAM" elementine tiklanir
    And Yuklenene kadar bekle
    And "ODEMEYE_DEVAM" elementine tiklanir
    And 8 saniye beklenir
    # Ödeme adımları burada başlıyor
    And "Kart Bilgilerini Giriniz" textine tiklanir
    And "KART_NUMARASI" alanina "KrediKarti" icerisinden "KartNo" degeri girilir
    And "KART_SAHIBI" alanina "KrediKarti" icerisinden "kartAdSoyAd" degeri girilir
    And "SON_AY" alanina "KrediKarti" icerisinden "ay" degeri girilir
    And "SON_YIL" alanina "KrediKarti" icerisinden "yil" degeri girilir
    And "CVV" alanina "KrediKarti" icerisinden "Cvv" degeri girilir
    And "CHECKBOX" elementine tiklanir
    And "ODEMEYI_TAMAMLA" elementine tiklanir
    And Yuklenene kadar bekle
    And "İşlem banka tarafından reddedilmiştir. Lütfen başka bir kart ile yeniden deneyiniz ya da bankanız ile iletişime geçiniz" textinin gorunur oldugu kontrol edilir
    # Ödeme adımları burada bitiyor
   Examples:
        | ilkHavaAlani              | ikinciHavaAlani|grupAdi|grupTipi|cepTelefonu |parola     |sayi|paket  |
        | İstanbul Sabiha Gökçen    | Amsterdam      |TEST   |Diğer   |5550330128  |Cnplt-123  |9   |Avantaj|