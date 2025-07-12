import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { auth, provider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { useEffect, useRef } from "react";

export const Profile = () => {
  const { user, loading } = useAuth(); // assumes AuthContext provides loading
  const attemptedLogin = useRef(false); // prevents multiple popups

  useEffect(() => {
    if (!loading && !user && !attemptedLogin.current) {
      attemptedLogin.current = true; // mark login attempt
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log("Login success:", result.user);
        })
        .catch((error) => {
          console.error("Login error:", error);
        });
    }
  }, [user, loading]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-inherit p-6 animate-in fade-in duration-1000">
      <Card className="max-w-md mx-auto transition-none hover:-translate-0">
        <CardHeader className="flex items-center space-x-4">
          <Avatar className="h-30 w-30 cursor-pointer">
            <AvatarImage src={user?.photoURL} />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold">
            {user?.displayName}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul>
            <li className="flex flex-col justify-around ">
              Email: {user?.email}
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
