import Laptop from "./laptop/laptop.component"

const devices = [
    {
        name: 'macbook',
        url: 'something.something'
    },
    {
        name: 'Lenovo',
        url: 'something.something'
    }
]


const Laptops = () => {
  return (
    <div>
        {devices && devices.map((item) => <Laptop specs={item}/>)}
    </div>
  )
}

export default Laptops