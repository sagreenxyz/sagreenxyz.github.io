import './LogoImage.css'
export function LogoImage({ imageUrl, caption }) {
  return (
    <>
      <figure id="img-sagreenxyz">
        <img src={imageUrl} alt="image of Scott A. Green" />
        <figcaption>{caption}</figcaption>
      </figure>
    </>
  );
}
