class basketPage{
    elements={ 
        SEPETE_HIZLI_EKLE_ILK_URUN:"//div[@id='product-fill']/div/div[1]/div/div[1]/div[2]",
        SEPETE_HIZLI_EKLE_ILK_URUN_BEDEN:"//div[@id='product-fill']/div/div[1]/div/div[1]/div[4]/div[1]/div[1]/div[1]/div[2]",
        SEPETE_HIZLI_EKLE_ILK_URUN__BEDEN_ILK_BEDEN:"//div[@id='product-fill']/div/div[1]/div/div[1]/div[4]/div[1]/div[1]/div[1]/div[2]/button[1]",
        SEPETE_HIZLI_EKLE_SEPETE_EKLE:"//div[@id='product-fill']/div/div[1]/div/div[1]/div[4]/div[1]/div[2]/button/span[1]",
        SEPETIM:"//div[@id='flycartBtn']",
        SEPETIM_ILK_URUN:"//div[@id='ContainerShoppingCart']/div/div[2]/div",
        URUN_BEDEN:"(//div[contains(@class, 'product-size-selector__buttons')])[1]"
    }
   
}
module.exports = new basketPage();