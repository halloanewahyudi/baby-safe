export const useHome = () => {
    return useState('home', () => [
      {
         slideShow:[
            {
                name:'Slide One',
                img:'https://www.babysafe.co.id/pic/bannerste01_revisi2_content_311.jpg'
            },
            {
                name:'Slide Two',
                img:'https://www.babysafe.co.id/pic/bannerbottle_revisi4_content_312.jpg'
            },
            {
                name:'Slide Three',
                img:'https://www.babysafe.co.id/pic/bannerbpe02_revisi1_content_313.jpg'
            }
         ],
         banner:'https://www.babysafe.co.id/pic/feeding_18maret17_content_322.jpg',
         articles:[
           {
            title:'Slow Cooker',
            description:'Memasak MPASI yang sehat dan bernutrisi untuk si kecil sekarang makin mudah. Bunda dapat menggunakan slow cooker yang memasak dengan suhu lebih rendah (dari kompor) untuk mempertahankan lebih banyak gizi dalam makanan.',
            cover:'https://www.babysafe.co.id/pic/lb07mp_content_316.jpg',
            image:'https://www.babysafe.co.id/pic/lb07m_content_316.jpg'
           },
           {
            title:'Twin Bottle Warmer',
            description:'Bottle warmer menjaga agar susu yang belum dihabiskan oleh anak tetap hangat dalam suhu ideal. Twin Bottle Warmer berkapasitas dua botol, menghangatkan susu dan air minum secara bersamaan.',
            cover:'https://www.babysafe.co.id/pic/33278026_s_content_314.jpg',
            image:'https://www.babysafe.co.id/pic/produk_content_314.jpg'
           },
           {
            title:'Booster Seat ',
            description:'Booster Seat BabySafe adalah kursi makan anak yang dapat dilipat sehingga praktis, hemat ruang dan mudah untuk dibawa ke mana-mana. Dapat digunakan diatas lantai maupun diatas kursi.',
            cover:'https://www.babysafe.co.id/pic/bocil_e_content_315.jpg',
            image:'https://www.babysafe.co.id/pic/bo02dino_content_315.png'
           }
         ]
      }
    ])
}