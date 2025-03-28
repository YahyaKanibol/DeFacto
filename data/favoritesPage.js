class favoritesPage{
    elements={ 
        FAVORILER_ILK_URUN:"//main/div/div/div[2]/div[2]/div/div[2]/div[2]/div[2]/div/div[1]/div",
        FAVORILER_IKINCI_URUN:"//main/div/div/div[2]/div[2]/div/div[2]/div[2]/div[2]/div/div[2]",
        FAVORILER_FAVORILERDEN_KALDIR_IKON:"//main/div/div/div[2]/div[2]/div/div[2]/div[2]/div[2]/div/div[1]/div/div[1]/div[1]",
        FAVORILER_FAVORILERDEN_KALDIR_EN_SON:"//div[@id='removeFromFavouriteWarningModal']/div/div[2]/button[1]",
        FAVORILERDE_URUN_ADI:"//main/div/div/div[2]/div[2]/div/div[2]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/h3/a/span"
        
     
    }
   
}
module.exports = new favoritesPage();