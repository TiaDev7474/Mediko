import { collection ,addDoc ,getDocs, Timestamp, doc, setDoc, updateDoc, serverTimestamp}  from 'firebase/firestore';
import { database } from './firebase';
//add data  to cloud firestore
const docRef = await addDoc(collection(database,"todos"),{
    todo:"todo"
})

//docRef.id
const docData = {
    stringExample: "Hello world!",
    booleanExample: true,
    numberExample: 3.14159265,
    dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
    arrayExample: [5, true, "hello"],
    nullExample: null,
    objectExample: {
        a: 5,
        b: {
            nested: "foo"
        }
    }
};
await setDoc(doc(database, "data", "one"), docData);


//read data 

await getDocs(collection(database,"todos"))
      .then((querySnapshot) => {
            const newData =  querySnapshot.docs
                  .map((doc) => ({...doc.data(),id:doc.id}))

      })
//update

const docRefs = doc(database, 'objects', 'some-id');

// Update the timestamp field with the value from the server
const updateTimestamp = await updateDoc(docRefs, {
    timestamp: serverTimestamp()
});

