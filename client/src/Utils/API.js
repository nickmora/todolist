import axios from "axios";

export default {
    saveItem: function (itemData){
        console.log(itemData)
        return axios.post("/api/item", itemData)
    },
    getAllItems: function(){
        return axios.get("/api")
    },
    deleteItem: function(itemID){
        return axios.delete("/api/item/" + itemID)
    }

}