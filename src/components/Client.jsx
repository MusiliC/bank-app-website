import { clients } from "../constants";
import styles from "../style";

const Client = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full `}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1  ${styles.flexCenter} sm:min-[192px] min-w-[120px]`}
          >
            <img
              src={client.logo}
              className="sm:w-[192px] w-[100px] object-contain"
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Client;
