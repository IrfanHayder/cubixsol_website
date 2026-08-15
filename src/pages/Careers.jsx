import Breadcrumb from '../components/Breadcrumb';
import CtaBanner from '../components/CtaBanner';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';
import Reveal, { Stagger, StaggerItem } from '../components/Reveal';

const openings = [
  { title: 'Senior Laravel Developer', type: 'Full-time', location: 'Remote / New York' },
  { title: 'React Frontend Engineer', type: 'Full-time', location: 'Remote' },
  { title: 'AI/ML Engineer', type: 'Full-time', location: 'Remote / New York' },
  { title: 'UI/UX Designer', type: 'Full-time', location: 'Remote' },
  { title: 'Project Manager', type: 'Full-time', location: 'New York, NY' },
  { title: 'DevOps Engineer', type: 'Contract', location: 'Remote' },
];

const perks = [
  ['Remote-first culture', 'Work from anywhere with flexible hours.'],
  ['Health & wellness', 'Comprehensive health coverage for you and your family.'],
  ['Growth budget', 'Annual budget for courses, conferences, and certifications.'],
  ['Paid time off', 'Generous PTO to rest and recharge.'],
];

export default function Careers() {
  return (
    <div>
      <Breadcrumb current="Careers" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-center">
        <Reveal>
          <p className="eyebrow mb-3">Careers</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink mb-4 max-w-2xl mx-auto">Build Your Career With <span className="bg-clip-text text-transparent bg-primary-gradient">Cubixsol</span></h1>
          <p className="text-gray-500 max-w-xl mx-auto">We're always looking for talented, curious people who want to build meaningful digital products.</p>
        </Reveal>
      </section>

      <section className="bg-gray-50 py-16">
        <Stagger className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
          {perks.map(([title, desc]) => (
            <StaggerItem key={title}>
              <div className="card h-full hover:-translate-y-1 hover:shadow-soft transition-all duration-300">
                <h3 className="font-bold text-ink mb-1.5">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal><h2 className="text-2xl font-extrabold text-ink mb-8">Open Positions</h2></Reveal>
        <Stagger className="space-y-3" staggerDelay={0.06}>
          {openings.map((o) => (
            <StaggerItem key={o.title}>
              <div className="card !p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:shadow-soft hover:border-primary-100 transition-all duration-300">
                <div>
                  <h3 className="font-bold text-ink">{o.title}</h3>
                  <div className="flex gap-4 mt-1.5 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {o.type}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {o.location}</span>
                  </div>
                </div>
                <a href="mailto:careers@cubixsol.com" className="btn-outline !py-2 !px-4 text-sm shrink-0">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CtaBanner />
    </div>
  );
}
