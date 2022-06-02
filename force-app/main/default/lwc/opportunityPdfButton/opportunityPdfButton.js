import { LightningElement, wire, api } from 'lwc';
import {loadScript } from 'lightning/platformResourceLoader';
import downloadjs from '@salesforce/resourceUrl/downloadjs';
import downloadPDF from '@salesforce/apex/PrintJobPDFController.getPdfFileAsBase64String';

export default class opportunityPdfButton extends LightningElement {
    clickedButtonLabel;
    pdfString;
    @api recordId;

   createPdf(){
        downloadPDF({OpportunityId : this.recordId}).then(res => {
            console.log(res);
            console.log(this.recordId);
            var strFile = "data:application/pdf;base64,"+res;
            window.download(strFile, "sample.pdf", "application/pdf");
        }).catch(err => {
            console.log('Error: ' +err.body.message);
        });
    }

    renderedCallback() {
        loadScript(this, downloadjs)
        .then(() => console.log('Loaded download.js'))
        .catch(err => console.log(err));
    }
}