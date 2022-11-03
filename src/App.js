import config from './.config.json'
import { LogoImage } from "./components/LogoImage";
import { BgFancy } from './components/backgrounds/BgFancy';
import { BgWatermelon } from './components/backgrounds/BgWatermelon';
import { BgRoyalRainbow } from './components/backgrounds/BgRoyalRainbow';
import Card from './components/cards/Card'

function App() {
  const cards = [
    {
      image: config.logoImageUrl,
      caption: config.logoImageCaption
    },
    {
      image: config.portfolio.tier2[0].imageUrl,
      caption: config.portfolio.tier2[0].name
    },
  ]
  return (
    <div>
      <h1>This is a Work in Progress...  Currently in Development</h1>
      <Card imageUrl={cards[0].image} caption={cards[0].caption} />
      <Card imageUrl={cards[1].image} caption={cards[1].caption} />
    </div>
  )
}

export default App;
