interface Props {
  imgSrc: string;
  altText: string;
  class: string;
}

export default function TeamMember({
  imgSrc,
  altText,
  class: className,
}: Props) {
  return (
    <div class={`max-w-[300px] relative flex-shrink-0 ${className}`}>
      <div className="w-[200px] h-[40px] flex justify-center items-center">
        <img
          src={imgSrc}
          alt={altText}
          width="200"
          height="35"
          className="w-auto max-h-full"
        />
      </div>
    </div>
  );
}
