import React, { useMemo, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import ItemListStack from './app/stacks/ItemListStack';
import CartContext from './app/component/CartContext'

export default function App() {
  const [cart, setCart] = useState({total:0.00, items:[]})
  const providerValue = useMemo(()=>({cart, setCart}), [cart, setCart])
  
  return (
    <NavigationContainer>
      <CartContext.Provider value={providerValue}>
        <ItemListStack />
      </CartContext.Provider>
    </NavigationContainer>
  );
}

