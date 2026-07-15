import styles from './FeatureBar.module.css';

const features = [
  { title: 'Live', desc: ['Expert', 'Mentors'] },
  { title: 'Build', desc: ['Professional', 'Projects'] },
  { title: 'Solve', desc: ['150+ DSA', 'problems'] },
  { title: 'Get 5+', desc: ['Assured', 'Interviews'] },
  { title: 'Program', desc: ['Duration 6', 'Months'] },
  { title: 'Internship', desc: ['Experience', 'Certificate'] },
];

export default function FeatureBar() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-6 sm:py-8">
      <div className={styles.featureBar}>
        {features.map((item, index) => (
          <div className={styles.featureItem} key={index}>
            <div className={styles.highlight}>{item.title}</div>
            <div className={styles.desc}>
              {item.desc[0]}<br />{item.desc[1]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}