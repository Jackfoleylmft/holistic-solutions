export const posts = [
  {
    slug: 'marijuana-psychosis-what-families-need-to-know',
    title: 'Marijuana and Psychosis: What Families Need to Know',
    author: 'Jack Foley, LMFT | Holistic Solutions',
    excerpt: 'One of the most common calls I receive from families: "He\'s been smoking weed heavily for years and now he\'s saying things that don\'t make sense. Could the marijuana be causing this?" The short answer is: possibly, yes. Here\'s what every family navigating this situation needs to understand.',
    date: '2026-03-01',
    category: 'Clinical Insights',
    body: [
      { type: 'p', text: 'One of the most common calls I receive from families goes something like this: "He\'s been smoking weed heavily for years and now he\'s saying things that don\'t make sense. Could the marijuana be causing this?"' },
      { type: 'p', text: 'The short answer is: possibly, yes. And the longer answer is one every family navigating this situation needs to understand.' },

      { type: 'h2', text: 'The Research Is Clear — And Getting Clearer' },
      { type: 'p', text: 'For years, the cannabis-psychosis connection was debated. That debate has largely been settled. A 2024 umbrella review published in Psychiatry Research analyzing 32 systematic reviews and meta-analyses found that cannabis use is consistently associated with earlier onset of psychosis and increased risk of psychotic-like experiences. A separate 2025 study published in JAMA Psychiatry identified a shared dopamine pathway as a likely biological mechanism, with heavy cannabis use elevating dopamine activity in patterns that mirror early-stage schizophrenia.' },
      { type: 'p', text: 'Perhaps most concerning for clinical practice: a 2025 University of Colorado review of nearly 100 studies comprising over 221,000 participants found that high-potency cannabis products, including concentrates, dabs, and high-THC flower, show particularly strong links to psychosis and schizophrenia. This matters because the cannabis available today is dramatically more potent than what existed even ten years ago.' },

      { type: 'h2', text: 'Cannabis-Induced Psychosis vs. An Underlying Disorder' },
      { type: 'p', text: 'This is the clinical distinction that matters most, and it requires a trained clinician to assess properly.' },
      { type: 'p', text: 'Cannabis-induced psychosis typically emerges during or shortly after heavy use and can resolve with abstinence, though not always, and not always quickly. What complicates the picture significantly is that cannabis use can also unmask an underlying psychotic disorder in someone who was already genetically vulnerable. In those cases, stopping cannabis doesn\'t stop the psychosis. It simply removes one accelerant.' },
      { type: 'p', text: 'A 2025 systematic review published in the British Journal of Psychiatry added another layer of complexity: psychosis can also emerge during cannabis withdrawal. Abrupt cessation of heavy, long-term use can trigger acute psychotic symptoms in some individuals, meaning that simply getting someone to stop without clinical support in place can itself become a crisis.' },
      { type: 'p', text: 'This is why assessment matters. Not every case of marijuana-related psychosis is the same. The trajectory, severity, and appropriate intervention depend heavily on the individual\'s psychiatric history, family history, pattern of use, and what persists after abstinence.' },

      { type: 'h2', text: 'What Families Are Often Getting Wrong' },
      { type: 'p', text: 'The two most common mistakes I see families make:' },
      { type: 'p', text: 'First, assuming it\'s just the weed and waiting it out. Sometimes this works. Often it doesn\'t, and time lost in untreated psychosis has real consequences for long-term outcomes. Early intervention produces significantly better prognoses than delayed intervention.' },
      { type: 'p', text: 'Second, getting their loved one to stop using abruptly without clinical support in place. Given what we now know about withdrawal-associated psychosis, this can worsen the situation without the right clinical framework around it.' },

      { type: 'h2', text: 'What Clinical Case Management Looks Like in These Situations' },
      { type: 'p', text: 'When families call me about a loved one showing signs of psychosis alongside heavy cannabis use, the first thing I do is help them understand what they\'re actually looking at. Is this acute intoxication? Cannabis-induced psychosis? An emerging psychotic disorder that cannabis has been masking or accelerating? The answer changes everything — the level of care needed, the type of program, the clinical team required.' },
      { type: 'p', text: 'From there, case management involves coordinating a proper psychiatric evaluation, identifying treatment settings equipped to handle co-occurring substance use and psychotic presentations simultaneously, and building the kind of wraparound support that keeps the person stable through the process. Most standard treatment programs are not set up to handle this combination well. Finding the ones that are is the work.' },

      { type: 'h2', text: 'The Bottom Line' },
      { type: 'p', text: 'If your loved one has been using marijuana heavily, especially high-potency products, and you\'re seeing paranoia, disorganized thinking, beliefs that seem disconnected from reality, or behavior that feels frightening or unfamiliar, don\'t wait. These presentations are treatable. But they require clinical eyes, not just time.' },
      { type: 'p', text: 'The research on cannabis and psychosis has never been stronger. The clinical pathways have never been clearer. And the families navigating this don\'t have to do it alone.' },

      { type: 'bio', text: 'Jack Foley is a Licensed Marriage and Family Therapist and founder of Holistic Solutions, a clinical case management practice serving individuals and families nationwide. He specializes in substance use disorders, co-occurring conditions, and psychosis.' },
      { type: 'cta-link', text: 'If you\'re concerned about a loved one, ', linkText: 'contact us for a confidential consultation', href: '/contact', suffix: '.' },
    ],
    references: [
      'Groening et al. (2024). Systematic evidence map of cannabis use and psychosis-related outcomes. Psychiatry Research, 331. doi:10.1016/j.psychres.2023.115626',
      'Ahrens et al. (2025). Convergence of cannabis and psychosis on the dopamine system. JAMA Psychiatry. doi:10.1001/jamapsychiatry.2025.0432',
      'University of Colorado Anschutz (2025). High-concentration THC products and mental health outcomes. Annals of Internal Medicine.',
      'Basu et al. (2025). Cannabis and psychopathology: 2024 snapshot. PMC/NIH. PMID: PMC12032589',
      'Cannabis withdrawal-associated psychosis: systematic review and case series. British Journal of Psychiatry (2025). PMC7617269',
    ],
  },
]

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null
}
