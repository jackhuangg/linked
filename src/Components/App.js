import '../Styles/App.css';
import firebase from "firebase"
import "../firebase.js"

function App() {
  var user;
  const onSubmit = () =>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result){
      var token = result.credential.accessToken;
      user = result.user;
      console.log(token)
      console.log(user)
    }).catch(function(error){
      console.log(error)
    })
  }
  return (
    <div className="App">
      <h1>Welcome To Our App</h1>
        <button onClick={onSubmit}>
          Login with Google
        </button>
    </div>
  );
}

export default App;
