(function () {
  var content = {
    bfsi: {
      title: 'BFSI',
      desc: 'Banking, financial services, and insurance teams run on strict compliance and rapid scale. We supply verified, background-checked talent for back-office operations, tele-calling, and customer support desks, backed by payroll and statutory compliance handled end-to-end.',
      testimonials: [
        { quote: 'Onboarding across our branch network used to take weeks. With their staffing pipeline, we now fill critical roles in days without compromising on verification.', name: 'Ananya Kapoor', role: 'HR Business Partner, Retail Banking' },
        { quote: 'Compliance is non-negotiable in our industry. Their team understands KYC and statutory documentation better than most in-house recruiters we have worked with.', name: 'Rajeev Malhotra', role: 'Head of Talent Acquisition' }
      ]
    },
    industrial: {
      title: 'Industrial',
      desc: 'Shop-floor output depends on having the right hands on deck, every shift. We manage contract labour compliance, safety onboarding, and multi-location deployment so plant heads can focus on production targets instead of manpower gaps.',
      testimonials: [
        { quote: 'Our attrition on the shop floor dropped noticeably once they took over sourcing and onboarding. Fewer gaps, faster replacements.', name: 'Suresh Iyer', role: 'Plant HR Manager' },
        { quote: 'Safety documentation and labour law compliance across three states used to keep us up at night. Now it is simply handled.', name: 'Meera Nair', role: 'Operations Head' }
      ]
    },
    technology: {
      title: 'Technology',
      desc: 'Product timelines do not wait for a slow hiring funnel. Our technical recruiters source contract and permanent talent across development, QA, and support roles, with screening built around the stacks your teams actually use.',
      testimonials: [
        { quote: 'They understood our tech stack requirements from the first call, which meant far fewer irrelevant profiles landing in our inbox.', name: 'Vikram Sethi', role: 'Engineering Manager' },
        { quote: 'Scaling our support team ahead of a product launch was tight on time. They delivered qualified candidates within the week.', name: 'Priya Raghunathan', role: 'VP, Human Resources' }
      ]
    },
    scm: {
      title: 'SCM/Logistic',
      desc: 'Warehouses and delivery networks live or die by peak-season readiness. We staff pickers, packers, and last-mile riders at scale, with attendance and shift tracking that keeps every hub accountable in real time.',
      testimonials: [
        { quote: 'Festive season used to mean scrambling for warehouse staff. This year, ramp-up was planned and on time at every hub.', name: 'Arjun Bhatia', role: 'Warehouse Operations Lead' },
        { quote: 'Real-time attendance tracking across our distribution centres has made shift planning far less of a guessing game.', name: 'Kavita Deshmukh', role: 'Supply Chain HR Lead' }
      ]
    },
    telecom: {
      title: 'Telecom',
      desc: 'From tower technicians to retail store staff, telecom operations span a wide, distributed workforce. We handle field deployment, retail staffing, and call-centre hiring with the documentation rigour telecom compliance demands.',
      testimonials: [
        { quote: 'Deploying field engineers across new circles used to be our biggest bottleneck. Their regional sourcing network solved that quickly.', name: 'Rahul Chawla', role: 'Regional HR Head' },
        { quote: 'Retail staffing for our stores across tier-2 cities has been consistent, and the quality of candidates has held up well.', name: 'Sneha Kulkarni', role: 'Talent Acquisition Manager' }
      ]
    },
    ecommerce: {
      title: 'Ecommerce',
      desc: 'Order volumes swing hard around sales events and festive seasons. We help e-commerce and D2C brands scale warehouse, fulfilment, and customer support teams up or down on short notice, while our payroll and attendance systems keep every shift accounted for.',
      testimonials: [
        { quote: 'Scaling our fulfilment team ahead of the festive sale used to be chaotic. With a ready bench of pre-vetted staff, we were fully staffed within days.', name: 'Nikita Bansal', role: 'HR Analyst' },
        { quote: 'Attendance tracking across multiple warehouse shifts finally gives us real visibility into workforce productivity.', name: 'Karan Mehta', role: 'Operations Manager' }
      ]
    },
    education: {
      title: 'Education',
      desc: 'Institutions need dependable people beyond the classroom, from administrative staff to campus operations teams. We recruit and manage non-teaching workforce so academic leadership can stay focused on students, not staffing gaps.',
      testimonials: [
        { quote: 'Filling administrative vacancies before a new academic term used to be a scramble every single year. That pressure is gone now.', name: 'Deepa Krishnan', role: 'Administrative Head' },
        { quote: 'Their team understands the seasonal hiring cycle of an academic calendar better than any vendor we have used before.', name: 'Anil Kumar Joshi', role: 'Campus Operations Director' }
      ]
    },
    infrastructure: {
      title: 'Infrastructure',
      desc: 'Large infrastructure projects need workforce planning that matches the pace of the site, not the other way around. We source and manage site personnel with safety onboarding and compliance built in from day one.',
      testimonials: [
        { quote: 'Manpower planning across multiple project sites used to fall on our project managers. Now it is handled by people who specialise in exactly that.', name: 'Harish Reddy', role: 'Project HR Manager' },
        { quote: 'Safety induction and documentation for every new worker on site is now consistent across all our locations.', name: 'Pooja Agarwal', role: 'Compliance Head' }
      ]
    },
    healthcare: {
      title: 'Healthcare',
      desc: 'Hospitals and care facilities cannot afford hiring delays. We staff nursing, paramedical, and administrative roles with thorough credential verification, so patient care is never held up by an empty shift roster.',
      testimonials: [
        { quote: 'Credential verification for clinical staff is handled properly every time, which matters enormously in our line of work.', name: 'Dr. Sunita Rao', role: 'Hospital Administrator' },
        { quote: 'Shift coverage gaps on our nursing floor have dropped sharply since we moved our staffing over to them.', name: 'Manoj Pillai', role: 'HR Manager, Healthcare Operations' }
      ]
    },
    manufacturing: {
      title: 'Manufacturing',
      desc: 'Multi-shift production lines need workforce continuity, not constant replacement hiring. We manage contract labour compliance and shift-wise staffing across plants, with attendance data that feeds straight into your productivity reporting.',
      testimonials: [
        { quote: 'Running three shifts across two plants used to mean three different staffing headaches. Now it is one dashboard and one point of contact.', name: 'Ramesh Chandran', role: 'Plant Head' },
        { quote: 'Labour law compliance audits used to be stressful. Documentation is now always audit-ready.', name: 'Neha Tiwari', role: 'HR Compliance Lead' }
      ]
    },
    construction: {
      title: 'Construction',
      desc: 'Site workforce needs change week to week as a project moves through its phases. We source skilled and unskilled labour on flexible terms, with safety training and attendance tracking built for site conditions.',
      testimonials: [
        { quote: 'Scaling our site workforce up during the foundation phase and down afterward was seamless, without any of the usual paperwork delay.', name: 'Vinod Kulkarni', role: 'Site Project Manager' },
        { quote: 'Every worker arrives with safety induction already completed, which has measurably reduced incidents on our sites.', name: 'Sarita Bose', role: 'Safety and Compliance Officer' }
      ]
    },
    agriculture: {
      title: 'Agriculture',
      desc: 'Agri-processing and cold-chain operations depend on seasonal workforce that shows up on time, every harvest. We source rural and semi-urban talent for processing units and warehousing, matched to your seasonal demand curve.',
      testimonials: [
        { quote: 'Seasonal hiring around harvest time used to be unpredictable. Now we plan our workforce ramp-up months in advance with confidence.', name: 'Gurpreet Singh', role: 'Operations Head, Agri-Processing' },
        { quote: 'Cold storage staffing during peak season has been reliable for two years running, without a single unfilled shift.', name: 'Lakshmi Venkatesh', role: 'Warehouse Manager' }
      ]
    }
  };

  var section = document.querySelector('.iexp-section');
  var items = section.querySelectorAll('.iexp-item');
  var inner = section.querySelector('.iexp-detail-inner');
  var fields = {
    title: inner.querySelector('[data-field="title"]'),
    desc: inner.querySelector('[data-field="desc"]'),
    quote: inner.querySelector('[data-field="quote"]'),
    name: inner.querySelector('[data-field="name"]'),
    role: inner.querySelector('[data-field="role"]')
  };
  var prevBtn = section.querySelector('.iexp-arrow-prev');
  var nextBtn = section.querySelector('.iexp-arrow-next');

  var currentKey = 'ecommerce';
  var currentTestimonial = 0;

  function paint() {
    var data = content[currentKey];
    var t = data.testimonials[currentTestimonial];
    fields.title.textContent = data.title;
    fields.desc.textContent = data.desc;
    fields.quote.textContent = '\u201C' + t.quote + '\u201D';
    fields.name.textContent = t.name;
    fields.role.textContent = t.role;
  }

  function render(withFade) {
    if (!withFade) { paint(); return; }
    inner.classList.add('iexp-fade');
    window.setTimeout(function () {
      paint();
      inner.classList.remove('iexp-fade');
    }, 150);
  }

  items.forEach(function (item) {
    item.addEventListener('click', function () {
      if (item.getAttribute('data-industry') === currentKey) return;
      items.forEach(function (i) {
        i.classList.remove('active');
        i.setAttribute('aria-pressed', 'false');
      });
      item.classList.add('active');
      item.setAttribute('aria-pressed', 'true');
      currentKey = item.getAttribute('data-industry');
      currentTestimonial = 0;
      render(true);
    });
  });

  prevBtn.addEventListener('click', function () {
    var len = content[currentKey].testimonials.length;
    currentTestimonial = (currentTestimonial - 1 + len) % len;
    render(true);
  });

  nextBtn.addEventListener('click', function () {
    var len = content[currentKey].testimonials.length;
    currentTestimonial = (currentTestimonial + 1) % len;
    render(true);
  });

  paint();
})();
