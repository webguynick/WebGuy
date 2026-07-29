# FUNDABILITY AUDIT — Web Guy Nick LLC

**Prepared:** July 29, 2026
**Entity:** Web Guy Nick LLC — single-member California LLC
**Principal:** Nick Throlson, sole operator
**EIN:** 92-0894293 · **DUNS:** 123414390 · **NAICS:** 518210
**Funding goal:** $50K–$250K in 12–18 months, minimizing personal guarantees

---

## 0. Read This First

Three things before the score.

**1. Your $250K target is not reachable in 18 months at your current revenue.** Underwriters size credit to revenue, not ambition. Every product below caps out as a percentage of your trailing revenue. At an estimated $85K–$110K/yr, the entire market will offer you roughly $45K–$80K in aggregate credit at your best, and that requires a personal guarantee. $250K requires roughly $400K–$600K in annual revenue. That's a revenue problem, not a credit problem, and no amount of PAYDEX fixes it.

**2. "Without personal guarantees" is not available to you at this size.** I'll cover this in detail in §4, but the short version: no-PG financing above $10K requires either a large cash balance on deposit or 2+ years of audited-quality financials at $1M+ revenue. Vendor trade credit and one cash-collateralized corporate card are the only true no-PG instruments in your reach. Plan on signing PGs for the next 24–36 months.

**3. I audited your live website as part of this, and found problems that will directly cause verification failures.** These are in §2. The most serious: your public pricing doesn't match the pricing you gave me, your street address appears nowhere on the site, you list no business hours, and your phone area code doesn't match your city. Card issuers and underwriters pull up your website and cross-check it against your application. Right now those checks fail.

**Realistic reframe:** $50K–$75K in aggregate credit by Q3 2027, mostly 0% intro cards plus one line of credit, all PG-backed. $150K–$250K by 2029 if revenue reaches $400K+. That path is fully mapped below.

---

## 1. FUNDABILITY SCORE: **42 / 100**

> **Verdict: Not fundable today for the stated goal.** Fundable for $15K–$30K in 0% intro business cards within 60–90 days once §2 verification gaps are closed. The business credit file is too new to matter yet — it has no score on any bureau.

| # | Category | Weight | Score | Notes |
|---|---|---|---|---|
| 1 | Entity & Legal Foundation | 15 | **9** | LLC active, EIN, DUNS all in place. Disregarded-entity tax status and residential address are the drags. |
| 2 | Business Identity & Verifiability (NAP) | 15 | **6** | Worst category. No address or hours on site; area code/city mismatch; public pricing contradicts stated pricing. |
| 3 | Financial Infrastructure & Documentation | 20 | **7** | Business bank account exists. No separate business tax return, no stated bookkeeping system, no payroll. |
| 4 | Business Credit Profile | 20 | **5** | DUNS issued; zero confirmed reporting tradelines. No PAYDEX, no Intelliscore. Monitoring is set up — that's the credit. |
| 5 | Guarantor Strength (personal credit) | 15 | **7** | **Unscored — you didn't provide it.** Held at midpoint. This swings ±8 points and gates almost everything in §4. |
| 6 | Revenue Quality & Scale | 15 | **8** | 44 recurring clients is genuinely good. Scale is small and "cancel anytime" terms make the MRR unfinanceable. |
| | **TOTAL** | **100** | **42** | |

**Trajectory targets:** 68 by Day 90 (Oct 27, 2026) · 84 by month 12 (Jul 2027).

### The single biggest unknown

**You did not tell me your time in business.** It is the most heavily weighted variable in every model in §4 — more than PAYDEX, more than NAICS. Your EIN prefix (92) is an internet-assigned prefix that entered circulation around 2022–2023, which suggests formation in that window, so I've built this plan assuming **~2.5–3 years TIB with an LLC formation date in 2023**. Confirm it on your CA Secretary of State record before you rely on any date in §7.

If TIB is under 2 years: strike SBA microloan and traditional bank LOC from the near-term plan; everything else holds.
If TIB is over 3 years: pull every §7 date forward by roughly 60 days and add Fundbox and OnDeck to the §4 candidate list.

---

## 2. AUDIT 1 — STRUCTURAL

### Does single-member LLC status trigger a risk flag?

**Not by itself.** Single-member LLCs are approved constantly. What actually hurts you is the *tax election that comes with it by default*, plus three second-order effects:

**(a) Disregarded-entity status means you have no business tax return.** Your LLC income flows onto Schedule C of your personal 1040. To an underwriter, that is self-employment income, not business income. They cannot separate the entity from you, so they apply a haircut, treat you as a sole proprietor regardless of your LLC registration, and require a PG automatically. This is the #1 structural gap on this list.

**(b) Key-man risk with no mitigant.** Sole operator, no employees, no succession, no documented systems. SBA lenders require life insurance assignment where repayment depends on a single individual. Commercial underwriters price this in as elevated default risk.

**(c) No payroll means no 941/940 filing history.** Payroll tax filings are one of the cleanest third-party verifications of business activity that exists. You have none.

**(d) Your About page publicly says "one-person shop."** Underwriters read your website. You are volunteering the key-man risk in your own marketing copy. Don't lie — but don't lead with it either.

### Structural gaps ranked by denial impact

