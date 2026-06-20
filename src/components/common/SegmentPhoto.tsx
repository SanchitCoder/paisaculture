interface SegmentPhotoProps {
  src: string
  alt: string
  className?: string
  overlay?: boolean
}

export default function SegmentPhoto({
  src,
  alt,
  className = '',
  overlay = false,
}: SegmentPhotoProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-t from-primary-900/55 via-primary-900/10 to-transparent"
          aria-hidden="true"
        />
      )}
    </div>
  )
}
