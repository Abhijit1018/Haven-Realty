import Link from 'next/link';
import Image from 'next/image';
import { MapPin, BedDouble, Bath, Maximize, Heart } from 'lucide-react';
import styles from './PropertyCard.module.css';

export default function PropertyCard({ property, index = 0 }) {
    const statusClass = property.status === 'For Rent' ? 'badge-rent' : property.status === 'New Launch' ? 'badge-new' : 'badge-sale';

    return (
        <Link href={`/listings/${property.id}`} className={styles.card} style={{ animationDelay: `${index * 0.1}s` }}>
            <div className={styles.imageWrap}>
                <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.image}
                />
                <span className={`badge ${statusClass} ${styles.badge}`}>{property.status}</span>
                <button className={styles.favBtn} onClick={(e) => { e.preventDefault(); }} aria-label="Save to favorites">
                    <Heart size={18} />
                </button>
                <div className={styles.imageOverlay}>
                    <span className={styles.viewDetails}>View Details</span>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.priceRow}>
                    <span className={styles.price}>{property.priceFormatted}</span>
                    <span className={styles.type}>{property.type}</span>
                </div>
                <h3 className={styles.title}>{property.title}</h3>
                <p className={styles.location}>
                    <MapPin size={14} />
                    {property.location}
                </p>
                <div className={styles.specs}>
                    {property.bhk > 0 ? (
                        <span><BedDouble size={15} /> {property.bhk} BHK</span>
                    ) : null}
                    {property.bathrooms > 0 ? (
                        <span><Bath size={15} /> {property.bathrooms} Bath</span>
                    ) : null}
                    <span><Maximize size={15} /> {property.sqft} sq.ft</span>
                </div>
            </div>
        </Link>
    );
}
