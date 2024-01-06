export default function ProjectPicture({ src, customClassName }) {
    return (
      <div className="row">
          <img
            src={src}
            className={customClassName}
          />
      </div>
    );
  }