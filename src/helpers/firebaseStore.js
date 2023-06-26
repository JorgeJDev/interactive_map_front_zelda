
import {initializeApp} from 'firebase/app'
import {firebaseConfig} from '../config/firebaseConfig'
import { getStorage } from "firebase/storage";
const app = initializeApp(firebaseConfig)

/**
 * Variable para la conexión con Firebase Storage
 * @type {firebase.storage.Storage}
 */
export const storage = getStorage(app)



