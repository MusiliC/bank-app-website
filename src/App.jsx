 
import styles from './style'

import { 
  Navbar,
  Billing,
  CardDeal,
  Business,
  Client,
  CTA,
  Stat,
  Footer,
  Testimonials,
  Hero} from "./components"

const App = () => {
  return (
    <div className='w-full overflow-hidden bg-primary' >

      {/* navbar */}
       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/> 
          </div>
       </div>

       {/* hero section page */}
       <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
       </div>

       {/*  */}
       <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stat/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Client/>
          <CTA/>
          <Footer/>
        </div>
       </div>


    </div>
  )
}

export default App
