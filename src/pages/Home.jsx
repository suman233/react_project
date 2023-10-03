import Footer from "../component/common/Footer";
import Navbar from "../component/common/Navbar";

const Home=()=>{
    const obj=[
        {name:"Suman", title:"Blog theme", date:"23/09/22"},
        {name:"Avik",title:"Blog theme2", date:"12/06/23"},
        {name:"Rajesh",title:"Blog theme3", date:"20/07/23"}
      ]
    return (
        <>
        <Navbar/>
        <header class="masthead" style={{backgroundImage: "url('assets/img/home-bg.jpg')"}}>
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="site-heading">
                            <h1>Clean Blog</h1>
                            <span class="subheading">A Blog Theme by Start Bootstrap</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                {obj.map((element, key)=>{
                    return(
                        <>
                        <div class="post-preview">
                        <a href="post.html">
                            <h2 class="post-title">{element.title}</h2>
                            <h3 class="post-subtitle">Many say exploration is part of our destiny, but it’s actually our duty to future generations.</h3>
                        </a>
                        <p class="post-meta">
                            Posted by
                            <a href="#!">{element.name}</a>
                            on {element.date}
                        </p>
                    </div>
                    </>
                    )
                })}
                    
                    
                   
                    <div class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Home;
