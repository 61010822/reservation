import firebase from 'firebase/app'
import 'firebase/firestore'

const WriteToCloudFirestore = () => {
  const sendData = () => {
    firebase
      .firestore()
      .collection('myCollection')
      .doc('my_document')
      .set({
        string_data: 'jubjang',
        number_data: 1,
        boolean_data: true,
        map_data: { stringInMap: 'Hi', numberInMap: 7 },
        array_data: ['text', 4],
        // null_data: null,
        time_stamp: firebase.firestore.Timestamp.fromDate(new Date('December 17, 1995 03:24:00')),
        geo_point: new firebase.firestore.GeoPoint(34.714322, -131.468435)
      })
      .then(() => { return alert('Data was successfully sent to cloud firestore!') })
      .catch((er) => { console.log(er) })
  }
  return (
        <button onClick={sendData}> Send Data To Cloud Firestore</button>
  )
}
export default WriteToCloudFirestore
