import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'kahve',
  templateUrl: './kahve.component.html',
  styleUrls: ['./kahve.component.css']
})
export class KahveComponent {

  kahves = [
    {
      "title": "sevdiğiniz kahveyi keşfetmek için",
      "description": "Kahve uzmanlarımız yıllardır biriktirdikleri tat kültürlerini, mutlaka seveceğiniz bir kahve bulmanızda size yardım etmek amacıyla üç basit soruya indirgemiştir."
    },
  ]

  etikets = [
    { "link": "Başlarken" },
    { "link": "Tüm Kahveler Tara" }

  ]
  constructor() { }
  ngOnInit(): void {
  }

}
