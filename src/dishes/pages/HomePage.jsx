
import '../../styles.css'

export const HomePage = () => {
    
  return (

    <>
    <div className="container mt-6 mb-10 d-flex justify-content-center">
    <div className="col-md-10">
    <div className="alert alert-dark mt-5 animate__animated animate__fadeIn"><h1>Similique optio rem commodi explicabo</h1></div><br />
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade imagenes_carrousel" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                    <img src="http://res.cloudinary.com/dla3ofowl/image/upload/v1679923849/restaurant/q0nmdiu5iqrrgmvcmv4a.jpg" className="d-block w-100" style={{ height: 'calc(90vh - 90px)'  }}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique optio rem commodi explicabo, iste recusandae facere ab quis neque ipsum laudantium iusto, enim ex, alias dolore nostrum nemo cupiditate accusantium?</h5>
                    </div>
                </div>
                <div className="carousel-item"  data-bs-interval="2000">
                    <img src="http://res.cloudinary.com/dla3ofowl/image/upload/v1679923997/restaurant/dd2bwtczkl7fsmdjn2rt.jpg" className="d-block w-100" style={{ height: 'calc(90vh - 90px)' }}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla minus quaerat perferendis veniam est voluptates, accusamus sed. Dolor ratione totam itaque autem laudantium. Officia dolore praesentium cupiditate reprehenderit tempora delectus?.</h5>
                    </div>
                </div>
                <div className="carousel-item"  data-bs-interval="2000"> 
                    <img src="http://res.cloudinary.com/dla3ofowl/image/upload/v1679924082/restaurant/pysdpwg4pfojxykrxbwu.jpg" className="d-block w-100" style={{ height: 'calc(90vh - 90px)' }}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ratione repellat modi hic minus atque nostrum rem est libero debitis reiciendis nam perferendis aliquam nemo necessitatibus porro facere architecto? Dolorem?.</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="http://res.cloudinary.com/dla3ofowl/image/upload/v1679924154/restaurant/vrjswkvznxab26se4tw5.jpg" className="d-block w-100" style={{ height: 'calc(90vh - 90px)' }}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis perspiciatis sequi odio magni doloremque eius! Nihil inventore totam cum eius non. Dolores, minima? Qui cupiditate aut veritatis corrupti minima veniam!.</h5>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <div className='mt-5'>
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel dolor nam provident soluta pariatur itaque saepe rem odit quasi ea quis tenetur, quidem, quae modi odio tempore repellat eos quaerat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, labore error magnam.</h5>
        </div>
        <div className='mt-3'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolor voluptates consectetur magni dolores, laborum ea amet minus totam nihil tempora! Consectetur incidunt non sed, inventore magni assumenda? Illo, veritatis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel dolor nam provident soluta pariatur itaque saepe rem odit quasi ea quis tenetur, quidem, quae modi odio tempore repellat eos quaerat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, labore error magnam, delectus in animi vero voluptas iste, fugit libero deleniti laudantium ea ab. Facere maiores quas voluptates veniam ducimus.</p>
        </div>
        <div className='mt-2'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptatibus deserunt amet, illo molestiae atque non nesciunt dolores numquam consectetur odio aut perferendis pariatur odit doloribus a natus repellendus nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolor voluptates consectetur magni dolores, laborum ea amet minus totam nihil tempora! Consectetur incidunt non sed, inventore magni assumenda? Illo, veritatis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel dolor nam provident soluta pariatur itaque saepe rem odit quasi ea quis tenetur, quidem, quae modi odio tempore repellat eos quaerat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, labore error magnam, delectus in animi vero voluptas iste, fugit libero deleniti laudantium ea ab. Facere maiores quas voluptates veniam ducimus.</p>
        </div>
    </div>
    </div>
    <br />
    <br />
    </>
  )
}
