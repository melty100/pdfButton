public with sharing class OpportunityPDFController {
    
    String strId = apexpages.currentpage().getparameters().get('id');
    
    public Opportunity getOpportunity() {
        return [SELECT Id, Name, Account.Name, Account.BillingStreet, Account.BillingCity, Account.BillingState, Account.BillingPostalCode, 
                       (SELECT OpportunityId, Product2.Name, Quantity, TotalPrice, UnitPrice FROM OpportunityLineItems)
                FROM Opportunity 
                WHERE Id = :strId];
    }

    public Organization getOrg() {
        return [SELECT Street, City, State, PostalCode, Country
                FROM Organization
                WHERE Id = :UserInfo.getOrganizationId()]; 
    }
}