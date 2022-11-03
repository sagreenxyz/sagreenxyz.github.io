import CardImage from './CardImage'
export default function Card(props) {
  return (
    <div>
      <CardImage imageUrl={props.imageUrl} caption={props.caption} />
    </div>
  );
}
