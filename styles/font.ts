import { Poppins } from 'next/font/google';
import '@/styles/global.css';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Adicione os pesos que deseja utilizar aqui
});
