'use client';

interface UploadFieldProps<T extends string = string> {
  label: string;
  accept: string;
  field: T;
  disabled?: boolean;
  selectedFileName?: string;
  onSelect: (file: File, field: T) => void;
}

export default function UploadField<T extends string>({
  label,
  accept,
  field,
  disabled,
  selectedFileName,
  onSelect,
}: UploadFieldProps<T>) {
  return (
    <div className="relative">
      <label className="block text-[0.65rem] uppercase tracking-wider text-text-dim mb-2">{label}</label>
      <input
        type="file"
        accept={accept}
        disabled={disabled}
        className="text-sm text-text-muted w-full disabled:opacity-50"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onSelect(file, field);
          e.target.value = '';
        }}
      />
      {selectedFileName && (
        <p className="text-xs text-text-muted mt-1 truncate" title={selectedFileName}>
          {selectedFileName}
        </p>
      )}
    </div>
  );
}
