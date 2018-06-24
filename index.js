import { AsyncStorage } from 'react-native';

class Handler {
    setItem = async(key,data) => {
        try{
            AsyncStorage.setItem(key, JSON.stringify(data));
            return true;
        }catch(err){
            return err;
        }
    }

    setItemArray = async(key,data) => {
        try{
            item = await AsyncStorage.getItem(key);
            if(item !== null){
                item = JSON.parse(item);
                item.push(data);
                return this.setItem(key, item);
            }else{
                let temp = [];
                temp.push(data);
                return this.setItem(key,temp);
            }
        }catch(err){
            return(err)
        }
    }

    updateItem = async(key,data) => {
        try {
            this.removeItem(key);
            return this.setItem(key,data);
        }catch(err){
            return err;
        }
    }

    updateItemArray = async(key, index,data) => {
        try {
            let item = await AsyncStorage.getItem(key);
            if (item !== null) {
                item =  JSON.parse(item);
            } else {
                return null;
            }
            if (Array.isArray(item)) {
                for(i = 0; i < item.length; i++){
                    if (i === index) {
                        item[i] = data;
                        this.deleteItem(key);
                        return this.setItem(key,item);
                    }
                }
                return false;
            } else {
                return null;
            }
        } catch (err) {
            return err;
        }
    }

    getItem = async(key) => {
        try {
            data =  await AsyncStorage.getItem(key);
            if(data !== null){
                return JSON.parse(data);
            }else{
                return null;
            }
        }catch (err) {
            return (err);
        }
    }

    deleteItemArray = async(key, index) => {
        try {
            let item = await AsyncStorage.getItem(key);
            if (item !== null) {
                item = JSON.parse(item);
            } else {
                return null;
            }
            if (Array.isArray(item)) {
                for (i = 0; i < item.length; i++) {
                    if (i === index) {
                        item.splice(index, 1);
                        this.deleteItem(key);
                        return this.setItem(key, item);
                    }
                }
                return false;
            } else {
                return null;
            }
        } catch (err) {
            return err;
        }
    }

    deleteItem = async(key) => {
        try {
            AsyncStorage.removeItem(key);
            return true;
        }catch(err){
            return err;
        }
    }

    clearAllItems = async() => {
        try {
            AsyncStorage.clear();
            return true;
        } catch (err) {
            return err;
        }
    }

}

export default Handler;

