import MultiStepForm from "./components/MultiStepForm";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4">KYC Multi-Step Form</h1>
        <MultiStepForm />
      </div>
    </main>
  );
}
