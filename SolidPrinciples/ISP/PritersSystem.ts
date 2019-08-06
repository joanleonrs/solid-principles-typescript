/*
* THE FOLLOWING INTERFACE DOESN'T FOLLOW THE ISP PRINCIPLE (Commented Wrong Code)
*/
// export interface Printer {
//    copyDocument();
//    printDocument(document: Document);
//    stapleDocument(document: Document, tray: Number);
// }


// export class SimplePrinter implements Printer {

//    public copyDocument() {
//        //...
//    }

//    public printDocument(document: Document) {
//        //...
//    }

//    public stapleDocument(document: Document, tray: Number) {
//        //...
//    }

// }

export interface Printer {
    printDocument(document: Document);
}

export interface Stapler {
    stapleDocument(document: Document, tray: number);
}

export interface Copier {
    copyDocument();
}

export class SimplePrinter implements Printer {
    public printDocument(document: Document) {
        //...
    }
}


export class SuperPrinter implements Printer, Stapler, Copier {

    public copyDocument() {
        //...
    }

    public printDocument(document: Document) {
        //...
    }

    public stapleDocument(document: Document, tray: number) {
        //...
    }
}