import { useRef, useState, useEffect } from 'react'
import profile from '../../../assets/profile-img.jpg'

const useIsVisible = (ref) => {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      );
  
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
}

const About = () => {
    const ref = useRef();
    //let isVisible = useIsVisible(ref.current);

    // if(isVisible){
    //     console.log(true);
    // }
    // return (
    //     <div ref={ref} style={{height: '100vh'}}>
    //         <img className='profile-image' src={profile} alt="Profile"/>
    //     </div>
    // )

    return (<div></div>)
}

export default About