

export abstract class PostalAddress {
    Addressee: string;
    Country: string
    PostalCode: string;
    City: string;
    Street: string
    House: number;

    /*
    * @returns Formatted full address
    */
    abstract WriteAddress(): string;
}

export class ItalyPostalAddress extends PostalAddress {
    WriteAddress(): string {
        return "Formatted Address Italy" + this.City;
    }
}
export class UKPostalAddress extends PostalAddress {
    WriteAddress(): string {
        return "Formatted Address UK" + this.City;
    }
}
export class USAPostalAddress extends PostalAddress {
    WriteAddress(): string {
        return "Formatted Address USA" + this.City;
    }
}

export class AddressWriter {
    PrintPostalAddress(writer: PostalAddress): string {
        return writer.WriteAddress();
    }
}
