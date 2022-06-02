public with sharing class PrintJobPDFController {
    @AuraEnabled 
    public static String getPdfFileAsBase64String(String OpportunityId) {
        PageReference pdfPage = Page.OpportunityPDF;
        pdfPage.getParameters().put('id', OpportunityId);
        Blob pdfBlob = pdfPage.getContent();
        String base64Pdf = EncodingUtil.base64Encode(pdfBlob);
        return base64Pdf;
    }
}