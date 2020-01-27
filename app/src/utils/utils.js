const utils = {
    capitalizeFirstLetter: (str) => {
        if(str.length > 0)
            return str.slice(0,1).toUpperCase() + str.slice(1,str.length);

        return str;
    }
};

export default utils;