import NavMenu from './NavMenu'
import Banner from './Banner'
import About from './About'
import Service from './Services'
import RecentWork from './RecentWork'
import Testimonials from './Testimonial'
import Contact from './Contact'
import ScrollToTop from "react-scroll-to-top"
import Skill from './Skill'

const RootComponents = () => {
  return (
    <>

        <ScrollToTop smooth/>
        <NavMenu></NavMenu>
        <Banner></Banner>
        <About></About>
        <Skill></Skill>
        <Service></Service>
        <RecentWork></RecentWork>
        <Testimonials></Testimonials>
        <Contact></Contact>
     
    </>
  )
}

export default RootComponents