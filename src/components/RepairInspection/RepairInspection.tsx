import Image from "next/image"
import styles from "./RepairInspection.module.scss"

const RepairInspection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.pricingSection}>
          <h2 className={styles.sectionTitle}>Pricing Guide</h2>
          <p className={styles.sectionSubtitle}>Transparent pricing for our repair and inspection services</p>

          <div className={styles.pricingTable}>
            <div className={styles.pricingHeader}>
              <div className={styles.pricingCell}>Service</div>
              <div className={styles.pricingCell}>Description</div>
              <div className={styles.pricingCell}>Price Range</div>
            </div>

            <div className={styles.pricingRow}>
              <div className={styles.pricingCell}>
                <h3 className={styles.serviceName}>Regular Inspection</h3>
              </div>
              <div className={styles.pricingCell}>
                <p>Basic inspection of vehicle condition, fluids, brakes, and tires.</p>
              </div>
              <div className={styles.pricingCell}>
                <p className={styles.price}>¥5,000 - ¥8,000</p>
              </div>
            </div>

            <div className={styles.pricingRow}>
              <div className={styles.pricingCell}>
                <h3 className={styles.serviceName}>Comprehensive Inspection</h3>
              </div>
              <div className={styles.pricingCell}>
                <p>Detailed inspection of all vehicle systems, including engine diagnostics.</p>
              </div>
              <div className={styles.pricingCell}>
                <p className={styles.price}>¥12,000 - ¥18,000</p>
              </div>
            </div>

            <div className={styles.pricingRow}>
              <div className={styles.pricingCell}>
                <h3 className={styles.serviceName}>Oil Change</h3>
              </div>
              <div className={styles.pricingCell}>
                <p>Oil and filter replacement with high-quality products.</p>
              </div>
              <div className={styles.pricingCell}>
                <p className={styles.price}>¥5,000 - ¥10,000</p>
              </div>
            </div>

            <div className={styles.pricingRow}>
              <div className={styles.pricingCell}>
                <h3 className={styles.serviceName}>Brake Service</h3>
              </div>
              <div className={styles.pricingCell}>
                <p>Inspection and replacement of brake pads, rotors, and fluid as needed.</p>
              </div>
              <div className={styles.pricingCell}>
                <p className={styles.price}>¥15,000 - ¥30,000</p>
              </div>
            </div>

            <div className={styles.pricingRow}>
              <div className={styles.pricingCell}>
                <h3 className={styles.serviceName}>Tire Replacement</h3>
              </div>
              <div className={styles.pricingCell}>
                <p>Removal of old tires and installation of new ones, including balancing.</p>
              </div>
              <div className={styles.pricingCell}>
                <p className={styles.price}>¥8,000 - ¥15,000 per tire</p>
              </div>
            </div>

            <div className={styles.pricingRow}>
              <div className={styles.pricingCell}>
                <h3 className={styles.serviceName}>Engine Tune-Up</h3>
              </div>
              <div className={styles.pricingCell}>
                <p>Comprehensive service to optimize engine performance.</p>
              </div>
              <div className={styles.pricingCell}>
                <p className={styles.price}>¥20,000 - ¥40,000</p>
              </div>
            </div>
          </div>

          <p className={styles.pricingNote}>
            * Prices may vary depending on vehicle make, model, and condition. Please contact us for a precise quote.
          </p>
        </div>

        <div className={styles.caseStudiesSection}>
          <h2 className={styles.sectionTitle}>Case Studies</h2>
          <p className={styles.sectionSubtitle}>Real examples of our repair and inspection work</p>

          <div className={styles.caseStudies}>
            <div className={styles.caseStudy}>
              <div className={styles.caseStudyImage}>
                <Image
                  src="/over_hole.jpg"
                  alt="Engine Repair"
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.caseStudyContent}>
                <h3 className={styles.caseStudyTitle}>Engine Overhaul - Toyota Corolla</h3>
                <div className={styles.caseStudyDetails}>
                  <p className={styles.caseStudyDescription}>
                    A 2015 Toyota Corolla came in with significant engine issues, including excessive smoke from the
                    exhaust and poor performance. Our diagnostic revealed worn piston rings and valve seals.
                  </p>
                  <div className={styles.caseStudyProcess}>
                    <h4>Our Process:</h4>
                    <ol>
                      <li>Complete engine disassembly and inspection</li>
                      <li>Replacement of worn components including piston rings, valve seals, and gaskets</li>
                      <li>Cylinder head reconditioning</li>
                      <li>Reassembly with precise torque specifications</li>
                      <li>Comprehensive testing and break-in procedure</li>
                    </ol>
                  </div>
                  <div className={styles.caseStudyResult}>
                    <h4>Result:</h4>
                    <p>
                      The vehicle was restored to excellent running condition with improved fuel efficiency and
                      performance. The customer reported a smoother ride and elimination of all previous symptoms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.caseStudy}>
              <div className={styles.caseStudyImage}>
                <Image
                  src="/suspension.jpg"
                  alt="Suspension Repair"
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.caseStudyContent}>
                <h3 className={styles.caseStudyTitle}>Suspension Overhaul - Honda Fit</h3>
                <div className={styles.caseStudyDetails}>
                  <p className={styles.caseStudyDescription}>
                    A 2017 Honda Fit arrived with complaints of excessive bouncing, poor handling, and unusual noises
                    when driving over bumps. Our inspection revealed worn shock absorbers and damaged control arm
                    bushings.
                  </p>
                  <div className={styles.caseStudyProcess}>
                    <h4>Our Process:</h4>
                    <ol>
                      <li>Complete suspension system inspection</li>
                      <li>Replacement of all four shock absorbers with high-quality units</li>
                      <li>Replacement of control arm bushings</li>
                      <li>Wheel alignment</li>
                      <li>Road testing to ensure proper handling</li>
                    </ol>
                  </div>
                  <div className={styles.caseStudyResult}>
                    <h4>Result:</h4>
                    <p>
                      The vehicle&apos;s handling was completely restored, with improved stability and comfort. The customer
                      reported a significant improvement in ride quality and elimination of all unusual noises.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RepairInspection

