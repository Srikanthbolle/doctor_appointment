'use client';
import { useParams } from 'next/navigation';

export default function DoctorSpecialty() {
  const { spe } = useParams();
  return <h1>Doctors by Specialty: {spe}</h1>;
}
