
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousal from '../components/Carousal'
import Search from '../components/Search'
import { useEffect, useState } from 'react'

function Home() {
  const [search,SetSearch]=useState("")
  const [foodCat, setFoodCat] = useState([])
  const [foodItem, setFoodItem] = useState([])

  const loaddata = async () => {

    let response = await fetch("http://localhost:1900/api/foodData", {
      method: "POST",
      headers: {

        'Content-Type': 'application/json'
      }


    });
    response = await response.json()
    console.log(response[0], response[1])
    setFoodItem(response[0])
    setFoodCat(response[1])



  }


  useEffect(() => {
    loaddata()
  }, [])
  return (
    <>

      <div> <Navbar /></div>
      {/* <div><Search /></div> */}
      <div> <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
              
                 
                 
              <div className="carousel-inner">
              <div className='carousel-caption' style={{zIndex:"10"}}>
                  <div className="d-flex justify-content-center">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>SetSearch(e.target.value)}/>
                    <button className="btn btn-outline-success my-2 my-sm-0 text-white bg-success" type="submit">Search</button>
                  </div>

                  </div>
       
                  <div className="carousel-item active">
                      <img src="https://source.unsplash.com/random/300×300?fries" className="d-block w-100" style={{filter:"brigtness(30%)"}}   alt="..." />
                  </div>
                 
                  <div className="carousel-item">
                      <img src="https://source.unsplash.com/random/300×300?burger" className="d-block w-100" style={{filter:"brigtness(30%)"}} alt="..." />
                  </div>
                  <div className="carousel-item">
                      <img src="https://source.unsplash.com/random/300×300?pizza" className="d-block w-100"  style={{filter:"brigtness(30%)"}} alt="..." />
                  </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
              </button>
          </div></div>
      <div className=' container'>
        {
          foodCat.length != 0 ? foodCat.map((data) => {
            return (<div className='row mb-3'>

              <div key={data._id} className='fs-3 m-3'>  {data.CategoryName}</div>
              <hr />
              {foodItem.length != 0 ? foodItem.filter((item) => item.CategoryName == data.CategoryName && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                .map((filterItems) => {

                  return (
                    <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>

                      <Card  foodItem={filterItems}   //foodName={filterItems.name}
                      options={filterItems.options[0]}
                      //imgSrc={filterItems.img}
                      ></Card>
                    </div>
                  )
                })

                : <div>No such Data Found</div>}
            </div>
            )

          }) : "Empty"
        }
        <Card />

      </div>
      <div><Footer /></div>

    </>

  )
}

export default Home


