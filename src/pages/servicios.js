import Navigation from "@/components/clase_01/Navigation";
import ThemeContextProvider from "@/context/ThemeContextProvider";




export default function servicios() {
  return (
    <ThemeContextProvider>
      <Navigation />
    </ThemeContextProvider>
  );
}