| # | Gap | Why it causes denials | Fix | Time |
|---|---|---|---|---|
| S1 | **No separate business tax return** (disregarded entity) | Underwriter cannot separate business from personal; auto-PG, income haircut, disqualifies most bank LOC and SBA 7(a) | Elect S-corp status (Form 2553) effective Jan 1, 2027 → produces an 1120-S | 2 hrs + CPA consult |
| S2 | **Residential address** (646 S Brampton Ave, Rialto) | Flagged residential in USPS/aggregator data; collides your business file with your personal credit file at the same address; several issuers auto-decline home addresses on business apps | Commercial address with a real suite number | 1–2 wks |
| S3 | **Zero verified financial statements** | No P&L, no balance sheet, no accounting system named. Every product above a card requires these | QuickBooks/Xero with 24 months backfilled and reconciled | 2–3 wks |
| S4 | **CA compliance status unverified** | A delinquent LLC-12 or FTB suspension is an instant, silent, universal denial — and you won't be told why | Verify Active status on bizfileOnline + FTB | 30 min |
| S5 | **No employees, no payroll history** | Removes the strongest third-party activity verification; caps LOC sizing | Resolved as a byproduct of S1 (S-corp requires W-2 salary to you) | With S1 |

### The address problem — read this carefully

`646 S Brampton Ave, Rialto, CA 92376` is a residential street address. This causes three separate failures:

1. **Data aggregators tag it residential.** D&B, Experian, and LexisNexis all append address-type data. A business address flagged "residential" downgrades verification scoring.
2. **Your business and personal credit files share an address.** This is how business files get erroneously linked to personal files, and it's how a business application gets routed to consumer underwriting.
3. **Some issuers hard-decline home addresses** on business card applications regardless of everything else.

**The fix, and the trap:** get a commercial address with a genuine suite number — an executive suite or coworking membership with mail service (Regus, Barrister, or a local Inland Empire coworking space in Ontario, Rancho Cucamonga, or San Bernardino). Budget $75–$200/mo.

**Do not use a UPS Store or any CMRA box.** A "#" or "PMB" suffix is in every underwriter's address-screening database as a mail drop. It is worse than your home address, because a home address reads as a small home-based business while a PMB reads as an attempt to conceal one. This is one of the most common self-inflicted denials in business credit building.

### Is NAICS 518210 optimal? Direct answer.

**Keep 518210 or move to 541511 — the difference is small. Never use 541613.**

| Code | Maps to SIC | Assessment |
|---|---|---|
| **518210** — Computing Infrastructure Providers, Data Processing, Web Hosting | 7374 | **Neutral-to-good.** Not on restricted lists. Supports your recurring-revenue narrative. *Downside:* it implies capital-intensive infrastructure. A "hosting provider" with ~$95K revenue and no equipment, no facility, and no employees reads off-profile against its peer group, which can cause a manual-review flag rather than a clean auto-approve. |
| **541511** — Custom Computer Programming Services | 7371 | **Cleanest fit.** Peer group is small professional-services firms whose financial shape matches yours: low assets, high margin, few employees. Well-benchmarked, never restricted. This is what a WordPress agency doing builds actually is. |
| **541613** — Marketing Consulting Services | 8742 | **Avoid.** SIC 8742 (management consulting) appears on multiple bank and MCA funder restricted/high-caution lists, and generic "consulting" is a long-standing shell-company signal in fraud models. This would actively lower your approval odds. |

**The real answer on the tradeoff:** the scoring delta between 518210 and 541511 is marginal. The delta from **inconsistency** is not. Your industry code appears on your D&B file, your Experian file, your bank's records, your merchant processor, and any application you submit. When those disagree, you get manual review and identity-verification friction.

**So: only change it if you change it everywhere in one pass.** If you want 541511, do it in a single coordinated sprint across D&B iUpdate, Experian, your bank, and your processor. If you're not going to do all of them, keep 518210 and make sure it's identical in all five places. Note that **D&B's file is keyed primarily on SIC, not NAICS** — verify SIC 7374 (or 7371) on your D&B record specifically.

**My recommendation:** keep 518210 as primary. It's defensible, it's already in place, and your hosting/care-plan revenue genuinely is data processing and hosting. Add 541511 as a secondary code where the system allows two. Spend the effort on consistency, not migration.

---

## 3. AUDIT 2 — INDUSTRY ALIGNMENT

I reviewed webguynick.com directly. These are findings from your actual live site, not general advice.

### Website findings — all of these fail underwriter verification today

| # | Finding | Evidence | Impact |
|---|---|---|---|
| W1 | **Public pricing contradicts the pricing you gave me** | You stated tiers of $29/$97/$247/$397. The live care-plans page shows **$79 / $149 / $249**. | **Severe.** If you state revenue on an application that reconciles to your stated tiers, and an underwriter prices 44 clients against your *published* tiers, the numbers won't tie. Pricing mismatches are a fraud-model trigger. Reconcile this before any application. |
| W2 | **Your street address appears nowhere on the site** | No instance of "646", "Brampton", or "92376" in any page. Only prose references to "Rialto" and a Yelp link. | **Severe.** Card issuers and underwriters check that the application address appears on the business website. It doesn't. This fails a basic verification step. |
| W3 | **No business hours listed anywhere** | No hours block on contact, about, footer, or homepage. | **High.** You asked specifically about this — confirmed missing. Underwriters verify hours and some issuers place verification calls during them. |
| W4 | **Phone area code doesn't match your city** | Site lists **(951) 536-0028**. 951 is Riverside County. Rialto 92376 is San Bernardino County — **area code 909**. | **High.** Your 411 listing, GBP, and D&B record will carry a 951 number against a 909 address. Geographic mismatch is a standard NAP-verification flag. |
| W5 | **"One-person shop" stated on the About page** | About page copy. | **Medium.** Volunteers key-man risk to anyone underwriting you. |
| W6 | **"Month-to-month. Cancel whenever."** | About + care-plans copy. | **High — and this one costs you real money.** See below. |

