
import React from 'react';
import { Eye, ShieldCheck, Zap, Activity, Users, HeartPulse } from 'lucide-react';
import { Service, Doctor, Testimonial } from './types';

export const HOSPITAL_NAME = "City Shine Eye Hospital";
export const TAGLINE = "Clear Vision. Trusted Care.";
export const ADDRESS = "Kalawati Lodge K Piche Mazaar, Wali Gali, Dumraon, Bihar 802119";
export const PHONE = "+91 80512 36815"; 
export const WHATSAPP_LINK = "https://wa.me/918051236815";
export const GOOGLE_MAPS_LINK = "https://www.google.com/maps/place/City+Shine+Eye+Hospital/@25.5556308,84.147262,16s%2Fg%2F11vx3218hb";

export const SERVICES: Service[] = [
  {
    id: 'cataract',
    title: "Phaco Cataract Surgery",
    description: "Modern micro-incision surgery with foldable IOL implantation for rapid visual recovery.",
    icon: <Eye className="w-8 h-8 text-blue-600" />
  },
  {
    id: 'checkup',
    title: "Computerized Eye Testing",
    description: "Precision vision diagnostics using advanced auto-refractometers for accurate prescriptions.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
  },
  {
    id: 'retina',
    title: "Medical Retina",
    description: "Specialized care for diabetic retinopathy, hypertensive changes, and macular health.",
    icon: <Activity className="w-8 h-8 text-blue-600" />
  },
  {
    id: 'glaucoma',
    title: "Glaucoma Clinic",
    description: "Comprehensive screening, intraocular pressure monitoring, and long-term management.",
    icon: <Zap className="w-8 h-8 text-blue-600" />
  },
  {
    id: 'pediatric',
    title: "Squint & Paediatrics",
    description: "Evaluation and treatment of childhood eye conditions, lazy eye, and binocular vision.",
    icon: <Users className="w-8 h-8 text-blue-600" />
  },
  {
    id: 'optical',
    title: "Contact Lens Clinic",
    description: "Professional fitting for soft, toric, and therapeutic contact lenses for all needs.",
    icon: <HeartPulse className="w-8 h-8 text-blue-600" />
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr1',
    name: "Dr. Amir Pervez",
    specialty: "Phaco & Refractive Surgeon",
    qualification: "MBBS, MS (Ophthalmology)",
    experience: "15+ Years",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=500"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: "Vikash Singh",
    text: "Best eye hospital in Dumraon. The doctors are highly qualified and behavior is very polite. My father's cataract surgery was successful.",
    rating: 5
  },
  {
    id: 't2',
    name: "Anjali Kumari",
    text: "Very clean premises and helpful staff. The computerized testing is very fast and accurate. Highly satisfied.",
    rating: 5
  },
  {
    id: 't3',
    name: "Prakash Gupta",
    text: "Affordable treatment with high-end machinery. You don't need to go to Patna or Buxar for eye surgeries anymore.",
    rating: 5
  }
];
