import styles from "../styles/MihogoList.module.css";
import { MihogoCard } from "./MihogoCard";
const MihogoList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST RESTAURANT IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint
        ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
        officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate
        dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea
        nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat
        officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
        officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
        Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
      </p>
      <div className={styles.wrapper}>
        <MihogoCard />
        <MihogoCard />
        <MihogoCard />
        <MihogoCard />
        <MihogoCard />
        <MihogoCard />
      </div>
    </div>
  );
};

export default MihogoList;
