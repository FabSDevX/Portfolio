import { db, storageDB } from "./firebaseConfig";
import { ref, getDownloadURL } from 'firebase/storage';
import {
    collection, getDoc,
    getDocs,
    doc,
    query,
    orderBy
} from "firebase/firestore";


/**
 * Get a specific document in a collection
 * @param {string} collectionName
 * @param {string} documentID
 * @returns
 */
export async function getDocumentById(collectionName, documentID) {
    try {
        const docRef = doc(db, collectionName, documentID);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.error("No such document");
        }
    } catch (error) {
        console.error(error)
    }
}

export async function getProjectById(collectionName, documentID) {
    try {
        const docRef = doc(db, collectionName, documentID);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            const data = docSnap.data();
            
            if (data && data.project && Array.isArray(data.project)) {
                // Sort the list of projects by the `order` parameter
                data.project.sort((a, b) => a.order - b.order);
            }
            
            return data;
        } else {
            console.error("No such document");
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}


/**
 * Get all documents from a specific collection
 * @param {string} collectionName
 * @returns {Array} Array of document data
 */
export async function getAllDocuments(collectionName) {
    try {
        const q = query(collection(db, collectionName), orderBy("isWorking", "desc"));
        const querySnapshot = await getDocs(q);
        const documents = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return documents;
    } catch (error) {
        console.error("Error fetching documents: ", error);
        return [];
    }
}

/**
* Function to get an image from firebase path
* @param {string} path
* @returns downloadUrl image
*/
export async function getImageByUrl(path) {
    try {
        const imgRef = ref(storageDB, path);
        const downloadURL = await getDownloadURL(imgRef);
        return downloadURL;
    } catch (error) {
        throw new Error("Failed to fetch image URL: " + error.message);
    }
}
