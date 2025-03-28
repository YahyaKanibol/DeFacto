class SearchPageLocators{
    elements={
        ARAMA_ALANI: "//input[@class='search-button main-search-button']",
        HEADER_ARAMA_ALANI: "//*[@id='header-search-autocomplete']",
        ARAMA_SONUC_BASLIGI: "//h1[@class='catalog__head--title']",
        URUN_BASLIGI: "//div[@id='product-fill']/div/div[1]/div/div[contains(@class,'product-card__info')]/div/div/h3/a/span"
    }
}
module.exports = new SearchPageLocators();
