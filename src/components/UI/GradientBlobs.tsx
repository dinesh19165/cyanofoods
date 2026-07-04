interface GradientBlobsProps {
  variant?: 'green' | 'gold' | 'mixed';
  className?: string;
}

export default function GradientBlobs({ variant = 'green', className = '' }: GradientBlobsProps) {
  const colors =
    variant === 'gold'
      ? ['bg-amber-400/20', 'bg-yellow-300/15', 'bg-orange-300/10']
      : variant === 'mixed'
        ? ['bg-emerald-400/20', 'bg-amber-300/15', 'bg-teal-400/10']
        : ['bg-emerald-400/20', 'bg-emerald-500/15', 'bg-teal-400/10'];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <div className={`absolute -top-32 -left-32 w-96 h-96 ${colors[0]} rounded-full blur-3xl animate-blob`} />
      <div className={`absolute top-1/3 -right-24 w-80 h-80 ${colors[1]} rounded-full blur-3xl animate-blob`} style={{ animationDelay: '2s' }} />
      <div className={`absolute -bottom-24 left-1/3 w-72 h-72 ${colors[2]} rounded-full blur-3xl animate-blob`} style={{ animationDelay: '4s' }} />
    </div>
  );
}
