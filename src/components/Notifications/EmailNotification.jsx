import { Mail } from "lucide-react";

const EmailNotification = ({ email }) => {
  return (
    <div className="mt-6 rounded-md border border-gray-300 bg-gray-50 p-4">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Mail className="h-5 w-5 text-gray-500" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-gray-900">
            Check your email
          </h3>
          <div className="mt-1">
            <p className="text-sm text-gray-500">
              We've sent a magic link to {email}. Click the link in the email to
              sign in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailNotification;
