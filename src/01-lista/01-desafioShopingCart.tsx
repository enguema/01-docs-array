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
        const newProducts = products.map(p => {
            if (productId === p.id) {
                return { ...p, count: p.count - 1 }
            } else {
                //setProducts(products.filter(p=> p.id !== productId));
                //const c=products.filter(p=> p.id !== productId);
                return p;
            }
        });
        const r = newProducts.filter(p => p.count > 0);
        setProducts(r);
    }

    return (
        <>
            <h4>Shopping Cart</h4>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <ul>
                {products.map(prod => (
                    <li key={prod.id}>
                        {prod.name}
                        {' '}
                        (<b> {prod.count}</b>)

                        <button color="cyan" onClick={() => {
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