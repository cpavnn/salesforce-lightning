public with sharing class demo {

    @AuraEnabled
    public static String getUserName(String userId, Boolean throwException) {

        if(throwException)
             throw new AuraHandledException('Aura exception!!! Server side exception');
             
        return 'username';
    }

}