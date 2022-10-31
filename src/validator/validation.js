export const validation = data => {
    const errors = {};

    if(!data.madarKharj){
        errors.madarKharj = "اسم را وارد کنید"
    } else {
        delete errors.madarKharj;
    }

    if(!data.mablagh) {
        errors.mablagh = "مبلغ را وارد کنید"
    } else {
        delete errors.mablagh;
    }

    if(!data.tedad){
        errors.tedad = "تعداد را وارد کنید"
    } else {
        delete errors.tedad;
    }

    if(!data.dostan) {
        errors.dostan = "اسم دوستان خود را وارد کنید"
    } else {
        delete errors.dostan;
    }

    return errors;
}



