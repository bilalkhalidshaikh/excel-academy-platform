'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  ArrowRight, 
  MessageSquare, 
  X, 
  Send, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Trophy, 
  Star,
  CheckCircle2,
  Users,
  Video,
  ChevronLeft,    
  ChevronRight,
  Calendar, BookOpen, Stethoscope, Beaker, ArrowUpRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini API
const genAI = process.env.GEMINI_API_KEY 
  ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }) 
  : null;

// const GlassCard = ({ children, className }: { children: React.ReactNode, className?: string }) => (
//   <div className={cn("backdrop-blur-xl bg-white/60 border border-white/40 rounded-[2.5rem] p-8 shadow-xl", className)}>
//     {children}
//   </div>
// );
const GlassCard = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("backdrop-blur-xl bg-slate-800/40 border border-slate-700 rounded-[2.5rem] p-8 shadow-xl", className)}>
    {children}
  </div>
);

const Navbar = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[500] w-[95%] max-w-7xl">
      <div className="bg-white/90 backdrop-blur-2xl border border-slate-200 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl shadow-blue-900/5">
        
        {/* Left: Logo Area */}
        <div className="flex items-center gap-4 pl-2">
          <div className="flex items-center justify-center transition-transform hover:scale-105">
            <img 
              src="/logo.png" 
              alt="Excel Learners Academy Logo" 
              className="h-12 w-auto object-contain" 
            />
          </div>
          <div className="flex flex-col border-l border-slate-200 pl-4">
            <span className="font-display text-2xl leading-none text-blue-950 tracking-tight uppercase">
              Excel Learners
            </span>
            <span className="text-[10px] font-black text-emerald-500 tracking-[0.2em] uppercase">
              Academy • Peshawar
            </span>
          </div>
        </div>

        {/* Center: Linked Sections */}
        <div className="hidden lg:flex items-center gap-8 font-sans font-bold text-slate-600 text-sm">
          <a href="#programs" className="hover:text-emerald-500 transition-colors">Programs</a>
          <a href="#campus" className="hover:text-emerald-500 transition-colors">Gallery</a>
          <a href="#reels" className="hover:text-emerald-500 transition-colors">Campus Life</a>
          <a href="#scholarships" className="hover:text-emerald-500 transition-colors">Scholarships</a>
        </div>

        {/* Right: Contact & CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col text-right mr-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Admission Cell</span>
            <span className="font-black text-blue-950 text-sm">0314-6949869</span>
          </div>
          <Button onClick={onOpenModal} className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 py-6 font-bold shadow-lg shadow-emerald-500/30 active:scale-95 transition-all uppercase tracking-wider">
            Enroll Today
          </Button>
        </div>

      </div>
    </nav>
  );
};

const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section className="relative pt-48 pb-32 px-6 overflow-hidden min-h-screen flex items-center">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-950/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 text-center md:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/80 border border-slate-200 rounded-full shadow-sm mb-10">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold font-sans text-blue-950 uppercase tracking-widest leading-none">Admission Open 2026</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-black text-blue-950 leading-[0.9] tracking-tighter mb-10 uppercase">
              Excel Learners<br/><span className="text-emerald-500">Academy.</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 font-sans font-medium leading-relaxed mb-12 max-w-xl mx-auto md:mx-0">
              Peshawar's most trusted preparatory institution for MDCAT, ETEA, and Board Excellence. Secure your future with the elite.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              {/* WIRED MODAL BUTTON */}
              <Button onClick={onOpenModal} className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-3xl px-12 h-20 text-xl font-bold shadow-2xl shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95">
                Register for April 25th
              </Button>
              {/* WIRED SCROLL BUTTON */}
              <a href="#reels" className="block">
                <Button variant="outline" className="w-full bg-white/60 backdrop-blur-xl border-white/40 border rounded-3xl px-12 h-20 text-xl font-bold text-blue-950 shadow-xl transition-all hover:scale-105 active:scale-95">
                  Watch Campus Tour
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative">
            <div className="relative w-full aspect-[4/3] xl:aspect-[4/3] rounded-[4rem] overflow-hidden border-[12px] border-white shadow-2xl">
               <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2000&auto=format&fit=crop" alt="Modern Classroom" className="w-full h-full object-cover object-center" />
               <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent" />
               <div className="absolute bottom-10 left-10 text-white">
                 <div className="flex items-center gap-3 mb-2">
                   <div className="flex -space-x-4">
                     {[1,2,3].map(i => (
                       <div key={i} className="w-10 h-10 border-2 border-white rounded-full bg-slate-200 overflow-hidden">
                         <img src={`https://picsum.photos/seed/${i+10}/100/100`} alt="User" className="w-full h-full object-cover" />
                       </div>
                     ))}
                   </div>
                   <span className="font-bold text-sm">63K+ Followers</span>
                 </div>
                 <p className="text-xl font-bold">Join the Elite Circle</p>
               </div>
            </div>
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -top-10 -right-10 backdrop-blur-xl bg-white/80 border border-white/40 p-10 rounded-[3rem] shadow-2xl text-center z-20">
              <Trophy className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
              <p className="text-3xl font-black text-blue-950">100%</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Scholarships</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ExperienceGrid = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section id="experience" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-display font-black text-blue-950 tracking-tighter mb-6 uppercase">
            The Excel <span className="text-emerald-500">Standard</span>
          </h2>
          <p className="text-xl text-slate-500 font-sans font-bold max-w-2xl mx-auto uppercase tracking-wider">
            Elite preparation for MDCAT, ETEA, and Board Excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {/* Main Showcase */}
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="md:col-span-8 md:row-span-2 relative group rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-50"
          >
            <img 
              src="https://scontent.fhdd2-1.fna.fbcdn.net/v/t39.30808-6/671800612_1469121455232839_3122615949742477070_n.jpg?stp=dst-jpg_s565x565_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH9xBdbVmuJ0YzCbchu6Wp2_6AJK10lqOL_oAkrXSWo4i4XRa5IaWynDOpK2iq4kmhhThITPM1-88OFPziW_6Zg&_nc_ohc=hsm-qdU-LuoQ7kNvwGwqLej&_nc_oc=AdoJLUi3ey9gN3Io-iy5pE6pZ_jddunSDnnFf9Sc_8BxgrGPo1wqxLiY4zrohU79woM&_nc_zt=23&_nc_ht=scontent.fhdd2-1.fna&_nc_gid=fMIOE2IYUTa3uuD3xlYUUw&oh=00_Af3TUcSmJLmTFMplhE1g1ik0-QE3bRP1imUJfHLHQ9hqpg&oe=69EFCD70" 
              alt="Students" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <span className="bg-emerald-500 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Interactive Learning</span>
              <h3 className="text-5xl font-display font-black uppercase leading-none">Peshawar's Finest<br/>Faculty Team</h3>
            </div>
          </motion.div>

          {/* Side Card 1 */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-4 relative group rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-slate-50"
          >
            <img 
              src="https://scontent.fhdd2-1.fna.fbcdn.net/v/t39.30808-6/671841444_1466450175499967_7763304855306528373_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeG22MeFtZBxXnGy5oClXS44iANGt8tcryaIA0a3y1yvJtnCn0i12-a1umtNarmtImkE4mwzuK4PQcAJ7A5nzqO2&_nc_ohc=JZfot3cKNSsQ7kNvwFzhON2&_nc_oc=Adr9mP4-i2y5Tsi0hy3ml9Iq3S9HtmcN_3UHsM9SDp1TlX4oV_wwdpIUlLeCdK07NIU&_nc_zt=23&_nc_ht=scontent.fhdd2-1.fna&_nc_gid=Rl7AWvtteGO5E_Il6Y1BFA&oh=00_Af2tYjynTPtTlavej7a_gRoWjzskRypk4ioauXiqeaDtPQ&oe=69EFEA6D" 
              alt="Campus Life" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-blue-950/0 transition-colors" />
          </motion.div>

          {/* Side Card 2 - Stats */}
          <div className="md:col-span-4 bg-emerald-500 rounded-[2.5rem] p-10 flex flex-col justify-center shadow-xl shadow-emerald-500/20">
            <Trophy className="w-12 h-12 text-white mb-6" />
            <h4 className="text-white text-4xl font-display font-black uppercase leading-none mb-2">Proven<br/>Results</h4>
            <p className="text-white/90 font-bold text-xs uppercase tracking-widest leading-relaxed">Top Positions in MDCAT & ETEA Entrance Tests Year after Year.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// const SocialReels = () => {
//   return (
//     <section id="reels" className="py-32 bg-white px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
//           <div>
//             <h2 className="text-5xl md:text-7xl font-display font-black text-blue-950 tracking-tighter mb-6 underline decoration-emerald-500 decoration-8 underline-offset-8">See Our Campus in Action</h2>
//             <p className="text-xl text-slate-500 font-medium max-w-xl italic">Experience the energy through our student highlights.</p>
//           </div>
//           <div className="flex items-center gap-4">
//              <div className="w-16 h-16 bg-blue-950 rounded-2xl flex items-center justify-center text-emerald-500 shadow-xl">
//                <Video className="w-8 h-8" />
//              </div>
//              <div className="text-right">
//                <p className="text-2xl font-black text-blue-950">Live Tours</p>
//                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Peshawar, PK</p>
//              </div>
//           </div>
//         </div>

//         <div className="flex flex-wrap justify-center gap-10">
//           <motion.div 
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              className="relative pt-[20px] pb-[10px] px-[10px] bg-slate-900 rounded-[3rem] shadow-2xl"
//           >
//             <iframe 
//               src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1273461787624493%2F&show_text=false&width=267&t=0" 
//               width="267" 
//               height="476" 
//               style={{ border:'none', overflow: 'hidden', borderRadius: '32px' }} 
//               scrolling="no" 
//               frameBorder="0" 
//               allowFullScreen={true} 
//               allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
//             ></iframe>
//           </motion.div>

//           <motion.div 
//              initial={{ opacity: 0, y: 30 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              transition={{ delay: 0.2 }}
//              className="relative pt-[20px] pb-[10px] px-[10px] bg-slate-900 rounded-[3rem] shadow-2xl"
//           >
//             <iframe 
//               src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F771635305880197%2F&show_text=false&width=267&t=0" 
//               width="267" 
//               height="476" 
//               style={{ border:'none', overflow: 'hidden', borderRadius: '32px' }} 
//               scrolling="no" 
//               frameBorder="0" 
//               allowFullScreen={true} 
//               allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
//             ></iframe>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

const SocialReels = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const reels = [
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F771635305880197%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1552094299195954%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1456722269276156%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F923832946957648%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1487304406161443%2F&show_text=false&width=267&t=0", 
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1466670684962237%2F&show_text=false&width=267&t=0"  
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Roughly the width of one card + gap
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section id="reels" className="py-32 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-black text-blue-950 tracking-tighter mb-4">Inside Our Campus</h2>
            <p className="text-xl text-slate-500 font-medium max-w-xl">Swipe or click to experience the energy, results, and dedication of Excel Academy students.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
             {/* Left/Right Navigation Arrows */}
             <div className="flex gap-2">
               <button 
                 onClick={() => scroll('left')} 
                 className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-blue-950 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all shadow-sm active:scale-95"
               >
                 <ChevronLeft className="w-6 h-6" />
               </button>
               <button 
                 onClick={() => scroll('right')} 
                 className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-blue-950 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all shadow-sm active:scale-95"
               >
                 <ChevronRight className="w-6 h-6" />
               </button>
             </div>

             {/* Badge */}
             <div className="hidden md:flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-3xl border border-slate-100 shadow-sm">
               <div className="w-12 h-12 bg-blue-950 rounded-full flex items-center justify-center text-emerald-500 shadow-inner">
                 <Play className="w-5 h-5 ml-1" />
               </div>
               <div className="text-left">
                 <p className="text-lg font-black text-blue-950 leading-none"> Featured Reels</p>
                 <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mt-1">Campus Life</p>
               </div>
             </div>
          </motion.div>
        </div>

        {/* Horizontal Scroll Container attached to ref */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-16 pt-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] px-4 md:px-0"
        >
          {reels.map((url, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 60 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: i * 0.1, type: "spring", bounce: 0.4 }}
               whileHover={{ y: -15, scale: 1.02 }}
               className="shrink-0 snap-center relative p-2 bg-slate-900 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(3,21,61,0.2)] border border-slate-800 group transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_30px_60px_-15px_rgba(16,185,129,0.3)] cursor-pointer"
            >
              <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors duration-500 rounded-[2.5rem] pointer-events-none z-10" />
              
              <iframe 
                src={url} 
                width="267" 
                height="476" 
                style={{ border:'none', overflow: 'hidden', borderRadius: '32px' }} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="relative z-0"
              ></iframe>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CommunityTrust = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black text-blue-950 tracking-tight uppercase">
            Join a community of <span className="text-emerald-500">63,000+</span> Achievers
          </h2>
        </div>
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white group">
          <img 
            src="https://scontent.fhdd2-1.fna.fbcdn.net/v/t39.30808-6/425335566_830499049095086_8696973903688734568_n.png?stp=dst-png_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeFSTqkyGmH_redNOVzg1KyCYvHIAzQSUI1i8cgDNBJQjXq4bZ3EidKFKXxGq5dZBfQzKRbO3Wq1riKfmejB3-hY&_nc_ohc=wqGHmR06Xl0Q7kNvwEPaqxp&_nc_oc=AdqdE2g5kvJOcKyxpbX787_si48tKipFPclRjEhr6SAvd5ssIwosjn6v9K-Iy5PstX0&_nc_zt=23&_nc_ht=scontent.fhdd2-1.fna&_nc_gid=ilabbX3BP4WM1Y41zH1Rkw&oh=00_Af1pB38-9cVbusOzIpJ7hagLAM51ggqabVVJRWe-ti_J1A&oe=69F0042F" 
            alt="Excel Academy Community" 
            className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};

const ScholarshipBento = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    
        <section id="scholarships" className="py-32 px-6 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-6xl md:text-8xl font-display font-black text-white tracking-tighter mb-10 uppercase">Merit Scholarships</h2>
               <div className="inline-flex items-center gap-4 bg-slate-800 border border-slate-700 px-10 py-5 rounded-full shadow-lg">
                 <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                   <Star className="w-6 h-6 fill-current" />
                 </div>
                 <p className="text-2xl font-black text-white">Join Test-2 on April 25th</p>
               </div>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <GlassCard className="md:col-span-2 flex flex-col items-center justify-center text-center py-16 hover:border-emerald-500/50 transition-colors">
                <h3 className="text-8xl font-black text-white mb-2">100%</h3>
                <p className="text-2xl font-bold text-emerald-500 mb-6 uppercase tracking-widest leading-none">Scholarship</p>
                <div className="w-20 h-1.5 bg-emerald-500 rounded-full mb-8" />
                <p className="text-4xl font-black text-white font-display">580+ Marks</p>
              </GlassCard>
    
              <GlassCard className="md:col-span-2 flex flex-col items-center justify-center text-center py-16 hover:border-emerald-500/50 transition-colors">
                 <h3 className="text-8xl font-black text-white mb-2">50%</h3>
                 <p className="text-2xl font-bold text-emerald-500 mb-6 uppercase tracking-widest leading-none">Scholarship</p>
                 <div className="w-20 h-1.5 bg-emerald-500 rounded-full mb-8" />
                 <p className="text-4xl font-black text-white font-display">550+ Marks</p>
              </GlassCard>
    
              <GlassCard className="md:col-span-4 lg:col-span-2 flex flex-col items-center justify-center text-center py-16 hover:border-emerald-500/50 transition-colors">
                 <h3 className="text-8xl font-black text-white mb-2">30%</h3>
                 <p className="text-2xl font-bold text-emerald-500 mb-6 uppercase tracking-widest leading-none">Scholarship</p>
                 <div className="w-20 h-1.5 bg-emerald-500 rounded-full mb-8" />
                 <p className="text-4xl font-black text-white font-display">500+ Marks</p>
              </GlassCard>

          <div className="md:col-span-4 lg:col-span-6 bg-blue-950 rounded-[3rem] p-12 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="relative z-10">
              <h4 className="text-5xl md:text-7xl font-black text-white mb-6">Rs. 50,000 Reward</h4>
              <p className="text-2xl text-emerald-400 font-bold max-w-3xl mx-auto mb-10">
                Exclusive grant for candidates scoring over <span className="text-white underline decoration-white-2 decoration-dotted underline-offset-8">95% Marks</span>. Recognition where it matters.
              </p>
              <Button onClick={onOpenModal} size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl px-12 h-20 text-xl font-bold transition-all shadow-2xl active:scale-95">
                Register Now
              </Button>
            </div>
            {/* Animated circles */}
            <div className="absolute -top-1/2 -left-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] group-hover:bg-emerald-500/30 transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};




const Footer = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <footer className="bg-white py-32 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 items-start mb-24">
          <div className="lg:col-span-1">
             <div className="flex items-center gap-4 mb-10">
             <div className="flex items-center justify-center transition-transform hover:scale-105">
            <img 
              src="/logo.png" 
              alt="Excel Learners Academy Logo" 
              className="h-12 w-auto object-contain" 
            />
          </div>
                <div>
                   <h5 className="text-3xl font-black text-blue-950 tracking-tighter uppercase">Excel Academy</h5>
                   <p className="text-xs font-black text-emerald-500 uppercase tracking-widest">Peshawar, Pakistan</p>
                </div>
             </div>
             <p className="text-xl text-slate-500 font-medium leading-relaxed">
               The premier preparatory institution for high-stakes examinations. Committed to molding the next generation of engineers and doctors.
             </p>
          </div>

          <div className="lg:col-span-1">
             <h6 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10">Contact High Lines</h6>
             <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                   <div className="w-14 h-14 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center text-blue-950 group-hover:bg-emerald-500 group-hover:text-white transition-colors cursor-pointer">
                      <Phone className="w-6 h-6" />
                   </div>
                   <div>
                      <p className="text-2xl font-black text-blue-950">0314-6949869</p>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Main Reception</p>
                   </div>
                </div>
                <div className="flex items-center gap-6 group">
                   <div className="w-14 h-14 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center text-blue-950 group-hover:bg-emerald-500 group-hover:text-white transition-colors cursor-pointer">
                      <Phone className="w-6 h-6" />
                   </div>
                   <div>
                      <p className="text-2xl font-black text-blue-950">0330-5450343</p>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Admission Cell</p>
                   </div>
                </div>
             </div>
          </div>

          <div className="lg:col-span-1">
             <h6 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10">Location Hub</h6>
             <div className="flex gap-6">
                <div className="w-14 h-14 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center text-emerald-500 shrink-0">
                   <MapPin className="w-6 h-6" />
                </div>
                <p className="text-xl text-blue-950 font-bold leading-relaxed">
                  New Arbab Colony, behind Siyal Flats, Abdara Road BRT Stop, University Road, Peshawar, 25000.
                </p>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-16 border-t border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-widest gap-8">
           <p>© 2026 Excel Learners Academy. All rights reserved.</p>
           <div className="flex gap-10">
              <a href="#" className="hover:text-emerald-500 transition-all font-black">Privacy Protocol</a>
              <a href="#" className="hover:text-emerald-500 transition-all font-black">Admission Policy</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

const RegistrationModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[600] flex items-center justify-center p-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-blue-950/80 backdrop-blur-xl" />
          <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative bg-white w-full max-w-lg rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="bg-emerald-500 p-10 text-white">
              <button onClick={onClose} className="absolute top-6 right-6 hover:rotate-90 transition-transform"><X className="w-8 h-8" /></button>
              <h3 className="text-4xl font-display font-black uppercase leading-none">Scholarship<br/>Registration</h3>
            </div>
            <form action="https://formspree.io/f/mjgjjkvn" method="POST" className="p-10 space-y-6">
              <div>
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2 block">Student Name</label>
                <input name="name" required className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none font-bold text-blue-950 focus:border-emerald-500" placeholder="Abdullah Khan" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input name="phone" required className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none font-bold text-blue-950" placeholder="03xx-xxxxxxx" />
                <select name="program" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none font-bold text-blue-950">
                  <option>MDCAT</option><option>ETEA</option><option>1st Year</option><option>2nd Year</option>
                </select>
              </div>
              <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white h-20 rounded-2xl text-xl font-black uppercase tracking-widest">Submit Application</Button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- 1. FLYER CONVERTED TO PURE CODE UI ---
const AdmissionsShowcase = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section id="programs" className="py-32 px-6 relative bg-slate-50/50 overflow-hidden">
      
      {/* TEXTURE 1: Architectural Blueprint Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 relative">
          <h2 className="text-6xl md:text-8xl font-display font-black text-blue-950 tracking-tighter mb-6 uppercase">
            Academic <span className="text-emerald-500">Excellence</span>
          </h2>
          <p className="text-xl text-slate-500 font-sans font-bold max-w-2xl mx-auto uppercase tracking-wider bg-slate-50/80 backdrop-blur-sm inline-block px-6 py-2 rounded-full border border-slate-200/50 shadow-sm">
            Fresh tuition classes & specialized test prep.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: The Scholarship Tests */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-blue-950 rounded-[3rem] p-10 text-white relative overflow-hidden h-full flex flex-col justify-center shadow-[0_20px_50px_rgba(3,21,61,0.2)] border border-blue-900">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
              
              <div className="relative z-10">
                <span className="bg-emerald-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block shadow-lg shadow-emerald-500/20 ring-1 ring-white/20">Admissions Open</span>
                <h3 className="text-5xl font-display font-black uppercase leading-none mb-8">Post Matric<br/>Classes</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-5 bg-white/5 hover:bg-white/10 transition-colors p-5 rounded-2xl border border-white/10 backdrop-blur-md group">
                    <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                      <Calendar className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] mb-1">Scholarship Test 1</p>
                      <p className="text-3xl font-black font-display tracking-wide">19th April</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-5 bg-white/5 hover:bg-white/10 transition-colors p-5 rounded-2xl border border-white/10 backdrop-blur-md group">
                    <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                      <Calendar className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] mb-1">Scholarship Test 2</p>
                      <p className="text-3xl font-black font-display tracking-wide">25th April</p>
                    </div>
                  </div>
                </div>

                <Button onClick={onOpenModal} className="w-full mt-8 bg-emerald-500 hover:bg-emerald-600 text-white h-16 rounded-2xl text-lg font-black uppercase tracking-widest shadow-xl shadow-emerald-500/20 active:scale-95 transition-all border border-emerald-400">
                  Secure Your Seat
                </Button>
              </div>
            </div>
          </div>

          {/* Right: The Programs - NOW UPGRADED TO RICH BENTO CARDS */}
          {/* Right: The Programs - NOW USING BULLETPROOF LOCAL IMAGES */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Box 1: Medical & Engineering */}
            <motion.div whileHover={{ y: -5 }} className="bg-white border border-slate-100 rounded-[3rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all relative overflow-hidden group flex flex-col">
              
              {/* Visual Density: Local Image Header */}
              <div className="h-48 w-full relative overflow-hidden shrink-0 bg-slate-200">
                {/* USING YOUR LOCAL FILE: excel1.jpg */}
                <img src="/excel1.jpg" alt="Medical Prep" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                <div className="absolute bottom-4 left-8 z-10">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-100">
                    <Stethoscope className="w-7 h-7 text-emerald-500" />
                  </div>
                </div>
              </div>

              <div className="p-8 pt-4 flex-1 flex flex-col">
                <h4 className="text-2xl font-display font-black text-blue-950 uppercase leading-none mb-6">Medical &<br/>Engineering</h4>
                
              {/* Visual Density: Solid UI List Blocks */}
              <ul className="space-y-3 font-bold text-slate-600 text-sm flex-1">
                  <li className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 group-hover:border-emerald-100 transition-colors"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> ETEA Preparation</li>
                  <li className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 group-hover:border-emerald-100 transition-colors"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> MDCAT (Repeater)</li>
                  <li className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 group-hover:border-emerald-100 transition-colors"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> KMU-CAT Training</li>
                  <li className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 group-hover:border-emerald-100 transition-colors"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> NUMS Excellence</li>
                  <li className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 group-hover:border-emerald-100 transition-colors"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Grand Test Series</li>
                </ul>
              </div>
            </motion.div>

            {/* Box 2: Fresh Tuition */}
            <motion.div whileHover={{ y: -5 }} className="bg-white border border-slate-100 rounded-[3rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all relative overflow-hidden group flex flex-col">
              
              {/* Visual Density: Local Image Header */}
              <div className="h-48 w-full relative overflow-hidden shrink-0 bg-slate-200">
                {/* USING YOUR LOCAL FILE: excel.jpg */}
                <img src="/excel.jpg" alt="Tuition Classes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                <div className="absolute bottom-4 left-8 z-10">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-100">
                    <BookOpen className="w-7 h-7 text-emerald-500" />
                  </div>
                </div>
              </div>

              <div className="p-8 pt-4 flex-1 flex flex-col">
                <h4 className="text-2xl font-display font-black text-blue-950 uppercase leading-none mb-6">Fresh Tuition<br/>Classes</h4>
             {/* Visual Density: Solid UI List Blocks */}
             <ul className="space-y-3 font-bold text-slate-600 text-sm flex-1">
                  <li className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 group-hover:border-emerald-100 transition-colors"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> 1st Year (FSc/FA) Base</li>
                  <li className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 group-hover:border-emerald-100 transition-colors"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> 2nd Year Board Prep</li>
                  <li className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 group-hover:border-emerald-100 transition-colors"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> 9th & 10th Matriculation</li>
                  <li className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 group-hover:border-emerald-100 transition-colors"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> 8th Grade Foundation</li>
                  <li className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 group-hover:border-emerald-100 transition-colors"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Weekly Assessment Tests</li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

// --- 2. MASSIVE PHOTO GALLERY ---
const CampusGallery = () => {
  // Using the links you provided. I recommend eventually downloading these
  // and serving them from /public to avoid Facebook CDN pixelation.
  const photos = [
    "/excel1.jpg",
    "https://scontent.fhdd2-1.fna.fbcdn.net/v/t39.30808-6/491435896_1150355907109397_7698117441103384348_n.jpg?stp=c0.79.720.720a_cp6_dst-jpg_s206x206_tt6&_nc_cat=109&ccb=1-7&_nc_sid=5df8b4&_nc_eui2=AeFtbVOdjm3Qo8Pc-vdoSy28H-8UIAsKcqof7xQgCwpyqv-OUrg_00a6wXAdFyMxZZMCojpNm-ekoNzdbW86sNDd&_nc_ohc=ZaitP4RYmVQQ7kNvwEw-koP&_nc_oc=Adp4YlcpCMwWHmHvk99G1i_cJBoOo6IHWZkXUTLLw3MFf_cp_xQmtSIIdWVS2Jk-i2I&_nc_zt=23&_nc_ht=scontent.fhdd2-1.fna&_nc_gid=NVHBV6bs5_Wp6REaFVglzw&oh=00_Af1WYd9lqHIiHxRUYtwyQkk__xNEamLTUV1mT1O5DEEjEg&oe=69EFF185",
    "https://scontent.fhdd2-1.fna.fbcdn.net/v/t39.30808-6/484190525_3924156911189622_2511852513957664077_n.jpg?stp=c128.0.768.768a_dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=a934a8&_nc_eui2=AeHY9reFYvAYRHExaQZN8Zz7-FgBnT1Cga_4WAGdPUKBrwclodKzDIWNUsKHGcEKMOJpWUE4SfqpRk--pvRA01dx&_nc_ohc=HQk6bYLKF2wQ7kNvwGJ97lG&_nc_oc=AdpbIIvLsCi3qsCu8M78KfTpO_AVEmSd7-PqYeAtse75kiM-CT-Zj067a8kKHYR5Z5M&_nc_zt=23&_nc_ht=scontent.fhdd2-1.fna&_nc_gid=taPEEEWVaZyQPdP1Gpyf0w&oh=00_Af3Tz7MD1ztTUtAE8psGL-yJmUt7UZcXYScwQ70pmNEXSQ&oe=69F02B6E",
    
    "https://scontent.fhdd2-1.fna.fbcdn.net/v/t39.30808-6/492032263_1147846147360373_4759967759714949565_n.jpg?stp=c256.0.1536.1536a_cp6_dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=5df8b4&_nc_eui2=AeHttNbawAWDFszz_CPNUxYCMtyc2_jvGFEy3Jzb-O8YUeaL06UOZWV0qQSJhQf527wvztcGhT-n5f3eCIyGHQVD&_nc_ohc=RxwkOqfC4wEQ7kNvwG3BuiB&_nc_oc=Ado0L6K-kQld17fMLJik2y4VgLBn-8S-t2D0voDX-zzBNJb9ALGXIsqAVU4x6RczmGM&_nc_zt=23&_nc_ht=scontent.fhdd2-1.fna&_nc_gid=zvVNPtySx6-CaB9Oxf8GPA&oh=00_Af2l3cQAtfTydGvs5M9DcJP03o-6o6qnPXFE1drv8tNVaA&oe=69EFF68F",
    "https://scontent.fhdd2-1.fna.fbcdn.net/v/t39.30808-6/484795550_3925334521071861_2783460890852553074_n.jpg?stp=c128.0.768.768a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=a934a8&_nc_eui2=AeH5zorpbs_KQpQ4lppM9uidTlCiegdm9lFOUKJ6B2b2UWuuYf2ZYoF4_9N1R4rtcRJSUO7ky6FFiSPx15Bkpck8&_nc_ohc=Olbc2uzjkdQQ7kNvwGHv7AG&_nc_oc=Ado1nNQSg4IAavTjGkI5HRomfuZhloKiAtG_pMnNTb6Y-Wl8WhDU5ItoNdjPfPWg7pg&_nc_zt=23&_nc_ht=scontent.fhdd2-1.fna&_nc_gid=k5R1g4De4sA3rc5gqi3-Og&oh=00_Af3LZ5kMYAKW2Q2C3UAa6fyCdiDESSb1twQXshr_4-76bQ&oe=69F0053A",
    "https://scontent.fhdd2-1.fna.fbcdn.net/v/t39.30808-6/484344192_3924163824522264_1929098643569637652_n.jpg?stp=c146.0.732.732a_dst-jpg_s206x206_tt6&_nc_cat=103&ccb=1-7&_nc_sid=5df8b4&_nc_eui2=AeHF1T8Otj-0YtnY54YItb9VNZIVA0kb3pE1khUDSRvekVRg0MQpi2hiSbpbRo5eM928Z56AClF-Xm1uV3S1PSDI&_nc_ohc=AwwR7-ZM7FwQ7kNvwGVHJMw&_nc_oc=AdpbV2Pug20dJk7qoV7yEJVTHWXVFWeKS2RDmLFGK_CWFqem61ICWbM5KVzFXPRpeHk&_nc_zt=23&_nc_ht=scontent.fhdd2-1.fna&_nc_gid=WW0xBgcZVtdb2D1YzXngGw&oh=00_Af1cxuGeWyaG7X7AmAadAsEbPZzMDrtkf3TTly__jVmUPg&oe=69F00962"
  ];

  return (
    <section id="campus" className="py-32 bg-slate-900 px-6 relative overflow-hidden">
      {/* Background accents to match the premium theme */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter mb-4 uppercase">
              Life at <span className="text-emerald-500">Excel</span>
            </h2>
            <p className="text-xl text-slate-400 font-sans font-bold uppercase tracking-wider max-w-xl">
              A legacy of high achievers and award-winning students.
            </p>
          </div>
          <a 
            href="https://www.facebook.com/EXCEL.OFFICIAL.PAGE005/photos" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest transition-all hover:-translate-y-1 active:translate-y-0 shadow-lg shadow-emerald-500/20 group"
          >
            View Full Gallery 
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </a>
        </div>

        {/* Uniform, Clean Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative aspect-square rounded-3xl overflow-hidden group cursor-pointer border border-slate-700/50 bg-slate-800 shadow-xl"
            >
              {/* Subtle loading skeleton color */}
              <div className="absolute inset-0 bg-slate-800 animate-pulse" />
              
              <img 
                src={src} 
                alt={`Campus Life ${i + 1}`} 
                className="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* Premium dark gradient overlay on hover */}
              <div className="absolute inset-0 bg-blue-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border-2 border-emerald-500 flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ArrowUpRight className="w-5 h-5 text-emerald-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const AIAdmissionsAgent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([
    // Removed "AI" from the initial greeting
    { role: 'assistant', content: 'Welcome to Excel Learners Academy! I am your ELA Admissions Agent. How can I assist your success story today?' }
  ]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      if (!genAI) throw new Error("API key missing");
      
      const response = await genAI.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMessage,
        config: {
          systemInstruction: `You are a human Admissions Support Agent at the front desk of Excel Learners Academy (ELA) in Peshawar.

          CRITICAL RULES FOR YOUR BEHAVIOR:
          1. NO MARKDOWN: NEVER use asterisks (**), bolding, or italics. Use 100% plain text only. Your chat interface cannot render markdown.
          2. CONVERSATIONAL PACING: Do NOT dump all your information at once. Take it one step at a time like a real human texting.
          3. GREETINGS: If the user just says "Hi", "Hey", or "Salam", simply reply with: "Assalam u Aluikum! Welcome to Excel Learners Academy. How can I help you today?" and WAIT for their response.
          4. THE CLOSE: ONLY ask for their Name, Phone Number, and Class AFTER they express interest in joining, ask about admissions, or ask about scholarships. 
          5. HUMAN IDENTITY: NEVER mention you are an AI, bot, or language model. You are a real human working at the ELA admissions desk. Keep answers under 3 sentences.

          ACADEMY CONTEXT (Use only when specifically asked):
          - Location: New Arbab Colony, behind Siyal Flats, near Abdara Road BRT Stop, University Road, Peshawar.
          - Phone: 0314-6949869, 0330-5450343.
          - Prep Offered: MDCAT, ETEA, KMU-CAT, NUMS, and 8th to 12th Grade Fresh Tuition.
          - Scholarship Tests: April 19th & April 25th.
          - Tiers: 580+ Marks = 100% Free, 550+ = 50%, 500+ = 30%. >95% score gets Rs. 50,000 reward.`
        }
      });
      
      const responseText = response.text || "Our admission agents are currently on campus. Please contact us directly at 0314-6949869 for an immediate response.";
      setMessages(prev => [...prev, { role: 'assistant', content: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "An error occurred. Please contact the admission desk directly at 0314-6949869." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[600] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[calc(100vw-2rem)] sm:w-[400px] h-[500px] md:h-[600px] max-h-[80vh] bg-slate-50/95 backdrop-blur-3xl rounded-[2rem] border border-slate-200 flex flex-col overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)]"
          >
            {/* Clean, perfectly padded Header */}
            <div className="bg-blue-950 px-6 py-5 flex items-center justify-between relative shrink-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
               <div className="relative z-10">
                  <h3 className="text-white text-lg font-black tracking-tight leading-none mb-1">Admissions Desk</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    {/* Scrubbed "Institutional AI" */}
                    <p className="text-[9px] text-emerald-400 font-black uppercase tracking-widest">Online • Support Team</p>
                  </div>
               </div>
               <button onClick={() => setIsOpen(false)} className="relative z-10 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                  <X className="w-5 h-5 text-white" />
               </button>
            </div>

            {/* iOS-Style Message Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-5 scrollbar-hide">
              {messages.map((m, i) => (
                <div key={i} className={cn(
                  "flex flex-col max-w-[85%]",
                  m.role === 'user' ? "ml-auto items-end" : "mr-auto items-start"
                )}>
                  <div className={cn(
                    "p-4 px-5 rounded-[1.5rem]",
                    m.role === 'user' 
                      ? "bg-emerald-500 text-white rounded-tr-sm shadow-md" 
                      : "bg-white text-blue-950 rounded-tl-sm font-semibold shadow-sm border border-slate-100"
                  )}>
                    <p className="text-sm leading-relaxed">{m.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-1.5 items-center px-4 py-3 w-fit bg-white border border-slate-100 rounded-full shadow-sm">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" />
                </div>
              )}
            </div>

            {/* Compact Input Form */}
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-100 flex items-center gap-3 shrink-0">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                /* Scrubbed "AI" from placeholder */
                placeholder="Ask our Admissions Desk..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 font-semibold text-blue-950 transition-all placeholder:text-slate-400"
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isLoading}
                className="bg-emerald-500 text-white w-12 h-12 rounded-xl hover:bg-emerald-600 disabled:opacity-50 disabled:hover:bg-emerald-500 transition-all flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20 active:scale-95"
              >
                <Send className="w-5 h-5 ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modern Morphing Action Button */}
      <Button 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-[1.5rem] bg-blue-950 text-white flex items-center justify-center shadow-[0_10px_30px_rgba(3,21,61,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 group border border-white/20 z-50",
          isOpen && "bg-emerald-500 rotate-90 scale-90 hover:scale-95"
        )}
      >
        <MessageSquare className={cn("w-7 h-7 absolute transition-all duration-300", isOpen ? "scale-0 opacity-0 rotate-90" : "scale-100 opacity-100 rotate-0")} />
        <X className={cn("w-7 h-7 absolute transition-all duration-300", isOpen ? "scale-100 opacity-100 -rotate-90" : "scale-0 opacity-0 rotate-0")} />
      </Button>
    </div>
  );
};
export default function LandingPage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-emerald-500/30 selection:text-blue-950">
<Navbar onOpenModal={() => setModalOpen(true)} />
<Hero onOpenModal={() => setModalOpen(true)} />
  {/* The Two New Sections */}
  <AdmissionsShowcase onOpenModal={() => setModalOpen(true)} />
      <CampusGallery />
{/* <ExperienceGrid onOpenModal={() => setModalOpen(true)} /> */}
<SocialReels onOpenModal={() => setModalOpen(true)} />
<CommunityTrust onOpenModal={() => setModalOpen(true)} />
<ScholarshipBento onOpenModal={() => setModalOpen(true)} />
<Footer onOpenModal={() => setModalOpen(true)} />
      <AIAdmissionsAgent />
      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
