
import Product from "./Componet/Product"
function App() {
  

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" >
      <Product title="Wireless Headphones"
        img="https://www.lapcare.com/cdn/shop/files/1_6122ca29-5373-4c4f-97c2-0728ea368fc1.webp?v=1747984575"
        price={1499}
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorein their infancy. Various versions have evolved over the years, sometimes by"></Product>
    </div>
  )
}

export default App
