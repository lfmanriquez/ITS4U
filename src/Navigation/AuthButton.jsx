import { useEffect, useState } from "react";
import { auth, provider, signInWithPopup } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Button } from "@/components/ui/button";

export function AuthButton() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        const authUser = result.user;
        setUser(authUser);
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      });
  };

  return (
    <div className="flex items-center gap-4">
      {!user && (
        <Button
          variant="outline"
          className="dark:hover:bg-black dark:hover:text-white dark:hover:border-white"
          onClick={handleSignIn}
        >
          Sign In with Google
        </Button>
      )}
    </div>
  );
}
