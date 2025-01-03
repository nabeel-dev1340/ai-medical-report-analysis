"use client";
import Image from "next/image";
import { useState } from "react";
import AuthButton from "@/components/Auth/AuthButton";
import AuthLayout from "@/components/Auth/AuthLayout";
import EmailNotification from "@/components/Notifications/EmailNotification";
import { signInWithEmail } from "./actions";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await signInWithEmail(formData);
    setShowNotification(true);
  };

  return (
    <AuthLayout title="Sign in to your account">
      <div className="mt-8 space-y-6">
        {/* Google Sign-In Button */}
        <AuthButton variant="google">
          <Image
            className="h-5 w-5 mr-2"
            src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
            alt="Google logo"
            width={20}
            height={20}
          />
          Log in with Google
        </AuthButton>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-50 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        {/* Email Sign-In Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <AuthButton
            variant="primary"
            type="submit"
            loadingText="Signing in..."
          >
            Sign in
          </AuthButton>
        </form>

        {showNotification && <EmailNotification email={email} />}
      </div>
    </AuthLayout>
  );
};

export default SignInPage;