### W6 deserves its own section: your recurring revenue is currently unfinanceable

Recurring revenue is your single best asset — 44 clients paying monthly is exactly the profile lenders like. But **"cancel whenever" destroys its financing value.** Any lender or revenue-based financier valuing MRR discounts month-to-month, cancel-anytime revenue heavily, because contractually there is no revenue beyond the current month. Contracted revenue with a term is an asset. At-will revenue is a hope.

**Fix:** introduce annual agreements at a 2-months-free discount (pay for 10, get 12). Even converting 40% of your book to 12-month terms creates a contracted revenue base you can point to, and it materially raises what recurring-revenue lenders will advance. It also raises your business's sale multiple, which is your stated long-term goal. This is the highest-ROI item in this entire audit that isn't strictly a credit item.

### Licensing — verify all four

1. **City of Rialto business license** — required. Home-based operation additionally requires a **Home Occupation Permit**. Verify both are current.
2. **CA Statement of Information (LLC-12)** — due every 2 years. Late filing → $250 penalty → FTB suspension → universal silent denial.
3. **CA $800 minimum franchise tax** — confirm current. The gross-receipts LLC fee is $0 below $250K, so you owe the $800 only.
4. **Seller's permit** — likely *not* required; web design and hosting services are generally not taxable tangible personal property in CA. Don't file for one you don't need; it creates a CDTFA account you must then maintain.

**Note on federal BOI reporting:** FinCEN's March 2025 interim final rule exempted domestic reporting companies from beneficial-ownership reporting. As a US-formed LLC you most likely have no BOI obligation. Confirm current status — this area has moved repeatedly.

### Insurance — underwriters verify this, and you host 44 client sites

| Coverage | Limit | Est. cost/yr | Why |
|---|---|---|---|
| **General Liability** | $1M / $2M | $450–$800 | Baseline. Required by many client contracts and checked on commercial applications. |
| **Tech E&O / Professional Liability** | $1M | $800–$1,500 | The one that matters most for an agency. Covers the "site broke, client lost revenue" claim. |
| **Cyber Liability** | $1M | $700–$1,400 | **Non-negotiable for you.** You host 44 client sites. A breach on your infrastructure is your exposure across 44 businesses at once. Without this, one incident ends the business — and that is exactly the concentration risk an underwriter is pricing. |

Bundle Tech E&O + Cyber from Hiscox, Coalition, or Next — expect **$1,500–$2,800/yr all-in** for the three. Get certificates issued in the exact legal name **Web Guy Nick LLC** at the commercial address from S2.

**Workers' comp:** not required in CA with zero employees; single-member LLC owners are exempt. Some enterprise clients will still ask — a waiver/exemption letter satisfies them. Not a fundability item.

### Domain and email

- `info@webguynick.com` is in place. Good — no free-email address on your site.
- **Add `billing@` and `accounts@` aliases.** Applications ask for an accounts-payable contact; a real one adds verification weight.
- **Set the domain WHOIS registrant organization to "Web Guy Nick LLC"** and **prepay registration through 2031.** Domain age and registration length are cheap, checkable signals. A domain expiring in 8 months on an application looks like a business that may not exist in 8 months.
- Confirm SSL is enforced and the site has no mixed-content warnings. A browser warning during manual review is a real decline path.

### NAP — the master record

Lock one canonical record and propagate it everywhere. **Every field must match character-for-character**, including suite formatting.

```
Web Guy Nick LLC
[NEW COMMERCIAL ADDRESS], Suite ###
[City], CA [ZIP]
(909) ###-####          ← new 909 number, matched to county
info@webguynick.com
https://webguynick.com
Hours: Mon–Fri 9:00 AM – 5:00 PM PT
NAICS 518210 / SIC 7374
```

Propagate to: website footer + contact + about, Google Business Profile, Bing Places, Apple Business Connect, **Yelp (you have a live profile at `yelp.com/biz/web-guy-nick-rialto-4` — it must be updated)**, 411/directory-assistance listing, D&B via iUpdate, Experian Business, Nav, your bank, your merchant processor, and the CA SOS record.

---

## 4. AUDIT 3 — CREDIT PROFILE BUILD

### Where you actually are

Phase 0 is genuinely complete. But be clear-eyed about Phase 1: **you have zero confirmed reporting tradelines.** Applications in progress are not tradelines. You have no PAYDEX because D&B cannot compute one yet, and no meaningful Intelliscore because Experian has almost nothing to score. Your business credit file is, functionally, empty.

That is normal at your phase. It is not a failure. But it means **nothing in Phase 4 is reachable for at least 6 months**, and any attempt to shortcut it produces denials that then sit on your file as inquiries.

