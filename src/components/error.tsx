interface ErrorMessageProps {
  error: string;
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div>
      <p className="text-container text-red-600">{error}</p>
    </div>
  );
}
