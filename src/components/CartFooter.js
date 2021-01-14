
import React from 'react';
import '../css/CartFooter.css';

function CartFooter({cart}) {
    //item total * price
    const total= cart
        .map(item => item.qty * item.price)
        .reduce((a, b) => a+b, 0)
        .toFixed(2)

    return (
        <footer className="cartFooter">
            <div>
                <span>
                    TOTAL: ${total}
                </span>
            </div>
        </footer>
  );
}

export default CartFooter;