### What each of your four vendors actually reports

Verify each in Nav before relying on it — reporting relationships change without notice, and vendor marketing routinely overstates them.

| Vendor | D&B | Experian | Equifax | Notes for your business |
|---|---|---|---|---|
| **Uline** | ✅ Yes | ✅ Yes | ⚠️ Reported, verify | Reports to D&B on the 1st of each month. Reliable. **But you have no use for shipping supplies** — see the waste problem below. |
| **Quill** | ✅ Yes | ✅ Yes | ❌ No | Usually requires 1–2 prepaid orders before granting net-30. Start now; the prepay cycle is the delay. |
| **Crown Office Supplies** | ✅ Yes | ✅ Yes | ✅ Yes | **Your most valuable vendor** — the only one of the four hitting all three bureaus. $99/yr membership. Worth it purely for Equifax coverage. |
| **Strategic Network Solutions** | ✅ Reported | ⚠️ Verify | ⚠️ Verify | Could not independently confirm current bureau relationships. **Verify directly before counting on it.** Commonly listed as D&B-reporting. |

### The problem with this vendor set — and the fix

All four are office/industrial supply vendors. **You are a web agency. You don't buy pallets, shipping supplies, or bulk paper.** Net-30 tradelines only report when you actually transact, and most require a monthly minimum purchase to keep reporting. You are about to spend $150–$300/month on inventory you don't need, indefinitely, to manufacture tradelines.

**Replace waste with spend you already have:**

| Add | Reports to | Cost | Why it fits *you* |
|---|---|---|---|
| **Amazon Business — Pay by Invoice** | D&B, Experian, Equifax | Free | You already buy hardware, peripherals, and office goods. Zero incremental spend. **Highest-priority add.** |
| **Newegg Business** | D&B, Experian | Free | Workstations, drives, monitors, networking. Real purchases for a web/hosting business. |
| **eCredable Lift** | Equifax Business | ~$10/mo | **Reports your existing utility, internet, and phone bills** as tradelines. Perfect for a service business with no cost of goods. Pure signal, no waste. |
| **Nav Prime** | D&B, Experian, Equifax | ~$50/mo | The monthly fee *is* the tradeline, on all three bureaus, plus you already use Nav for monitoring. Consider this your Equifax insurance policy. |

**Target: 6–8 reporting tradelines before any Phase 4 application.** Five is the common floor; six to eight gives you margin if one stops reporting. Keep 3+ of them hitting Equifax, which is the hardest file to build and the one most often empty when a bank pulls it.

### Payment timing — the part almost everyone gets wrong

**PAYDEX 80 means you paid exactly on the due date. It is the score for being merely on time.**

The scale is anchored on days relative to terms:
- Pay **30 days early** → 100
- Pay **20 days early** → 90
- Pay **on the due date** → **80**
- Pay 15 days late → 70
- Pay 30 days late → 50

So if your goal is "PAYDEX 80+," paying your net-30 invoices on day 30 gets you exactly 80 and not one point more. One late payment drops you below and takes months to recover.

**Your rule: pay every net-30 invoice within 5–10 days of the invoice date.** That targets a PAYDEX in the 85–95 range and leaves headroom so a single slow month doesn't drop you under 80.

**Frequency matters as much as timing.** PAYDEX weights the number of payment experiences, not just their quality. Two vendors with 12 experiences each beats six vendors with 2 each. **Transact with every active vendor at least monthly.** Set calendar reminders. A tradeline with no activity stops contributing and ages off the file after 24 months.

**Threshold to know:** D&B needs roughly **3 trade experiences across 2–3 different suppliers** before it will compute a PAYDEX at all. With monthly transactions starting in Sprint 2, expect your first PAYDEX around **late October–November 2026**, and a stable 80+ around **January–February 2027**.

**Experian is faster and cheaper to move.** Intelliscore Plus (1–100 percentile) will generate off a single tradeline. Lenders generally want **76+**. Intelliscore weights tradeline count, utilization, and time in business — so it will lag your PAYDEX simply because your file is young. Realistic date for a lender-grade Intelliscore: **February–April 2027**.

**Equifax Business** is the one people skip and then get surprised by. Its Business Credit Risk Score (101–992) is pulled by banks more often than founders expect. Crown Office Supplies + eCredable Lift + Nav Prime is your Equifax stack. Start it in Sprint 2, not later.

### D&B file hygiene — free, and worth more than most paid services

Log into **D&B iUpdate** and verify, at minimum:
- Legal name exactly `Web Guy Nick LLC`
- Address and phone matching the §3 master NAP record
- **Year started** — if D&B shows a later date than your actual formation, you are being scored as younger than you are. This is common and it is costly. Correct it and be prepared to document formation date.
- SIC 7374 (or 7371 if you migrate), NAICS 518210
- Employee count: 1 — accurate is better than blank
- Annual revenue: report it accurately

**Do not buy D&B CreditBuilder Plus.** It runs roughly $1,500–$2,000/yr and its core value is letting you submit a handful of trade references manually. Your vendors will report those tradelines for free. Spend that $2,000 on the commercial address and the insurance stack instead — both of which move more categories in §1 than a D&B subscription does.

### Phase 3 (store cards) — timing gate

