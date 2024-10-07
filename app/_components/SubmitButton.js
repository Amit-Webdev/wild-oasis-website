"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ children, pendingLabel }) {
  // Since we are submitting form data using server actions, there is no way of knowing the pending/isLoading states. Thus we use new hook useFormStatus, which gives us the info about form validation status
  // This new hook should be compulsarily used inside of a component that actually submits and renders the form and not just the component which has the form. Thus we have extracted button element into its own component
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
