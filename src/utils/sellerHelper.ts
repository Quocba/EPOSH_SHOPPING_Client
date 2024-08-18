/* eslint-disable array-callback-return */

// ========== filter approved product ========== //
export const filterProductWithLiveList = (listProduct: any) => {
    let listLive: any = [];
    listProduct?.forEach((element: any) => {
        if (element.status === "approved") {
            listLive.push(element)
        }
    });
    return listLive;
}

export const filterProductWithLiveNumber = (listProduct: any) => {
    let count = 0;
    listProduct?.map((element: any) => {
        if (element.status === "approved") {
            count++;
        }
    });
    return count;
}

// ========== filter sold out product ========== //
export const filterProductWithSoldoutList = (listProduct: any) => {
    let listSoldout: any = [];
    listProduct?.forEach((element: any) => {
        if (element.status === "sold-out") {
            listSoldout.push(element)
        }
    });
    return listSoldout;
}

export const filterProductWithSoldoutNumber = (listProduct: any) => {
    let count = 0;
    listProduct?.map((element: any) => {
        if (element.status === "sold-out") {
            count++;
        }
    });
    return count;
}

// ========== filter hidden product ========== //
export const filterProductWithHiddenList = (listProduct: any) => {
    let listHidden: any = [];
    listProduct?.forEach((element: any) => {
        if (element.status === "hidden") {
            listHidden.push(element)
        }
    });
    return listHidden;
}

export const filterProductWithHiddenNumber = (listProduct: any) => {
    let count = 0;
    listProduct?.map((element: any) => {
        if (element.status === "hidden") {
            count++;
        }
    });
    return count;
}

// ========== filter unpaid transaction ========== //

export const filterTransWithUnpaidList = (listTransaction: any) => {
    let listUnpaid: any = [];
    listTransaction?.forEach((element: any) => {
        if (element.status === "wait for confirm") {
            listUnpaid.push(element)
        }
    });
    return listUnpaid;
}

export const filterTransWithUnpaidNumber = (listTransaction: any) => {
    let count = 0;
    listTransaction?.map((element: any) => {
        if (element.status === "wait for confirm") {
            count++;
        }
    });
    return count;
}

// ========== filter process transaction ========== //

export const filterTransWithProcessdList = (listTransaction: any) => {
    let listProcess: any = [];
    listTransaction?.forEach((element: any) => {
        if (element.status === "completed") {
            listProcess.push(element)
        }
    });
    return listProcess;
}

export const filterTransWithProcessNumber = (listTransaction: any) => {
    let count = 0;
    listTransaction?.map((element: any) => {
        if (element.status === "completed") {
            count++;
        }
    });
    return count;
}

// ========== filter cancel transaction ========== //

export const filterTransWithCanceledList = (listTransaction: any) => {
    let listCanceled: any = [];
    listTransaction?.forEach((element: any) => {
        if (element.status === "canceled") {
            listCanceled.push(element)
        }
    });
    return listCanceled;
}

export const filterTransWithCanceledNumber = (listTransaction: any) => {
    let count = 0;
    listTransaction?.map((element: any) => {
        if (element.status === "canceled") {
            count++;
        }
    });
    return count;
}

export const convertMonthCharactToNumber = (charac: any) => {
    let num = 0;
    switch (charac) {
        case "Jan":
            num = 1;
            break;
        case "Feb":
            num = 2;
            break;
        case "Mar":
            num = 3;
            break;
        case "Apr":
            num = 4;
            break;
        case "May":
            num = 5;
            break;
        case "Jun":
            num = 6;
            break;
        case "Jul":
            num = 7;
            break;
        case "Aug":
            num = 8;
            break;
        case "Sep":
            num = 9;
            break;
        case "Oct":
            num = 10;
            break;
        case "Nov":
            num = 11;
            break;
        case "Dec":
            num = 12;
            break;
        default: break;
    }
    return num;
}

export const convertMonthNumberToCharac = (num: any) => {
    let charac = "";
    switch (num) {
        case "1":
            charac = "Jan";
            break;
        case "2":
            charac = "Feb";
            break;
        case "3":
            charac = "Mar";
            break;
        case "4":
            charac = "Apr";
            break;
        case "5":
            charac = "May";
            break;
        case "6":
            charac = "Jun";
            break;
        case "7":
            charac = "Jul";
            break;
        case "8":
            charac = "Aug";
            break;
        case "9":
            charac = "Sep";
            break;
        case "10":
            charac = "Oct";
            break;
        case "11":
            charac = "Nov";
            break;
        case "12":
            charac = "Dec";
            break;
        default: break;
    }
    return charac;
}

export const filterTotalTransaction = (status: any, list: any) => {
    let temp: any = [];
    let total: any = 0.0;
    switch (status) {
        case "Pending":
            list?.forEach((element: any) => {
                if (element.status === "wait for confirm") {
                    temp.push(element)
                }
            });
            break;
        case "Released":
            list?.forEach((element: any) => {
                if (element.status === "completed") {
                    temp.push(element)
                }
            });
            break;
        case "Canceled":
            list?.forEach((element: any) => {
                if (element.status === "canceled") {
                    temp.push(element)
                }
            });
            break;
        default: break;
    }
    temp?.forEach((element: any) => {
        total += element.total;
    });
    return total.toFixed(2);
}