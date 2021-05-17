import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  menus = [

    {
      "title": "Menü",
      "description": "Lezzetli, el yapımı içecekler ve mükemmel tadı olan yiyecekler. Hayatı güzelleştirmenin sırrı.",
      "image": "assets/img-starbucks/menu.jpg",
      "extra": "Çok doğru. Mükemmel kahve ve lezzetli bir yiyecek gününüzü harika hale getirebilir.O yüzden seçtiğiniz her şeyin en iyi kalitede olmasına dikkat ediyoruz. "
    }
  ]

  details = [
    {
      "title": "İçecekler",
      "description": "Dünyanın en kaliteli kahve çekirdekleri ile hazırladığımız el yapımı içecekler. Size bu içecekleri sunduğumuziçin çok mutluyuz.",
      "etiket": "Starbucks İçecekleri"
    },

    {
      "title": "Yiyecekler",
      "description": "Tüm yiyecek ürünlerimiz en kaliteli malzemeler ile hazırlanır. Tattığınız yiyeceklerin hepsi bu yüzden çoklezzetli.",
      "etiket": "Starbucks Yiyecekleri"
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