**Do not apply before all four are true:**
- ✅ 5+ tradelines reporting for 90+ days
- ✅ PAYDEX generated and ≥ 80
- ✅ Experian file open with an Intelliscore
- ✅ NAP fully propagated and stable for 60+ days

**Earliest realistic window: December 2026 – January 2027.**

Targets: Home Depot Commercial, Lowe's Business, Staples Business, Office Depot Business, Dell Business Credit, Best Buy Business. Note that **most of these still pull personal credit** despite being marketed as EIN-only. Assume a personal pull unless the vendor confirms otherwise in writing. Apply to **no more than two per 30 days**.

### Phase 4 (bank cards) — order matters more than timing

All four of your named targets pull personal credit and report to business bureaus. The sequencing below is not arbitrary — it's driven by issuer rules that will silently cost you cards if you get it wrong.

**Apply in this order:**

**1. Chase Ink (Unlimited or Cash) — go FIRST if you are under 5/24.**
Chase declines business card applications if you've opened **5+ personal credit cards in the last 24 months**, regardless of how strong everything else is. Business cards from most issuers don't report to your personal file, so they don't add to your 5/24 count — **but the Chase application itself is subject to it.** If you are going to stack cards, Chase must come before the others or you'll lock yourself out. 0% intro APR for 12 months from account opening.
*Check your 5/24 count before anything else in Phase 4.*

**2. Amex Blue Business Plus or Blue Business Cash — 60 days later.**
Historically the most accessible bank business card for a young company; Amex weights the personal profile and stated revenue heavily. 0% intro APR for 12 months. Watch Amex velocity rules: max 2 credit cards per 90 days, and a soft cap around 5 credit cards / 10 charge cards.

**3. US Bank Business Triple Cash Rewards — 60 days after Amex.**
0% intro APR on purchases and balance transfers for **12 billing cycles**. US Bank is inquiry-sensitive and strongly favors applicants with an existing deposit relationship. **Open a small US Bank business checking account 60–90 days before applying.**

**4. Capital One Spark — last.**
Cap One pulls **all three** personal bureaus on a single application — the most expensive inquiry footprint of the four — and enforces roughly one new card per 6 months. Spark Cash Plus is a charge card with no preset limit and no 0% intro period, so it's the weakest fit for a 0% stacking strategy. Take it last, or skip it if the first three deliver enough capacity.

**Spacing rule: 60–90 days between applications, no exceptions.** Applying to 3+ cards inside a few days — sometimes sold as "same-day funding" or "shotgun stacking" — triggers fraud review at every issuer that sees the cluster. Modern inquiry data is close to real-time. This tactic no longer works and it burns your file.

**Utilization rule:** keep aggregate business card utilization **under 30% at each statement date**. Experian Intelliscore weights utilization directly. Running 0% cards to 90% is exactly how founders get a lower Intelliscore while believing they're building credit. Pay down before the statement cuts, not before the due date.

---

## 5. AUDIT 4 — FUNDING PRODUCT MATCH

### Your revenue, modeled

You gave tiers of $29/$97/$247/$397 across 44 sites. **Your published pricing is $79/$149/$249** (finding W1). Modeling both:

| Scenario | Care-plan MRR | Care-plan ARR |
|---|---|---|
| Stated tiers, low-weighted | ~$4,270 | ~$51,000 |
| Stated tiers, mid-weighted | ~$5,800 | ~$70,000 |
| Published tiers, mid-weighted | ~$5,950 | ~$71,000 |

Project builds at $1,500–$5,000, realistically ~1/month for a solo operator also servicing 44 sites: **~$36,000/yr**.

**Estimated total annual revenue: $85,000 – $110,000. Monthly bank deposits: ~$7,000 – $9,000.**

Everything below is sized against ~$95K. **Correct this number if it's wrong — every recommendation moves with it.**

### Ranked

#### 🥇 1. 0% Intro APR Business Credit Cards — **START HERE**

**Why first:** approval turns on your *personal* credit and *stated* revenue, not business financials, tax returns, or time in business. This is the only product on the list your current profile clears cleanly. 12 months at 0% is genuinely free capital, and every card reports to business bureaus — so this simultaneously builds the file you need for everything else.

- **Realistic capacity:** $8K–$20K per card × 3–4 cards = **$30,000–$70,000 aggregate**, at 700+ personal FICO
- **Criteria to hit:** personal FICO **700+** (740+ for best limits), utilization under 20% at statement, no derogatories in 24 months, revenue stated accurately, business verifiable online (§3 — this is why W1–W4 must be fixed first)
- **Cost:** 0% for 12 months, then 16.74%–28.49% variable. To convert to cash, Melio or Plastiq at ~2.9% — still far cheaper than any alternative below
- **Watch:** the 0% window is a hard deadline. Have a payoff plan before you draw

#### 🥈 2. Business Line of Credit — **SECOND, ~MONTH 5**

Best fit: **American Express Business Line of Credit** (formerly Kabbage). Qualification bar is low enough that you clear it now, and it verifies revenue by linking your bank account via Plaid rather than demanding tax returns — which sidesteps your S1 gap entirely.

