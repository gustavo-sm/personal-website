const manageSessionStorage = () => {
    
    function set(key, value){
        sessionStorage.setItem(key, value);
    }

    function get(key){
        const value = sessionStorage.getItem(key);
        if(!value)
            return;
        return value;
    }
    
    return {set, get};

}

export default manageSessionStorage;