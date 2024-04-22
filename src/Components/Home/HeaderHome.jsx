import React from 'react'
import { FiClock } from 'react-icons/fi'
function HeaderHome() {
    return (

        <div className="container mb-5 ">
            <h2 className="title">Software engineering <br /> for future</h2>
            <div className="content container d-block d-lg-flex  rounded justify-content-between">
                <div className="first col-12 col-lg-6 mb-5 m-lg-0">
                    <div>
                        <h2 className="title2">featured news</h2>
                    </div>
                    <div className="con1">
                        <h3 className="business">tech</h3>
                        <div className="line"></div>
                        <div className='d-flex justify-content-between '>
                            <h2 className="f-art">here's the first article</h2>

                            <span> <FiClock /> 2 h ago</span>
                        </div>
                        <p className="par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod do
                            lore tenetur veritatis itaque vitae molestiae voluptates voluptas,
                            cupiditate dicta fugiat natus dolorem nobis, modi deleniti repellat
                            voluptatem officia ad. Labore!</p>
                    </div>
                </div>
                <div className="col-12 col-lg-5">
                    <div className="second">
                        <h3 className="business">tech</h3>
                        <div className="line"></div>
                        <div className='d-flex justify-content-between '>
                            <h2 className="f-art">here's the first article</h2>
                            <span> <FiClock /> 2 h ago</span>
                        </div>
                        <div>
                            <p className="par2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod do <br />
                                lore tenetur veritatis itaque vitae molestiae voluptates voluptas, !</p>
                        </div>
                        <div className="third">
                            <h3 className="business">tech</h3>
                            <div className="line"></div>
                            <div className='d-flex justify-content-between '>
                            <h2 className="f-art">here's the first article</h2>
                            <span> <FiClock /> 2 h ago</span>
                        </div><div>
                                <p className="par2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod do <br />
                                    lore tenetur veritatis itaque vitae molestiae voluptates volupt!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeaderHome