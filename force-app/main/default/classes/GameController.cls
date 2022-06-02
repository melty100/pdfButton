public with sharing class GameController {
    @AuraEnabled(Cacheable=true)
    public static Game__c[] getAllGames(String sortBy, String order){

        String q = 'SELECT Id, Name, Released__c, rating__c, Background_Image__c FROM Game__c ORDER BY ' + sortBy;
        return database.query(q);
    }
}