- **Amex BLOC criteria:** ~12 months TIB, **$3,000+ average monthly revenue** (you're at ~$7–9K ✅), personal FICO **660+**
- **Realistic draw at your revenue:** $10,000–$20,000 (headline "up to $250K" is not your number)
- **Fundbox** as backup: FICO 600+, 3–6 months of bank history, but wants **$100K+ annual revenue** — you are right at that line, so it's a coin flip until revenue grows
- **Traditional bank LOC** (Chase, BofA, US Bank): needs 2+ years TIB *and* business tax returns. Blocked by S1 until the 1120-S exists. Would size to 10–20% of revenue anyway — **$9,500–$19,000**. Not worth prioritizing
- **Why not first:** wants 6+ months of clean, well-organized business bank deposits. Fix the bookkeeping in Sprint 2–3, then apply

#### 🥉 3. SBA Microloan — **THIRD, APPLY IN PARALLEL**

The cheapest money available to you, and worth the paperwork despite being slow and small.

- **Size:** up to $50,000 (national average lands around $16K–$18K)
- **Rate/term:** ~8%–13%, up to 7 years — dramatically cheaper than anything in tier 4
- **CA intermediary:** **Accion Opportunity Fund** is the primary SoCal option and is genuinely microbusiness-friendly (they lend $5K–$250K; no hard minimum credit score, though 600+ improves odds). Also look at CDC Small Business Finance and Pacific Coast Regional
- **Requires:** personal guarantee **always**, often collateral, business plan, 1–2 years of returns, financial projections
- **Timeline:** 30–90 days from application to funding
- **Why do it:** cheap capital *and* it creates an installment tradeline on your business file, which diversifies a credit mix that is otherwise 100% revolving. That mix improves Intelliscore
- **Not SBA 7(a):** 7(a) prescreens on FICO SBSS with a 155 minimum, blending personal credit, business credit, and financials. Your business-credit component is near zero. Revisit in 2028

#### 4️⃣ 4. Revenue-Based Financing / MCA — **AVOID**

Direct: **do not take an MCA.** For your profile the math is destructive and partly irreversible.

- **What you'd be offered:** $8,000–$15,000 at factor rates of 1.25–1.49 → **effective APR 40%–120%**
- **How it's repaid:** daily or weekly ACH debits from your operating account. Against ~$8K/month with lumpy project income, this creates a cash crunch in your first slow month
- **The part that isn't reversible:** MCA funders file **UCC-1 blanket liens** on all business assets. That lien appears on your business credit report and **disqualifies you from bank LOCs and SBA loans for years after payoff.** You would be trading $12K today for the $50K+ you actually want
- **Stacking is a death spiral.** Once you have one MCA, the second one finds you. It is the single most common way small agencies fail financially

**The one legitimate exception, later:** true recurring-revenue financing — Pipe, Capchase, Arc — advances against *contracted* MRR at a 6%–12% discount, with no daily debits and no blanket lien. Structurally different and structurally sound. Most require **$100K+ in contracted ARR**. Your care plans are at ~$51K–$71K ARR **and are month-to-month cancel-anytime** (finding W6), which disqualifies you on both counts. **Fix the contract terms, grow care-plan ARR past $100K, then revisit.** That's a 2027–2028 instrument and a real one.

### The no-PG question, answered honestly

Everything above except vendor trade credit requires a personal guarantee. Your complete no-PG universe today:

| Instrument | Available to you? |
|---|---|
| Vendor net-30 trade credit | ✅ Yes — but small, and it's supplies, not cash |
| **Ramp corporate card** | ⚠️ **Conditionally.** No PG, no personal credit check. Requires **$25,000 held in a US business bank account**, verified via Plaid. Available to LLCs (not sole props) — you qualify structurally. But limits are set as a fraction of cash on hand, so $25K on deposit yields maybe $5K–$10K of limit. It does not solve a capital need; it's a spend tool for a business that already has cash |
| Brex | ❌ Effectively no — now targets larger and VC-backed companies |
| Bank LOC / SBA / cards | ❌ No. Universal PG under $1M revenue |

**True no-PG at $50K–$250K requires: 2+ years TIB, $1M+ revenue, strong files on all three business bureaus, and reviewed or audited financials.** That is a 2029 target on your current trajectory, and it moves closer only as revenue grows. Sign the PGs, keep utilization low, and build toward it.

---

## 6. 90-DAY ACTION PLAN

Six sprints, July 29 → October 27, 2026. Ordered by dependency — later sprints assume earlier ones are done.

### Sprint 1 · Jul 29 – Aug 11 · *Verify and stop the bleeding*
> **No applications this sprint.** Everything here is verification. Applying before this is done is how you collect denials.

- [ ] Pull CA SOS record at bizfileOnline — confirm **Active**, confirm LLC-12 current, **record your exact formation date**
- [ ] Confirm FTB status; verify $800 franchise tax paid
- [ ] Verify City of Rialto business license + Home Occupation Permit are current
- [ ] Log into **D&B iUpdate** — audit name, address, phone, **year started**, SIC, NAICS, employee count, revenue. Correct every error
- [ ] Pull your **personal credit report and FICO from all three bureaus.** This gates §4 and you haven't measured it
- [ ] **Reconcile the pricing discrepancy (W1)** — decide the real tiers, and make site and internal numbers agree
- [ ] Pull a full client list with tier and monthly amount; compute exact MRR. Stop estimating
- [ ] Confirm bureau reporting *directly with* Uline, Quill, Crown, and Strategic Network Solutions — get it in writing

### Sprint 2 · Aug 12 – Aug 25 · *Fix identity, open real tradelines*
- [ ] **Secure commercial address with suite number** (Ontario / Rancho Cucamonga / San Bernardino). **Not a UPS Store or PMB**
- [ ] **Provision a 909 business number**; port or forward the 951; update the 411 listing
- [ ] Update the master NAP record everywhere: site, GBP, Bing, Apple, **Yelp**, D&B, Experian, Nav, bank
- [ ] **Website fixes: add full address to footer + contact page; add business hours (Mon–Fri 9–5 PT); reword "one-person shop"; add `billing@` alias**
- [ ] Set WHOIS registrant org to `Web Guy Nick LLC`; **prepay domain through 2031**
- [ ] Open **Amazon Business Pay by Invoice** ← highest-value tradeline, zero wasted spend
- [ ] Open **Newegg Business** and **eCredable Lift**
- [ ] Complete Crown Office Supplies ($99/yr — your only three-bureau vendor)
- [ ] Place first orders on every open account. **Pay each within 5–10 days of invoice date**

### Sprint 3 · Aug 26 – Sep 8 · *Financial infrastructure*
- [ ] Stand up **QuickBooks or Xero**; connect the business bank account
- [ ] **Backfill and reconcile 24 months** of transactions
- [ ] Produce a clean P&L and balance sheet — trailing 12 months and YTD
- [ ] **Purge every personal expense from the business account.** Bank-statement underwriting reads these line by line
- [ ] Bind **GL + Tech E&O + Cyber** in the exact legal name at the new address ($1,500–$2,800/yr)
- [ ] Book a CPA consult on **S-corp election** — bring the P&L. Decision point: at ~$70K net, a ~$45K reasonable salary saves roughly $3,800/yr in self-employment tax against ~$1,500–$2,500 in added compliance cost, *and* produces the 1120-S that unlocks bank LOC and SBA
- [ ] Complete the NAP consistency audit you have in progress and mark it done
- [ ] Second-cycle orders on all vendors; pay in 5–10 days

### Sprint 4 · Sep 9 – Sep 22 · *First applications*
> Gate check: NAP propagated, website fixed, 4+ tradelines active, personal FICO known.

- [ ] **Check your Chase 5/24 count.** If under 5 → **apply Chase Ink Unlimited or Cash first.** This is the sequencing decision that matters most
- [ ] If FICO is under 700: **do not apply.** Spend this sprint paying down personal revolving balances below 20% and re-check in 30 days
- [ ] Add **Nav Prime** if Equifax coverage is still thin
- [ ] Roll out **annual care-plan agreements** — pay for 10, get 12. Target 40% of the book converted. This fixes W6 and is your highest-leverage revenue move
- [ ] Draft the SBA microloan package: business plan, 24-month projections, P&L, personal financial statement
- [ ] Third-cycle vendor orders; pay in 5–10 days

### Sprint 5 · Sep 23 – Oct 6 · *Score emergence*
- [ ] Check Nav for **first PAYDEX**. If none, verify each vendor is actually reporting — chase any that aren't
- [ ] Confirm the Experian Business file is open and an Intelliscore exists
- [ ] **Submit SBA microloan application** to Accion Opportunity Fund
- [ ] Open a **small US Bank business checking account** — establishes the relationship 90 days ahead of the Triple Cash application in Sprint 7+
- [ ] If Chase was approved: keep utilization under 30% at statement. Do not apply to anything else this sprint
- [ ] Fourth-cycle vendor orders; pay in 5–10 days

### Sprint 6 · Oct 7 – Oct 27 · *Consolidate*
- [ ] **Apply for Amex Blue Business Plus or Blue Business Cash** (60+ days after Chase)
- [ ] Pull all three business credit reports; dispute every inaccuracy
- [ ] Confirm **6+ tradelines reporting**; add vendors if short
- [ ] Verify insurance certificates, licenses, and NAP are all consistent post-address-change
- [ ] Finalize the S-corp decision — **Form 2553 must be filed by March 15, 2027** for a Jan 1, 2027 effective date
- [ ] **Re-score this audit.** Target: 68/100
- [ ] Fifth-cycle vendor orders; pay in 5–10 days

---

## 7. TARGET DATES BY PRODUCT

| Product | Ready to apply | Realistic amount | Gate |
|---|---|---|---|
| Net-30 vendor accounts | **Now** | Trade credit | None |
| First PAYDEX generated | **Oct–Nov 2026** | — | 3 experiences / 2–3 suppliers |
| **Chase Ink (0%)** | **Sep 2026** | $8K–$15K | FICO 700+, under 5/24, website fixed |
| **Amex Blue Business (0%)** | **Oct–Nov 2026** | $8K–$20K | 60 days after Chase |
| PAYDEX 80+ stable | **Dec 2026 – Feb 2027** | — | 6 months of early payments |
| **SBA Microloan** (Accion) | **Applied Oct 2026 → funded Dec 2026–Jan 2027** | $15K–$50K | Financials, business plan, PG |
| Store cards (Phase 3) | **Dec 2026 – Jan 2027** | $2K–$10K ea | 5+ tradelines, PAYDEX 80+ |
| **US Bank Triple Cash (0%)** | **Jan 2027** | $8K–$15K | 90-day US Bank deposit relationship |
| **Amex Business LOC** | **Jan–Feb 2027** | $10K–$20K | 12 mo TIB, FICO 660+, clean deposits |
| Intelliscore 76+ | **Feb–Apr 2027** | — | Tradeline count + age + utilization |
| Capital One Spark | **Mar–Apr 2027** | $10K–$20K | 60 days after US Bank |
| **$50K aggregate reached** | **Q2–Q3 2027** | **$50K–$75K** | Cards + LOC + microloan, all PG |
| Traditional bank LOC | **Mid–late 2027** | $15K–$30K | 2 yrs TIB + **1120-S return** |
| Ramp (no PG) | **Q2 2027+** | $5K–$10K | Sustained $25K bank balance |
| Recurring-revenue financing | **2028** | $30K–$75K | **$100K+ contracted ARR** |
| **$150K–$250K aggregate** | **2029** | — | **Requires $400K–$600K revenue** |

---

## 8. DO NOT DO

Ranked by how much damage each one causes.

1. **Do not take a merchant cash advance.** The UCC-1 blanket lien disqualifies you from bank LOCs and SBA loans for years after payoff. You'd trade $12K now for the $50K you're actually trying to get.
2. **Do not use a UPS Store, PMB, or CMRA address.** It's in every underwriter's address-screening database as a mail drop. Worse than your home address, because home reads as a small home-based business and PMB reads as concealment.
3. **Do not apply to 3+ cards in a few days.** "Shotgun stacking" and "same-day funding" tactics trigger fraud review at every issuer that sees the inquiry cluster. Inquiry data is effectively real-time now.
4. **Do not apply for Chase after opening 5+ personal cards in 24 months.** 5/24 is an automatic decline regardless of everything else. Sequence Chase first.
5. **Do not misstate revenue on any application.** Amex and Chase pull bank data via Plaid. It's fraud, it's detectable, and it voids the account. Your published pricing (W1) must reconcile to whatever you state.
6. **Do not pay net-30 invoices on day 30 expecting 80+.** Day 30 *is* 80. Pay within 5–10 days.
7. **Do not let the LLC-12 lapse or the entity go FTB-suspended.** Silent, universal denial — no one tells you why.
8. **Do not buy D&B CreditBuilder Plus** at $1,500–$2,000. Your vendors report for free. Put that money into the commercial address and the insurance stack.
9. **Do not buy "aged shelf corporations," seasoned tradelines, or CPNs.** This is fraud, not a shortcut, and the vendors selling it will not be there when it unwinds.
10. **Do not run personal expenses through the business account.** Bank-statement underwriting reads every line. Groceries and streaming subscriptions in a business account signal commingling and undermine the entire LLC separation you're paying to maintain.
11. **Do not let a tradeline go dormant.** No activity → stops contributing → ages off at 24 months. Transact monthly.
12. **Do not run 0% cards to 90% utilization.** Keep aggregate under 30% **at statement date**. Otherwise you build balances while lowering Intelliscore.
13. **Do not accept client payments to personal Venmo, Zelle, or Cash App.** Revenue that doesn't land in the business account doesn't exist to an underwriter, and it caps every revenue-based approval you're pursuing.
14. **Do not close your oldest personal credit card.** Personal credit age gates every Phase 4 application.
15. **Do not change your name, address, or NAICS mid-application cycle.** Make changes, let them propagate for 60 days, then apply.
16. **Do not chase $250K in 2026.** Pursuing it forces you toward the only products that will say yes at your revenue — which are the predatory ones in item 1.

---

## 9. THE FIVE THINGS THAT MATTER MOST

If you do nothing else from this document:

1. **Fix the website verification failures** (address, hours, 909 number, pricing reconciliation). Cheapest fix here, and it gates every card application. — *2 weeks*
2. **Get a commercial address with a real suite number.** Not a PMB. — *2 weeks, $75–$200/mo*
3. **Find out your personal FICO.** It gates ~80% of your realistic funding and you currently don't know it. — *1 day, free*
4. **Convert care plans to annual agreements.** Turns unfinanceable at-will revenue into a contracted asset — and it's the same change that makes the business sellable, which is your stated long-term goal. — *1 sprint*
5. **Replace office-supply tradelines with Amazon Business, Newegg Business, and eCredable Lift.** Same credit building, on spend you already have. — *2 weeks*

---

### Method & limitations

Scoring reflects standard commercial underwriting weightings; there is no single industry-standard "fundability score," so treat the number as a relative baseline to re-measure against, not an external rating. Website findings in §3 come from direct review of the webguynick.com source in this repository as of July 29, 2026. Lender criteria in §5 were verified against current published sources (July 2026) and change frequently — reconfirm before applying. Revenue figures are modeled from the tier structure and client count provided and are **not verified**; correct them and the sizing throughout §5 moves with them. Vendor bureau-reporting relationships change without notice — confirm each directly. Time in business is inferred, not confirmed.

**This is a funding strategy document, not tax, legal, or investment advice.** The S-corp election in particular is a tax decision requiring your CPA.

---

*Next review: October 27, 2026 (Day 90). Re-score all six categories. Target: 68/100.*
