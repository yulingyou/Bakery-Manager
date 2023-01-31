import './styles.css';
import React from 'react';
import Item from './Item';

function App() {
  // const [data, setData] = useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  const blueberryMuffin = {
    price: 22,
    itemName: 'Blueberry Muffin',
    batchQuantity: 12
  }
  
  const raspberryMuffin = {
    price: 25,
    itemName: 'Raspberry Muffin',
    batchQuantity: 12
  }
  
  const chickenMuffin = {
    price: 2,
    itemName: 'Chicken Muffin',
    batchQuantity: 22
  }
  
  const items = [blueberryMuffin, raspberryMuffin, chickenMuffin]

  const itemsDisplay = items.map((food) => {
    return <Item food={food}></Item>
  })

  return (
    <div class='flex'>
      {itemsDisplay}
    </div>
  );
}

export default App;
