import {DB} from "../boot/firebase"

const DB_MEMBERS = DB.collection('members');

export default {
    add(data) {
        return DB_MEMBERS.add(data)
    }
}
