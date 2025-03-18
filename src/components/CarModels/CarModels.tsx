"use client"

import { useState } from "react"
import Image from "next/image"
import styles from "./CarModels.module.scss"

const carModels = [
  {
    id: "swift",
    name: "Suzuki Swift",
    description: "A stylish and fuel-efficient compact car perfect for city driving.",
    image: "/swift_new.jpg",
    specs: {
      engine: "1.2L DualJet",
      power: "83 HP",
      transmission: "5-speed Manual / CVT",
      fuelEconomy: "20.4 km/L",
      price: "Starting from ¥1,500,000",
    },
  },
  {
    id: "jimny",
    name: "Suzuki Jimny",
    description: "A compact off-road SUV with incredible capabilities and iconic design.",
    image: "/jimny_new.jpg",
    specs: {
      engine: "1.5L K15B",
      power: "102 HP",
      transmission: "5-speed Manual / 4-speed Automatic",
      fuelEconomy: "16.2 km/L",
      price: "Starting from ¥1,950,000",
    },
  },
  {
    id: "vitara",
    name: "Suzuki Vitara",
    description: "A versatile compact SUV offering comfort, style, and performance.",
    image: "/vitara_new.jpg",
    specs: {
      engine: "1.4L Boosterjet Turbo",
      power: "140 HP",
      transmission: "6-speed Manual / 6-speed Automatic",
      fuelEconomy: "18.1 km/L",
      price: "Starting from ¥2,200,000",
    },
  },
]

const CarModels = () => {
  const [activeModel, setActiveModel] = useState<string | null>(null)

  const toggleModel = (id: string) => {
    setActiveModel(activeModel === id ? null : id)
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Car Models</h2>
        <p className={styles.subtitle}>Explore our range of new Suzuki vehicles</p>

        <div className={styles.accordionContainer}>
          {carModels.map((model) => (
            <div key={model.id} className={`${styles.accordionItem} ${activeModel === model.id ? styles.active : ""}`}>
              <button className={styles.accordionHeader} onClick={() => toggleModel(model.id)}>
                <h3 className={styles.modelName}>{model.name}</h3>
                <span className={styles.accordionIcon}></span>
              </button>

              <div className={styles.accordionContent}>
                <div className={styles.modelContent}>
                  <div className={styles.modelImage}>
                    <Image
                      src={model.image || "/placeholder.svg"}
                      alt={model.name}
                      width={400}
                      height={250}
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.modelInfo}>
                    <p className={styles.modelDescription}>{model.description}</p>
                    <div className={styles.modelSpecs}>
                      <h4 className={styles.specsTitle}>Specifications</h4>
                      <ul className={styles.specsList}>
                        <li>
                          <strong>Engine:</strong> {model.specs.engine}
                        </li>
                        <li>
                          <strong>Power:</strong> {model.specs.power}
                        </li>
                        <li>
                          <strong>Transmission:</strong> {model.specs.transmission}
                        </li>
                        <li>
                          <strong>Fuel Economy:</strong> {model.specs.fuelEconomy}
                        </li>
                        <li>
                          <strong>Price:</strong> {model.specs.price}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.searchSection}>
          <h3 className={styles.searchTitle}>Find Your Perfect Suzuki</h3>
          <div className={styles.searchForm}>
            <div className={styles.formGroup}>
              <label htmlFor="model" className={styles.label}>
                Model
              </label>
              <select id="model" className={styles.select}>
                <option value="">All Models</option>
                <option value="swift">Swift</option>
                <option value="jimny">Jimny</option>
                <option value="vitara">Vitara</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="color" className={styles.label}>
                Color
              </label>
              <select id="color" className={styles.select}>
                <option value="">All Colors</option>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="silver">Silver</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="transmission" className={styles.label}>
                Transmission
              </label>
              <select id="transmission" className={styles.select}>
                <option value="">All Types</option>
                <option value="manual">Manual</option>
                <option value="automatic">Automatic</option>
                <option value="cvt">CVT</option>
              </select>
            </div>

            <button className={styles.searchButton}>Search</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CarModels

