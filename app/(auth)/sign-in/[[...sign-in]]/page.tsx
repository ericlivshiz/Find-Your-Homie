import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className="auth-page">
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <SignIn
          appearance={{
            elements: {
              // Style the container, buttons, and input fields
              formButtonPrimary: "bg-blue-500 text-white hover:bg-blue-600",
              formFieldInput: "rounded-md border-gray-300",
              formFieldLabel: "text-gray-700",
            },
          }}
          initialValues={{
            emailAddress: "Must be a UCSB email",
          }}
        />
      </main>
    </main>
  );
};

export default SignInPage;
