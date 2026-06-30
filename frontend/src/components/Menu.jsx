import    React,{useContext,useState} from 'react'
import { MenuContext } from '../context/MenuContext'
import { categoryItems } from '../assets/assets'

const Menu = () => {
  
  const {product} = useContext(MenuContext)
  console.log(product)
  const [category,setCategory] = useState("All")
  return (
    <div className='px-4 py-12 max-w-6xl mx-auto'>
      {/* Header */}
      <div className='text-center mb-6'>
        <h1 className='text-4xl font-bold text-white'>Discover Our Menu</h1> 
      </div>

      {/* category */}
      <div className='flex items-center justify-between gap-8 mb-8 '>
        {categoryItems.map((item,index)=>
         (
          <li key={index}
          onClick={()=>setCategory((prev)=> prev === item.category_title ? "All" : item.category_title)}
           className={`cursor-pointer py-10 px-3 text-white rounded-4xl font-medium  w-100 h-20 text-sm transition-all duration-150 list-none ${
            category === item.category_title ? "bg-amber-500 border-2 border-dashed border-gray-700 ":"border-2 border-dashed border-gray-700 "
           }`}>{item.category_title} </li>
        ) )}

      </div>

       {/* Menu */}
      <div className='grid grid-cols-2 gap-8'>
        {product.length > 0 ? (
          product.filter(
            (item)=> category === "All" || item.category === category 
          ).map((item,index)=>(
            <>
            <div key={index} className='flex items-center gap-6 p-4 border-2 border-dashed border-gray-600 rounded-2xl transotion hover:shadow-amber-200'>
              <img src={item.image} alt="" className='w-30 h-30 object-cover  rounded-full' /> 
              <div className='flex-1'>
                <div className='flex justify-between items-center'>
                  <h3 className='text-lg font-semibold'> {item.name} </h3>
                  <span className='text-lg font-semibold text-amber-300 relative ml-4'>
                    <span className="before:content-[''] before:absolute before:w-10 before:before-b before:dotted before:border-gray-400 before:left-12 before:top-1/2 bedore:transform before:translate-y-0.5" > </span>
                     ${item.price}
                  </span>
                </div>
                <p className='text-sm text-gray-500 mt-1'>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus atque repudiandae at. Porro magnam officiis numquam, nam facilis vero iusto minima exercitationem, debitis ab amet maiores eius? Reiciendis, a eveniet?</p>
              </div>
            </div>
            </>
          ))
        ) : (
        <p className='text-sm col-span-2 text-gray-600'>Nothing in menu currently</p>
        )}
      </div>
      
    </div>
  )
}

export default Menu

