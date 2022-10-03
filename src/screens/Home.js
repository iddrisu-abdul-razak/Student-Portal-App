import React from "react";
import image1 from "../pictures/naa.jpg"
import image2 from "../pictures/images.jpg" 



const Home = () => {
  return (
    <section>
     <h2>Welcome to my dashboard</h2>
     <img src={image1} alt=""/>
     <p>For all students to noticed: 
        The new timetable for this period will be pasted on the students notice board.
        Also last year most students did not do well in their examinations,
         so this term is going to be a rough term so all students should
          tighten their belts if you want to stay in this institution </p>
          <img src={image2} alt=""/>
          <p>We provide academic excellence and moral upbringing to all our students.
            Idealism and generocity makes us very idealalistic in performance of our duties.
            We also nuture all our students to fit well into society, we also do not entertain societal misfit,
            thus, discipline is our hall mark. We incalcate morality and self discipline in our students. 
          </p>
      
    </section>
  );
};

export default Home;
