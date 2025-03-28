class basketPage{
    elements={ 
        SEPETE_HIZLI_EKLE_ILK_URUN:"//div[@id='product-fill']/div/div[1]/div/div[1]/div[2]",
        SEPETE_HIZLI_EKLE_ILK_URUN_BEDEN:"//div[@id='product-fill']/div/div[1]/div/div[1]/div[4]/div[1]/div[1]/div[1]/div[2]",
        SEPETE_HIZLI_EKLE_ILK_URUN__BEDEN_ILK_BEDEN:"//div[@id='product-fill']/div/div[1]/div/div[1]/div[4]/div[1]/div[1]/div[1]/div[2]/button[1]",
        SEPETE_HIZLI_EKLE_SEPETE_EKLE:"//div[@id='product-fill']/div/div[1]/div/div[1]/div[4]/div[1]/div[2]/button/span[1]",
        SEPETIM:"//div[@id='flycartBtn']",
        SEPETIM_ILK_URUN:"//div[@id='ContainerShoppingCart']/div/div[2]/div/div[1]/div",
        SEPETIM_IKINCI_URUN:"//div[@id='ContainerShoppingCart']/div/div[2]/div/div[2]/div",
        SEPETIM_ONCEDEN_EKLEDIKLERIM:"//div[@id='cm-f9e10e94-782f-4f8d-9adc-d6c6e9b3d882']/div/div[1]/div/div/ul/li[4]/a",
        PDP_SEPETE_EKLE:"//div[@id='product-main-container']/div[1]/div/div[1]/div/div/div[2]/div/div[6]/div",
        PDP_ILK_BEDEN:"//div[@id='product-main-container']/div[1]/div/div[1]/div/div/div[2]/div/div[4]/div[1]/div[3]/button[1]",
        PDP_SEPET_IKINCI_BEDEN:"//div[@id='product-main-container']/div[1]/div/div[1]/div/div/div[2]/div/div[4]/div[1]/div[3]/button[2]",
        URUN_ADET_LIMIT_CARPI:"//div[@id='popup']/div/div[1]/button",
        SEPETTE_URUN_ARTTIR:"//div[@id='ContainerShoppingCart']/div/div[2]/div/div[1]/div/div[1]/div[3]/div[4]/div/a[3]",
        SEPET_URUN_ADET:"//div[@id='ContainerShoppingCart']/div/div[2]/div/div[1]/div/div[1]/div[3]/div[4]/div/span/span",
        SEPETTE_URUN_AZALT:"//div[@id='ContainerShoppingCart']/div/div[2]/div/div/div/div[1]/div[3]/div[4]/div/a[2]",
        SEPETTEN_URUN_SIL:"//div[@id='productDeleteModal']/div/div[2]/div[2]/button[2]",
        SEPETTE_URUN_AZALTIRKEN_SIL:"//div[@id='ContainerShoppingCart']/div/div[2]/div/div[1]/div/div[1]/div[3]/div[4]/div/a[1]/span",
        SEPETTE_SIL_VE_FAVORILERE_EKLE:"//div[@id='productDeleteModal']/div/div[2]/div[2]/button[1]",
        FAVORILER_TAB:"//div[@id='cm-f9e10e94-782f-4f8d-9adc-d6c6e9b3d882']/div/div[1]/div/div/ul/li[2]",
        FAVORILER_TAB_ILK_URUN:"//div[@id='personalized-favourites-container']/div/div/div[1]/div[1]",
        SEPETIM_ONCEDEN_EKLEDIKLERIM_TAB_ILK_URUN:"//div[@id='personalized-customer-marks-container']/div/div/div[1]/div[1]",
        SEPETTE_DUZENLE:"//div[@id='ContainerShoppingCart']/div/div[2]/div/div/div/div[1]/div[3]/div[3]/div/div[2]/a",
        SEPETTE_DUZENLE_SECENEKLER:"//div[@id='sizeModal']/div",
        SEPETTE_DUZENLE_SECENEKLER_IKINCI_BEDEN:"//div[@id='sizeModal']/div/div[2]/div[1]/div[2]/div[1]/div[2]/button[2]",
        SEPETTE_DUZENLE_SECENEKLER_IKINCI_RENK:"//div[@id='sizeModal']/div/div[2]/div[1]/div[1]/div[2]/div/div[2]/div/div/a/img",
        SEPETTE_DUZENLE_SECENEKLER_DUZENLE_VE_SEPETE_DON:"#productSizeUpdateButton",
        GELINCE_HABER_VER_ILK_BEDEN:"//div[@id='sizeModal']/div/div[2]/div[1]/div[2]/div[1]/div[2]/button[1]/i",
        GELINCE_HABER_VER_SON_BUTTON:"#productSizeUpdateButton",
        GELINCE_HABER_VER_ONAY_ALISVERISE_DEVAM_ET:"//div[@id='productNotifyCompleteModal']/div/div/div/a",
        SEPET_GENEL_SAYFA:"//div[@id='ContainerShoppingCart']/div/div[2]",
        SEPET_TOPLAM_FIYAT_ALANI:"//div[@id='ContainerShoppingCart']/div/div[3]/div",
        SEPET_ILK_URUN_CHECKBOX:"(//label[@for='RemoveFromCart-1'])[last()]",
        SEPETTE_FAVORILERE_EKLE:"//div[@id='ContainerShoppingCart']/div/div[2]/div/div[1]/div/div[1]/div[3]/div[1]/a[2]/i",
        
        SEPETTE_URUN_ADI:"//div[@id='ContainerShoppingCart']/div/div[2]/div/div/div/div[1]/div[3]/div[1]/a[1]",
        INDIRIM_KODU_ALANI:"//div[@id='sale-points-form']/div/div/input",
        INDIRIM_KODU_KULLAN:"#salePointsBtn",
        INDIRIM_KODU_BILGILENDIRME:"//div[@id='sale-points-form']/div/div/div"

    }
   
}
module.exports = new basketPage();