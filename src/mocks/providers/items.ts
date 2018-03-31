import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/gaji.png",
    "about": "Burt is a Bear."
  };


  constructor() {
    let items = [
     {
        "name": "Profil",
        "profilePic": "assets/img/speakers/profil.jpg",
        "about": "diisi dengan profil milik akun"
      },
      {
        "name": "Pengahasilan",
        "profilePic": "assets/img/speakers/gaji.png",
        "about": "Berisi rincian gaji dari pegawai"
      },
      {
        "name": "Record Absensi",
        "profilePic": "assets/img/speakers/absen.jpg",
        "about": "Berisi rincian gaji dari pegawai"
      },
      {
        "name": "Sisa Cuti",
        "profilePic": "assets/img/speakers/cuti.jpg",
        "about": "Berisi rincian gaji dari pegawai"
      },
      {
        "name": "Kontrak kinerja",
        "profilePic": "assets/img/speakers/grafik.jpg",
        "about": "Berisi rincian gaji dari pegawai"
      },
     
     
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
