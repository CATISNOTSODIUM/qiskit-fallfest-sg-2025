export default function Footer() {
  return (
    <footer className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6text-center items-center">
      <div className="text-sm sm:text-base">
        © Quantum Fall Fest 2025. All Rights Reserved.
      </div>

      <div className="hidden sm:block border-l h-6 mx-auto"></div>

      <div className="text-sm sm:text-base space-y-1">
        {/* Contact details here */}
      </div>
    </footer>
  );
}
