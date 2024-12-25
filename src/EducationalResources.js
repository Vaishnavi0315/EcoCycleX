import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EducationalResources.css';
import l1 from './Article 1.jpeg';
import l2 from './Reducing food waste.jpeg';
import l3 from './urban agriculture.jpeg';
import l4 from './Composting basic-video 1.jpeg';
import l5 from './Urban farming.jpeg';
import l6 from './Sustainable seafood.jpeg';
import l7 from './Starting community garden.jpeg';
import l8 from './Hydroponic.jpeg';
import l9 from './Diy compost bin.jpeg';
import l10 from './Sustainable development.jpeg';
import l11 from './Food loss and waste reduction.jpeg';
import l12 from './Responsible consumption and production.jpeg';

const EducationalResources = () => {
  return (
    <div className="educational-resources container-fluid">
      <div className="jumbotron">
        <h1 className="display-41">Educational Resources</h1>
        <p className="card-text1">Explore our curated articles, videos, and tutorials to learn more about sustainability and food systems.</p>
      </div>
     
      
      {/* Articles Section */}
      <section className="resources-section">
  <h2 className="text-center">Articles</h2>
  <div className="row">
    <div className="col">
      <div className="card square-card h-100 shadow">
        <img src={l1} className="card-img-top" alt="Article 1" />
        <div className="card-body">
          <h5 className="card-title">Understanding Sustainable Practices</h5>
          <p className="card-text">An in-depth look at sustainable agriculture and food systems, highlighting the United Nations' efforts in promoting sustainable practices through the Sustainable Development Goals.</p>
          <a href="https://www.un.org/sustainabledevelopment/sustainable-agriculture/" className="btn btn-primary">Read more</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card square-card h-100 shadow">
              <img src={l2} className="card-img-top" alt="Article 2" />
              <div className="card-body">
                <h5 className="card-title">Reducing Food Waste</h5>
                <p className="card-text">Practical tips and strategies for minimizing food waste at home and in businesses.</p>
                <a href="https://www.un.org/en/observances/end-food-waste-day/" className="btn btn-primary">Read more</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card square-card h-100 shadow">
              <img src={l3} className="card-img-top" alt="Article 3" />
              <div className="card-body">
                <h5 className="card-title">The Future of Urban Agriculture</h5>
                <p className="card-text">Exploring the innovations and trends in urban farming.</p>
                <a href="https://www.unep.org/resources/infographic/sustainable-urban-and-peri-urban-agriculture-india" className="btn btn-primary">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Videos Section */}
      <section className="resources-section">
        <h2 className="text-center">Videos</h2>
        <div className="row">
          <div className="col">
            <div className="card square-card h-100 shadow">
              <img src={l4} className="card-img-top" alt="Video 1" />
              <div className="card-body">
                <h5 className="card-title">Composting Basics</h5>
                <p className="card-text">Learn the fundamentals of composting with this beginner-friendly video.</p>
                <a href="https://www.youtube.com/watch?v=i7SgSAumXsI" className="btn btn-primary">Watch now</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card square-card h-100 shadow">
              <img src={l5} className="card-img-top" alt="Video 2" />
              <div className="card-body">
                <h5 className="card-title">Urban Farming</h5>
                <p className="card-text">Explore how urban farming is changing the way we think about food production.</p>
                <a href="https://www.youtube.com/watch?v=iutdXpXfpq8" className="btn btn-primary">Watch now</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card square-card h-100 shadow">
              <img src={l6} className="card-img-top" alt="Video 3" />
              <div className="card-body">
                <h5 className="card-title">Sustainable Seafood</h5>
                <p className="card-text">Learn about sustainable fishing practices and their impact on the environment.</p>
                <a href="https://www.youtube.com/watch?v=gbO1lObLLzE" className="btn btn-primary">Watch now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tutorials Section */}
      <section className="resources-section">
        <h2 className="text-center">Tutorials</h2>
        <div className="row">
          <div className="col">
            <div className="card square-card h-100 shadow">
              <img src={l7} className="card-img-top" alt="Tutorial 1" />
              <div className="card-body">
                <h5 className="card-title">Starting a Community Garden</h5>
                <p className="card-text">A step-by-step guide to establishing a successful community garden.</p>
                <a href="https://www.fao.org/urban-agriculture/en/" className="btn btn-primary">Learn more</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card square-card h-100 shadow">
              <img src={l8} className="card-img-top" alt="Tutorial 2" />
              <div className="card-body">
                <h5 className="card-title">Hydroponics 101</h5>
                <p className="card-text">An introduction to hydroponic farming methods for beginners.</p>
                <a href="https://www.fao.org/americas/news/news-detail/Sustainable-Hydroponics-Production-to-increase-food-security-in-Jamaica/en" className="btn btn-primary">Learn more</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card square-card h-100 shadow">
              <img src={l9} className="card-img-top" alt="Tutorial 3" />
              <div className="card-body">
                <h5 className="card-title">DIY Compost Bin</h5>
                <p className="card-text">Instructions on how to build your own compost bin at home.</p>
                <a href="https://www.fao.org/4/y5104e/y5104e05.htm" className="btn btn-primary">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="resources-section">
        <h2 className="text-center">Case Studies</h2>
        <div className="row">
          <div className="col">
            <div className="card square-card h-100 shadow">
              <img src={l10} className="card-img-top" alt="Case Study 1" />
              <div className="card-body">
                <h5 className="card-title">The Sustainable Development Agenda</h5>
                <p className="card-text">Sustainable development everywhere must integrate economic growth, social well-being and environmental protection.</p>
                <a href="https://www.un.org/sustainabledevelopment/development-agenda/" className="btn btn-primary">Read more</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card square-card h-100 shadow">
              <img src={l11} className="card-img-top" alt="Case Study 2" />
              <div className="card-body">
                <h5 className="card-title">Food Loss and Waste Reduction</h5>
                <p className="card-text">Solutions to Slash Food Waste and Loss.Reducing food losses and waste is essential in a world where the number of people affected</p>
                <a href="https://www.un.org/en/observances/end-food-waste-day" className="btn btn-primary">Read more</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card square-card h-100 shadow">
              <img src={l12} className="card-img-top" alt="Case Study 3" />
              <div className="card-body">
                <h5 className="card-title">Responsible Consumption And Production</h5>
                <p className="card-text"> Ensuring sustainable consumption and production patterns, which is key to sustain the livelihoods of current and future generations.</p>
                <a href="https://www.un.org/sustainabledevelopment/sustainable-consumption-production/" className="btn btn-primary">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
  );
};

export default EducationalResources;
