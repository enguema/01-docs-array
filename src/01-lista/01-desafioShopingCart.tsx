import { useState } from "react";

const initialProducts = [
    { id: 0, name: 'Baklava', count: 1 },
    { id: 1, name: 'Queso', count: 5 },
    { id: 2, name: 'Espaguetis', count: 2 },
];

export default function ShoppingCart() {
    const [products, setProducts] = useState(initialProducts);

    function handlecreaseClick(productId) {
        setProducts(products.map(p => {
            if (productId === p.id) {
                return { ...p, count: p.count + 1 }
            } else {
                return p;
            }
        }))
    }

    function handledecreaseClick(productId) {
        setProducts(products.map(p => {
            if (productId === p.id && p.count == 1) {
                setProducts(products.filter(prods => {
                    prods.id !== p.id;
                    return {products};
                }))
               alert("Umbral alcanzado")
            }
            if (productId === p.id && p.count > 1) {
                return { ...p, count: p.count - 1 }
            } else {
                return p;
            }
        }))
    }

    return (
        <>
            <h4>Shopping Cart</h4>
            <ul>
                {products.map(prod => (
                    <li key={prod.id}>
                        {prod.name}
                        {' '}
                        (<b> {prod.count}</b>)

                        <button onClick={() => {
                            handlecreaseClick(prod.id);
                        }}>
                            +
                        </button>
                        <button onClick={() => {
                            handledecreaseClick(prod.id);
                        }}>
                            -
                        </button>
                    </li>
                ))}
            </ul>
        </>

    );
}