export default function CardImage({ imageUrl, caption }) {
  return (
    <figure>
      <img src={imageUrl} alt={caption} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
