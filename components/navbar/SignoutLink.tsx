"use client";

import { SignOutButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";
const SignoutLink = () => {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({
      description: "You are signed out successfully",
    });
  };
  return <SignOutButton redirectUrl="/">
    <Button className="w-full text-left" onClick={handleLogout}>Logout</Button>
  </SignOutButton>;
};

export default SignoutLink;
