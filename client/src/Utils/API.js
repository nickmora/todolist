import axios from "axios";

export default {
    saveItem: function (itemData){
        console.log(itemData)
        return axios.post("/api/item", itemData)
    },
    getAllItems: function(){
        return axios.get("/api/item")
    },
    deleteItem: function(itemID){
        return axios.delete("/api/item/" + itemID)
    },
    updateItem: function(itemData) {
        console.log(itemData);
        return axios.put("/api/item/" + itemData.id, itemData)
    },
    saveComment: function (commentData) {
        console.log(commentData);
        return axios.post(`/api/item/${commentData.item}`, commentData)
    },

    getAllComments: function (itemID) {
        return axios.get(`/api/item/${itemID}`)
    }

}