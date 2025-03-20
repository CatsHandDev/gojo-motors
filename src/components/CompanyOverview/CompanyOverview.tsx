import Image from "next/image"
import styles from "./CompanyOverview.module.scss"

const CompanyOverview = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.companyInfo}>
          <h2 className={styles.sectionTitle}>About G-select</h2>
          <p className={styles.sectionSubtitle}>Your trusted automotive partner since 1985</p>

          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Company Name</h3>
              <p className={styles.infoContent}>G-select Co., Ltd.</p>
            </div>

            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Established</h3>
              <p className={styles.infoContent}>April 1985</p>
            </div>

            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>CEO</h3>
              <p className={styles.infoContent}>Toshiro Gojo</p>
            </div>

            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Headquarters</h3>
              <p className={styles.infoContent}>123 Automotive Street, Tokyo, Japan 123-4567</p>
            </div>

            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Phone</h3>
              <p className={styles.infoContent}>(123) 456-7890</p>
            </div>

            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Email</h3>
              <p className={styles.infoContent}>info@gojomotors.com</p>
            </div>

            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Number of Employees</h3>
              <p className={styles.infoContent}>45</p>
            </div>

            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Business Hours</h3>
              <p className={styles.infoContent}>
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div className={styles.companyHistory}>
          <h2 className={styles.sectionTitle}>Our History</h2>
          <p className={styles.sectionSubtitle}>The journey of G-select through the years</p>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>1985</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Foundation</h3>
                <p className={styles.timelineText}>
                  G-select was founded by Hiroshi Gojo as a small repair shop in Tokyo.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>1992</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Expansion</h3>
                <p className={styles.timelineText}>
                  Expanded business to include used car sales, growing to a team of 15 employees.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2001</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>New Car Dealership</h3>
                <p className={styles.timelineText}>
                  Became an authorized Suzuki dealership, adding new car sales to our services.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2010</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>New Headquarters</h3>
                <p className={styles.timelineText}>
                  Moved to our current location with expanded showroom and service facilities.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2018</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Leadership Transition</h3>
                <p className={styles.timelineText}>
                  Toshiro Gojo, son of the founder, took over as CEO, bringing new vision and energy.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>Present</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Continued Growth</h3>
                <p className={styles.timelineText}>
                  Today, G-select continues to grow while maintaining our commitment to quality service and customer
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.businessDetails}>
          <h2 className={styles.sectionTitle}>Our Business</h2>
          <p className={styles.sectionSubtitle}>Comprehensive automotive services</p>

          <div className={styles.businessGrid}>
            <div className={styles.businessCard}>
              <h3 className={styles.businessTitle}>New Car Sales</h3>
              <p className={styles.businessText}>
                As an authorized Suzuki dealership, we offer the complete range of new Suzuki vehicles with expert
                guidance and competitive pricing.
              </p>
            </div>

            <div className={styles.businessCard}>
              <h3 className={styles.businessTitle}>Used Car Sales</h3>
              <p className={styles.businessText}>
                We offer a wide selection of quality pre-owned vehicles that undergo thorough inspection and
                certification before sale.
              </p>
            </div>

            <div className={styles.businessCard}>
              <h3 className={styles.businessTitle}>Repair Services</h3>
              <p className={styles.businessText}>
                Our certified technicians provide comprehensive repair services for all makes and models, using
                state-of-the-art equipment.
              </p>
            </div>

            <div className={styles.businessCard}>
              <h3 className={styles.businessTitle}>Vehicle Inspection</h3>
              <p className={styles.businessText}>
                We provide thorough vehicle inspections to ensure your car is safe, reliable, and compliant with all
                regulations.
              </p>
            </div>

            <div className={styles.businessCard}>
              <h3 className={styles.businessTitle}>Financing Solutions</h3>
              <p className={styles.businessText}>
                We offer flexible financing options to help you purchase your dream car with manageable monthly
                payments.
              </p>
            </div>

            <div className={styles.businessCard}>
              <h3 className={styles.businessTitle}>Insurance Services</h3>
              <p className={styles.businessText}>
                We partner with leading insurance providers to offer comprehensive coverage options for your vehicle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyOverview

