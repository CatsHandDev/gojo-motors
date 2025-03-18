'use client'

import { useState } from 'react'
import { Slider } from '@mui/material';
import Image from 'next/image'
import styles from './UsedCarSearchPage.module.scss'

// Sample used car data
const usedCars = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Corolla',
    year: 2018,
    price: 1200000,
    mileage: 45000,
    image: '/corolla.jpg',
    features: ['Backup Camera', 'Bluetooth', 'Keyless Entry'],
    tags: ['Hybrid', 'No Repair History'],
  },
  {
    id: 2,
    make: 'Honda',
    model: 'Fit',
    year: 2019,
    price: 980000,
    mileage: 32000,
    image: '/fit.jpg',
    features: ['Backup Camera', 'Bluetooth', 'Cruise Control'],
    tags: ['Turbocharger', 'No Repair History'],
  },
  {
    id: 3,
    make: 'Nissan',
    model: 'Note',
    year: 2017,
    price: 850000,
    mileage: 58000,
    image: '/note.jpg',
    features: ['Bluetooth', 'Keyless Entry', 'Navigation System'],
    tags: ['Hybrid', 'Repair History'],
  },
  {
    id: 4,
    make: 'Mazda',
    model: 'Demio',
    year: 2020,
    price: 1350000,
    mileage: 22000,
    image: '/demio.jpg',
    features: ['Backup Camera', 'Bluetooth', 'Leather Seats'],
    tags: ['Turbocharger', 'No Repair History'],
  },
  {
    id: 5,
    make: 'Suzuki',
    model: 'Swift',
    year: 2016,
    price: 780000,
    mileage: 65000,
    image: '/swift.jpg',
    features: ['Bluetooth', 'Keyless Entry'],
    tags: ['4WD', 'Repair History'],
  },
  {
    id: 6,
    make: 'Subaru',
    model: 'Impreza',
    year: 2018,
    price: 1450000,
    mileage: 48000,
    image: '/impreza.jpg',
    features: ['Backup Camera', 'Bluetooth', 'Heated Seats', 'Navigation System'],
    tags: ['4WD', 'Turbocharger', 'No Repair History'],
  },
]

const UsedCarSearchPage = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [priceRange, setPriceRange] = useState<number[]>([500000, 2000000]);
  const [yearRange, setYearRange] = useState<number[]>([1980, 2025]);

  const availableTags = ['Hybrid', 'Turbocharger', '4WD', 'No Repair History', 'Repair History'];

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setPriceRange(newValue);
    }
  };

  const handleYearChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setYearRange(newValue);
    }
  };

  const filteredCars = usedCars.filter((car) => {
    if (car.price < priceRange[0] || car.price > priceRange[1]) return false;
    if (car.year < yearRange[0] || car.year > yearRange[1]) return false;
    if (selectedTags.length > 0) {
      const hasAllTags = selectedTags.every((tag) => car.tags.includes(tag));
      if (!hasAllTags) return false;
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return car.make.toLowerCase().includes(query) || car.model.toLowerCase().includes(query);
    }
    return true;
  });

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarContent}>
              <div className={styles.searchBox}>
                <input
                  type='text'
                  placeholder='Search by make or model...'
                  className={styles.searchInput}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className={styles.filterGroup}>
                <h3 className={styles.filterTitle}>Price Range</h3>
                <div className={styles.section}>
                  <div style={{padding: '0 .5rem'}}>
                    <Slider
                      value={priceRange}
                      onChange={handlePriceChange}
                      valueLabelDisplay='auto'
                      min={500000}
                      max={2000000}
                      step={50000}
                      marks={[
                        { value: 500000, label: `${priceRange[0].toLocaleString()}` },
                        { value: 2000000, label: `${priceRange[1].toLocaleString()}` },
                      ]}
                      sx={{
                        width: '100%',
                        color: 'rgb(15, 76, 129)',
                        '& .MuiSlider-mark': {
                          display: 'none'
                        },
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.filterGroup}>
                <h3 className={styles.filterTitle}>Year Range</h3>
                <div className={styles.section}>
                  <div style={{padding: '0 .5rem'}}>
                    <Slider
                      value={yearRange}
                      onChange={handleYearChange}
                      valueLabelDisplay='auto'
                      min={1980}
                      max={2025}
                      step={1}
                      marks={[
                        { value: 1980, label: `${yearRange[0].toLocaleString()}` },
                        { value: 2025, label: `${yearRange[1].toLocaleString()}` },
                      ]}
                      sx={{
                        width: '100%',
                        color: 'rgb(15, 76, 129)',
                        '& .MuiSlider-mark': {
                          display: 'none'
                        },
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.filterGroup}>
                <h3 className={styles.filterTitle}>Features</h3>
                <div className={styles.tagList}>
                  {availableTags.map((tag) => (
                    <button
                      key={tag}
                      className={`${styles.tagButton} ${selectedTags.includes(tag) ? styles.active : ''}`}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <button className={styles.resetButton}>Reset Filters</button>
            </div>
          </aside>

          <main className={styles.main}>
            <div className={styles.resultsHeader}>
              <div className={styles.resultsCount}>{filteredCars.length} cars found</div>
              <div className={styles.resultsControls}>
                <label htmlFor='itemsPerPage' className={styles.controlLabel}>
                  Show:
                </label>
                <select
                  id='itemsPerPage'
                  className={styles.controlSelect}
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                >
                  <option value='6'>6 per page</option>
                  <option value='12'>12 per page</option>
                  <option value='24'>24 per page</option>
                </select>
              </div>
            </div>

            <div className={styles.carGrid}>
              {filteredCars.slice(0, itemsPerPage).map((car) => (
                <div key={car.id} className={styles.carCard}>
                  <div className={styles.carImage}>
                    <Image
                      src={car.image}
                      alt={`${car.year} ${car.make} ${car.model}`}
                      width={300}
                      height={200}
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.carInfo}>
                    <h3 className={styles.carTitle}>
                      {car.year} {car.make} {car.model}
                    </h3>
                    <div className={styles.carPrice}>¥{car.price.toLocaleString()}</div>
                    <div className={styles.carDetails}>
                      <div className={styles.carDetail}>
                        <span className={styles.detailLabel}>Mileage:</span>
                        <span className={styles.detailValue}>{car.mileage.toLocaleString()} km</span>
                      </div>
                    </div>
                    <div className={styles.carTags}>
                      {car.tags.map((tag) => (
                        <span key={tag} className={styles.carTag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className={styles.carFeatures}>
                      <h4 className={styles.featuresTitle}>Features:</h4>
                      <ul className={styles.featuresList}>
                        {car.features.map((feature) => (
                          <li key={feature} className={styles.featureItem}>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div style={{flex: 1}}/>
                  <button className={styles.carButton}>View Details</button>
                </div>
              ))}
            </div>

            {filteredCars.length === 0 && (
              <div className={styles.noResults}>
                <p>No cars match your search criteria. Please adjust your filters.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  )
}

export default UsedCarSearchPage

