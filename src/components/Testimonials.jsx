import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      {/*  */}
      <div className="absolute z-0 w-[60%] h-[60%] blue__gradient rounded-full -right-[50%]" />

      {/*  */}

      <div className="flex flex-col items-center justify-between w-full mb-6 z-1 sm:mb-16 een md:flex-row ">
        <h1 className={styles.heading2}>
          What people are <br className="hidden sm:block" /> saying about us
        </h1>
        <div className="w-full mt-6 md:mt-0">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet
          </p>
        </div>
      </div>

      {/*  */}

      <div className="relative flex flex-wrap justify-center w-full sm:justify-start feedback-container z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
