import Cart from "@/components/clase_07/Cart";
import CartContextProvider from "@/context/CartContextProvider";

export default function index() {
  return (
    <>  
      <CartContextProvider>
        <Cart />
      </CartContextProvider>
    </>
  );
}
