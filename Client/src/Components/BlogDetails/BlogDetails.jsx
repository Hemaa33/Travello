import React from 'react';
import './blogdetails.css'; 
import slider14 from "../assets/img/slider-1-4.jpg"
import mountain from "../assets/img/male-mountain-climber-enjoying-snow-covered-mountain-view-from-summit.jpg"
import SubNavbar from '../Nav/subNav';
import MainNav from '../Nav/mainNav';
import FooterNav from '../footer/footer';
// Breadcrumb Component
const Breadcrumb = () => {
  return (
    <div className="container-fluied" style={{ position: 'relative' }}>
      <div style={{ textAlign: 'center', justifyContent: 'center' }}>
        <img src={slider14} alt="" style={{ width: '100%' }} />
        <div className="it-breadcrumb-list-wrap text-center" style={{ position: 'absolute' }}>
          <div className="it-breadcrumb-list-contente">
            <span><a href="index.html">home</a></span>
            <span className="dvdr">//</span>
            <span>Discovery Island Kayak Tour</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// BlogPost Component
const BlogPost = () => {
  return (
    <div className="col-8" style={{ padding: '30px' }}>
      <img
        src={mountain}
        alt=""
        width="80%"
        style={{ display: 'block', borderRadius: '10px', boxShadow: '-2px 2px 10px' }}
      />
      <i className="fa-regular fa-calendar-days" style={{ color: '#11bb67', padding: '30px 0px' }}></i>
      <span>14 Jan 2024</span>
      <h1 className='blogTitle' >Top travel blogs to discover this winter</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi eveniet vero soluta! Blanditiis dignissimos numquam ipsum eos, quidem dolorum aut magni consequuntur suscipit ullam perferendis accusantium eius, similique impedit dicta accusamus at veniam aliquid voluptatibus iure facere doloribus obcaecati sunt? Officiis, tenetur. Minus autem est, maiores fugiat, voluptates aperiam ullam esse doloremque voluptate debitis illum porro dicta, consequatur eos possimus sunt. Odit a neque, fuga nulla optio ea id laboriosam nemo nihil illo qui recusandae et voluptates inventore ad ab delectus quod accusamus facilis quo possimus eius natus ducimus impedit. Aspernatur dignissimos cupiditate libero illo quae quas nemo enim eveniet.</p> {/* Content shortened for brevity */}
    </div>
  );
};

// RecentPost Component
const RecentPost = ({ imageSrc, date, title }) => {
  return (
    <div className="row" style={{ padding: '20px 0px', borderBottom: '1px solid black', alignItems: 'center', display: 'flex' }}>
      <div className="col-4">
        <img src={mountain} alt="" width="100%" style={{ borderRadius: '10px' }} />
      </div>
      <div className="col-8">
        <i className="fa-regular fa-calendar-days"></i> <span style={{ color: '#11bb67' }}>{date}</span>
        <p style={{ marginTop: '10px', fontWeight: '600' }}>{title}</p>
      </div>
    </div>
  );
};

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="col-4" style={{ paddingTop: '25px' }}>
      <h2>Recent posts:</h2>
      <RecentPost imageSrc="../assets/img/img-1 (1).jpg" date="14 Jan, 2024" title="THINGS TO SEE AND DO WHEN VISITING JAPAN" />
      <RecentPost imageSrc="../assets/img/img-3.jpg" date="14 Jan, 2024" title="THINGS TO SEE AND DO WHEN VISITING JAPAN" />
      <RecentPost imageSrc="../assets/img/img-1 (1).jpg" date="14 Jan, 2024" title="THINGS TO SEE AND DO WHEN VISITING JAPAN" />
    </div>
  );
};

// Main Component (Page Layout)
const BlogPage = () => {
  return (
    <>
    {/* <SubNavbar/>
    <MainNav/> */}
      <Breadcrumb />
      <div className="container" style={{ paddingTop: '20px' }}>
        <div className="row">
          <BlogPost />
          <Sidebar />
        </div>
      </div>
      {/* <FooterNav/> */}
    </>
  );
};

export default BlogPage;
