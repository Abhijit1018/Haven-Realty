'use client';
import { useState, useMemo } from 'react';
import { Calculator, DollarSign, Percent, Clock, TrendingUp, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './page.module.css';

export default function MortgageCalculatorPage() {
    const [loanAmount, setLoanAmount] = useState(5000000);
    const [interestRate, setInterestRate] = useState(8.5);
    const [tenure, setTenure] = useState(20);
    const [openFaq, setOpenFaq] = useState(null);

    const emi = useMemo(() => {
        const r = interestRate / 12 / 100;
        const n = tenure * 12;
        if (r === 0) return loanAmount / n;
        return (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }, [loanAmount, interestRate, tenure]);

    const totalPayment = emi * tenure * 12;
    const totalInterest = totalPayment - loanAmount;
    const principalPercent = (loanAmount / totalPayment) * 100;

    const formatCurrency = (val) => {
        if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
        if (val >= 100000) return `₹${(val / 100000).toFixed(2)} L`;
        return `₹${Math.round(val).toLocaleString('en-IN')}`;
    };

    const faqs = [
        { q: 'What is EMI?', a: 'EMI (Equated Monthly Installment) is the fixed amount you pay every month towards your home loan. It includes both principal repayment and interest components.' },
        { q: 'How is EMI calculated?', a: 'EMI is calculated using the formula: EMI = P × r × (1+r)^n / ((1+r)^n - 1), where P is the loan amount, r is the monthly interest rate, and n is the total number of months.' },
        { q: 'Can I prepay my home loan?', a: 'Yes, most banks allow partial or full prepayment of home loans. Since 2012, RBI has mandated that no prepayment penalty can be charged on floating rate home loans.' },
        { q: 'What factors affect my home loan eligibility?', a: 'Key factors include your income, existing EMIs, credit score (CIBIL), age, employment type, and the property value. Most banks offer loans up to 75-90% of the property value.' },
    ];

    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <Calculator size={40} className={styles.heroIcon} />
                    <h1>Mortgage Calculator</h1>
                    <p>Plan your home loan with confidence. Calculate your monthly EMI and total interest payable.</p>
                </div>
            </section>

            <section className={`section ${styles.calcSection}`}>
                <div className="container">
                    <div className={styles.calcGrid}>
                        {/* Calculator Inputs */}
                        <ScrollReveal>
                            <div className={styles.inputCard}>
                                <h3>Loan Details</h3>

                                <div className={styles.sliderGroup}>
                                    <div className={styles.sliderHeader}>
                                        <label><DollarSign size={16} /> Loan Amount</label>
                                        <span className={styles.sliderValue}>{formatCurrency(loanAmount)}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min={500000}
                                        max={100000000}
                                        step={100000}
                                        value={loanAmount}
                                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                                        className={styles.slider}
                                    />
                                    <div className={styles.sliderRange}>
                                        <span>₹5L</span>
                                        <span>₹10 Cr</span>
                                    </div>
                                </div>

                                <div className={styles.sliderGroup}>
                                    <div className={styles.sliderHeader}>
                                        <label><Percent size={16} /> Interest Rate</label>
                                        <span className={styles.sliderValue}>{interestRate}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min={5}
                                        max={15}
                                        step={0.1}
                                        value={interestRate}
                                        onChange={(e) => setInterestRate(Number(e.target.value))}
                                        className={styles.slider}
                                    />
                                    <div className={styles.sliderRange}>
                                        <span>5%</span>
                                        <span>15%</span>
                                    </div>
                                </div>

                                <div className={styles.sliderGroup}>
                                    <div className={styles.sliderHeader}>
                                        <label><Clock size={16} /> Loan Tenure</label>
                                        <span className={styles.sliderValue}>{tenure} Years</span>
                                    </div>
                                    <input
                                        type="range"
                                        min={1}
                                        max={30}
                                        step={1}
                                        value={tenure}
                                        onChange={(e) => setTenure(Number(e.target.value))}
                                        className={styles.slider}
                                    />
                                    <div className={styles.sliderRange}>
                                        <span>1 yr</span>
                                        <span>30 yrs</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Results */}
                        <ScrollReveal delay={200}>
                            <div className={styles.resultCard}>
                                <h3>Your EMI Breakdown</h3>
                                <div className={styles.emiDisplay}>
                                    <span className={styles.emiLabel}>Monthly EMI</span>
                                    <span className={styles.emiValue}>{formatCurrency(emi)}</span>
                                </div>

                                <div className={styles.breakdownChart}>
                                    <div className={styles.chartBar}>
                                        <div className={styles.principalBar} style={{ width: `${principalPercent}%` }} />
                                        <div className={styles.interestBar} style={{ width: `${100 - principalPercent}%` }} />
                                    </div>
                                    <div className={styles.chartLegend}>
                                        <span><span className={styles.dotPrincipal} /> Principal</span>
                                        <span><span className={styles.dotInterest} /> Interest</span>
                                    </div>
                                </div>

                                <div className={styles.summaryGrid}>
                                    <div className={styles.summaryItem}>
                                        <span>Principal Amount</span>
                                        <strong>{formatCurrency(loanAmount)}</strong>
                                    </div>
                                    <div className={styles.summaryItem}>
                                        <span>Total Interest</span>
                                        <strong className={styles.interestText}>{formatCurrency(totalInterest)}</strong>
                                    </div>
                                    <div className={`${styles.summaryItem} ${styles.summaryTotal}`}>
                                        <span>Total Payment</span>
                                        <strong>{formatCurrency(totalPayment)}</strong>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* FAQ */}
                    <div className={styles.faqSection}>
                        <ScrollReveal>
                            <div className="section-header">
                                <span className="subtitle">Common Questions</span>
                                <h2>Frequently Asked Questions</h2>
                            </div>
                        </ScrollReveal>
                        <div className={styles.faqList}>
                            {faqs.map((faq, i) => (
                                <ScrollReveal key={i} delay={i * 80}>
                                    <div className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ''}`}>
                                        <button className={styles.faqQuestion} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                            <HelpCircle size={18} />
                                            <span>{faq.q}</span>
                                            {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                        </button>
                                        {openFaq === i && (
                                            <div className={styles.faqAnswer}>
                                                <p>{faq.a}</p>
                                            </div>
                                        )}
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
