'use client';

interface PrintButtonProps {
  label: string;
}

export function PrintButton({ label }: PrintButtonProps) {
  return (
    <button
      onClick={() => window.print()}
      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      {label}
    </button>
  );
}
