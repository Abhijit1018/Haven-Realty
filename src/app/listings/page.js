'use client';
import { useState, useMemo } from 'react';
import { Grid3X3, List, MapPin, SlidersHorizontal, X } from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';
import ScrollReveal from '@/components/ScrollReveal';
import { properties, propertyTypes, locations, priceRanges } from '@/data/properties';
import styles from './page.module.css';

export default function ListingsPage() {
    const [viewMode, setViewMode] = useState('grid');
    const [selectedType, setSelectedType] = useState('All');
    const [selectedLocation, setSelectedLocation] = useState('All Locations');
    const [selectedPrice, setSelectedPrice] = useState(0);
    const [sortBy, setSortBy] = useState('default');
    const [showFilters, setShowFilters] = useState(false);

    const filteredProperties = useMemo(() => {
        let result = [...properties];

        if (selectedType !== 'All') {
            result = result.filter(p => p.type === selectedType);
        }

        if (selectedLocation !== 'All Locations') {
            result = result.filter(p => p.location.includes(selectedLocation));
        }

        const priceRange = priceRanges[selectedPrice];
        if (priceRange) {
            result = result.filter(p => p.price >= priceRange.min && p.price <= priceRange.max);
        }

        if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
        if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
        if (sortBy === 'area-desc') result.sort((a, b) => b.sqft - a.sqft);

        return result;
    }, [selectedType, selectedLocation, selectedPrice, sortBy]);

    return (
        <>
            {/* Hero Banner */}
            <section className={styles.hero}>
                <div className="container">
                    <h1>Property Listings</h1>
                    <p>Explore our curated collection of premium properties across India</p>
                </div>
            </section>

            <section className={`section ${styles.listingsSection}`}>
                <div className="container">
                    {/* Toolbar */}
                    <div className={styles.toolbar}>
                        <div className={styles.toolbarLeft}>
                            <span className={styles.resultCount}>{filteredProperties.length} Properties Found</span>
                            <button
                                className={styles.filterToggle}
                                onClick={() => setShowFilters(!showFilters)}
                            >
                                <SlidersHorizontal size={16} />
                                Filters
                            </button>
                        </div>
                        <div className={styles.toolbarRight}>
                            <select
                                className="form-select"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                style={{ width: 'auto', padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                            >
                                <option value="default">Sort By: Default</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                                <option value="area-desc">Area: Largest First</option>
                            </select>
                            <div className={styles.viewToggle}>
                                <button
                                    className={viewMode === 'grid' ? styles.active : ''}
                                    onClick={() => setViewMode('grid')}
                                    aria-label="Grid view"
                                >
                                    <Grid3X3 size={18} />
                                </button>
                                <button
                                    className={viewMode === 'list' ? styles.active : ''}
                                    onClick={() => setViewMode('list')}
                                    aria-label="List view"
                                >
                                    <List size={18} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contentGrid}>
                        {/* Filter Sidebar */}
                        <aside className={`${styles.sidebar} ${showFilters ? styles.showFilters : ''}`}>
                            <div className={styles.sidebarHeader}>
                                <h3>Filters</h3>
                                <button onClick={() => setShowFilters(false)} className={styles.closeFilters}>
                                    <X size={20} />
                                </button>
                            </div>

                            <div className={styles.filterGroup}>
                                <label className="form-label">Property Type</label>
                                <div className={styles.filterChips}>
                                    {propertyTypes.map(type => (
                                        <button
                                            key={type}
                                            className={`${styles.chip} ${selectedType === type ? styles.chipActive : ''}`}
                                            onClick={() => setSelectedType(type)}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.filterGroup}>
                                <label className="form-label">Location</label>
                                <select
                                    className="form-select"
                                    value={selectedLocation}
                                    onChange={(e) => setSelectedLocation(e.target.value)}
                                >
                                    {locations.map(loc => (
                                        <option key={loc} value={loc}>{loc}</option>
                                    ))}
                                </select>
                            </div>

                            <div className={styles.filterGroup}>
                                <label className="form-label">Price Range</label>
                                <select
                                    className="form-select"
                                    value={selectedPrice}
                                    onChange={(e) => setSelectedPrice(Number(e.target.value))}
                                >
                                    {priceRanges.map((range, i) => (
                                        <option key={i} value={i}>{range.label}</option>
                                    ))}
                                </select>
                            </div>

                            <button
                                className="btn btn-outline btn-sm"
                                style={{ width: '100%', justifyContent: 'center' }}
                                onClick={() => {
                                    setSelectedType('All');
                                    setSelectedLocation('All Locations');
                                    setSelectedPrice(0);
                                }}
                            >
                                Clear All Filters
                            </button>
                        </aside>

                        {/* Property Grid */}
                        <div className={viewMode === 'grid' ? styles.propertyGrid : styles.propertyList}>
                            {filteredProperties.length > 0 ? (
                                filteredProperties.map((property, index) => (
                                    <ScrollReveal key={property.id} delay={index * 60}>
                                        <PropertyCard property={property} index={index} />
                                    </ScrollReveal>
                                ))
                            ) : (
                                <div className={styles.noResults}>
                                    <MapPin size={48} />
                                    <h3>No properties found</h3>
                                    <p>Try adjusting your filters to see more results.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
