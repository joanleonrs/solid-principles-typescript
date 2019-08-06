
/*
* THE FOLLOWING CLASS DOESN'T FOLLOW THE DIP PRINCIPLE (Commented Wrong Code)
*/
//class CarWindow {
//    open() {
//        //... 
//    }

//    close() {
//        //...
//    }
////}


//class WindowSwitch {
//    private isOn = false;

//    constructor(private window: CarWindow) {

//    }

//    onPress() {
//        if (this.isOn) {
//            this.window.close();
//            this.isOn = false;
//        } else {
//            this.window.open();
//            this.isOn = true;
//        }
//    }
//}


export interface IWindow {
    open();
    close();
}

export class CarWindow implements IWindow {
    open() {
        //...
    }

    close() {
        //...
    }
}

export class WindowSwitch {
    private isOn = false;

    constructor(private window: IWindow) {}

    onPress() {
        if (this.isOn) {
            this.window.close();
            this.isOn = false;
        } else {
            this.window.open();
            this.isOn = true;
        }
    }
}