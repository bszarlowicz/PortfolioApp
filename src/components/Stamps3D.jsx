export default function Stamps3D({ img, altText, customClassName }) {
  return (
    <div className="col-md-4 text-center p-0 ">
      <img
        src={img}
        alt={altText}
        className={customClassName}
      />
    </div>
  );
}
