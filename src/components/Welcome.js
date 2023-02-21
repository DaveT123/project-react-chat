import React from "react";
import ChatLogo from "../img/chat-logo.svg";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

    return (
        <main className="welcome">
            <h2>Welcome to the Chat App.</h2>
            <img src={ChatLogo} alt="Chat logo" width={80} height={80} />
            <p>Sign in with Google now to start chatting!</p>
            <button className="sign-in">
                <img
                    onClick={googleSignIn}
                    src={GoogleSignin}
                    alt="sign in with google"
                    type="button"
                />
            </button>
        </main>
    );
};

export default Welcome;
