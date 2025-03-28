class filterPage{
    elements={ 
        
        KATEGORI_UL:"//div[@id='catalog-filter__nav']/ul/li[1]/ul/li[2]/ul",
        KATEGORI_SEARCHBOX:"//div[@id='catalog-filter__nav']/ul/li[1]/ul/li[1]/div/input",
        YAKA:"//div[@id='catalog-filter__nav']/ul/li[5]/div/div[1]",
        FILTRELER_ERKEK:"//div[@id='catalog-filter__nav']/ul/li[1]/ul/li/ul/li[1]/div/label",
        FILTRELER_CINSIYET:"//div[@id='catalog-filter__nav']/ul/li[1]/div/div[1]",
        FILTRELER_KATEGORI_ILK_KATEGORI:"//div[@id='catalog-filter__nav']/ul/li[2]/ul/li[2]/ul/li[1]/div/label",
        FILTRELER_KATEGORI:"//div[@id='catalog-filter__nav']/ul/li[2]/div/div[1]",
        FILTRELER_BEDEN:"//div[@id='catalog-filter__nav']/ul/li[3]/div/div[1]",
        FILTRELER_BEDEN_XL:"//div[@id='catalog-filter__nav']/ul/li[3]/ul/li[2]/ul/li[5]/div/label",
        FILTRELER_GIZLE_GOSTER:"//button[@id='filter-toggle']",
        YENI_GELENLER:"//main/div/div[3]/div[2]/ul/li[1]/a",
        KATEGORILER_DAHA_FAZLA_GOSTER:"//div[@id='catalog-filter__nav']/ul/li[1]/ul/li[2]/button[1]",
        KATEGORILER_TIŞORT:"//div[@id='catalog-filter__nav']/ul/li[1]/ul/li[2]/ul/li[59]/div/label",
        URUN_SONUCLARI_SAYFASI:"//div[@id='product-fill']/div",
        SECIMLERI_TEMIZLE: "//a[@href='https://www.defacto.com.tr/erkek-pantolon' and contains(@class, 'selected-filters__cancel-btn')]",
        COK_SATANLAR:"//main/div/div[3]/div[2]/ul/li[2]/a",
        FILTRELER_BEDEN_S:"//div[@id='catalog-filter__nav']/ul/li[2]/ul/li[2]/ul/li[1]/div/label",
        FILTRELER_SECILENLER_HEADER_1:"//div[@id='catalog-meta-container']/div[1]/a[1]",
        FILTRELER_SECILENLER_HEADER_2:"//div[@id='catalog-meta-container']/div[1]/a[2]",
        EN_COK_DEGERLENDIRILENLER:"//main/div/div[3]/div[2]/ul/li[3]/a",
        EN_FAVORILER:"//main/div/div[3]/div[2]/ul/li[4]/a",
        HIZLI_FILTRELEME_SIRALAMA_SONUC:"//div[@id='catalog-meta-container']/div[2]/div[2]/div[1]/div/div/div/span[2]",
        ERKEK_GIYIM_HEPSINI_GOSTER:"//header/div[2]/nav/ul[1]/li[2]/div/div/div[2]/ul/li[4]/a",
        COCUK_GIYIM:"//header/div[2]/nav/ul[1]/li[3]/a",
        COCUK_GIYIM_HEPSINI_GOSTER:"//header/div[2]/nav/ul[1]/li[3]/div/div/div[2]/ul/li[1]/a/div[2]",
        KIZ_COCUK:"//header/div[2]/nav/ul[1]/li[3]/div/div/div[1]/ul/li[1]/a",
        FILTRELE_URUN_SAYISI:"//div[@id='catalog-meta-container']/div/div[1]",
        IKILI_GOSTERIM:"//div[@id='catalog-meta-container']/div/div[2]/div[2]/div[1]/div/button[1]",
        DORTLU_GOSTERIM:"//div[@id='catalog-meta-container']/div/div[2]/div[2]/div[1]/div/button[2]",
        PLP_ASAGIDAN_HERHANGI_BIR_URUN:"#product-fill > div > div:nth-child(10) > div",
        PLP_DAHA_FAZLA_URUN_GOSTER:"#product-container > div.load-more > button"


        
        
        



    }
   
}
module.exports = new filterPage();