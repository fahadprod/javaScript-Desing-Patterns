let currentId = 0;
class ComplaintRegistry{
    registerComplaint(customer,type,details){
        const id = ComplaintRegistry._uniqueIdGenerator();
        let registry;

        if(type === 'service'){
            registry = new ServiceComplaints();
        } else {
            registry = new ProductComplaints();
        }

        return registry.addComplaint({id, customer, details});
    }

    static _uniqueIdGenerator() {
        return ++currentId;
    }
}

class Complaints{
    constructor(){
        this.complaints = [];
    }

    addComplaint(complaint){
        this.complaints.push(complaint);
        return this.replyMessage(complaint);
    }

    getComplaint(id){
        return this.complaints.find(complaint => complaint.id === id);
    }

    replyMessage(complaint) {}
}

class ProductComplaints extends Complaints{
    constructor(){
        super();
        if(ProductComplaints.exits){
            return ProductComplaints.instance;
        }
        ProductComplaints.instance = this;
        ProductComplaints.exits = true;
        return this;
    }

    replyMessage({id,customer,details}){
        return `Complaint No. ${id} reported by ${customer} regarding ${details} have been filed with the Products Complaint Department. Replacement/Repairment of the product as per terms and conditions will be carried out soon.`;
    }
}


class ServiceComplaints extends Complaints{
    constructor(){
        super();
        if(ServiceComplaints.exits){
           return ServiceComplaints.instance;
        }
        ServiceComplaints.instance = this;
        ServiceComplaints.exits = true;
        return this;
    }

    replyMessage({ id, customer, details }) {
        return `Complaint No. ${id} reported by ${customer} regarding ${details} have been filed with the Service Complaint Department. The issue will be resolved or the purchase will be refunded as per terms and conditions.`;
      }
}

const registry = new ComplaintRegistry();

const reportService = registry.registerComplaint('Michel', 'service', 'availability');

console.log(reportService);

const reportProduct = registry.registerComplaint('Jhon','Product','Faded Color');

console.log(reportProduct);