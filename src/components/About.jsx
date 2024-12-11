import React from "react";
import myImage from "../assets/aboutme-image.png";
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

function About() {
  // Reusable Card component
  const Card = ({ icon: Icon, title, children }) => {
    return (
      <article className="about__card bg-gray-800 pt-6 pr-4 pb-6 pl-4 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 text-center">
        <div className="flex justify-center mb-4">
          <Icon className="text-green-500 text-3xl" />
        </div>
        <h5 className="mt-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          {title}
        </h5>
        <small className="text-sm text-light">{children}</small>
      </article>
    );
  };

  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>

        <div className="container mx-auto grid md:grid-cols-2 gap-16">
          {/* Image Section */}
          <div className="about__me flex justify-center items-center bg-gradient-to-br from-transparent via-primary to-transparent pt-2 pb-4 pr-4 pl-4 rounded-2xl">
            <div className="about__me-image relative overflow-hidden rounded-2xl">
              <img
                src={myImage}
                alt="Me"
                className="w-91 h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="about__content">
            {/* Cards Section */}
            <div className="about__cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Degree Card */}
              <Card icon={GiGraduateCap} title="Degree">
                Bsc.(Hons) Computer Science <br />
                <i>University of London.</i>
              </Card>

              {/* GPA Card */}
              <Card icon={BsBookmarkStar} title="Current GPA">
                3.13
              </Card>

              {/* Domains Card */}
              <Card icon={TfiWorld} title="Domains">
                <ul>
                  <li>Mobile Application</li>
                  <li>Development</li>
                </ul>
              </Card>
            </div>

            {/* Description Section */}
            <p className="text-light mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dui justo, efficitur et sem et, lacinia accumsan est. Maecenas
              mollis pharetra nibh, id ornare metus consequat a. Sed molestie
              hendrerit lacus id vulputate. In metus lectus, mollis eget ligula
              ac, elementum pulvinar magna. Integer vulputate porta pretium.
              Vestibulum tellus ante, ultrices eu vehicula id, consectetur et
              sapien. Mauris libero elit, dapibus at eros in, cursus blandit
              lorem. Phasellus iaculis tincidunt lorem eu lobortis. Aenean
              tincidunt sit amet justo sit amet accumsan. Sed accumsan
              vestibulum laoreet. Fusce sit amet ultrices purus, a aliquam
              risus. Phasellus venenatis, mauris ac ultrices auctor, turpis
              metus scelerisque magna, non convallis enim lacus id nunc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
