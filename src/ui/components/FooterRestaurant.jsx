
export const FooterRestaurant = () => {
  return (
    <footer className="text-white text-center text-lg-start bg-dark pb-2">
        <div className="container p-2">
            <div className="row mt-2">
                <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                    <h5 className="mb-4">About Restaurant</h5>
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                        voluptatum deleniti atque corrupti.
                    </p>
                    <div className="mt-4">
                      <a href="https://www.facebook.com/TokioSchool/" type="button" className="btn btn-floating btn-light btn-lg px-3" target="_blank"><i className="fab fa-facebook-f"></i></a>
                      <a href="https://www.linkedin.com/school/tokioschool/" type="button" className="btn btn-floating btn-light btn-lg ms-3" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                      <a href="https://twitter.com/TokioSchool/" type="button" className="btn btn-floating btn-light btn-lg ms-3" target="_blank"><i className="fab fa-twitter"></i></a>
                      <a href="https://www.youtube.com/channel/UCBWQb-BnaBPToE3bFScfwxQ/" type="button" className="btn btn-floating btn-light btn-lg ms-3" target="_blank"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                    <h5 className="mb-4">Contact us</h5>
                        <ul className="fa-ul mt-4">
                            <li className="mb-3">
                                <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">c\ Principal, nº 20. 28027 Madrid</span>
                            </li>
                            <li className="mb-3">
                                <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">clientes@restaurant.com</span>
                            </li>
                            <li className="mb-3">
                                <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">666 55 44 33 / 666 55 44 32</span>
                            </li>
                            <li className="mb-3">
                                <span className="fa-li"><i className="fas fa-magnifying-glass-plus"></i></span><span className="ms-2"> 
                                <a href="https://www.tokioschool.com/politica-de-cookies/" className="nolink"  target="_blank">Cookies policy</a>
                                </span>
                            </li>
                        </ul>
                </div>

                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                    <h5 className="mb-4">Opening hours</h5>
                    <table className="table text-center text-white">
                        <tbody className="fw-normal">
                        <tr>
                            <td>Mon - Fri:</td>
                            <td>12pm - 11pm</td>
                        </tr>
                        <tr>
                            <td>Saturday:</td>
                            <td>11am - 12pm</td>
                        </tr>
                        <tr>
                            <td>Sunday:</td>
                            <td>6pm - 12pm</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
        
            </div>
        </div>
    </footer>
  )
}
