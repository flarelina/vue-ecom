import {DB} from "../boot/firebase"
const DB_ITEMS = DB.collection('items');

export default {
    add(data) {
        return DB_ITEMS.add(data)
    }
}
