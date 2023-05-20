import { features } from "../constants"
import styles, { layout } from "../style"
import Button from "./Button"

const FeatureCard = ({icon, title, content, id}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${id !== features.length - 1 ? "mb-6" : "mb-0"} feature-card `}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex flex-col flex-1 ml-3">
      <h4 className="font-semibold text-white font-poppins text-[18px] leading-[23px] mb-1" >{title}</h4>
      <p className="font-normal text-dimWhite font-poppins text-[16px] leading-[24px] mb-1"  >{content}</p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Yo do the business, <br className="hidden sm:block" /> we'll handle the money</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the credit card, you can improve your financial life by building credit, but with hundreds of credit cards in the market</p>
        <Button styles = "mt-10" />
      </div>

      {/*  */}

      <div className={`${layout.sectionImg} flex-col`}>
        {
          features.map((feature, id) => (
            <FeatureCard key={feature.id} {...feature} id = {id} />
          ))
        }
      </div>
    </section>
  )
}

export default Business
