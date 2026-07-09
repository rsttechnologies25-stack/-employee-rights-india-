/* ─────────────────────────────────────────────────────────────────────────────
   Employee Rights India — Smart Chatbot Knowledge Base
   Keyword → Answer matching for common labour law questions.
───────────────────────────────────────────────────────────────────────────── */

export const BOT_NAME = 'RightsBot';
export const BOT_TAGLINE = 'Your Labour Law Assistant';

export const QUICK_QUESTIONS = [
    'What is my PF eligibility?',
    'Can employer hold salary?',
    'Notice period rules?',
    'Minimum wages in India?',
    'What is gratuity?',
    'ESI benefits?',
    'Can I be fired without notice?',
    'Overtime pay rules?',
];

/* Each entry:
   keywords[]   — words/phrases matched in lowercase user input
   answer       — markdown-style string
   link?        — { label, path } optional CTA button
*/
export const KB = [
    // ── PF ──────────────────────────────────────────
    {
        keywords: ['pf', 'provident fund', 'epf', 'epfo', 'pf contribution', 'pf deduction'],
        answer: `**Provident Fund (PF) — Key Facts:**

• **Eligibility:** Any employee earning ≤ ₹15,000/month basic salary must be enrolled.
• **Contribution:** 12% of basic salary deducted from your salary + 12% contributed by employer.
• **Of employer's 12%:** 8.33% goes to Pension (EPS), 3.67% to PF.
• **Right:** You can check your PF balance on EPFO's UAN portal anytime.
• **On exit:** You can withdraw PF after 2 months of unemployment or transfer it.
• **Employer violation:** If employer deducts PF but doesn't deposit it, file complaint at epfigms.gov.in.`,
        link: { label: 'Read Full PF & ESI Guide', path: '/pf-esi' },
    },
    // ── ESI ─────────────────────────────────────────
    {
        keywords: ['esi', 'esic', 'health insurance', 'medical benefit', 'esi card', 'sick benefit'],
        answer: `**ESI (Employee State Insurance) — Key Facts:**

• **Eligibility:** Employees earning ≤ ₹21,000/month in companies with 10+ workers.
• **Contribution:** 0.75% deducted from your salary + 3.25% paid by employer.
• **Benefits:** Free medical treatment for you AND your family at ESIC hospitals.
• **Sick leave benefit:** 70% of daily wages for up to 91 days if certified sick.
• **Maternity benefit:** Full wages for 26 weeks under ESIC.
• **Employer must:** Register you within 3 months of joining if eligible.`,
        link: { label: 'Full PF & ESI Details', path: '/pf-esi' },
    },
    // ── MINIMUM WAGES ────────────────────────────────
    {
        keywords: ['minimum wage', 'minimum salary', 'delhi wages', '783', '1035', 'minimum pay', 'wage rate'],
        answer: `**Minimum Wages in India — Important!**

⚠️ **Minimum wages are STATE-specific, not national.**

The ₹783–₹1,035/day figures on social media are **Delhi's rates** only.

**Approximate 2025 rates (Unskilled → Highly Skilled per day):**
• **Delhi:** ₹783 → ₹1,035 (highest in India)
• **Karnataka:** ₹535 → ₹918
• **Maharashtra:** ₹551 → ₹950
• **Tamil Nadu:** ₹480 → ₹900
• **Kerala:** ₹548 → ₹870
• **Telangana:** ₹497 → ₹925
• **Haryana:** ₹572 → ₹962

Check your state's page for exact sector-wise rates.`,
        link: { label: 'Official Minimum Wages Guide', path: '/minimum-wages' },
    },
    // ── NOTICE PERIOD ────────────────────────────────
    {
        keywords: ['notice period', 'notice pay', 'buyout', 'notice buyout', 'serving notice', 'not serving notice', 'leave during notice'],
        answer: `**Notice Period — Your Rights:**

• **Standard period:** 30–90 days depending on your offer letter and state law.
• **Buyout:** If your company wants you to leave early, they must pay "Notice Pay in Lieu."
• **If YOU leave early:** You may have to pay the notice period salary to the company (check your contract).
• **Illegal:** Company cannot hold your relieving letter/experience letter if you serve notice properly.
• **Garden leave:** You're still an employee during notice; salary must be paid.
• **Tip:** Always resign in writing (email) and get an acknowledgement.`,
        link: { label: 'Notice Period Full Guide', path: '/notice-period' },
    },
    // ── GRATUITY ────────────────────────────────────
    {
        keywords: ['gratuity', 'gratuity eligibility', 'gratuity calculation', '5 years', 'gratuity formula'],
        answer: `**Gratuity — Key Facts:**

• **Eligibility:** 5 years of continuous service with the same employer.
• **Formula:** (Last Basic Salary + DA) × 15/26 × Number of Years
• **Example:** ₹30,000 basic, 7 years → ₹30,000 × 15/26 × 7 = **₹1,21,153**
• **Payment deadline:** Must be paid within 30 days of leaving.
• **Tax:** Exempt up to ₹20 lakhs for private employees.
• **Death/disability:** Gratuity is payable even before 5 years if employee dies or becomes disabled.
• **Violation:** File complaint with Labour Commissioner if denied.`,
        link: { label: 'Gratuity Calculator & Rights', path: '/gratuity' },
    },
    // ── SALARY DELAY / HOLD ─────────────────────────
    {
        keywords: ['salary hold', 'salary withheld', 'salary not paid', 'delayed salary', 'salary delay', 'not getting salary', 'salary late'],
        answer: `**Employer Holding/Delaying Salary — What To Do:**

• **Legal rule:** Salary must be paid by the **7th of every month** (companies with <1,000 workers) or the **10th** (large companies).
• **What's illegal:** Holding salary as "punishment," until you return assets, or beyond 10th of month.
• **Step 1:** Send a written demand letter via email.
• **Step 2:** File complaint with the **Labour Commissioner** under Payment of Wages Act, 1936.
• **Step 3:** File online on **Shramik Suvidha Portal** (shramiksuvidhaportal.gov.in).
• **Compensation:** Employer must pay your delayed salary + 10 times the amount as penalty.`,
        link: { label: 'Delayed Salary Full Guide', path: '/delayed-salary' },
    },
    // ── OVERTIME ────────────────────────────────────
    {
        keywords: ['overtime', 'ot pay', 'extra hours', 'working extra', 'overtime rate', 'overtime rules'],
        answer: `**Overtime Pay — Your Rights:**

• **Legal limit:** 8–9 hours/day and 48 hours/week (varies by state).
• **Overtime rate:** **Double (2x) the ordinary wage rate** — this is mandatory by law.
• **Factories Act:** Max 50 hours overtime in a quarter.
• **If employer refuses OT pay:** File complaint with Labour Inspector. Section 59 of Factories Act makes it a criminal offence.
• **IT companies:** The Shops & Establishments Act (state) applies — same 2x OT rule.
• **No comp-off substitute:** Giving comp-off instead of cash OT is acceptable only if YOU agree.`,
        link: { label: 'Working Hours & OT Guide', path: '/working-hours' },
    },
    // ── TERMINATION ─────────────────────────────────
    {
        keywords: ['fired', 'terminated', 'dismissal', 'layoff', 'retrenchment', 'termination', 'sacked', 'removed from job'],
        answer: `**Termination of Employment — Know Your Rights:**

• **During probation:** Company can terminate with shorter notice (usually 7–15 days); check offer letter.
• **After confirmation:** 1 month notice (or pay in lieu) is mandatory in most states.
• **Illegal termination:** Without cause + without notice = wrongful termination; you can claim compensation.
• **Retrenchment:** Company with 100+ employees needs government approval to retrench.
• **What you must get:** Full & Final settlement (salary + leave encashment + gratuity if 5+ years) within 45 days.
• **Warning:** Never sign a "resignation" under pressure — you lose termination benefits.`,
        link: { label: 'Termination Rights Guide', path: '/termination/after-confirmation' },
    },
    // ── FORCED RESIGNATION ──────────────────────────
    {
        keywords: ['forced resign', 'resign under pressure', 'asked to resign', 'pressure to resign', 'constructive dismissal'],
        answer: `**Forced Resignation — This Is Illegal!**

If your employer asks you to "resign or be terminated," this is called **Constructive Dismissal** and it's illegal under Indian Labour Law.

**What to do:**
1. Do NOT sign any resignation letter under pressure.
2. Document everything — emails, WhatsApp, witnesses.
3. If forced, add "submitted under coercion" in the resignation letter.
4. File a complaint with the Labour Commissioner.
5. You are entitled to **all termination benefits** even if you technically "resigned" under duress.`,
        link: { label: 'Forced Resignation Guide', path: '/forced-resignation' },
    },
    // ── LEAVE ───────────────────────────────────────
    {
        keywords: ['leave', 'sick leave', 'casual leave', 'earned leave', 'annual leave', 'pl', 'privilege leave', 'maternity leave', 'leave policy'],
        answer: `**Leave Entitlements in India:**

• **Earned/Privilege Leave:** 12–15 days/year (varies by state); can be carried forward.
• **Casual Leave:** 7–12 days/year for personal emergencies (not usually carried forward).
• **Sick Leave:** 7–12 days/year with medical certificate.
• **Maternity Leave:** **26 weeks** (fully paid) for first 2 children under Maternity Benefit Act.
• **Paternity Leave:** No central law; check company policy or State rules.
• **Leave encashment:** Unused earned leave must be encashed on separation.
• **Illegal:** Company cannot deny leave encashment on resignation.`,
        link: { label: 'Leave & Holidays Full Guide', path: '/leave-holidays' },
    },
    // ── PIP ─────────────────────────────────────────
    {
        keywords: ['pip', 'performance improvement plan', 'performance plan', 'pip rights'],
        answer: `**PIP (Performance Improvement Plan) — Your Rights:**

• A PIP is **not** a termination notice — it's an improvement plan. You are still an employee with all rights.
• **You can refuse to sign** a PIP if you disagree with its terms (it won't automatically mean termination).
• **Request in writing:** Ask for specific, measurable targets — vague PIPs are legally weak.
• **Document everything:** Keep emails, feedback, and meeting records.
• **If PIP is just a termination tactic:** It's constructive dismissal — consult a labour lawyer.
• **Resignation during PIP:** You are entitled to full notice pay and FnF settlement.`,
        link: { label: 'PIP Rights Full Guide', path: '/pip-guide' },
    },
    // ── FULL & FINAL SETTLEMENT ─────────────────────
    {
        keywords: ['full final', 'fnf', 'f&f', 'full and final', 'settlement', 'last month salary', 'pending dues'],
        answer: `**Full & Final Settlement — What You Are Owed:**

On leaving a company, you must receive:
• ✅ **Last month's salary** (pro-rated if mid-month exit)
• ✅ **Leave encashment** (unused earned leave × daily salary)
• ✅ **Gratuity** (if 5+ years of service)
• ✅ **Bonus** (if applicable for that financial year)
• ✅ **PF settlement / transfer** (within 30 days of claim)
• ✅ **Relieving letter + Experience letter**

**Timeline:** Company must settle within **45 days** of your last working day. Delay is a violation of Payment of Wages Act.`,
        link: { label: 'FnF Settlement Guide', path: '/full-final-settlement' },
    },
    // ── FORM 16 ─────────────────────────────────────
    {
        keywords: ['form 16', 'tds', 'tax deduction', 'income tax', 'itr', 'tds certificate'],
        answer: `**Form 16 & TDS — Your Rights:**

• **Form 16** is your TDS (Tax Deducted at Source) certificate — every employer who deducts TDS **must** give it to you.
• **Deadline:** Employers must issue Form 16 by **June 15** every year for the previous financial year.
• **If denied:** File a complaint with the Income Tax Department. The employer is liable for penalties.
• **Part A vs Part B:** Part A = TDS deposited; Part B = salary breakup.
• **Need it for:** Filing ITR, home loan applications, visa applications.
• **Left mid-year:** You still have the right to Form 16 for the period you worked.`,
        link: { label: 'Form 16 & TDS Rights', path: '/form-16-rights' },
    },
    // ── WOMEN HARASSMENT ────────────────────────────
    {
        keywords: ['harassment', 'sexual harassment', 'posh', 'workplace harassment', 'icc', 'internal complaints committee'],
        answer: `**Workplace Sexual Harassment — POSH Act Rights:**

• **Law:** Sexual Harassment of Women at Workplace (Prevention, Prohibition & Redressal) Act, 2013.
• **Every company with 10+ employees** must have an **Internal Complaints Committee (ICC)**.
• **Complaint deadline:** File within **3 months** of the incident (extendable to 6 months).
• **ICC must complete inquiry:** Within **60 days**.
• **Retaliation is illegal:** Employer cannot punish you for filing a POSH complaint.
• **Anonymous complaint:** You can request your identity not be disclosed.
• **No ICC?** File complaint with District Officer (Local Complaints Committee).`,
        link: { label: 'POSH Act Full Guide', path: '/posh-act' },
    },
    // ── MATERNITY ───────────────────────────────────
    {
        keywords: ['maternity', 'pregnancy', 'maternity benefit', 'maternity leave', 'nursing', 'creche'],
        answer: `**Maternity Rights — Maternity Benefit Act, 1961:**

• **Paid leave:** 26 weeks for first 2 children; 12 weeks from 3rd child onwards.
• **Eligibility:** Must have worked 80+ days in the 12 months before expected delivery.
• **Miscarriage/Medical termination:** 6 weeks paid leave.
• **Adoption/Surrogacy:** 12 weeks maternity leave (for mothers below 3 months old child).
• **Creche facility:** Companies with 50+ employees must provide creche.
• **Protection:** Employer CANNOT dismiss or give notice of dismissal during maternity leave.`,
        link: { label: 'Maternity Rights Guide', path: '/maternity-rights' },
    },
    // ── EXPERIENCE / RELIEVING LETTER ───────────────
    {
        keywords: ['experience letter', 'relieving letter', 'service certificate', 'not giving letter', 'withholding letter'],
        answer: `**Experience / Relieving Letter — Employer Must Give It:**

• **Relieving letter:** Confirms your last working day and that you're relieved of duties. **Mandatory** after serving notice.
• **Experience letter:** States your designation, tenure, and role. Legally required on demand.
• **Timeline:** Must be issued on or before the last working day (or within 7 days).
• **If withheld:** The employer is harassing you. Options:
  1. Send a legal notice (free online tools available).
  2. File complaint with Labour Commissioner.
  3. File complaint with company's HR head in writing.
• **Bond/training recovery:** Even if there's a bond, company cannot withhold your service letter indefinitely.`,
        link: { label: 'Experience Letter Rights', path: '/experience-letter' },
    },
    // ── MOONLIGHTING ────────────────────────────────
    {
        keywords: ['moonlighting', 'dual job', 'second job', 'freelance', 'side income', 'two jobs'],
        answer: `**Moonlighting / Dual Employment in India:**

• **No universal ban:** Indian law (Industrial Employment Act) does not explicitly ban moonlighting.
• **Company policy matters:** Most IT company contracts have a "no dual employment" clause — check yours.
• **Conflict of interest:** Working for a competitor while employed is a serious violation.
• **Can you be fired?** Yes, if your contract prohibits it and you're caught.
• **Freelancing:** Generally allowed if your employment contract doesn't restrict it.
• **Tax:** Both incomes are taxable — file ITR accordingly to avoid notices.`,
        link: { label: 'Moonlighting Full Guide', path: '/moonlighting' },
    },
    // ── BONDS / TRAINING BONDS ──────────────────────
    {
        keywords: ['bond', 'training bond', 'service agreement', 'bond period', 'bond amount', 'sign bond'],
        answer: `**Employment Bonds / Training Bonds — Are They Enforceable?**

• **Service bonds** requiring you to stay for X years are **generally not enforceable** in Indian courts if the amount is unreasonably high.
• **Training bonds:** If the company genuinely trained you with significant cost, a reasonable recovery is enforceable.
• **"Unreasonable restraint":** Under Section 27 of the Indian Contract Act, agreements that restrict your right to work after leaving are void.
• **What you can do:** Resign despite the bond — company must prove actual loss in court to recover.
• **Advice:** Read the bond carefully before signing; negotiate the amount/period.`,
        link: { label: 'Contracts & Bonds Guide', path: '/contracts' },
    },
    // ── COMPLAINT ───────────────────────────────────
    {
        keywords: ['complaint', 'file complaint', 'labour court', 'labour office', 'labour commissioner', 'grievance', 'how to complain'],
        answer: `**How to File a Labour Complaint in India:**

**Online (fastest):**
• 🌐 Shramik Suvidha Portal: shramiksuvidhaportal.gov.in
• 🌐 CPGRAMS: pgportal.gov.in
• 🌐 EPFO Grievance: epfigms.gov.in (for PF issues)
• 🌐 ESIC Portal: esic.gov.in (for ESI issues)

**Offline:**
• Visit your nearest District Labour Office
• File complaint under the Payment of Wages Act / MW Act / Industrial Disputes Act

**Response time:** Complaints are typically acknowledged within 30 days. Unresolved complaints can be escalated to Labour Court.`,
        link: { label: 'Official Complaint Guide (Step-by-Step)', path: '/complaint-guide' },
    },
    // ── WORKING HOURS ───────────────────────────────
    {
        keywords: ['working hours', '12 hours', '9 hours', '8 hours', 'work time', 'shift time', 'long hours', 'overwork'],
        answer: `**Legal Working Hours in India:**

• **Factories Act:** Max **8 hours/day and 48 hours/week** for factory workers.
• **Most Shops & Establishments Acts:** **8–9 hours/day and 48 hours/week.**
• **With overtime:** Max 10–10.5 hours/day in most states.

**Your employer CANNOT:**
• Ask you to work 12–13 hours without overtime pay (2x rate).
• Average your hours over weeks to avoid paying OT.
• Threaten you for refusing excessive hours.

If forced to work 12-13 hrs/day without OT pay — **file a complaint with the Labour Court.** This is a criminal offence.`,
        link: { label: 'Working Hours & Overtime Guide', path: '/working-hours' },
    },
    // ── STATE LAWS ──────────────────────────────────
    {
        keywords: ['karnataka', 'maharashtra', 'telangana', 'delhi', 'haryana', 'uttar pradesh', 'kerala', 'west bengal', 'gujarat', 'punjab', 'andhra pradesh', 'rajasthan', 'odisha', 'madhya pradesh', 'state law', 'state specific'],
        answer: `**State-Wise Labour Laws in India:**

Each state has its own Shops & Establishments Act with different rules for:
• Working hours, leave policy, night shifts, notice periods
• Minimum wages vary significantly by state

**States covered on this website:**
Tamil Nadu • Karnataka • Maharashtra • Telangana • Delhi • Haryana • UP • West Bengal • Gujarat • Kerala • Punjab • Andhra Pradesh • MP • Rajasthan • Odisha

Use the State Labour Laws section to find exact rules and minimum wages for your state.`,
    },
    // ── HOLIDAYS ─────────────────────────────────────
    {
        keywords: ['holiday', 'holidays', 'festival holiday', 'national holiday', 'comp off', 'working on holiday'],
        answer: `**Holidays & Leave Rights in India:**

• **Mandatory Holidays:** Every employee is entitled to 3 national holidays: Republic Day (Jan 26), Independence Day (Aug 15), and Gandhi Jayanti (Oct 2).
• **State/Festival Holidays:** Typically 5-9 additional holidays are declared by employers based on state rules.
• **Working on a Holiday:** If required to work, you MUST receive double wages (2x) OR a paid compensatory off (comp-off) on another day.
• **Weekly Off:** You are legally entitled to at least one weekly rest day (usually Sunday).
• **Tip:** Refusing both comp-off and double pay is a violation. Check your state's specific 2026 holiday calendar!`,
        link: { label: 'Check Leave & Holidays Guide', path: '/leave-holidays' },
    },
    // ── WHAT'S NEW 2025–2026 ─────────────────────────
    {
        keywords: ['whats new', 'what is new', 'new laws', '2025 updates', '2026 updates', 'recent updates', 'budget 2025', 'new rules'],
        answer: `**New Labour Law Updates (2025–2026):**

• **Tax Rebate:** Under the new tax regime, individuals earning up to ₹12 lakhs/year pay zero tax (Budget 2025).
• **PF Interest Rate:** The EPFO has finalized an 8.25% interest rate for the financial year.
• **New Labour Codes:** The four codes (Wages, Social Security, OSH, IR) are being progressively adopted by states with unified definitions.
• **Gig Workers:** State-level welfare boards are launching social security funds for platform workers.
• **POSH Digital:** New guidelines for online harassment and digital work safety are active.`,
        link: { label: "Read What's New 2025-2026", path: '/whats-new' },
    },
    // ── INCOME TAX ───────────────────────────────────
    {
        keywords: ['tax', 'income tax', 'tds deduction', 'tax rate', 'itr', 'new tax regime', 'tax exemption'],
        answer: `**Income Tax & TDS Rights in India:**

• **TDS Deduction:** Your employer can deduct TDS only if your taxable income exceeds the tax slabs.
• **Form 16:** Every employer who deducts TDS is legally obligated to issue Form 16 by **June 15** every year.
• **New Tax Slabs (2025):** Standard deduction is ₹75,000, and income up to ₹12 Lakhs (with rebates) can be tax-free under the New Tax Regime.
• **Proof Submission:** You have the right to declare savings/investments to prevent excess TDS deductions.`,
        link: { label: 'Use Income Tax Calculator', path: '/tools/income-tax-calculator' },
    },
    // ── FALLBACK ────────────────────────────────────
    {
        keywords: [],
        answer: `I'm sorry, I couldn't find a specific answer for that question. Here are some things I can help you with:

• **PF & ESI** eligibility and rules
• **Minimum wages** by state
• **Notice period** and resignation rights
• **Gratuity** calculation and eligibility
• **Overtime pay** rules
• **Salary delay** — what to do
• **Termination** and wrongful dismissal
• **Leave** entitlements
• **How to file** a complaint

Try asking one of the quick questions above, or browse the website for detailed guides!`,
        link: { label: 'Browse All Rights', path: '/rights' },
    },
];

export function getBotResponse(userInput) {
    const input = userInput.toLowerCase().trim();
    for (const entry of KB.slice(0, -1)) { // skip fallback
        if (entry.keywords.some(kw => input.includes(kw))) {
            return entry;
        }
    }
    return KB[KB.length - 1]; // fallback
}
