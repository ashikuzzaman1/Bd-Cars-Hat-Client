import { useEffect, useState } from "react";
import { sendPasswordResetEmail, sendEmailVerification, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, signInWithPopup, signOut,  onAuthStateChanged, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from "firebase/auth";
import firebaseInitialization from './../firebase/firebase.init';
firebaseInitialization()

//all providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const auth = getAuth();

const useFirebase = () => {
   

    const [user, setUser] = useState({});
    const [error,setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(true);


    //clear error
    useEffect(() => {
        setTimeout(()=>{
            setError("");
        }, 5000);
    },[error]);

    //google sign in
    function signInWithGoogle(){
        return signInWithPopup(auth, googleProvider)
    }
    //github sign in
    function signInWithGithub(){
        return signInWithPopup(auth, githubProvider)
    }
    //facebook sign in
    function signInWithFacebook(){
        return signInWithPopup(auth, facebookProvider)
    }
    //email sign in
    function signInWithEmail(e){
        e.preventDefault();
        return signInWithEmailAndPassword(auth, email, password)
    }

    
    //set username photo url
    function setNameAndImage(){
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
          }).then(() => {
          }).catch((error) => {
            setError(error.message);
          });
    }

    //email verify
    function emailVerify(){
        sendEmailVerification(auth.currentUser)
        .then(() => {
            alert(`An verification mail set your mail address, Please check your mail: ${email}`)
  });
}

    //currently signed-in user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }else{
                setUser({});
            }
            setLoading(false);
          });
          return () => unsubscribe;
    },[]);

    

    //signout
    function logOut(){
        signOut(auth).then(() => {
            setUser({});
          }).catch((error) => {
            setError(error.message)
          });
    }

    //password rset
    function passwordReset(e){
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('Check Your Mail, Password Reset Mail Has Been Sent')
        })
        .catch((err) => {
            setError(err.message);
        });
}


    //signup email pass
    function signUp(e){
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setNameAndImage();
            emailVerify();
            alert('Registration Complete')
        }).catch(err => {
            setError(err.message)
        })
    }

    //get name
    function getName(e){
        setName(e?.target?.value)
    }
    //get email
    function getEmail(e){
        setEmail(e?.target?.value)
    }
    //get password
    function getPassword(e){
        setPassword(e?.target?.value)
    }
    //get photo
    function getPhoto(e){
        setPhoto(e?.target?.value)
    }

    return {
        signInWithEmail,
        signInWithGoogle,
        signInWithGithub,
        signInWithFacebook,
        user,
        error,
        logOut,
        getName,
        getEmail,
        getPassword,
        getPhoto,
        signUp,
        passwordReset,
        setUser,
        setError,
        loading
    };

};

export default useFirebase;