import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magaza',
  templateUrl: './magaza.component.html',
  styleUrls: ['./magaza.component.css']
})
export class MagazaComponent implements OnInit {


  details = [

    {
      "id": 1,
      "title": "4.Adres",
      "description": "Sosyal mecralarımız aracılığı ile hem bizimle, hem de arkadaşlarınızla iletişim içinde olabilirsiniz."
    },
    {
      "id": 2,
      "title": "Kablosuz Internet",
      "description": "Kahvemiz insanları bir araya getirir, internet ise iletişimde kalmanızı sağlar",
    },
    {
      "id": 3,
      "title": "Mağaza Tasarımı",
      "description": "Starbucks mağazalarını bu kadar canlı ve çekici kılan nedir? İçinde bulunduğumuz toplumlara ve çevreye duyduğumuz sorumluluk."
    }
  ]

  etikets = [

    {
      "contact": "Bize Facebook'ta katılın"
    },
    { "contact": "Bizi Twiter'da takip edin" },
    { "contact": "Bizi Instagram'da takip edin" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
