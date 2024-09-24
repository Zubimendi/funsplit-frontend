"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import styles from "./navigation.module.css";
import Logo from "../Logo/Logo";
import { googleSignIn } from "@/lib/actions/auth.actions";
const Navigation = () => {
  const handleGoogleLogin = async () => {
    await googleSignIn();
  };
  const isLoggedIn = true;
  return (
    <nav className={styles.nav}>
      <Logo />
      <div className={styles.buttonContainer}>
        <Button title="Home" className={styles.button}>
          Home
        </Button>
        <Button title="About" className={styles.button}>
          About
        </Button>
        <Button
          onClick={() => {
            if (!isLoggedIn) handleGoogleLogin();
            else {
              console.log("Logged out");
            }
          }}
          variant="ghost"
          className={styles.googleLoginButton}
        >
          {" "}
          {isLoggedIn ? (
            <p>Logout</p>
          ) : (
            <>
              {" "}
              <Image
                src={"/google-icon.jpg"}
                width={30}
                height={30}
                alt="Google Icon"
                className={styles.image}
              />
              <p>Sign In to Google</p>
            </>
          )}
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
