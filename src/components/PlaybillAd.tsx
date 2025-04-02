interface PlaybillAdProps {
  title: string;
  description: string;
  className?: string;
}

export default function PlaybillAd({ title, description, className = '' }: PlaybillAdProps) {
  return (
    <div className={`playbill-card ${className} group hover:bg-gray-50 transition-colors duration-200`}>
      <div className="relative">
        <h4 className="text-xl font-mono mb-2">{title}</h4>
        <div className="playbill-divider my-2"></div>
        <p className="text-sm font-serif italic">{description}</p>
      </div>
    </div>
  );
} 