import { useEffect, useState } from 'react';     



const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Enchanted Wand',
      description: 'A magical wand imbued with the power of the stars.',
      price: 25.99,
    },
    {
      id: 2,
      name: 'Dragon Scale Armor',
      description: 'Protect yourself with the scales of a mighty dragon.',
      price: 149.99,
    },
    {
      id: 3,
      name: 'Phoenix Feather Quill',
      description: 'Write spells and incantations with the feather of a phoenix.',
      price: 12.49,
    },
    {
      id: 4,
      name: 'Potion of Invisibility',
      description: 'Become invisible at will with this magical elixir.',
      price: 39.99,
    },
    {
      id: 5,
      name: 'Crystal Ball',
      description: 'See the future and glimpse into other realms with this crystal ball.',
      price: 59.99,
    },
    
  ]);

  

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const addProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      name: name,
      description: description,
      price: parseFloat(price),
    };
    setProducts([...products, newProduct]);


    setName('');
    setDescription('');
    setPrice('');
  };

  useEffect(() => {
    console.log("a new product has been added!!");
  }, [products]);
  

  return (
    <div>
      <form onSubmit={addProduct}>
        <input onChange={handleChangeName} type="text" placeholder="Product Name" value={name} />
        <input onChange={handleChangeDescription} type="text" placeholder="Product Description" value={description} />
        <input onChange={handleChangePrice} type="text" placeholder="Product Price" value={price} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Products;
