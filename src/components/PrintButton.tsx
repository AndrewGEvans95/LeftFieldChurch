'use client';

import { ReactNode } from 'react';
import { renderToString } from 'react-dom/server';

interface PrintButtonProps {
  children: ReactNode;
  filename: string;
}

export default function PrintButton({ children, filename }: PrintButtonProps) {
  const handlePrint = () => {
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      const content = renderToString(children as React.ReactElement);
      printWindow.document.write(`
        <html>
          <head>
            <title>${filename}</title>
            <style>
              body { 
                font-family: system-ui, -apple-system, sans-serif;
                margin: 0;
                padding: 20px;
                background: white;
              }
              @media print {
                body { padding: 20px; }
                .no-print { display: none; }
                img { max-width: 100%; height: auto; }
                .prose { max-width: none; }
                .grid { display: grid; gap: 1rem; }
                .flex { display: flex; }
                .flex-col { flex-direction: column; }
                .md\:flex-row { @media (min-width: 768px) { flex-direction: row; } }
                .gap-6 { gap: 1.5rem; }
                .md\:w-1\/3 { @media (min-width: 768px) { width: 33.333333%; } }
                .md\:w-2\/3 { @media (min-width: 768px) { width: 66.666667%; } }
                .bg-white { background-color: white; }
                .p-6 { padding: 1.5rem; }
                .rounded-lg { border-radius: 0.5rem; }
                .shadow-lg { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1); }
                .mb-8 { margin-bottom: 2rem; }
                .break-inside-avoid { break-inside: avoid; }
                .text-2xl { font-size: 1.5rem; }
                .font-bold { font-weight: 700; }
                .font-serif { font-family: serif; }
                .text-sm { font-size: 0.875rem; }
                .font-mono { font-family: monospace; }
                .uppercase { text-transform: uppercase; }
                .tracking-wider { letter-spacing: 0.05em; }
                .inline-block { display: inline-block; }
                .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
                .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
                .rounded-full { border-radius: 9999px; }
                .bg-green-100 { background-color: rgb(220 252 231); }
                .text-green-800 { color: rgb(22 101 52); }
                .bg-yellow-100 { background-color: rgb(254 249 195); }
                .text-yellow-800 { color: rgb(133 77 14); }
                .bg-red-100 { background-color: rgb(254 226 226); }
                .text-red-800 { color: rgb(153 27 27); }
                .text-blue-600 { color: rgb(37 99 235); }
                .hover\:text-blue-800:hover { color: rgb(30 64 175); }
                .mb-4 { margin-bottom: 1rem; }
                .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
                .md\:grid-cols-2 { @media (min-width: 768px) { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
                .gap-4 { gap: 1rem; }
              }
            </style>
          </head>
          <body>
            ${content}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 250);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 no-print">
      <button
        onClick={handlePrint}
        className="bg-accent text-white px-4 py-2 rounded hover:bg-accent/90 transition-colors shadow-lg"
      >
        Print {filename}
      </button>
    </div>
  );
} 