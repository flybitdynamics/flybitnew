import { mapPublicAssets } from '@/lib/public-assets';

const social = [
  '/services/Social events/Image 01.png',
  '/services/Social events/wildmind_jagrutipanchal9624_2026_04_16_14_57_58.png',
  '/services/Social events/wildmind_jagrutipanchal9624_2026_04_20_16_34_21.png',
  '/services/Social events/wildmind_jagrutipanchal9624_2026_04_20_16_46_12.png',
  '/services/Social events/wildmind_jagrutipanchal9624_2026_04_16_14_53_09.png',
  '/services/Social events/wildmind_jagrutipanchal9624_2026_04_20_17_48_37.png',
  '/services/Social events/wildmind_jagrutipanchal9624_2026_04_21_13_10_22.png',
];

const weddings = [
  '/services/Weddings/magnific_a-coordinated-drone-light_2897076358.png',
  '/services/Weddings/magnific_a-coordinated-drone-light_2897863658.png',
  '/services/Weddings/freepik_edit_A-coordinated-drone-light-show-in-a-deep-dark-nigh.png',
  '/services/Weddings/magnific_a-coordinated-drone-light_2897361847.png',
  '/services/Weddings/ChatGPT Image Apr 30, 2026, 05_57_30 PM.png',
  '/services/Weddings/Gemini_Generated_Image_aa8pphaa8pphaa8p.png',
  '/services/Weddings/magnific_a-coordinated-drone-light_2897461712.png',
  '/services/Weddings/freepik_edit_A-coordinated-drone-light-show-in-a-deep-dark-nigh (1).png',
  '/services/Weddings/magnific_a-coordinated-drone-light_2897107240.png',
  '/services/Weddings/magnific_a-coordinated-drone-light_2896977581.png',
  '/services/Weddings/magnific_a-coordinated-drone-light_2897806181.png',
  '/services/Weddings/magnific_a-coordinated-drone-light_2896887007.png',
  '/services/Weddings/magnific_minimal-drone-formation-s_2938673491.png',
  '/services/Weddings/magnific_a-coordinated-drone-light_2897070901.png',
];

const corporate = [
  '/services/Corporate/Gemini_Generated_Image_ehhediehhediehhe.png',
  '/services/Corporate/magnific_drone-light-show-forming-_2914506297.png',
  '/services/Corporate/magnific_drone-light-show-forming-_2906284090.png',
  '/services/Corporate/Gemini_Generated_Image_r68o0qr68o0qr68o.png',
  '/services/Corporate/magnific_create-a-realistic-drone-_2907373149.png',
  '/services/Corporate/magnific_create-a-realistic-drone-_2907147667.png',
  '/services/Corporate/wildmind_jagruti_2026_04_28_13_31_48.png',
  '/services/Corporate/magnific_create-a-realistic-drone-_2907140397.png',
  '/services/Corporate/magnific_drone-light-show-forming-_2906280909.png',
  '/services/Corporate/magnific_drone-light-show-forming-_2906766647 (1).png',
  '/services/Corporate/magnific_drone-light-show-forming-_2914422499.png',
];

const government = [
  '/services/Gov. & National events/0c0a6064-ad21-449d-92c7-9f9370e3ab53.jpg',
  '/services/Gov. & National events/magnific_ultra-realistic-indian-de_2973970726.png',
  '/services/Gov. & National events/magnific_minimal-indian-cultural-f_2973936036.png',
  '/services/Gov. & National events/magnific_luxury-international-summ_2973713752.png',
  '/services/Gov. & National events/Gemini_Generated_Image_7iq3rk7iq3rk7iq3.png',
  '/services/Gov. & National events/Gemini_Generated_Image_ouditaouditaoudi.png',
  '/services/Gov. & National events/magnific_regenarate-this-image-rem_2972033838.png',
  '/services/Gov. & National events/magnific_regenarte-this-image-chan_2979519475.png',
  '/services/Gov. & National events/magnific_minimal-realistic-drone-s_2981174088 (1).png',
  '/services/Gov. & National events/magnific_regenarte-this-image-chan_2979504132.png',
  '/services/Gov. & National events/magnific_enhance-this-real-drone-l_2986599818.png',
  '/services/Gov. & National events/magnific_in-this-attached-image-in_2930012958.png',
];

