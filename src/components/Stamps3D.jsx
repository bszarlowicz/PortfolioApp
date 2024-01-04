export default function Stamps3D({ img, altText, customClassName }) {
  return (
      <img
        src={img}
        alt={altText}
        className={customClassName}
      />
  );
}
