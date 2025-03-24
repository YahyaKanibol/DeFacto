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
        FILTRELER_SECILENLER_HEADER_2:"//div[@id='catalog-meta-container']/div[1]/a[2]"
        
        
        



    }
   
}
module.exports = new filterPage();