const launch = [
  '/services/Product Launch/wildmind_jagruti_2026_05_02_12_14_32.png',
  '/services/Product Launch/magnific_a-coordinated-drone-light_2914463920.png',
  '/services/Product Launch/magnific_drone-light-show-forming-_2914373595.png',
];

const spiritual = [
  '/services/Spirituals/magnific_regenarate-this-image-and_2938558128.png',
  '/services/Spirituals/magnific_enhance-this-real-drone-l_2923698706.png',
  '/services/Spirituals/magnific_minimal-drone-formation-s_2937278435.png',
  '/services/Spirituals/magnific_enhance-this-real-drone-l_2923855151.png',
  '/services/Spirituals/magnific_drone-light-show-forming-_2922834071.png',
  '/services/Spirituals/magnific_minimal-drone-formation-s_2922870424.png',
  '/services/Spirituals/magnific_drone-light-show-forming-_2937333949.png',
  '/services/Spirituals/magnific_a-realistic-drone-light-s_2907342325.png',
  '/services/Spirituals/magnific_ultra-realistic-minimal-d_2965525239.png',
  '/services/Spirituals/magnific_minimal-realistic-drone-l_2965739047.png',
  '/services/Spirituals/magnific_minimal-realistic-drone-l_2966658367.png',
  '/services/Spirituals/magnific_drone-formation-of-a-budd_2960060246.png',
  '/services/Spirituals/magnific_drone-formation-of-a-diya_2937268025.png',
  '/services/Spirituals/magnific_enhance-this-real-drone-l_2923634446.png',
  '/services/Spirituals/magnific_drone-formation-of-a-sacr_2922761917.png',
  '/services/Spirituals/magnific_ultra-realistic-drone-sho_2964928011.png',
  '/services/Spirituals/magnific_ultra-realistic-minimal-d_2966439749.png',
  '/services/Spirituals/magnific_minimal-drone-light-show-_2937317844.png',
];

const sports = [
  '/services/Sports & Entertaintment/magnific__futuristic-esports-drone-show-with-gaming-controll__32947.png',
  '/services/Sports & Entertaintment/magnific__luxury-concert-drone-performance-with-music-note-f__32946.png',
  '/services/Sports & Entertaintment/magnific_slightly-increase-the-bri_2972532535.png',
  '/services/Sports & Entertaintment/magnific_minimal-basketball-drone-_2986555497.png',
  '/services/Sports & Entertaintment/magnific_slightly-increse-the-brig_2998766505.png',
  '/services/Sports & Entertaintment/magnific__minimal-basketball-arena-drone-performance-with-gi__32944.png',
  '/services/Sports & Entertaintment/wildmind_jagrutipanchal9624_2026_04_20_17_01_55.png',
  '/services/Sports & Entertaintment/magnific_minimal-drone-light-forma_2939193667.png',
  '/services/Sports & Entertaintment/magnific_in-this-attached-image-in_2930156835.png',
  '/services/Sports & Entertaintment/wildmind_jagrutipanchal9624_2026_04_20_17_07_55.png',
  '/services/Sports & Entertaintment/magnific_massive-countdown-numbers_2986324109.png',
];

const custom = [
  social[0],
  weddings[0],
  corporate[0],
  government[0],
  launch[0],
  spiritual[0],
  sports[0],
  weddings[2],
  corporate[2],
  spiritual[3],
];

export const SERVICE_IMAGES = {
  social: mapPublicAssets(social),
  weddings: mapPublicAssets(weddings),
  corporate: mapPublicAssets(corporate),
  government: mapPublicAssets(government),
  launch: mapPublicAssets(launch),
  spiritual: mapPublicAssets(spiritual),
  sports: mapPublicAssets(sports),
  custom: mapPublicAssets(custom),
} as const;

export type ServiceImageCategory = keyof typeof SERVICE_IMAGES;

export function encodeServiceImagePath(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return path
    .split('/')
    .map((segment, index) => (index === 0 ? segment : encodeURIComponent(segment)))
    .join('/');
}
