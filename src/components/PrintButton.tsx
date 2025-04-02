'use client';

export default function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed top-4 right-4 z-50 no-print">
      <button
        onClick={handlePrint}
        className="bg-accent text-white px-4 py-2 rounded hover:bg-accent/90 transition-colors shadow-lg"
      >
        Print Zine
      </button>
    </div>
  );
} 