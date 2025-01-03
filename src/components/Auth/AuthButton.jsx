"use client";
import { useFormStatus } from "react-dom";

const AuthButton = ({
  children,
  actionHandler,
  loadingText,
  variant = "primary",
}) => {
  const { pending } = useFormStatus();

  const styles = {
    primary:
      "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
    google:
      "w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
  };

  return (
    <button className={styles[variant]} formAction={actionHandler}>
      {pending ? loadingText : children}
    </button>
  );
};

export default AuthButton;
