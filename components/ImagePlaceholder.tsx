type Props = {
  label: string;
  note?: string;
  className?: string;
};

export function ImagePlaceholder({ label, note, className = '' }: Props) {
  return (
    <div
      className={`relative grid place-items-center bg-gradient-to-br from-slate-100 to-slate-200 border border-dashed border-slate-300 text-slate-500 ${className}`}
    >
      <div className="text-center px-4">
        <div className="text-4xl mb-2">🖼️</div>
        <div className="text-sm font-semibold text-slate-700">{label}</div>
        {note && <div className="text-xs mt-1 text-slate-400">{note}</div>}
      </div>
    </div>
  );
}
