import { LightningElement, api } from 'lwc';

import CUSTOMER from '@salesforce/schema/Customer__c';

import NAME_FIELD from '@salesforce/schema/Customer__c.Name__c';
import PHONE from '@salesforce/schema/Customer__c.Phone__c';
import EMAIL from '@salesforce/schema/Customer__c.Email__c';
import PICKUP_ADDRESS from '@salesforce/schema/Customer__c.Pickup_Address__c';
import DELIVERY_ADDRESS from '@salesforce/schema/Customer__c.Delivery_Address__c';


export default class Customer extends LightningElement {

    accountObject = CUSTOMER;
    myFields = [NAME_FIELD, PHONE, EMAIL, PICKUP_ADDRESS, DELIVERY_ADDRESS];

    handleSubmit(event) {
            console.log('Record ID: ' + event.detail.id);
    }
}
