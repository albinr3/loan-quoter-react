export function calcAmmountTotal(ammount, timeToPay) {
    //interest
    // 0-1000 = 25%
    //1001-5000 = 20%
    //5001-10000 = 15%
    //10001+ = 10%

    let interestTotal;

    if(ammount <= 1000){
        interestTotal = ammount * 0.25;
    } else if (ammount > 1000 && ammount <= 5000) {
        interestTotal = ammount * 0.20;
    } else if(ammount > 5000 && ammount <= 10000) {
        interestTotal = ammount * 0.15;
    } else {
        interestTotal = ammount * 0.10;
    }


    //time
    //3 = 5%
    //6 = 10%
    //12 = 15%
    //24 = 20%

    let timeTotal = 0;

    switch (Number(timeToPay)) {
        case 3:
            timeTotal = ammount * 0.5;
            break;

        case 6:
            timeTotal = ammount * 0.10;
            break;

        case 12:
            timeTotal = ammount * 0.15;
            break;
        case 24:
            timeTotal = ammount * 0.20;
            break;
        default:
            break;
    }



    return timeTotal + interestTotal + ammount;
}