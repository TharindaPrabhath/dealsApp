import Store from "../types/Store";

import Stores, { defaultStore } from "../data/stores";

const getStore = (storeId: number): Store => {
    
    Stores.map(store=>{
        if(store.id === storeId) return store
    })
    return defaultStore;
}